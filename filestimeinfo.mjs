#!/usr/bin/env zx
import fs from 'fs';
// 用于生成所有文件的时间信息
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
  fs.writeFileSync('/home/zerlei/git/me/.vitepress/filesTime.json', JSON.stringify(ar));
} catch (err) {
  console.error(err);
}
