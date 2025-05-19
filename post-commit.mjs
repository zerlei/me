#!/usr/bin/env zx
import fs from 'fs';

// ./docs/.git/hooks/post-commit  不要忘了 chomd +x
// #!/bin/bash
//
// if [[ "$GIT_SKIP_POST_COMMIT_HOOK" == "1" ]]; then
//   echo "✅ second: Skipping post-commit hook"
//   export GIT_SKIP_POST_COMMIT_HOOK=0
//   exit 0
// fi
// export GIT_SKIP_POST_COMMIT_HOOK=1
// ../post-commit.mjs
// exit 0
console.log('post-commit 开始执行');
// post_commit commit 已经结束了，所以获取的是上一个 commit 的信息
const last_commit_id = (await $`git rev-parse --short HEAD~`).stdout;
const change_files = JSON.parse(fs.readFileSync(`/tmp/blogs_time${last_commit_id}`, 'utf-8'));
let oldFiles = [];
if (fs.existsSync('./filesTime.json')) {
  oldFiles = JSON.parse(fs.readFileSync('./filesTime.json', 'utf-8'));
}
// #####⬇️ DEBUG INFO
console.log('change_files', change_files);
console.log('oldFiles length', oldFiles.length);
let changeD_files = [];
// #####⬆️ DEBUG INFO
const promises = change_files.map(async (item) => {
  switch (item.op) {
    case 'A': {
      const createTimeResult = await $`git log --pretty=format:"%ai" -- ${item.name} | tail -1`;
      const modifyTimeResult = await $`git log -1 --pretty=format:"%ai" -- ${item.name}`;
      const cTime = createTimeResult.stdout.split('+')[0];
      const mTime = modifyTimeResult.stdout.split('+')[0];
      oldFiles.push([item.name, cTime, mTime]);
      changeD_files.push({op: 'A', data: oldFiles[oldFiles.length - 1]});
      break;
    }
    case 'M': {
      const createTimeResult = await $`git log --pretty=format:"%ai" -- ${item.name} | tail -1`;
      const modifyTimeResult = await $`git log -1 --pretty=format:"%ai" -- ${item.name}`;
      const cTime = createTimeResult.stdout.split('+')[0];
      const mTime = modifyTimeResult.stdout.split('+')[0];
      const index = oldFiles.findIndex((e) => e[0] === item.name);
      if (index !== -1) {
        oldFiles[index] = [item.name, cTime, mTime];
        changeD_files.push({op: 'M', data: oldFiles[index]});
      }
      break;
    }
    case 'D': {
      const index = oldFiles.findIndex((e) => e[0] === item.name);
      if (index !== -1) {
        changeD_files.push({op: 'D', data: oldFiles[index]});
        oldFiles.splice(index, 1);
      }
      break;
    }
    default:
      break;
  }
});
await Promise.all(promises);

// #####⬇️ DEBUG INFO
console.log('changeD_files', changeD_files);
// #####⬆️ DEBUG INFO

fs.writeFileSync('./filesTime.json', JSON.stringify(oldFiles));
//因为 修改了 filesTime.json 文件，所以需要重新提交一次
//在post_commit hook 中使用环境变量的方式避免重复调用
await $`git add .`;
// // 避免递归调用
// await $`mv ./.git/hooks/post-commit ./.git/hooks/post-commit.bak`
await $`git commit --amend --no-edit --no-verify`;
// await $`mv ./.git/hooks/post-commit.bak ./.git/hooks/post-commit`
console.log('post-commit 结束执行');
