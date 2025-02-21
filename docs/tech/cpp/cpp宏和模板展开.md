---
tags:
  - cpp
---

::: info Introduction

简单记录以下cpp中的宏和模板展开。

:::

起因是我在使用c++的日志库的时候，好奇log库如何获得当前的代码行号，问了以下AI,得到了这样的回答：

```cpp

#include <iostream>
#include <string>

// 简单的日志函数，使用可变参数模板
template<typename... Args>
void Log(const std::string& message, Args... args) {
    // 打印日志消息
    std::cout << message << " ";
    (std::cout << ... << args) << std::endl;
}

#define LOG(message, ...) Log(message " [Line: " + std::to_string(__LINE__) + "]", ##__VA_ARGS__)

int main() {
    LOG("This is a log message with the current line number.");
    return 0;
}

```

c++ 同过宏 `__LINE__` 可以获取当前代码行号，这个宏在编译时会被替换为当前代码行号。 这个很容易理解，但是其余的宏和模板展开，我看不懂。。。所以学习一下。



- \#\#\_\_VA_ARGS\_\_：这是一个C++预处理器技巧，用于将宏参数展开为可变参数列表。如果有额外的参数，\_\_VA_ARGS\_\_ 会包含这些参数。

- `(std::cout << ... << args) << std::endl;` 这是一个折叠表达式，用于展开参数包。在这种情况下，它将展开参数包 args，然后将每个参数插入到 std::cout 中。左折叠还是右折叠是看`...`在左边还是右边。

## c++ 折叠表达式

语法形式
折叠表达式共有四种语法形式。分别为一元的左折叠和右折叠，以及二元的左折叠和右折叠。

- 一元右折叠(unary right fold)   ( pack op ... ) 一元右折叠(E op ...)展开之后变为 E1 op (... op (EN-1 op EN))
- 一元左折叠(unary left fold) ( ... op pack ) 一元左折叠(... op E)展开之后变为 ((E1 op E2) op ...) op EN

- 二元右折叠(binary right fold) ( pack op ... op init ) 二元右折叠(E op ... op I)展开之后变为 E1 op (... op (EN−1 op (EN op I)))
- 二元左折叠(binary left fold) ( init op ... op pack ) 二元左折叠(I op ... op E)展开之后变为 (((I op E1) op E2) op ...) op EN



语法形式中的op代表运算符，pack代表参数包，init代表初始值。

初始值在右边的为右折叠，展开之后从右边开始折叠。而初始值在左边的为左折叠，展开之后从左边开始折叠。

不指定初始值的为一元折叠表达式，而指定初始值的为二元折叠表达式。

当一元折叠表达式中的参数包为空时，只有三个运算符（`&&` `||` 以及`,`）有缺省值，其中`&&`的缺省值为true,`||`的缺省值为false，`,`的缺省值为void。

## 使用clang查看语法树

```shell   

clang++ -Xclang -ast-print -fsyntax-only main.cpp >>m2.cpp       

```

