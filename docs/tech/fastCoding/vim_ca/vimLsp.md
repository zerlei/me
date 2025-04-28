---
tags:
  - vim
---

::: info Introduction

把nvim配置成vscode的样子:)

:::

 nvim 自带lsp集成功能

## 插件

`symbol-usage`: 查看当前的函数被使用多少次。

`lspsaga`: 一系列功能，强化了neovim lsp 功能。


## 快捷键

`gd`: go to definition

`gD`: go to declaration

这两个在cpp 的 `.h` 和 `.cpp`文件之间切换非常有帮助。

`gh`: Show current details

`gr`: Show current references

`<leader>ra`: LSP Rename.

`<leader>ca`: Code action. 比如展开宏等。

`<leader>c<i/o>`: 查看当前函数的调用栈，in or out

`<leader>ou`:  当前文件的大纲
