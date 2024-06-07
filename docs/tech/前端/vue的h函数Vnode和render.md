---
tags:
  - front-end
export: true
keys:
  - vue
  - vnode
  - component
---

::: info Introduction

粗浅的关于 vue vnode 和 component 的渲染理解，vnode 如何渲染到`真实`dom 上

:::

> 我确定了我不太想深入前端，将来我不打算靠这个吃饭，但是，目前，我靠这个吃饭，我需要解决遇见的问题。

## 需求背景

动态创建 dom 节点在原生`html`、`js`中十分常见

比如，要给`container`动态创建子节点:

```html
<div id="container"></div>
```

有一系列的原生`dom`函数可以使用，包含创建各种原生节点类型、各种属性等

```javascript
var container = document.getElementById('container');
container.appendChild(document.
createElement('div').appendChild(document.createTextNode('123')));
```

上述 js 函数执行完毕之后，`container`变化如下：

```html
<div id="container">
  <div>123</div>
</div>
```

在实际开发中，基本不使用原生 html，常常使用各种组件和框架，比如使用`vue` 和 `naive-ui`，这些组件比原生组件更加复杂，也更加强大。

如何使用`vue` 动态的创建 `naive-ui` 组件呢？ 此时我的需求是根据不通的数据渲染不通的组件，组合有非常多种，`v-show` 和 `v-if` 已经无法满足。

这种需求并不常见~ 但它考验我对`vue`的理解。

:::info 吐槽

我对`vue`的理解并不深入，我身边也没有可以快速回答我问题的前端大佬~

:::

## vue 的渲染机制

`vnode和vdom`: 是用一个 object 来描述 dom 元素，它还没有被渲染成真实的 dom

`mount`: 渲染器访问`vnode`，然后渲染成真实的 dom 的过程

`patch||diffing||reconciliation `: 通过对比新旧`vnode`，找出差异，然后更新到真实 dom 的过程，vue 的 patch 是局部更新。

`templates 和 render functions` : 正常情况下，我们使用`templates`，这类似于写 html 的过程，但是，当我们需要创建非常动态的组件时，我们使用`render functions`。

vue 提供了 `h()` 来创建 vnode ,`h()`的使用非常的灵活[^1]。

在使用`naive-ui`时，我常常见到 `h()`函数，它用来嵌入一个自定义的组件，但是它是何时、以什么方式被渲染成真实 dom，我并不清楚。

只有`mount` 后，虚拟 dom, 才会变成真实 dom。

我的需求是: 我使用 `h()`动态创建 vue 的高级组件，然后我想把它渲染成真实 dom，我需要怎么做？我以为有这样一个函数

```javascript
render('#id', Vue.h('div', '123'));
```

它能把`h()`创建的 vnode 挂载到 `#id`的真实 dom 上，但实际上并没有(我没有找到？)

vue 的逻辑是这样，它以 component 为基础进行渲染，渲染函数的调用是在`mount`时，也就是初始化 component 时调用。如果我想要动态的渲染 vnode ,那么我就需要一个动态组件。

vue `<component :is="dynamiccomponent"></component>`能满足需求。

我使用 vue 的环境比较复杂，除了标准的使用 vite+vue 框架外，我经常以单 js 引入的方式使用 vue。

下面一个示例显示了如何通过`h()`创建一个虚拟 vnode,然后通过动态 component 把它渲染出来。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/vue"></script>
    <!-- 会使用最新版本，你最好指定一个版本 -->
    <script src="https://unpkg.com/naive-ui"></script>
  </head>

  <body>
    <h1>这是一个vue 动态组件测试</h1>
    <div id="app">
      <!-- 使用 component 动态渲染vnode -->
      <component :is="dy"></component>
    </div>
    <!-- 它的作用是我不在纯字符串的环境下写 template -->
    <div style="display: none;">
      <div id="v1">
        <n-button v-on:click="switchdy()">{{msg}}</n-button>
      </div>
      <div id="v2">
        <n-button v-on:click="switchdy()">{{msg}}</n-button>
      </div>
    </div>
  </body>
  <script>
    var app = null;
    var papp = null;
    const App = {
      data() {
        return {
          dy: {
            template: document.getElementById('v1').innerHTML,
            data() {
              return {
                msg: 'v1'
              };
            },
            methods: {
              switchdy() {
                papp.switchdy('v1');
              }
            },
            mounted() {
              console.log('v1');
            }
          },
          dyshow: true
        };
      },
      methods: {
        switchdy(currnt) {
          if (currnt == 'v1') {
            papp.dy = Vue.h('div', [
              Vue.h({
                template: document.getElementById('v2').innerHTML,
                data() {
                  return {
                    msg: 'v2'
                  };
                },
                methods: {
                  switchdy() {
                    papp.switchdy('v2');
                  }
                },
                mounted() {
                  console.log('v2');
                }
              }),
              Vue.h(
                naive.NTag,
                {
                  type: 'success'
                },
                {
                  default: () => 'v2 extra tags!'
                }
              )
            ]);
          } else {
            papp.dy = Vue.h(
              'div',
              Vue.h({
                template: document.getElementById('v1').innerHTML,
                data() {
                  return {
                    msg: 'v1'
                  };
                },
                methods: {
                  switchdy() {
                    papp.switchdy('v1');
                  }
                },
                mounted() {
                  console.log('v1');
                }
              })
            );
          }
        }
      },
      mounted() {
        papp = this;
      }
    };
    app = Vue.createApp(App);
    app.use(naive);
    app.mount('#app');
  </script>
</html>
```

## 问题解决的反思

我在频繁使用 vue 的时候，确实应该系统的学习vue,但我还要学习系统编程的知识...

这是目标和现实的矛盾。 我将来打算靠系统级编程吃饭，但是现在我要靠前端吃饭。

系统学习前端知识可能对我来说是必要的，但是它的优先度并不高，大多数情况下，我的前端知识够用，但有时候还是会遇到这样的问题，身边没有可供咨询的人，也只能靠自己解决了...

使用AI大模型，确实在解决问题方面帮助了我不少。

[^1]: https://cn.vuejs.org/guide/extras/render-function.html
