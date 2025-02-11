---
tags:
  - cpp
  - cmake
---

::: info Introduction

library 只包含链接库。package 包含头文件，链接库和其它依赖文件，library 更加基础，但package 更常用。

:::

使用vcpkg包管理器。https://learn.microsoft.com/zh-cn/vcpkg/get_started/get-started?pivots=shell-bash


`CMakeLists.txt` 文件内容如下：

```cmake

cmake_minimum_required(VERSION 3.10)

project(HelloWorld)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
find_package(fmt CONFIG REQUIRED)

add_executable(HelloWorld helloworld.cpp)

target_link_libraries(HelloWorld PRIVATE fmt::fmt)

```

## Search Modes

通常分为 `Module` 和 `Config` 两种模式，对应的包文件需要提供 `Find<package>.cmake` 和 `<lowercasePackageName>-config.cmake | <PackageName>Config.cmake`文件 。

在 `Module` 模式下(通常是使用第三方安装包),搜索路径在 `CMAKE_MODULE_PATH` 如果config 模式则使用 `CMAKE_PREFIX_PATH` 。
```cmake

list(APPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/cmake")

include(Foo) # Loads ${CMAKE_CURRENT_SOURCE_DIR}/cmake/Foo.cmake

find_package(Bar) # Loads ${CMAKE_CURRENT_SOURCE_DIR}/cmake/FindBar.cmake
```

## 如何制作一个package


目录结构：

```
.
├── build
│   ├── CMakeCache.txt
│   ├── cmake_install.cmake
│   ├── ExPackageConfig.cmake
│   ├── ExPackageConfigVersion.cmake
│   ├── install_manifest.txt
│   ├── libExPackage.a
│   └── Makefile
├── cmake
│   └── ExPackageConfig.cmake.in
├── CMakeLists.txt
├── export
│   ├── cmake
│   │   └── ExPackage
│   │       ├── ExPackageConfig.cmake
│   │       ├── ExPackageConfigVersion.cmake
│   │       ├── ExPackageTargets.cmake
│   │       └── ExPackageTargets-noconfig.cmake
│   ├── include
│   │   └── ex.h
│   └── libExPackage.a
├── include
│   └── ex.h
└── src
    └── ex.cpp

```

`CMakeLists.txt` 文件内容如下：

```cmake
cmake_minimum_required(VERSION 3.31)
project(ExPackage VERSION 0.0.1)
# 定义目标库
add_library(${PROJECT_NAME} src/ex.cpp)
target_include_directories(${PROJECT_NAME}
                           PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/include)

# 设置规则，这将帮助生成 ExPackageTargets.cmake 文件
install(
  TARGETS ${PROJECT_NAME}
  EXPORT ExPackageTargets
  ARCHIVE DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/export
  INCLUDES
  DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/export/include)

install(DIRECTORY include/
        DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/export/include)
#
# # 将对应的文件写入到相关目录
install(
  EXPORT ExPackageTargets
  FILE ExPackageTargets.cmake
  NAMESPACE ExPackage::
  DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/export/cmake/ExPackage)

# 生成和安装配置文件
include(CMakePackageConfigHelpers)
write_basic_package_version_file(
  "${CMAKE_CURRENT_BINARY_DIR}/ExPackageConfigVersion.cmake"
  VERSION ${PROJECT_VERSION}
  COMPATIBILITY AnyNewerVersion)

configure_file(
  cmake/ExPackageConfig.cmake.in
  "${CMAKE_CURRENT_BINARY_DIR}/ExPackageConfig.cmake" @ONLY
  # @ONLY 是一个安全措施，用于明确指定只替换 @VAR@ 形式的变量，避免误替换其他格式的变量,比如 ${VAR} 这种格式。
)
install(FILES "${CMAKE_CURRENT_BINARY_DIR}/ExPackageConfig.cmake"
              "${CMAKE_CURRENT_BINARY_DIR}/ExPackageConfigVersion.cmake"
        DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/export/cmake/ExPackage)

```

`cmake/ExPackageConfig.cmake.in` 文件内容如下：

```cmake

@PACKAGE_INIT@
include("${CMAKE_CURRENT_LIST_DIR}/ExPackageTargets.cmake")

```




