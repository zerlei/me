---
tags:
  - cpp
export: true
keys:
  - qt
---
::: info Introduction

使用msvc2022 32位, 静态编译qt-6.6.3,脚本参考[^1]

:::


## 为什么需要静态编译

只有一个文件，点击就可运行，不依赖平台动态库。

当你准备写一个简单的应用程序时，这样的应用程序部署非常方便。

不过，需要注意的是：qt 开源协议不允许或限制静态链接qt库进行商业活动，如果静态链接qt库，并不准备开源，那么应该考虑购买qt商业版。


## 编译前的准备

自从qt6之后，编译qt非常简单，需要准备

1. msvc编译器
2. cmake
3. python3
4. 源码(安装qt时勾选source)

在源码目录的`readme.md`可以看到更具体的要求和简单的指南

也可以去qt的[官网](https://doc.qt.io/qt-6/build-sources.html)查看一些简单的编译步骤

## 步骤



1. 切换到源码的`Src`的同级目录，创建一个文件夹 `qt6_shadow`，作为编译工作目录

此时的目录结构：

```
...

-- Src
-- qt6_shadow

...
```
2. `cd qt6_shadow` 在此位置打开powershell命令行窗口，并设置编译器环境

```powershell
# 编译器位置，这里使用32位
cmd.exe /c "call `"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars32.bat`" && set > %temp%\vcvars.txt"
```
```powershell
# 设置环境变量
Get-Content "$env:temp\vcvars.txt" | Foreach-Object { if ($_ -match "^(.*?)=(.*)$") { Set-Content "env:\$($matches[1])" $matches[2] } }
```

3. 编译配置

```powershell
..\Src\configure.bat -release -static -static-runtime -no-pch -optimize-size -platform win32-msvc -prefix "..\Qt6_binaries" -no-feature-accessibility -confirm-license

```
`-prefix` 指定qt的安装目录

`-static` 指定静态编译qt

`-static-runtime` 指定使用静态链接,MSVC下就是加`MT`编译flag

`-release` 只编译release版本的qt,这样可以节省编译时间,调试在动态库模式下进行

其它配置项可以参考[^2]

4. 编译

```powershell
# 开启并行,加快速度
cmake --build . --parallel
```

5. 安装

```powershell
cmake --install .
```

安装完成之后，在 ..\Qt6_binaries 应该能看到编译完成的qt, 普通4核-2.6GHZ笔记本整个编译时间大概1~2个小时,还是很快的。


## 使用

1. 在qtcretor中配置kit包，选择静态编译的qt，配置x86编译器
2. cmake设置

```cmake
# 设置MT编译flag
set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} /MT")

# 加 WIN32 避免出现黑框框
qt_add_executable(your-project WIN32
    ${PROJECT_SOURCES}
    app_win32.rc
)
```

## 参考
[^1]: https://github.com/gmh5225/static-build-qt6 也可以直接下载编译好的版本
[^2]: https://github.com/qt/qtbase/blob/dev/cmake/configure-cmake-mapping.md  qt6 cmake配置项解释
