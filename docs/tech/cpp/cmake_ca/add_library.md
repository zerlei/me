---
tags:
  - cpp
  - cmake
---

::: info Introduction

使用 cmake 生成一个库

:::

tree 结构如下：
```
├── somelib
│   ├── adder.cpp
│   ├── adder.h
│   └── CMakeLists.txt
└── testdemo
    ├── CMakeLists.txt
    └── main.cpp
```

```cmake
# somelib/CMakeLists.txt
cmake_minimum_required(VERSION 3.31)
project(AddDemo)

# 指定生成一个库
add_library(${PROJECT_NAME} adder.cpp)

```

```cmake
cmake_minimum_required(VERSION 3.31)
project(testdemo)

add_executable(${PROJECT_NAME} main.cpp)
# 注意！！！  以下这些需要在add_executable之后
# 指定链接目录
target_link_directories(${PROJECT_NAME} PRIVATE ${CMAKE_SOURCE_DIR}/../somelib/build/)
# 指定链接库
target_link_libraries(${PROJECT_NAME}  AddDemo)

```
