// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'

import ZerleiLayout from './component/ZerleiLayout.vue'

// import './style.css'

export default {
  extends: Theme,
  Layout: () => {
    return h(ZerleiLayout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
