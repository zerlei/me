import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zerlei",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/note/' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],
    footer: {
      copyright: 'Copyright © 2019-present Evan You🌈  🫲 等我 有域名，我就换掉有语系'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]

  },
  vite: {
    plugins: [
        // add plugin
        AutoSidebar({
          path:'/'
            // You can also set options to adjust sidebar data
            // see option document below
        })
    ]
},
})
