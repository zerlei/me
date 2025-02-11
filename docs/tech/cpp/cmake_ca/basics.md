---
tags:
  - cpp
  - cmake
---

::: info Introduction

使用cmake 生成一个简单的可执行文件。

:::

在linux上，cmake 通过生成makefile来进行实际的项目构建。

一个最基本的makefile如下：

```makefile

default:
    g++ -o main main.cpp

```

cmake 通过`CMakeLists.txt`(大小写敏感)文件来生成makefile。

一个最基本的CMakeLists.txt如下：

```cmake    
# CMake 最低版本号要求
cmake_minimum_required(VERSION 3.10)
# 项目信息
project(main)
# 指定生成目标
add_executable(${PROJECT_NAME} main.cpp)
```

