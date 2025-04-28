---
tags:
  - cpp
---

::: info Introduction

gdb.

:::

>  如果是简单的debugger 那么使用各种ide和editor 集成的调试器就可以了。

gdb 只是个工具，工具不能代表领域知识本身。调试是一个复杂的技术，需要非常专业，且底层的知识。在程序开发阶段，应尽量避免问题，然后是尽量避免调试介入才能解决问题。


##  开始使用gdb.

1. 使用debug 模式编译程序
2. `gdb your_program`
3. `start` 开始启动程序
4. `tui enable` 打开一个简单的调试窗口
5. `b [line_number]` 创建一个断点
6. `next` 往下运行
7. `continue` 继续直到下一个断点
8. `display <var name>` 显示变量值
9. `exit` 退出

gdb 提供非常多的功能，例如python集成，非常强大，使用它们需要复杂的调试需求。如果是简单使用gdb 的话，使用各种集成工具比较合适。

参考 [nvim debugger](../../fastCoding/vim_ca/vimDebugger.md)


