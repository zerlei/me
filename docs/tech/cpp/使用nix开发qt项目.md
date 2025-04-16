---
tags:
    - linux
    - cpp
export: true
keys:
    - nix
    - cmake
    - qt
---

::: info Introduction

使用nixos 23.11 和 qt 6.8.2 开发qt项目。配置好clangd cmake 等。


:::

使用nix的好处是：可以为项目的开发环境固定一个版本，任何时候都可以复原这个开发环境。

## 前置条件

已经安装nix 并且打开 flake 支持。

我是opensuse tw 上的nixpackages

```bash
➜ cat nix.conf 
experimental-features = nix-command flakes
➜ pwd
/home/zerlei/.config/nix

```

## 目录结构

```bash

➜ tree -I 'build|result'
.
├── build.nix
├── CMakeLists.txt
├── CMakePresets.json
├── flake.lock
├── flake.nix
└── src
    ├── main.cpp
    ├── mainwindow.cpp
    ├── mainwindow.h
    └── mainwindow.ui

```

## flake.nix

```nix
{
  description = "一个使用 Nix Flake 构建的简单 C++ 项目";

  inputs = { nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11"; };

  outputs = { self, nixpkgs }:
    let pkgs = nixpkgs.legacyPackages.x86_64-linux;
    in {
      packages.x86_64-linux.default =
        pkgs.qt6Packages.callPackage ./build.nix { };

      devShells.x86_64-linux.default = pkgs.mkShell {

        inputsFrom = [ self.packages.x86_64-linux.default ];
        buildInputs = with pkgs; [
          gdb
          # this is for the shellhook portion
          qt6.wrapQtAppsHook
          makeWrapper
          bashInteractive
        ];
        shellHook = ''
                    # 不知道为什么这个版本的compiler_command.json 导不出这个目录，手动加上吧！
                    cat > .clangd <<EOF
                    CompileFlags:
                      Add: [-I${pkgs.qt6.qtbase}/include]
                    EOF
                    # set the environment variables that unpatched Qt apps expect
                    bashdir=$(mktemp -d)
                    makeWrapper "$(type -p bash)" "$bashdir/bash" "''${qtWrapperArgs[@]}"
                    exec "$bashdir/bash"
        '';
      };
    };
}

```

> qt6.wrapQtAppsHook 这个包会自动设置qt的环境变量。
> 
> makeWrapper 是一个脚本，自动设置环境变量。
> 
> bashInteractive 是一个交互式的bash shell。

这些都不是重点。。。

我的宿主系统上安装的qt6.9版本，cmake 导出 compiler_command.json 正常，不知道为什么使用nix版本的qt6.8.2 导出compiler_command.json会缺少一个目录，导致 clangd 索引不正常，但是cmake 构建项目是正常的，这里手动生成它吧。


## build.nix

```nix
{ stdenv, qtbase, full, cmake, wrapQtAppsHook }:
stdenv.mkDerivation {
  pname = "qt-test";
  version = "0.1";

  # The QtQuick project we created with Qt Creator's project wizard is here
  src = ./.;

  buildInputs = [ qtbase full ];

  nativeBuildInputs = [ cmake wrapQtAppsHook ];

}
```
## CMakePresets.json

```json
{
  "version":9,
  "configurePresets": [
    {
      "name": "nix",
      "generator": "Ninja",
      "binaryDir": "${sourceDir}/build",
      "cacheVariables": {
        "CMAKE_EXPORT_COMPILE_COMMANDS": "ON",
        "CMAKE_BUILD_TYPE": "Debug"
      }
    }
  ]
}

```

## 步骤

1. `nix develop` 进入开发环境,nix 脚本中指定的cmake qt 和gcc 等工具将使用nix的版本，像neovim和clangd 或者vscode 将使用系统版本。

2. `nix build` 不直接操作cmake 构建一个项目。

3. `cmake --preset nix` 使用cmake 构建项目。

## 参考

- https://github.com/tfc/qt-example/
- https://galowicz.de/2023/01/16/cpp-qt-qml-nix-setup/#:~:text=To%20fix%20that%20temporarily%2C%20add%20--experimental-features%20%27nix-command%20flakes%27,here%20to%20see%20how%20to%20enable%20flakes%20permanently.
