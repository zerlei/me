import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import htmlImport from './plugin/vitehtml';
// https://vitepress.dev/reference/site-config
export default defineConfig({

  head:[['link',{rel:'icon',href:'/zerlei.svg'}]],
  title: "Zerlei",
  description: "A VitePress Site",
  themeConfig: {
    // logo:'../asserts/zerlei.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '笔记', link: '/note/简介.html' },
      { text: '转载', link: '/ref/README.html' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: [

    ],
    footer: {
      copyright: 'Copyright © 2019-present Evan You🌈  🫲 等我 有域名，我就换掉有语系'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhaoYouYa' }
    ]

  },
  vite: {
    plugins: [
        // add plugin
        AutoSidebar({
          path:'/'
            // You can also set options to adjust sidebar data
            // see option document below
        }),
        htmlImport() as any
    ]
},
})
