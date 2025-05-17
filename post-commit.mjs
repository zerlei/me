#!/usr/bin/env zx

console.log('post-commit 开始执行');
await $`git add .`;
// // 避免递归调用
// await $`mv ./.git/hooks/post-commit ./.git/hooks/post-commit.bak`
await $`git commit --amend --no-edit --no-verify`;
// await $`mv ./.git/hooks/post-commit.bak ./.git/hooks/post-commit`
console.log('post-commit 结束执行');
