---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: Zerlei的学习笔记
  text: 很烂、没什么内容
  tagline: My experience, there are no worth content, very bad
features:
  - icon: 
      src: cpp.svg
    title: 制作 windows installer 的qt方案 
    details: 静态编译qt，链接大文件，制作无dll 依赖的安装包
    link: /note/
  - icon:
      src: cpp.svg
    title: 打印网页的自动化工具
    details: 根据一个url,打印网页，主要使用qt开发
  - icon:
      src: vue.svg
    title: 合格的前端搬砖工
    details: 用vue全家桶干活
---


<script setup>
import home  from "./home.vue";

</script>
<home />

```mermaid
gantt
    title TWO YEARS PLAN
    dateFormat  YYYY-MM-DD

    section 实践
    打印工具(90%)            :active,exec1, 2023-09-01,30d
    windows Installer 解决方案 :exec2, after exec1, 30d
    代码风格调整,重构一部分代码 :after exec2,30d
    待定内容的系统编程实践 :2024-05-01,1y

    section 基础
    掌握一定程度的汇编(csapp第二部分)            :crit, base1,after exec2,60d
    ”熟悉gdb的高级调试技巧,了解不同的编译参数的影响“ :crit, base2,after base1, 30d
    分析从cpp语法的文章10+篇 :base3,after base2,60d

   section 算法&数学
    基本完善的数据结构和算法,写完善的笔记,刷够1000+题(geekforgeek):active,2023-09-01,2y

    section 英文
    学完B站的英文语法,系统学习完整英文语法,正常接触英文世界 :active,2023-09-01,2y

```
