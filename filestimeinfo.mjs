#!/usr/bin/env zx

import fs from 'fs';
console.log(process.env.SKIP_POST_COMMIT)
//if (process.env.SKIP_POST_COMMIT == 'true') {
//  await $`SKIP_POST_COMMIT=false`;
//} else {
//  console.log('post-commit 开始执行');
//  const gitfiles = await $`git ls-tree -r --name-only HEAD`;
//
//  await $`SKIP_POST_COMMIT=true`;
//
//  const files = gitfiles.stdout.split('\n').filter((item) => {
//    return item.includes('.md');
//  });
//  let ar = [];
//  for (var file of files) {
//    const createTimeResult = await $`git log --pretty=format:"%ai" -- ${file} | tail -1`;
//    const modifyTimeResult = await $`git log -1 --pretty=format:"%ai" -- ${file}`;
//    let ob = [file, createTimeResult.stdout.split('+')[0], modifyTimeResult.stdout.split('+')[0]];
//    ar.push(ob);
//  }
//  try {
//    fs.writeFileSync('/home/zerlei/git/me/.vitepress/filesTime.json', JSON.stringify(ar));
//  } catch (err) {
//    console.error(err);
//  }
//  await $`git add .`;
//  await $`git commit --amend --no-edit --no-verify`;
//  console.log('post-commit 结束执行');
//}
