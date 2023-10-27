# 问题

1. 当安装完成qt之后，无法编译任何一个qt项目，cmake报错，提示缺少opengl相关库。


# 解决

从名字上可以猜出来，装这个库可以。
```bash
sudo zypper install qt6-opengl-devel
```
