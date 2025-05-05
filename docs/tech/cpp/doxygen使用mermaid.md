---
tags:
  - cpp
export: true
keys:
  - doxygen
  - mermaid
---

::: info Introduction

github page 已经使用mermaid作为code->graph的渲染工具，doxygen 默认不支持mermaid，mermaid是纯前端的工具，做一点处理加上去也很简单。

:::


## 1. `doxygen`生成特定的 `header.html` 和 `footer.html`模板

```bash

doxygen -w html header.html footer.html style.css

```

## 2. 修改 `header.html` 和 `footer.html`

**header.html 添加**

```html
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>

```
(如果处在内网环境，可以下载到本地，或者使用其他的cdn)

**footer.html 添加**

```html

<script type="text/javascript">

  window.addEventListener('load', async () => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
    })
//  DoxygenAwesomeDarkModeToggle.init()
//  DoxygenAwesomeParagraphLink.init()
//  DoxygenAwesomeInteractiveToc.init()

    await ResetMermaidContent()
  });


  async function ResetMermaidContent() {
    var mermaidContent = document.getElementsByClassName('fragment')
    for (var i = 0; i < mermaidContent.length; i++) {
      let c = mermaidContent[i]
      let mermaidStr = ""
      let child = c.firstElementChild
      if (!child.classList.contains("line")) {
        child = child.nextElementSibling
      }
      if (!child.textContent.includes("%%mermaid")) {
        break
      }
      while (child) {
        mermaidStr += child.textContent
        child = child.nextSibling
      }

      const { svg } = await mermaid.render('graphDiv', mermaidStr)
      c.innerHTML = svg

    }
  }
</script>
```
## 3. 在 `doxygen` 的配置文件中设置header和footer 文件的路径

```
# 用于markdown
HTML_HEADER       = @CMAKE_CURRENT_LIST_DIR@/header.html
HTML_FOOTER       = @CMAKE_CURRENT_LIST_DIR@/footer.html

```

## 4. 使用

在`.md`文件中

```

\`\`\`mermaid
%%mermaid
graph LR
    subgraph 对外接口
        direction LR
        Http-Server
        Websocket-Server
        Websocket-Client
    end
       对外接口-->chrome内核-->打印机驱动
\`\`\`

```

注意，在**第一行**多加了 `%%mermaid` 这用于上述的js代码来判断这是mermaid 而不是一般的代码。doxygen 生成markdown 的code格式，不包含语言信息(例如 \`\`\`cpp 等),目前只能多加一点额外信息。


在代码文件中,只要支持markdown表达式:

```cpp
  /**
   * @brief LOGFILE
   * ## h2
  \`\`\`mermaid
  %%mermaid
  graph LR
      subgraph 对外接口
          direction LR
          Http-Server
          Websocket-Server
          Websocket-Client
      end
         对外接口-->chrome内核-->打印机驱动
  \`\`\`
   */

 int xxx;

```

doxygen 默认支持 plantuml,

但是奇怪的是, 你可以在markdown文件中这样使用plantuml:

```
\`\`\`plantuml
bob -> alice
\`\`\`

```

这是符合一般约定的。


但是在代码中，这样是不行的，你只能这样使用：

```cpp
  /*!
  ## 13231
  \`\`\`cpp
  int main() {return 0;}
  \`\`\`
  @startuml
  Alice -> Bob
  @enduml
  */
  static inline QMutex mutex;

```
