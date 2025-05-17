#!/usr/bin/env zx
import fs from 'fs';
console.log('post-commit 开始执行');
let oldFiles = [];
if (fs.existsSync('/home/zerlei/git/me/.vitepress/filesTime.json')) {
  oldFiles = JSON.parse(fs.readFileSync('/home/zerlei/git/me/.vitepress/filesTime.json', 'utf-8'));
}
const gitfiles = await $`git status -s`;

const files = gitfiles.stdout.split('\n');
files.forEach(async (item) => {
  if (item.includes('.md')) {
    let items = item.split(' ');
    const name = items[items.length - 1];
    const addOrModify = items[items.length - 2];
    const createTimeResult = await $`git log --pretty=format:"%ai" -- ${name} | tail -1`;
    const modifyTimeResult = await $`git log -1 --pretty=format:"%ai" -- ${name}`;
    const cTime = createTimeResult.stdout.split('+')[0];
    const mTime = modifyTimeResult.stdout.split('+')[0];
    if (addOrModify === 'D') {
      const index = oldFiles.findIndex((item) => item[0] === name);
      if (index !== -1) {
        oldFiles.splice(index, 1); // 删除该元素
      }
    } else if (addOrModify === 'A') {
      oldFiles.push([name, cTime, mTime]);
    } else if (addOrModify === 'M') {
      const index = oldFiles.findIndex((item) => item[0] === name);
      if (index !== -1) {
        oldFiles[index] = [name, cTime, mTime]; // 更新该元素
      }
    }
  }
});
try {
  fs.writeFileSync('/home/zerlei/git/me/.vitepress/filesTime.json', JSON.stringify(oldFiles));
} catch (err) {
  console.error(err);
}
console.log('文件日期更新完成');
await $`git add .`;

// // 避免递归调用
// await $`mv ./.git/hooks/post-commit ./.git/hooks/post-commit.bak`
await $`git commit --amend --no-edit --no-verify`;
// await $`mv ./.git/hooks/post-commit.bak ./.git/hooks/post-commit`
console.log('post-commit 结束执行');
