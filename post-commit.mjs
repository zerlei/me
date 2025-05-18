#!/usr/bin/env zx
import fs from 'fs';

// ./docs/.git/hooks/post-commit  不要忘了 chomd +x
// #!/bin/bash
// if [[ "$GIT_SKIP_POST_COMMIT_HOOK" == "1" ]]; then
//   export GIT_SKIP_POST_COMMIT_HOOK=0
//   exit 0
// fi
// export GIT_SKIP_POST_COMMIT_HOOK=1
// ../post-commit.mjs
// exit 0
console.log('post-commit 开始执行');
let oldFiles = [];
if (fs.existsSync('./filesTime.json')) {
  oldFiles = JSON.parse(fs.readFileSync('./filesTime.json', 'utf-8'));
}
const gitfiles = await $`git status -s`;

console.log('gitfiles', gitfiles.stdout);
const files = gitfiles.stdout.split('\n');

console.log('files', files);
console.log('oldFiles length', oldFiles.length);
const promises = files.map(async (item) => {
  if (item.includes('.md')) {
    let items = item.split(' ').filter((item) => item !== '');
    const name = items[items.length - 1];
    const addOrModify = items[0];
    const createTimeResult = await $`git log --pretty=format:"%ai" -- ${name} | tail -1`;
    const modifyTimeResult = await $`git log -1 --pretty=format:"%ai" -- ${name}`;
    const cTime = createTimeResult.stdout.split('+')[0];
    const mTime = modifyTimeResult.stdout.split('+')[0];
    console.log(items, `c:${cTime} m:${mTime}`);
    if (addOrModify === 'D') {
      const index = oldFiles.findIndex((item) => item[0] === name);
      if (index !== -1) {
        oldFiles.splice(index, 1);
      }
    } else if (addOrModify === 'A') {
      oldFiles.push([name, cTime, mTime]);
    } else if (addOrModify === 'M') {
      const index = oldFiles.findIndex((item) => item[0] === name);
      if (index !== -1) {
        oldFiles[index] = [name, cTime, mTime];
      }
    }
  }
});
await Promise.all(promises);
fs.writeFileSync('./filesTime.json', JSON.stringify(oldFiles));

await $`git add .`;
// // 避免递归调用
// await $`mv ./.git/hooks/post-commit ./.git/hooks/post-commit.bak`
await $`git commit --amend --no-edit --no-verify`;
// await $`mv ./.git/hooks/post-commit.bak ./.git/hooks/post-commit`
console.log('post-commit 结束执行');
