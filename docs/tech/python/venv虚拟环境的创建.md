---
tags:
  - python
---
::: info Introduction

有些系统处于安全考虑，禁用了pip安装包，这时候就需要使用venv虚拟环境了。venv是python自带的虚拟环境工具，可以创建一个独立的python环境，不会影响系统的python环境。

:::

## 创建venv虚拟环境

```bash

python3 -m venv /path/to/new/virtual/environment

```

## 激活venv虚拟环境

```bash 

source /path/to/new/virtual/environment/bin/activate

```
之后，你会发现终端的提示符前面多了一个括号，表示你已经进入了虚拟环境。然后可以在虚拟环境中使用`pip install`安装包。

## 退出venv虚拟环境

```bash

deactivate

```


