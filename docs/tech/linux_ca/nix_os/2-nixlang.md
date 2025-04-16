---
tags:
    - linux
keys:
    - nix
---

::: info Introduction

一个简单的函数式编程语言，专门用来描述nix-package。

:::

lazy evaluation。如果不需要，就不计算。

 go https://nix.dev/tutorials/nix-language，nix lang 的语法关键词非常的少，大部分依赖buildin函数。这里写一些有意思的特点。

安装完nix后，使用`nix repl`进入交互式编程环境。

使用 `nix-instantiate --eval <default.nix>` 来运行一个文件，`--strict` 不再lazy,尝试计算所有数值。

## Recursive attribute set rec { ... }

```nix

rec {
  one = 1;
  two = one + 1;
  three = two + 1;
}

# 错误！！！
# {
#  one = 1;
#  two = one + 1;
#  three = two + 1;
# }
```


## File system paths

因为 nix lang 的主要作用是描述包，那么它对文件系统的路径有很好的支持。

```nix

/absolute/paths # 绝对路径

./relative # 相对路径

<nixpkgs> # 这个是一个特殊的路径，表示nixpkgs的路径

```
## Multiple arguments

在一个nix函数中，传递多个参数，这个很有意思。


```nix
let
  f = x: y: x + y;
in
f 1
```
上面的将会输出`<LAMBDA>`


```nix
let
  f = x: y: x + y;
in
f 1 2

```
上面的将会输出`3`


## nix nvim配置。

不管是treesitter还是lsp 和format，都有nix lang 的。

不过我使用的nil_ls 需要完整安装rust,占了好多空间。。。

