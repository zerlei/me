---
title: 建一个blog网站
description: VitePress 建一个blog网站
tags:
  - project
  - web
keys:
  - vitepress
---

::: info Introduction

建站的过程。网站的内容建议；vitepress的一些个性化配置,文章分类排序等；关于发布：实现ssh在云服务器上写blog,每次commit后自动发布。

:::

## 建站的准备


**目的：**

[打造个人品牌](/docs/life/实践/行动/打造个人品牌.md)。但主要的原因是：正好有一台云服务器,再买个便宜的域名就可以了

**内容：**

有时候会疑惑，应该写什么内容，不应该写什么内容？下面是给自己的建议。

- 技术blog。掌握一件事情，最好是能够把它做出来，其次是能够把它讲明白。把话讲给别人听，还需要表达能力，但是，如果自己清楚，即使表达能力欠佳，最终也是肯定能够讲明白的。写blog的过程也是一个锻炼表达能力的过程。
- 学习笔记和知识点备忘录。只有大佬才能够写足够优秀的博客，在此之前做一些学习笔记也是对自己和别人都有价值的。
- 讲述个人故事。技术只是生活的一部分。一个人的生活更受个人价值观和行为的影响。与技术的通用性不同，价值观和行为没有普适性，但好的价值观和行为利人利己，也容易被别人接受。价值观和行为可以培养，可以改变，讲述个人故事也是blog的一部分。
- 内容是适宜公开的内容，这不是个人的日记，应当偏重结果，而不是过程，当然有时候过程就是结果。不要写没有用的内容，写有价值的内容，例如：描述你的情绪的变化；进取精神；描述你还没有实现的目标和计划等等都没什么用，这里的没有用是指对别人没有用。霸道总裁总说：我只要结果。年轻的时光已经过去，只有实力能够打动别人，失败的原因通常也发挥着借口的作用。
- 注重质量，而非数量。做一件好的事情，比得上做十件平庸的事情；写一篇好的博客，也超过10篇一般的博客，在最开始，对有价值的blog可以一直修改，
直到改不动为止。
- 个人公开blog的一部分作用也可以理解为，主动给自己贴一些标签，并试图让别人认可。不应该随便给别人贴标签，但标签确实能更容易让人形成某些事物的一些印象，即使这些印象往往是错误的，既然标签客观存在，并有作用，就主动给自己贴一些积极的标签，很多事情都是复杂的，从不同的视角看，会有不同的映像，贴积极的标签就是为别人调整一个首先自己满意的视角。虚假标签没有用，这里根本骗不到人。


**基础材料：**

1. 云服务器，一般附赠公网ip
2. 一个域名，很便宜的
3. ssl证书，用于https。个人可以免费申领。我使用的腾讯云，同一个域名下，可以在亚洲诚信申请 20 个证书，也就是 20 年，除此之外还有其它地方可以领免费ssl证书，即使没有ssl证书，好像影响也不大，会有人劫持没流量的网站🧐？

## 前端工具

有一堆合适的工具。我选择了 vitepress + naive-ui 的一些组件，原因是我对vue熟悉。特别说明一下：这里的一些内容受[vitepress-blog-zaun](https://github.com/clark-cui/vitepress-blog-zaun)启发。

如果想给一个项目提供参考文档，vitepress 开箱即用。但若想用 vitepress 搭建个人网站，通常需要做一些个性化的配置，做这些配置十分简单。

当使用vitepress建一个项目后， 它所有的个性化配置都在.vitepress 文件夹下面。对于 vitepress 的使用，应当有以下认识：

- vitepress 将markdown 编译成 html , 它是ssr的，一些元数据(基本是blog文章数据)可以在编译期间获得，也可以通过插件的方式，控制编译过程，生成个性化的结果，例如 mermaid 图。
- vitepress 的个性化配置就是 vue，基本上vue可以用的东西，vitepress都可以用,会vue使用vitepress就不用额外学新的东西。
- 最常见的个性化配置是主题样式和主页。

除vitepress之外，适合构建个人网站的工具或方式还有:

- hexo
  - 这是成熟的专业博客框架，有很多主题可以使用。我没有使用它是因为一眼看上去，就感觉它很复杂。成熟同时意味着想改一些东西就可能会麻烦。总有一些地方会不满意。
- 自己从零做
  - 最初的时候，我准备这样做。借助成熟的库例如 markdown-it 等，做主体功能并不麻烦，但是涉及到一些细节的地方，就有非常多的工作量，[我不想深入掌握前端](/),所以有轮子用就不要折腾。
- Docusaurus
  - 与 vitepress 对应，是react 相关。我不会 react。
- vuepress
  - vitepress 是新一代版本，用 vitepress。


我基本只做了主页和和sidebar部分的配置。css样式，之前也调整了一些，最后还是觉得原来的样式好。

### 1.  在一些情况下生成系列目录,一些情况不生成

![Alt text](/asserts/sidebar.png)

有时候你写的文章是一系列文章，它应当由多个文章组合成一个目录。vitepress 支持多级目录。现在是想让目录根据一些提示自动生成。

使用 vite-plugin-vitepress-auto-sidebar 插件。在 config.ts 文件中使用插件:

```ts{3,5,8}
//  config.ts
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        path: "/",
        collapsed:true,
        sideBarResolved: (data) => {
          let d =filterDocsSideBar(data)
          // 使用ts的原因是：写代码的时候，ts给我一些提示，它避免了一些潜在的错误，同时有lint的作用
          // 但我使用ts的大部分感受是：我是对的，我知道，不要报错，我不想写多余的东西，fxxk you
           return d as any
        },
      }),
      htmlImport() as any,
    ],
  }


/**
 * 获取sidebar 目录,当目录下的文件包含'_ca'时，将会在此文件下生成一个sidebar 目录
 * @param {*} item autoside object
 * @returns
 */
export function filterDocsSideBar(item) {
    let beforItems = item['/docs/'][0].items
    let afterItems = {}
    filterDocsSideBarWork(beforItems, afterItems, '/docs/')
    return afterItems
}
function filterDocsSideBarWork(beforItems, willInsertItems, prefix) {
    for (let i = 0; i < beforItems.length; ++i) {
        if (beforItems[i].items) {
            var nprefix = prefix + beforItems[i].text + '/'
            if (beforItems[i].text.includes('_ca')) {
                beforItems[i].text = beforItems[i].text.replace('_ca', '')
                willInsertItems[nprefix] = [beforItems[i]]
            } else {
                filterDocsSideBarWork(beforItems[i].items, willInsertItems, nprefix)
            }
        }
    }

}
```
这样当文件夹目录中有‘_ca’，就会为这个目录下所有的文章生成一个sidebar,当访问此目录下的文章时，sidebar就会在界面左边出现，详情可以参考vitepress官网和vite-plugin-vitepress-auto-sidebar插件的github。


### 2. 文章分类排序展示

我希望文章有一个列表页面，并却按照分类展示。实现思路是：首先获取文章的元数据，之后对元数据加工，在相应的页面对这些元数据分类排序等。

globby等插件可以帮助获取元数据。在展示数据的时候，我使用了naive-ui的一些组件。

引用naive-ui时遇到了一些问题，这些问题都好解决。

**问题：** vitepress 使用ssr，但naive-ui默认不是ssr。我这里让主页数据在客户端渲染。

```html{1}
  <div v-if="notSsrRender">
    <n-config-provider :theme="nTheme">
      <n-space justify="center">
```
'notSsrRender'初始值为 false ,在 onMounted 函数中修改为 true 。ssr时，onMounted不会被执行,这样主页数据就不会在服务端渲染。假如不这样做，会出现一个服务端渲染结果和客户端不匹配的错误。

**问题：** 代码发布的时候遇到了关于导入naive-ui包的什么commonJs的错误，错误提示让我使用这种方式导入：

```ts
import * as pkg from "naive-ui";
const {
  lightTheme,
  darkTheme,
  NConfigProvider,
  NList,
  NListItem,
  NThing,
  NSpace,
  NTag,
  NTabs,
  NTabPane,
  NScrollbar,
} = pkg;
```

我按照这种方式做了，就没有问题了，因为[我不想深入掌握前端](/),这里不深纠,解决问题就好。

## 后台托管

vitepress 生成的是纯纯静态页面，最常用的托管方式是使用nginx。但就仅仅托管一个静态页面，ngxinx还是有点沉重。使用c++ 写个简单的托管静态资源的web server，占用资源极少，性能较高，而且十分简单。

```cpp
#include <drogon/HttpResponse.h>
#include <drogon/HttpTypes.h>
#include <drogon/drogon.h>
#include <drogon/utils/FunctionTraits.h>
#include <functional>
#include <json/value.h>
#include <string>
using namespace drogon;
int main(int argc, char *argv[]) {

  app()
      .setThreadNum(1)
      .registerSyncAdvice([](const HttpRequestPtr &req) -> HttpResponsePtr {
        auto port = req->getLocalAddr().toPort();
        if (port == 80) {
          auto resp = HttpResponse::newRedirectionResponse("https://xxxx.cn");
          return resp;
        } else {
          return nullptr;
        }
      })
      .addListener("0.0.0.0", 443, true,
                   "/home/xxx/.ssl/zerlei.cn_bundle.pem",
                   "/home/xxx/.ssl/zerlei.cn.key")
      .addListener("0.0.0.0", 80)
      .setDocumentRoot("./wwwroot")
      .run();
}

```
使用 `drogon`，这就是全部的代码了。当访问http时，会重定向到https。资源占用十分的让人满意。


## 部署与发布

当写下新的内容时，应当自动发布。首先想到的是git hook。使用腾讯的混元大模型。他是这样回答的:

![Alt text](/asserts/githook1.png)


![Alt text](/asserts/githook2.png)

比较全面了。

如果直接把构建的脚本写在post-commit里面，那么每次commit的时候都要等待30-40s用于构建发布。若把命名加上 `nohup ...  &`转到后台运行，使用命令行敲commit时没有问题，但使用vscode commit时，我发现发布任务又跑到前台了。。。还是要等。

还有一种方法是创建定时任务，每隔一段时间检查git commit 状态,当有新的commit就发布一次，但这样会失去实时性。

其它还有一些比较沉重的方法就不考虑了。

我想到的一个方案是：在我的静态web server 里写一个接口，实现发布过程；在post-commit写一个 curl 命令，当commit的时候，curl命令会向web server 发一个请求，之后由web server 执行发布的具体步骤，这样做既可以做到，每个commit实时发布，也不会让我在commit的时候等待太长时间。

我实践之后发现存在这样一个问题：

1. web server 开启80 443端口，这需要root权限。
2. 以root权限启动的程序`system()`函数也是默认root用户。
3. 发布工具bun 一般都是在非root用户下使用。

所以，这导致了发布时的一些异常，页面无法正常访问。最初我以为是文件权限问题，但改了文件权限后，还是无法正常访问，后来发现是在root用户下，执行发布出现了问题。~~我目前没有想到好的解决办法。~~

~~最终，我又写了一个web server , 它使用非root权限运行。所以我现在有两个web server，一个托管静态资源，一个接收commit时的curl请求，执行发布。这种方式十分不优雅，但所幸代价极低，多一个web server 占用资源极少。不过，话说回来，这符合关注点分离的原则～😬~~


要解决这样的问题，可以从以下方面着手：

1. 分析bun发布错误的原因，使bun可以在root用户下正常运行。可能需要在root用户下安装bun，这是不推荐的，我也不想折腾这个。
2. 使用`system()`函数时切换到一般用户。

我对linux和bash还不算熟悉，最初的想法是在sh命令中切换用户，但这比我想象中的麻烦；于是考虑在linux c代码中切换用户。 `setuid()`可以实现，可是仅仅使用`setuid()`还是不行，用户组还是 root ,一切都没有改变。而`setgid()`切换组，ubuntu下从root组不能切换到普通组，错误提示：`Operation not permitted`。

::: tip Ai 给的原因分析

当你在 Linux 系统上遇到 "Operation not permitted" 错误，特别是在尝试使用 `setgid()` 函数时，这通常意味着你的进程没有足够的权限来执行该操作。以下是一些可能的原因和解决方法：

1. 你的进程不是以 root 用户身份运行的。`setgid()` 函数要求进程具有 root 权限，因为只有 root 用户才能更改进程的组 ID。如果你无法以 root 用户身份运行进程，你可以尝试使用 `sudo` 命令来提升权限。

2. 你的系统可能启用了安全模块（如 SELinux 或 AppArmor），这些模块可能会限制进程的权限，导致 `setgid()` 失败。你可以检查系统的日志文件（如 `/var/log/audit/audit.log` 或 `/var/log/syslog`），以获取有关权限限制的更多详细信息。如果你确定这是问题所在，可以考虑调整安全模块的策略，以允许你的进程执行 `setgid()` 操作。

3. 你的进程可能具有了更高的权限，但在执行 `setgid()` 时，内核可能会阻止这种操作。这可能是因为内核的 `Yama` 安全模块，它可能会限制 root 用户进程的权限。你可以通过编辑 `/etc/sysctl.conf` 文件并添加以下行来禁用 Yama 安全模块：

```
kernel.yama.ptrace_scope = 0
```

然后，运行 `sudo sysctl -p` 命令以应用更改。请注意，禁用 Yama 安全模块可能会降低系统的安全性，因此请谨慎操作。

4. 如果你在使用容器化技术（如 Docker 或 Kubernetes）时遇到这个问题，可能是因为容器的安全设置限制了进程的权限。在这种情况下，你需要检查容器的配置文件，以确保进程具有足够的权限来执行 `setgid()` 操作。你可能需要更改容器的用户或组 ID，或者调整容器的安全设置。

:::


第三条和我的情况非常像，但实践之后，也没有效果。于是，我考虑其它办法。

3. 让程序在非root权限下，可以打开80端口，问了腾讯混元大模型，它给的解决方法不怎么好。最终使用命令 `sudo setcap 'cap_net_bind_service=+ep' /your program`，它的意思是使一个程序在非root权限下使用80、443端口。

最终整个后台托管程序是这样的:

```cpp

#include <cerrno>
#include <chrono>
#include <condition_variable>
#include <drogon/HttpResponse.h>
#include <drogon/HttpTypes.h>
#include <drogon/drogon.h>
#include <drogon/utils/FunctionTraits.h>
#include <functional>
#include <iostream>
#include <json/value.h>
#include <pwd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>
#include <string>
using namespace drogon;
int main(int argc, char *argv[]) {

  std::mutex _mux_blocking;
  std::condition_variable _build_conditon;

  std::thread j([&_mux_blocking, &_build_conditon]() {
    while (true) {
      std::unique_lock<std::mutex> ul(_mux_blocking);
      _build_conditon.wait(ul);

      if (setuid(1002) != -1 && setgid(1002) != -1) {
        system("cd /home/xxxxxxxx/git/my-site && "
               "/home/linuxbrew/.linuxbrew/bin/bun run docs:build ");
      }
      std::this_thread ::sleep_for(std::chrono::seconds(60));
    }
  });
  app()
      .setThreadNum(1)
      .registerSyncAdvice([](const HttpRequestPtr &req) -> HttpResponsePtr {
        auto port = req->getLocalAddr().toPort();
        if (port == 80) {
          auto resp = HttpResponse::newRedirectionResponse("https://zerlei.cn");
          return resp;
        } else {
          return nullptr;
        }
      })
      .addListener("0.0.0.0", 443, true,
                   "/home/xxxxxxxxx/.ssl/zerlei.cn_bundle.pem",
                   "/home/xxxxxxxxx/.ssl/zerlei.cn.key")
      .addListener("0.0.0.0", 80)
      .setDocumentRoot("./wwwroot")
      .registerHandler(
          "/xxxx?xx={xx}",
          [&_build_conditon](
              const HttpRequestPtr &req,
              std::function<void(const HttpResponsePtr &)> &&callback,
              const std::string &xx) {
            Json::Value res;
            if (xx == "xxxxxxxxxx") {
              _build_conditon.notify_all();
              res["message"] = "will build&release";
            } else {
              res["message"] = "😀";
            }
            callback(HttpResponse::newHttpJsonResponse(res));
          })
      .run();
}

```

当程序接收到特定curl请求之后，notify 一个工作线程，异步执行发布，并立即向curl请求返回结果。

## 最终的效果

我的云服务器是4核8GB的(腾讯云终身续费同价，一年加上代金劵1000rmb内)。我在云服务写blog，使用git托管，完成一个阶段之后，commit，每个commit就自动发布一次,页面的效果就是你看到的样子。

我使用了许多开源软件或受到它们的启发，感谢各位作者~

[source,可能滞后](https://github.com/ZhaoYouYa/my-site)
