--- 
tags:
  - devops
keys:
  - git
  - github
---

::: info Introduction

父仓库并不会追踪子模块里的文件变化，只会记录它当前指向的 commit id。

:::


## 需求场景

-  引用他人的代码。这种情况，通常依赖包管理器来实现，像 c/c++的vcpkg，python的pip，nodejs的npm等。但是若出现不同语言之间的引用，那就只能通过git submodule 来实现。相比于代码最原始的复制粘贴，submodule的方式可以追踪代码的变化。

-  代码分离。无论是因为ci/cd的需要，还是将大量代码分离到子模块，以便与不同的人负责相同的模块等，submodule 都有必要。

## 实现步骤

父仓库并不会追踪子模块里的文件变化，只会记录它当前指向的 commit id。

不管是父仓库还是子仓库，它们都是功能完备的git仓库。

### 将子仓库添加到父仓库

```bash

git submodule add ../sub-repo-path sub-repo-name

```
在父仓库下会有一个文件 `.gitmodules`，里面记录了子模块的相关信息。

更改子仓库，并提交一个commit后，父仓库相应的子仓库会指向一个新的commit id。

###  克隆带子模块的父仓库

```bash
git clone --recurse-submodules https://your.repo/parent-repo.git
```

或者：

```bash
git clone https://your.repo/parent-repo.git
cd parent-repo
git submodule update --init --recursive

```

### 更新子模块


```bash
git submodule update --remote 

```
git submodule update --remote 可能会让子模块进入一个 “游离 HEAD（detached HEAD）” 状态，不在任何分支上。这是因为它的设计就是为了拉取远程的某个分支最新的 commit 并 checkout 到那个 commit，而不是切换到那个分支。

当运行 

```bash

git submodule update --remote
```
Git 会：

1. 读取 .gitmodules 或配置中为子模块设置的默认远程分支（通常是 origin/main）；

2. 从远程拉取该分支的最新 commit；

3. 然后 checkout 到那个 commit，但不是以分支的方式，而是进入游离 HEAD 状态。

这时候需要：

```bash
cd sub-repo
git checkout main  # 或你想要的分支
git pull           # 获取最新内容

```
父仓库记录的是子模块的 commit id。**git 的 commit id 和分支是分离的两个部分，它们之间有映射关系，commit id 并不绑定到某个分支**

可能更正确的步骤是：先pull父仓库，在pull子仓库。而不是 pull 父仓库，然后`git submodule update --remote。`



### 更改父仓库记录的子仓库的远程地址

要修改:

1. .gitmodules 文件（告诉父仓库：子模块的路径对应哪个远程地址）

2. .git/config（告诉 Git：实际使用哪个地址来 fetch/push 子模块）

运行：

```bash
git submodule set-url sub-repo NEW_URL

git submodule sync

```

## 思考

分离增加了分支管理的复杂度，两个仓库的管理者，需要考虑连接的机制。


