#!/usr/bin/env zx

// .git/hooks/post-commit
// 不要忘了 chomd +x
// #!/bin/bash
// if [[ "$GIT_SKIP_POST_COMMIT_HOOK" == "1" ]]; then
//   export GIT_SKIP_POST_COMMIT_HOOK=0
//   exit 0
// fi
// export GIT_SKIP_POST_COMMIT_HOOK=1
// ./post-commit.mjs
// exit 0
console.log('post-commit 开始执行');
await $`git add .`;
// // 避免递归调用
// await $`mv ./.git/hooks/post-commit ./.git/hooks/post-commit.bak`
await $`git commit --amend --no-edit --no-verify`;
// await $`mv ./.git/hooks/post-commit.bak ./.git/hooks/post-commit`
console.log('post-commit 结束执行');
