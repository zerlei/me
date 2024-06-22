import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import htmlImport from './plugin/vitehtml';
import { filterDocsSideBar, getPosts } from './utils';
import markdownItTextualUml from 'markdown-it-textual-uml';
import markdownFootnote from 'markdown-it-footnote';
// https://vitepress.dev/reference/site-config
export default {
  head: [['link', { rel: 'icon', href: '/zerlei.svg' }]],
  title: 'Zerlei',
  lang: 'zh-cn',
  description: '🌈A programmer,there are his blog🌈',
  themeConfig: {
    // logo:'../asserts/zerlei.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'blog', link: '/' },
      { text: 'project', link: '/project' },
      { text: 'me', link: '/about' }
    ],
    // search: {
    //   provider: "local",
    // },
    posts: await getPosts(),
    sidebar: [],
    // footer: {
    //   copyright:
    //     "Copyright © 2019-present Evan You  🫲 等我 有域名，我就换掉有语系",
    // },

    socialLinks: [{ icon: 'github', link: 'https://github.com/ZhaoYouYa/me/issues' }],
    outline: 'deep'
  },
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        path: '/docs/',
        collapsed: true,
        sideBarResolved: (data) => {
          let d = filterDocsSideBar(data);
          return d;
        },
        sideBarItemsResolved(data) {
          data = data.filter((item) => {
            //目录将过滤这些文件
            for (let word of [".png", ".jpg", ".jpeg", ".gif", ".svg"]) {
              if (item.text.includes(word)) {
                return false
              }
            }
            if (item.link) {
              item.link = `/docs${item.link}`
            }
            return true
          })
          return data;

        }
        // You can also set options to adjust sidebar data
        // see option document below
      }),
      htmlImport()
    ],
    server: {
      host: '0.0.0.0',
      port: 6769
    }
  },
  markdown: {
    config: (md) => {
      md.use(markdownItTextualUml);
      md.use(markdownFootnote);
    }
  }
};
// export default({
//
//   // mermaid: {
//   //   // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
//   // },
// });
