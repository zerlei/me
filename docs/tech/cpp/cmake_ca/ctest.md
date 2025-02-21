---
tags:
  - cpp
---

::: info Introduction

单元测试必不可少。 ctest 通常与相关的单元测试框架一起使用，例如 gtest 和 doctest catch2。

:::

一个简单的例子，一个库，一个测试。

```
├── AddLib
│   ├── CMakeLists.txt
│   ├── include
│   │   └── add.h
│   └── src
│       └── add.cpp
├── build
│   ├── AddLib
│   │   ├── cmake_install.cmake
│   │   ├── libAddLib.a
│   │   └── Makefile
│   ├── CMakeCache.txt
│   ├── cmake_install.cmake
│   ├── Makefile
│   └── test
│       ├── AdderTest
│       ├── cmake_install.cmake
│       ├── CTestTestfile.cmake
│       ├── Makefile
│       └── Testing
│           └── Temporary
│               ├── CTestCostData.txt
│               └── LastTest.log
├── CMakeLists.txt
└── test
    ├── addertest.cpp
    └── CMakeLists.txt
```

最外层 `CMakeLists.txt` 文件内容如下：

```cmake
cmake_minimum_required(VERSION 3.16)
project(CtestHello)
add_subdirectory(AddLib)
option(ENABLE_TEST "ENABLE_TEST" ON)
if(ENABLE_TEST)
  enable_testing()
  add_subdirectory(test)
endif()

```

AddLib 的 `CMakeLists.txt` 文件内容如下：

```cmake
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/include)
add_library(AddLib src/add.cpp)
```
test 的 `CMakeLists.txt` 文件内容如下：

```cmake
# 开启测试
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/../AddLib/include)
add_executable(AdderTest addertest.cpp)
target_link_libraries(AdderTest AddLib)
# 添加测试
add_test(NAME AdderTest COMMAND AdderTest)
```

cmake 的test通过构建一个可执行文件，然后通过 `add_test` 添加脚本命令来添加测试。

`addertest.cpp` 文件内容如下：

```cpp
#include <add.h>
#include <iostream>

int main() {
  std::cout << "Test:1+1=?: ";
  if (add(1, 1) == 2) {
    std::cout << "True\n";
    return 0;
  } else {
    std::cout << "False\n";
    return -1;
  }
}
```

编译运行流程是：

```bash
cmake -S . -B build
cd build
make
ctest
```

在实际项目中，通常使用单元测试框架，例如 gtest 和 doctest catch2。这些框架提供了更多的功能，例如测试用例的组织，测试用例的执行，测试用例的输出等等。
