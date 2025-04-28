---
tags:
  - linux
keys:
  - opensuse
  - kde
---
::: info Introduction

linux 用户的配置文件，基本上都在 ~ 也就是 $HOME 目录里，所以有些配置文件可以十分方便的通过git管理，这样在迁移的时候就非常方便，这就是dotfiles

:::

> 只管理一些常用的软件配置就好了，不要整的太复杂:) 折腾这个太浪费时间，也没有多大意义。


### stow

stow 会对指定文件夹里面的所有文件在 $HOME 目录下创建一系列软链接。

例如：

`stow kde`: 会对kde目录里面的所有文件在$HOME里面创建软链接。

```
│── kde
│   └── .config
│       └── kglobalshortcutsrc


```
此时会有一个 ~/.config/kglobalshortcutsrc 的软链接，指向 stow kde 目录下 kde文件夹下的对应文件。

`kde` 明显不是一个应用程序。

### 步骤

1. 建一个dotfiles的文件夹
2. 建立子目录,比如kde，然后将$HOME 文件夹下的想要管理的文件移动到kde文件夹下，记得**相对路径**要保持一致。
3. `stow <文件夹名称>`
4. 恢复的话，直接git clone，然后 `stow <文件夹名称>`
