import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";
import htmlImport from "./plugin/vitehtml";
import { withMermaid } from "vitepress-plugin-mermaid";
import { filterDocsSideBar, getPosts } from "./utils";
// https://vitepress.dev/reference/site-config
export default withMermaid({
  head: [["link", { rel: "icon", href: "/zerlei.svg" }]],
  title: "Zerlei",
  lang:'zh-cn',
  description: "A VitePress Site",
  themeConfig: {
    // logo:'../asserts/zerlei.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "🏡blogs", link: "/" },
      { text: "🚀history", link: "/history" },
      { text: "🐷about", link: "/about" },
    ],
    // search: {
    //   provider: "local",
    // },
    posts: await getPosts(),
    pageSize: 5,
    sidebar: [],
    // footer: {
    //   copyright:
    //     "Copyright © 2019-present Evan You  🫲 等我 有域名，我就换掉有语系",
    // },

    socialLinks: [{ icon: "github", link: "https://github.com/ZhaoYouYa" }],
    outline:'deep'
  },
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        path: "/",
        collapsed: true,
        sideBarResolved: (data) => {
          let d = filterDocsSideBar(data)
          return d
        },
        // You can also set options to adjust sidebar data
        // see option document below
      }),
      htmlImport(),
    ],
    server: {
      host: "0.0.0.0",
      port: 6769,
    },
  },

  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
});
