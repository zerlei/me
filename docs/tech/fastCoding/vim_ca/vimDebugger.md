---
tags:
  - vim
---

::: info Introduction

debugger不可少，但用的越少越好。让单元测试来发现错误，如果写的程序结构清晰，并且对语言特性了解透彻，那么不需要debugger 也能快速的发现错误。

:::

debugger 非常消耗时间。

## 前端的debugger

还是习惯使用浏览器。

前端还需要调整样式，统一使用浏览器比较好。


## c/cpp的debugger

无论如何都绕不开直接使用`gdb` 命令行。

### 配置插件`nvim-dap` `nvim-dapui`

指定一个 adapters 使用 gdb

```lua
dap.adapters.gdb = {
    type = "executable",                                                                             
    command = "gdb",                                                                                 
    args = { "--interpreter=dap", "--eval-command", "set print pretty on" },                         
} 
```

`.vscode/launch.json`

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "gdb",
            "request": "launch",
            "name": "Launch",
            "program": "${workspaceFolder}/main",
            "cwd": "${workspaceFolder}",
            "stopAtBeginningOfMainSubprogram": true

        }
    ]
}
```

**type**: 和在lua配置的adapters 名称一致

**request**: `launch` 和 `attach`。可以使用 gdb server attach 远程程序。

**name**: 自己起一个吧

**program**: 要调试的程序

**cwd**: 程序启动目录。

**stopAtBeginningOfMainSubprogram**: 是否在程序入口点断点

类似 `workspaceFolder` 这样的环境变量也有其它的部分 参考`:help dap.txt`


nvim-dap-ui 可以根据 设置 nvim-dap 的事件自动打开和关闭。


## 快捷键

`<F5>`: debugger continue. 打开调试

`<F10>`: step_over

`<F11>`: step_into

`<F12>`: step_out

`<leader>db`: toggle breakpoint

`<leader>dc`: clean all breakpoints

`<leader>dr`: open repl 也就是打开gdb的控制台窗口。不过这个用不着，`nvim-dap-ui` 自带的有了。
