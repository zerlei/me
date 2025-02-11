---
tags:
  - cpp
  - cmake
---

::: info Introduction

引用第三方库是一个常见的需求，cmake 通过`add_subdirectory`命令来引入子目录，从而引入子目录的`CMakeLists.txt`文件，第三方库使用 `git submodule` clone。

这在组织大型项目时非常有用，可以将项目分解为多个子项目，每个子项目都有自己的`CMakeLists.txt`文件，这样可以更好地组织代码。
:::


tree 结构如下：

```
.
├── build
├── CMakeLists.txt
├── external
│   └── glfw
└── main.cpp
```

```cmake
cmake_minimum_required(VERSION 3.31)

project(OLAS)

# 添加子目录
add_subdirectory(external/glfw)

add_executable(${PROJECT_NAME} main.cpp)

# 指定头文件目录，这是编译器的头文件搜索路径，不包含clangd，clangd 通过compile_commands.json来查找头文件
target_include_directories(${PROJECT_NAME}
                           PUBLIC ${PROJECT_SOURCE_DIR}/external/glfw/include)

target_link_directories(${PROJECT_NAME} PRIVATE external/glfw/src)

target_link_libraries(${PROJECT_NAME} glfw)

```
[include 和它之间的区别](./include.md)

