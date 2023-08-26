import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";
import htmlImport from "./plugin/vitehtml";
import { withMermaid } from "vitepress-plugin-mermaid";
// https://vitepress.dev/reference/site-config
export default withMermaid({
  head: [["link", { rel: "icon", href: "/zerlei.svg" }]],
  title: "Zerlei",
  description: "A VitePress Site",
  themeConfig: {
    // logo:'../asserts/zerlei.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "笔记", link: "/tech/简介.html" },
      { text: "转载", link: "/ref/README.html" },
    ],
    search: {
      provider: "local",
    },

    sidebar: [],
    footer: {
      copyright:
        "Copyright © 2019-present Evan You🌈  🫲 等我 有域名，我就换掉有语系",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/ZhaoYouYa" }],
  },
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        path: "/",
        // You can also set options to adjust sidebar data
        // see option document below
      }),
      htmlImport() as any,
    ],
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  }
});
