---
tags:
  - cpp
export: true
keys:
  - clangd
  - zig
---

::: info Introduction

使用clang++编译，默认使用的标准库是`stdlibc++`,这是gnu的标准库。而`stdc++` 是llvm 的标准库，需要额外安装。`sudo zypper install libc++-devel`。

clangd 和编译器 的include 文件可能不一致，特别是在cmake没有生成`compiler_commants.json`或者没有特定编译选项的情况下，clangd 和当前编译器将分别使用默认配置。

:::

## 情景

使用 `<format>`,报错提示找不到相关文件.

1. goto https://en.cppreference.com/w/cpp/utility/format/format 查看文档确认是 c++20 的功能
2. 我使用的 lsp 是 clangd,编译器是 gcc,我在 `CMakeLists.txt` 设置了 `set(CMAKE_CXX_STANDARD 20)`,首先确定能否编译成功,编译是没有问题的.
3. clangd 的提示依赖于编译器生成的`compiler_commants.json`,而我又在 `CMakeLists.txt`中设置了`set(CMAKE_EXPORT_COMPILE_COMMANDS on)`它会指示编译器生成该 json 文件,这应该是没有问题的,我删除了/build 文件下的构建缓存,并检查了`CMakePresets.json`文件确认没有问题,`cmake --preset=default`重新生成构建缓存,并重新启动 lsp(clangd),但问题仍然存在.
4. clangd 的提示依赖于clang(?,我确定有关系，但具体是什么关系，我现在不清楚), 去 https://isocpp.org/ 检查 clang 对`<format>`的支持情况,并检查 我当前clangd 的版本,当然此版本 clang 是支持的.
5. changd 的代码提示是能配置的,之前用的 c++ version 比较低,clangd 正常能用就没有想太多,查文档发现,还有一个.clangd 的文件可以做 clangd 的配置,于是在工程目录里加了此文件,内容如下:

```
CompileFlags:
  Add: [-std=c++20]
```

但还是不行。

6. 因为我使用的编译器是 gcc,那好吧,写个最简单的带`<format>`的程序,使用命令行编译

```bash
clang++ test.cpp -o t -std=c++20
```

编译不了,`<format>`找不到

使用最新的 g++ 则是没有问题的!

```bash
g++-13 test.cpp -o t -std=c++20
```
clang 加上 libc++试试看

```bash
clang++  test.cpp -o t -std=c++20 -stdlib=libc++
```

OK~

7. clangd 应该也有直接使用命令行的模式,于是

```
clangd --check=main.cpp --enable-config
```

不行,并不意外

8. 把 .config/clangd/config.yaml[^1]的文件改为如下:

```
CompileFlags:
  Add: [-std=c++20,-stdlib=libc++]
```

再次使用 clangd 命令行模式,成功,返回项目,提示正常。
## 分析

**场景**:
1. 我的电脑的默认gcc版本不支持c++20
2. 我安装了最新版的gcc(g++) 和clang(v=18)，它们支持c++20.

**原因**:
1. 使用clang 编译，它默认会使用 gnu 的 c++ stdlib 也就是`libstdc++`,但是我默认的gcc 并不支持c++20，所以它会编译错误。
2. clangd 的表现和clang(++) 相同。

## 反思

1. 我的c++ 还是不太行,除了语法之外,最基本的工具还是不太熟悉,将来可是准备靠这个吃饭呐~
2. 我能快速找到问题,和我使用 vim 相关.vim 是散装的,所以我能分开什么是 编辑器,编译器,代码提示工具(lsp),构建工具(cmake),调试器,代码格式化工具,包管理工具,代码高亮工具,我明白它们各自的作用,若我一直使用 IDE 就不会对这些各部分工具有清晰的认识,出现问题也难以快速确认,解决.能把工具使用好的程序员,肯定是高手~

## 使用 zig cc/c++ 作为 c/c++编译器

给 clang 套个壳,但据说可以使用 zig 的构建缓存系统,我用了一下,感觉差别也不是很大,构建时间也差不多.zig 1.0 还没出,核心团队在忙其它事情.

在 cmake 中使用它们,CMakePresets.json 添加

```json
{
  "version": 3,
  "configurePresets": [
    {
      "name": "default",
      "binaryDir": "{sourceDir}/build",
      "environment": {
        "CC": "zig cc",
        "CXX": "zig c++"
      }
    }
  ]
}
```

[^1]: 工程文件夹下的.clangd 和 此 congfig.yaml 的作用是一样的,congfig.yaml 是对所有工程生效的默认配置
