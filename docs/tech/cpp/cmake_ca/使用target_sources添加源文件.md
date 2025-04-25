---
tags:
  - cpp
  - cmake
---

::: info Introduction

在现代 CMake 中，使用 target_sources() 是推荐做法，相比老的 add_library() 或 add_executable() 直接加源码的方式，它更加清晰、灵活、可组合，它对module 的支持也更加好。
:::


文档地址 https://cmake.org/cmake/help/latest/command/target_sources.html#command:target_sources


## 示例

```cmake

# 在根目录定义 target
add_library(myLib)

# 在别的子目录里添加源文件
target_sources(myLib
    PRIVATE
        src/module1.cpp
        src/module1.hpp
)
```
作用域`scope`:

- `PRIVATE`：仅在当前 target 中可见(自己用就行，不给别人看)
- `PUBLIC`：在当前 target 和依赖它的 target 中可见(自己用，也给别人看)
- `INTERFACE`：仅在依赖当前 target 的 target 中可见(自己不用，只给别人看)

使用 `target_sources()` 可以精细控制哪些源是公共接口，哪些是私有实现。


使用 `target_sources()` 跨平台，条件编译更加方便

```cmake：

target_sources(myLib
    PRIVATE
        common.cpp
        $<$<PLATFORM_ID:Windows>:win_impl.cpp>
        $<$<PLATFORM_ID:Linux>:linux_impl.cpp>
)

```

`$<$<PLATFORM_ID:Windows>:win_impl.cpp>` CMake 的生成器表达式。

它的意思是：如果当前平台是 Windows，就添加 `win_impl.cpp` 这个文件，否则不添加。

这个语法有点奇怪，感觉bool值和文件名或者字符串混在一起，CMake 语言的类型是什么？

go https://cmake.org/cmake/help/latest/manual/cmake-generator-expressions.7.html 查看文档。





