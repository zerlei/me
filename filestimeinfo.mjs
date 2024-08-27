#!/usr/bin/env zx

import fs from 'fs'
console.log("pre-push 开始执行")
const gitfiles = await $`git ls-tree -r --name-only HEAD`;

const files = gitfiles.stdout.split('\n').filter((item) => {
  return item.includes('.md');
});
let ar = [];
for (var file of files) {
  const createTimeResult = await $`git log --pretty=format:"%ai" -- ${file} | tail -1`;
  const modifyTimeResult = await $`git log -1 --pretty=format:"%ai" -- ${file}`;
  let ob = [file, createTimeResult.stdout.split('+')[0], modifyTimeResult.stdout.split('+')[0]];
  ar.push(ob);
}
try {
  fs.writeFileSync('/home/zerlei/git/me/.vitepress/filesTime.json',JSON.stringify(ar))
}
catch (err) {
console.error(err)
}
await $`git add .`
await $`git commit --amend --no-edit --no-verify`
console.log("pre-push 结束执行")
