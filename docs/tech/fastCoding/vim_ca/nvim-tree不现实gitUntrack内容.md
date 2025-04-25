---
tags:
  - vim
---

::: info Introduction

:help nvim-tree.filters.git_ignored

nvim-tree.filters.git_ignored

Ignore files based on `.gitignore`. Requires |git.enable| `= true`

Toggle via |nvim-tree-api.tree.toggle_gitignore_filter()|, default `I`

  Type: `boolean`, Default: `true`

:::

开源项目一定是可以自由定制的，这是因为作者本人可能没有产品能力，如果让他帮用户选择，他选择的有可能是他自己喜欢的，但不符合大多数人的想法。

nvim-tree 插件默认会打开 gitignore 过滤器，这个过滤器会隐藏掉 `.gitignore` 中的文件。



我用的是nvchad,首先找到nvchad是否用了相关插件，再去此插件的主页查看配置信息，在再nvchad中查看默认的配置信息。


最后 在我的`init.lua`中添加如下代码：

```lua
  {
    "nvim-tree/nvim-tree.lua",
    cmd = { "NvimTreeToggle", "NvimTreeFocus" },
    opts = function()
      local o = require "nvchad.configs.nvimtree"
      o.filters = { enable = false }
      return o
    end,
  },

```
它继承了nvchad 中的默认的配置，并改了一些配置。设置 filters = false,我可能不需要filter。
