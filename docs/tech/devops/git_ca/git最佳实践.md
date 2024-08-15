--- 
tags:
  - devops
keys:
  - git
---

::: info Introduction
一个好的project，干净的git是必要组成部分。
:::

### 1. 意义明确的commit message

写完commit message 再也不看它，是错误的。

把commit message 作为项目的历史演进记录。**有时候会出现只改一行代码，但commit message 写了很多行的情况，这种情况非常常见**

一个commit 只做一件事情，它应该是最小的修改单元。当能commit 时，就commit，不要把多次修改积累到 一起。

> 可以使用 git rebase -i <commit_hash> 来修改分支历史记录。它包含squash 多个commit 和修改commit message


参考这里: https://dev.to/ghostaram/writing-meaningful-git-commit-messages-with-semantic-tags-1dim 学习如何写commit message

### 2. 利用好branch,即使只是一个人开发。

当软件处在成熟期时，多个分支能保证时刻存在一个可用的版本。

即使再软件开发的初期，当你需要一个干净的历史提交记录时，使用分支和merge是合适的。

1. 你需要commit 然后push，即使没有达到一个开发阶段。
2. 最优的方法时创建一个分支，然后 merge 合并这个分支时，使用 --squash 选项，然后 git commit 它将会压缩多个commit。


### 3. 撤回错误commit.

在有一个清晰的commit 历史前提下，使用 `git revert <commit_hash>` 来撤销某个commit 的更改。 
