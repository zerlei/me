import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";
import htmlImport from "./plugin/vitehtml";
import { withMermaid } from "vitepress-plugin-mermaid";
import { filterDocsSideBar } from "./utils";
// https://vitepress.dev/reference/site-config
export default withMermaid({
  head: [["link", { rel: "icon", href: "/zerlei.svg" }]],
  title: "Zerlei",
  description: "A VitePress Site",
  themeConfig: {
    // logo:'../asserts/zerlei.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Tech", link: "/docs/tech/" },
      { text: "Life", link: "/docs/life_ca/" },
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
        collapsed:true,
        sideBarResolved: (data) => {
          let d =filterDocsSideBar(data)
          // console.log(JSON.stringify(d))
           return d as any
          // return {
          //   "/docs/life_ca/": [
          //     {
          //       text: "测试",
          //       items: [
          //         { text: "Index", link: "/docs/life_ca/健康/index" },
          //         { text: "One", link: "/docs/life_ca/体育锻炼" },
          //         { text: "Two", link: "/docs/life_ca/健康/index" },
          //       ],
          //     },
          //   ],
          // };
        },
        // You can also set options to adjust sidebar data
        // see option document below
      }),
      htmlImport() as any,
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
