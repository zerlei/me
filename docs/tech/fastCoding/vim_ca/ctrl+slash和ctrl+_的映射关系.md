---
tags:
  - vim
keys:
  - 编程环境
---

::: info Introduction

在一些环境下，ctrl+/ 组合键位会映射为ctrl+_。

:::

起因是我配置`ctrl+/`在neovim 中生成doxygen 注释，在konsole 中,快捷键无法触发，但是在ghostty中触发正常。

```lua
map({"n","i"}, "<c-/>",function ()
require('neogen').generate()
end,{desc = "neogen comments!"})
```

如果在`insert` mode 中，按下`ctrl+/`，会输出 `^_`，这个`ctrl+_`的输出相同。

解释可以参考https://unix.stackexchange.com/questions/746417/what-does-ctrl-do-in-bash


所以上述映射可以改为:

```lua
map({"n","i"}, "<c-_>",function ()
require('neogen').generate()
end,{desc = "neogen comments!"})
map({"n","i"}, "<c-/>",function ()
require('neogen').generate()
end,{desc = "neogen comments!"})
```


