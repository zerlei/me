---
export: true
tags:
  - linux
keys:
  - zsh
  - bash
---
::: info Introduction

sh -> bash -> zsh。zsh 是终极的shell。

:::


zsh兼容unix sh(基本), 通过一些插件的配置，zsh可以配置的非常好用，不输任何shell。

shell中，powershell是windows 钦定了，在linux上也可以使用，它的先进性是所有的操作均是在对象上进行的，这比zsh的文本先进，但是shell真的需要这样吗？ 更少的概念更容易理解，我们不愿意在shell 上投入太多精力。powershell 启动太慢了，而且它的命令很长。

nushell是一个非常先进的shell,它是rust写的，这让我对rust的好感加深，nushell 操作的也是对象而不是文本，它启动速度很快，而且跨平台，但是不兼容unix sh(要跨平台嘛)，我用shell 做简单的任务，如果有复杂的，使用python可能是更好的选择，nushell确实厉害，但这种厉害目前不容易撼动zsh，掌握bash或zsh的性价比还是最高的。

## zsh 的 oh my zsh 使用命令历史提示和命令高亮

首先安装好zsh 和 oh my zsh

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions 
```

然后再 `.zshrc` 中设置参数

```bash
plugins=(
git 
zsh-autosuggestions 
zsh-syntax-highlighting
)  
```

`source .zshrc` OK~
