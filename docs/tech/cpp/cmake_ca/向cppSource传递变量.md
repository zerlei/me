---
tags:
  - cpp
  - cmake
---

::: info Introduction

向c++ source code 传递版本信息。

:::

通过 CMake 的 `configure_file` 命令，可以将 CMake 变量传递给源代码。这个功能可以用来传递版本信息。

tree 结构如下：

```
├── build
│   ├── CMakeCache.txt
│   ├── cmake_install.cmake
│   ├── config.h
│   ├── EP4
│   └── Makefile
├── CMakeLists.txt
├── config.h.in
└── src
    └── main.cpp
```
`CMakeLists.txt` 文件内容如下：

```cmake    
cmake_minimum_required(VERSION 3.31)
project(EP4 VERSION 1.0)

# configure a header file to pass some of the CMake settings
configure_file(config.h.in config.h)

add_executable(${PROJECT_NAME} src/main.cpp)

# cmake 将会根据 config.h.in 生成 config.h，它在 ${PROJECT_BINARY_DIR} 目录下
target_include_directories(${PROJECT_NAME} PUBLIC ${PROJECT_BINARY_DIR})

```

`config.h.in` 文件内容如下：

```cpp

#define MAJOR_VERSION @EP4_VERSION_MAJOR@
#define MIN_VERSION @EP4_VERSION_MINOR@

```

`生成的 config.h` 文件内容如下：

```cpp
#define MAJOR_VERSION 1
#define MIN_VERSION 0

```



