---
tags:
  - cpp
---

::: info Introduction

cdash 是一个用于持续集成的工具，它可以与 ctest 配合使用。cdash 用于收集 ctest 生成的测试结果，并提供一个网页界面展示测试结果。可以使用 https://my.cdash.org/ 这个网站作为cdash服务器。
:::

cdash 

接上一个 [ctest](ctest.md) 的内容。

此时的目录结构如下：

```

├── AddLib
│   ├── CMakeLists.txt
│   ├── include
│   │   └── add.h
│   └── src
│       └── add.cpp
├── build
│   ├── AddLib
│   │   ├── cmake_install.cmake：
│   │   ├── libAddLib.a
│   │   └── Makefile
│   ├── CMakeCache.txt
│   ├── cmake_install.cmake
│   ├── CTestTestfile.cmake
│   ├── DartConfiguration.tcl
│   ├── Makefile
│   ├── test
│   │   ├── AdderTest
│   │   ├── cmake_install.cmake
│   │   ├── CTestTestfile.cmake
│   │   └── Makefile
│   └── Testing
├── CMakeLists.txt
├── CTestConfig.cmake
└── test
    ├── addertest.cpp
    └── CMakeLists.txt
```

`CTestConfig.cmake` 是从 https://https://my.cdash.org 下载的。

最外层的 `CMakeLists.txt` 文件内容如下：

```cmake
cmake_minimum_required(VERSION 3.16)
project(CtestHello)
add_subdirectory(AddLib)
option(ENABLE_TEST "ENABLE_TEST" ON)
if(ENABLE_TEST)
  enable_testing()
# 多了这一行
  include(CTest)
  add_subdirectory(test)
endif()

```

编译运行流程是：

```bash
cmake -S . -B build
cd build
make
ctest -D Experimental
```
`-D` 参数指定测试的类型，并将测试结果上传到cdash服务器。

在cdash 网站上大概是这个样子：

![](https://cloud.zerlei.cn/f/rQfM/Screenshot_20250219_201005.png)
