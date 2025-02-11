---
export: true
tags:
    - linux
---

::: info Introduction

有安全隐患。

:::

因为安全原因，sudo 执行命令时,只有一些安全的`PATH`被保留。

```
 ## Defaults secure_path="/usr/sbin:/usr/bin:/sbin:/bin"

```

这个`PATH`是在`/etc/sudoers`文件中定义的。注释掉这一行，就可以继承普通用户的`PATH`。
**必须在root 用户下使用`visudo`才可以**


为什么要这样改? 一些命令只能sudo才能执行，它又不在`secure_path`中，比如`nix-shell`。

