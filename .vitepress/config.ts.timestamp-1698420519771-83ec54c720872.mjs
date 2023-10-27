// .vitepress/config.ts
import AutoSidebar from "file:///home/zhaoyouya/git/my-site/node_modules/vite-plugin-vitepress-auto-sidebar/dist/index.mjs";

// .vitepress/plugin/vitehtml.js
import fsp from "fs/promises";
var htmlFileRegex = /\.html$/;
var postfixRE = /[?#].*$/s;
function cleanUrl(url) {
  return url.replace(postfixRE, "");
}
function htmlImportServe(config) {
  return {
    name: "html-import:serve",
    apply: "serve",
    transform(src, id) {
      if (htmlFileRegex.test(id)) {
        return {
          code: `export default ${JSON.stringify(src)}`
        };
      }
    }
  };
}
function htmlImportBuild(config) {
  const postfix = "?html-import";
  return {
    name: "html-import:build",
    enforce: "pre",
    apply: "build",
    async resolveId(id, importer, options) {
      if (htmlFileRegex.test(id) && !options.isEntry) {
        let res = await this.resolve(id, importer, {
          skipSelf: true,
          ...options
        });
        if (!res || res.external)
          return res;
        return res.id + postfix;
      }
    },
    async load(id) {
      if (!id.endsWith(postfix))
        return;
      let htmlContent = await fsp.readFile(cleanUrl(id));
      return `export default ${JSON.stringify(htmlContent.toString("utf-8"))}`;
    }
  };
}
function htmlImport(config) {
  return [
    htmlImportServe(config),
    htmlImportBuild(config)
  ];
}

// .vitepress/config.ts
import { withMermaid } from "file:///home/zhaoyouya/git/my-site/node_modules/vitepress-plugin-mermaid/dist/vitepress-plugin-mermaid.es.mjs";

// .vitepress/utils.js
import { globby } from "file:///home/zhaoyouya/git/my-site/node_modules/globby/index.js";
import matter from "file:///home/zhaoyouya/git/my-site/node_modules/gray-matter/index.js";
import fs from "file:///home/zhaoyouya/git/my-site/node_modules/fs-extra/lib/index.js";
function filterDocsSideBar(item) {
  let beforItems = item["/docs/"][0].items;
  let afterItems = {};
  filterDocsSideBarWork(beforItems, afterItems, "/docs/");
  return afterItems;
}
function filterDocsSideBarWork(beforItems, willInsertItems, prefix) {
  for (let i = 0; i < beforItems.length; ++i) {
    if (beforItems[i].items) {
      var nprefix = prefix + beforItems[i].text + "/";
      if (beforItems[i].text.includes("_ca")) {
        beforItems[i].text = beforItems[i].text.replace("_ca", "");
        willInsertItems[nprefix] = [beforItems[i]];
      } else {
        filterDocsSideBarWork(beforItems[i].items, willInsertItems, nprefix);
      }
    }
  }
}
async function getPosts() {
  let paths = await getPostMDFilePaths();
  let posts = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, "utf-8");
      const state = fs.statSync(item);
      let despMatch = content.match(/:::\s*info\s*Introduction(?:.|\n)*:::/);
      let desp = "";
      if (despMatch) {
        desp = despMatch[0].replace(/:::\s*info\s*Introduction/, "").replace(":::", "");
      }
      const { data } = matter(content);
      data.desp = desp;
      data.birthtime = state.birthtime.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
      data.mtime = state.mtime.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
      if (!data.title) {
        let ar = item.split("/");
        data.title = ar[ar.length - 1].replace(".md", "");
      }
      return {
        frontMatter: data,
        regularPath: `/${item.replace(".md", ".html")}`
      };
    })
  );
  posts.sort(_compareDate);
  return posts;
}
function _compareDate(obj1, obj2) {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1;
}
async function getPostMDFilePaths() {
  let paths = await globby(["**.md"], {
    ignore: ["node_modules", "README.md"]
  });
  return paths.filter((item) => item.includes("docs/"));
}

// .vitepress/config.ts
var config_default = withMermaid({
  head: [["link", { rel: "icon", href: "/zerlei.svg" }]],
  title: "Zerlei",
  description: "A VitePress Site",
  themeConfig: {
    // logo:'../asserts/zerlei.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "\u{1F3E1}blogs", link: "/" },
      { text: "\u{1F308}history", link: "/history" },
      { text: "\u{1F1E8}\u{1F1F3}about", link: "/about" }
    ],
    search: {
      provider: "local"
    },
    posts: await getPosts(),
    pageSize: 5,
    sidebar: [],
    // footer: {
    //   copyright:
    //     "Copyright © 2019-present Evan You  🫲 等我 有域名，我就换掉有语系",
    // },
    socialLinks: [{ icon: "github", link: "https://github.com/ZhaoYouYa" }]
  },
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        path: "/",
        collapsed: true,
        sideBarResolved: (data) => {
          let d = filterDocsSideBar(data);
          return d;
        }
        // You can also set options to adjust sidebar data
        // see option document below
      }),
      htmlImport()
    ],
    server: {
      host: "0.0.0.0",
      port: 6769
    }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiLCAiLnZpdGVwcmVzcy9wbHVnaW4vdml0ZWh0bWwuanMiLCAiLnZpdGVwcmVzcy91dGlscy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3poYW95b3V5YS9naXQvbXktc2l0ZS8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS96aGFveW91eWEvZ2l0L215LXNpdGUvLnZpdGVwcmVzcy9jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvemhhb3lvdXlhL2dpdC9teS1zaXRlLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IEF1dG9TaWRlYmFyIGZyb20gXCJ2aXRlLXBsdWdpbi12aXRlcHJlc3MtYXV0by1zaWRlYmFyXCI7XG5pbXBvcnQgaHRtbEltcG9ydCBmcm9tIFwiLi9wbHVnaW4vdml0ZWh0bWxcIjtcbmltcG9ydCB7IHdpdGhNZXJtYWlkIH0gZnJvbSBcInZpdGVwcmVzcy1wbHVnaW4tbWVybWFpZFwiO1xuaW1wb3J0IHsgZmlsdGVyRG9jc1NpZGVCYXIsZ2V0UG9zdHN9IGZyb20gXCIuL3V0aWxzXCI7XG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCB3aXRoTWVybWFpZCh7XG4gIGhlYWQ6IFtbXCJsaW5rXCIsIHsgcmVsOiBcImljb25cIiwgaHJlZjogXCIvemVybGVpLnN2Z1wiIH1dXSxcbiAgdGl0bGU6IFwiWmVybGVpXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgVml0ZVByZXNzIFNpdGVcIixcbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBsb2dvOicuLi9hc3NlcnRzL3plcmxlaS5zdmcnLFxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogXCJcdUQ4M0NcdURGRTFibG9nc1wiLCBsaW5rOiBcIi9cIiB9LFxuICAgICAgeyB0ZXh0OiBcIlx1RDgzQ1x1REYwOGhpc3RvcnlcIiwgbGluazogXCIvaGlzdG9yeVwiIH0sXG4gICAgICB7IHRleHQ6IFwiXHVEODNDXHVEREU4XHVEODNDXHVEREYzYWJvdXRcIiwgbGluazogXCIvYWJvdXRcIiB9LFxuICAgIF0sXG4gICAgc2VhcmNoOiB7XG4gICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgIH0sXG4gICAgcG9zdHM6IGF3YWl0IGdldFBvc3RzKCksXG4gICAgcGFnZVNpemU6IDUsXG4gICAgc2lkZWJhcjogW10sXG4gICAgLy8gZm9vdGVyOiB7XG4gICAgLy8gICBjb3B5cmlnaHQ6XG4gICAgLy8gICAgIFwiQ29weXJpZ2h0IFx1MDBBOSAyMDE5LXByZXNlbnQgRXZhbiBZb3UgIFx1RDgzRVx1REVGMiBcdTdCNDlcdTYyMTEgXHU2NzA5XHU1N0RGXHU1NDBEXHVGRjBDXHU2MjExXHU1QzMxXHU2MzYyXHU2Mzg5XHU2NzA5XHU4QkVEXHU3Q0ZCXCIsXG4gICAgLy8gfSxcblxuICAgIHNvY2lhbExpbmtzOiBbeyBpY29uOiBcImdpdGh1YlwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9aaGFvWW91WWFcIiB9XSxcbiAgfSxcbiAgdml0ZToge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIC8vIGFkZCBwbHVnaW5cbiAgICAgIEF1dG9TaWRlYmFyKHtcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIGNvbGxhcHNlZDp0cnVlLFxuICAgICAgICBzaWRlQmFyUmVzb2x2ZWQ6IChkYXRhKSA9PiB7XG4gICAgICAgICAgbGV0IGQgPWZpbHRlckRvY3NTaWRlQmFyKGRhdGEpXG4gICAgICAgICAgIHJldHVybiBkIGFzIGFueVxuICAgICAgICB9LFxuICAgICAgICAvLyBZb3UgY2FuIGFsc28gc2V0IG9wdGlvbnMgdG8gYWRqdXN0IHNpZGViYXIgZGF0YVxuICAgICAgICAvLyBzZWUgb3B0aW9uIGRvY3VtZW50IGJlbG93XG4gICAgICB9KSxcbiAgICAgIGh0bWxJbXBvcnQoKSBhcyBhbnksXG4gICAgXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxuICAgICAgcG9ydDogNjc2OSxcbiAgICB9LFxuICB9LFxuXG4gIG1lcm1haWQ6IHtcbiAgICAvLyByZWZlciBodHRwczovL21lcm1haWQuanMub3JnL2NvbmZpZy9zZXR1cC9tb2R1bGVzL21lcm1haWRBUEkuaHRtbCNtZXJtYWlkYXBpLWNvbmZpZ3VyYXRpb24tZGVmYXVsdHMgZm9yIG9wdGlvbnNcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS96aGFveW91eWEvZ2l0L215LXNpdGUvLnZpdGVwcmVzcy9wbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3poYW95b3V5YS9naXQvbXktc2l0ZS8udml0ZXByZXNzL3BsdWdpbi92aXRlaHRtbC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS96aGFveW91eWEvZ2l0L215LXNpdGUvLnZpdGVwcmVzcy9wbHVnaW4vdml0ZWh0bWwuanNcIjtcbmltcG9ydCBmc3AgZnJvbSAnZnMvcHJvbWlzZXMnO1xuXG5jb25zdCBodG1sRmlsZVJlZ2V4ID0gL1xcLmh0bWwkLztcbmNvbnN0IHBvc3RmaXhSRSA9IC9bPyNdLiokL3NcblxuZnVuY3Rpb24gY2xlYW5VcmwodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZShwb3N0Zml4UkUsICcnKVxufVxuXG5mdW5jdGlvbiBodG1sSW1wb3J0U2VydmUoY29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2h0bWwtaW1wb3J0OnNlcnZlJyxcbiAgICBhcHBseTogJ3NlcnZlJyxcbiAgICB0cmFuc2Zvcm0oc3JjLCBpZCkge1xuICAgICAgaWYgKGh0bWxGaWxlUmVnZXgudGVzdChpZCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiBgZXhwb3J0IGRlZmF1bHQgJHtKU09OLnN0cmluZ2lmeShzcmMpfWAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgfVxufVxuXG5mdW5jdGlvbiBodG1sSW1wb3J0QnVpbGQoY29uZmlnKSB7XG4gIGNvbnN0IHBvc3RmaXggPSAnP2h0bWwtaW1wb3J0JztcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdodG1sLWltcG9ydDpidWlsZCcsXG4gICAgZW5mb3JjZTogJ3ByZScsXG4gICAgYXBwbHk6ICdidWlsZCcsXG4gICAgYXN5bmMgcmVzb2x2ZUlkKGlkLCBpbXBvcnRlciwgb3B0aW9ucykge1xuICAgICAgaWYgKGh0bWxGaWxlUmVnZXgudGVzdChpZCkgJiYgIW9wdGlvbnMuaXNFbnRyeSkge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgdGhpcy5yZXNvbHZlKGlkLCBpbXBvcnRlciwge1xuICAgICAgICAgIHNraXBTZWxmOiB0cnVlLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcmVzIHx8IHJlcy5leHRlcm5hbCkgcmV0dXJuIHJlcztcblxuICAgICAgICByZXR1cm4gcmVzLmlkICsgcG9zdGZpeDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgbG9hZChpZCkge1xuICAgICAgaWYgKCFpZC5lbmRzV2l0aChwb3N0Zml4KSkgcmV0dXJuO1xuXG4gICAgICBsZXQgaHRtbENvbnRlbnQgPSBhd2FpdCBmc3AucmVhZEZpbGUoY2xlYW5VcmwoaWQpKTtcbiAgICAgIC8vIGh0bWxDb250ZW50ID0gbWluaWZ5SHRtbC5taW5pZnkoaHRtbENvbnRlbnQsIHtcbiAgICAgIC8vICAga2VlcF9zcGFjZXNfYmV0d2Vlbl9hdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgLy8gfSk7XG5cbiAgICAgIHJldHVybiBgZXhwb3J0IGRlZmF1bHQgJHtKU09OLnN0cmluZ2lmeShodG1sQ29udGVudC50b1N0cmluZygndXRmLTgnKSl9YDtcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGh0bWxJbXBvcnQoY29uZmlnKSB7XG4gIHJldHVybiBbXG4gICAgaHRtbEltcG9ydFNlcnZlKGNvbmZpZyksXG4gICAgaHRtbEltcG9ydEJ1aWxkKGNvbmZpZyksXG4gIF1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvemhhb3lvdXlhL2dpdC9teS1zaXRlLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3poYW95b3V5YS9naXQvbXktc2l0ZS8udml0ZXByZXNzL3V0aWxzLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3poYW95b3V5YS9naXQvbXktc2l0ZS8udml0ZXByZXNzL3V0aWxzLmpzXCI7aW1wb3J0IHtnbG9iYnl9IGZyb20gXCJnbG9iYnlcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzLWV4dHJhXCI7XG5cblxuLyoqXG4gKiBcdTgzQjdcdTUzRDZzaWRlYmFyIFx1NzZFRVx1NUY1NSxcdTVGNTNcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODRcdTY1ODdcdTRFRjZcdTUzMDVcdTU0MkInX2NhJ1x1NjVGNlx1RkYwQ1x1NUMwNlx1NEYxQVx1NTcyOFx1NkI2NFx1NjU4N1x1NEVGNlx1NEUwQlx1NzUxRlx1NjIxMFx1NEUwMFx1NEUyQXNpZGViYXIgXHU3NkVFXHU1RjU1XG4gKiBAcGFyYW0geyp9IGl0ZW0gYXV0b3NpZGUgb2JqZWN0XG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRvY3NTaWRlQmFyKGl0ZW0pIHtcbiAgICBsZXQgYmVmb3JJdGVtcyA9IGl0ZW1bJy9kb2NzLyddWzBdLml0ZW1zXG4gICAgbGV0IGFmdGVySXRlbXMgPSB7fVxuICAgIGZpbHRlckRvY3NTaWRlQmFyV29yayhiZWZvckl0ZW1zLCBhZnRlckl0ZW1zLCAnL2RvY3MvJylcbiAgICByZXR1cm4gYWZ0ZXJJdGVtc1xufVxuZnVuY3Rpb24gZmlsdGVyRG9jc1NpZGVCYXJXb3JrKGJlZm9ySXRlbXMsIHdpbGxJbnNlcnRJdGVtcywgcHJlZml4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZWZvckl0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChiZWZvckl0ZW1zW2ldLml0ZW1zKSB7XG4gICAgICAgICAgICB2YXIgbnByZWZpeCA9IHByZWZpeCArIGJlZm9ySXRlbXNbaV0udGV4dCArICcvJ1xuICAgICAgICAgICAgaWYgKGJlZm9ySXRlbXNbaV0udGV4dC5pbmNsdWRlcygnX2NhJykpIHtcbiAgICAgICAgICAgICAgICBiZWZvckl0ZW1zW2ldLnRleHQgPSBiZWZvckl0ZW1zW2ldLnRleHQucmVwbGFjZSgnX2NhJywgJycpXG4gICAgICAgICAgICAgICAgd2lsbEluc2VydEl0ZW1zW25wcmVmaXhdID0gW2JlZm9ySXRlbXNbaV1dXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbHRlckRvY3NTaWRlQmFyV29yayhiZWZvckl0ZW1zW2ldLml0ZW1zLCB3aWxsSW5zZXJ0SXRlbXMsIG5wcmVmaXgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbi8qKlxuICogXHU4M0I3XHU1M0Q2XHU2NTg3XHU0RUY2XHU3RUQzXHU2Nzg0XHU0RkUxXHU2MDZGXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICAgIGxldCBwYXRocyA9IGF3YWl0IGdldFBvc3RNREZpbGVQYXRocygpO1xuICAgIGxldCBwb3N0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgcGF0aHMubWFwKGFzeW5jIChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmcy5yZWFkRmlsZShpdGVtLCBcInV0Zi04XCIpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGZzLnN0YXRTeW5jKGl0ZW0pXG4gICAgICAgIC8vXHU2N0U1XHU2MjdFXHU2NTg3XHU1QjU3XHU1MTg1XHU1QkI5XHU3Njg0XHU3QjgwXHU0RUNCXG4gICAgICAgIGxldCBkZXNwTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC86OjpcXHMqaW5mb1xccypJbnRyb2R1Y3Rpb24oPzoufFxcbikqOjo6LylcbiAgICAgICAgbGV0IGRlc3AgPSAnJ1xuICAgICAgICBpZihkZXNwTWF0Y2gpIHtcbiAgICAgICAgICBkZXNwID0gZGVzcE1hdGNoWzBdLnJlcGxhY2UoLzo6OlxccyppbmZvXFxzKkludHJvZHVjdGlvbi8sJycpLnJlcGxhY2UoJzo6OicsJycpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBtYXR0ZXIoY29udGVudCk7XG4gICAgICAgIGRhdGEuZGVzcCA9IGRlc3BcbiAgICAgICAgLy9cdTUyMUJcdTVFRkFcdTY1RjZcdTk1RjRcbiAgICAgICAgZGF0YS5iaXJ0aHRpbWUgPSBzdGF0ZS5iaXJ0aHRpbWUudG9Mb2NhbGVTdHJpbmcoJ3poLUNOJywgeyB0aW1lWm9uZTogJ0FzaWEvU2hhbmdoYWknIH0pXG4gICAgICAgIC8vXHU2NzAwXHU1NDBFXHU0RkVFXHU2NTM5XHU2NUY2XHU5NUY0XG4gICAgICAgIGRhdGEubXRpbWUgPSBzdGF0ZS5tdGltZS50b0xvY2FsZVN0cmluZygnemgtQ04nLCB7IHRpbWVab25lOiAnQXNpYS9TaGFuZ2hhaScgfSlcbiAgICAgICBcbiAgICAgICAgLy9cdTU5ODJcdTY3OUNcdTRFMERcdTUzMDVcdTU0MkJ0aXRsZVx1NUMwNlx1NEY3Rlx1NzUyOFx1NjU4N1x1NEVGNlx1NzZFRVx1NUY1NVx1NEY1Q1x1NEUzQXRpdGxlXG4gICAgICAgIGlmKCFkYXRhLnRpdGxlKSB7XG4gICAgICAgICAgbGV0IGFyID0gaXRlbS5zcGxpdCgnLycpXG4gICAgICAgICAgZGF0YS50aXRsZSA9ICBhclthci5sZW5ndGgtMV0ucmVwbGFjZSgnLm1kJywnJylcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZnJvbnRNYXR0ZXI6IGRhdGEsXG4gICAgICAgICAgcmVndWxhclBhdGg6IGAvJHtpdGVtLnJlcGxhY2UoXCIubWRcIiwgXCIuaHRtbFwiKX1gLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICAgIHBvc3RzLnNvcnQoX2NvbXBhcmVEYXRlKTtcbiAgICByZXR1cm4gcG9zdHM7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIF9jb252ZXJ0RGF0ZShkYXRlID0gbmV3IERhdGUoKS50b1N0cmluZygpKSB7XG4gICAgY29uc3QganNvbl9kYXRlID0gbmV3IERhdGUoZGF0ZSkudG9KU09OKCk7XG4gICAgcmV0dXJuIGpzb25fZGF0ZS5zcGxpdChcIlRcIilbMF07XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIF9jb21wYXJlRGF0ZShvYmoxLCBvYmoyKSB7XG4gICAgcmV0dXJuIG9iajEuZnJvbnRNYXR0ZXIuZGF0ZSA8IG9iajIuZnJvbnRNYXR0ZXIuZGF0ZSA/IDEgOiAtMTtcbiAgfVxuICBcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdE1ERmlsZVBhdGhzKCkge1xuICAgIGxldCBwYXRocyA9IGF3YWl0IGdsb2JieShbXCIqKi5tZFwiXSwge1xuICAgICAgaWdub3JlOiBbXCJub2RlX21vZHVsZXNcIiwgXCJSRUFETUUubWRcIl0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHBhdGhzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmNsdWRlcyhcImRvY3MvXCIpKTtcbiAgfVxuICBcbiAgXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBSLE9BQU8saUJBQWlCOzs7QUNDbFQsT0FBTyxTQUFTO0FBRWhCLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0sWUFBWTtBQUVsQixTQUFTLFNBQVMsS0FBSztBQUNyQixTQUFPLElBQUksUUFBUSxXQUFXLEVBQUU7QUFDbEM7QUFFQSxTQUFTLGdCQUFnQixRQUFRO0FBQy9CLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFVBQVUsS0FBSyxJQUFJO0FBQ2pCLFVBQUksY0FBYyxLQUFLLEVBQUUsR0FBRztBQUMxQixlQUFPO0FBQUEsVUFDTCxNQUFNLGtCQUFrQixLQUFLLFVBQVUsR0FBRyxDQUFDO0FBQUEsUUFDN0M7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLFNBQVMsZ0JBQWdCLFFBQVE7QUFDL0IsUUFBTSxVQUFVO0FBRWhCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE1BQU0sVUFBVSxJQUFJLFVBQVUsU0FBUztBQUNyQyxVQUFJLGNBQWMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLFNBQVM7QUFDOUMsWUFBSSxNQUFNLE1BQU0sS0FBSyxRQUFRLElBQUksVUFBVTtBQUFBLFVBQ3pDLFVBQVU7QUFBQSxVQUNWLEdBQUc7QUFBQSxRQUNMLENBQUM7QUFFRCxZQUFJLENBQUMsT0FBTyxJQUFJO0FBQVUsaUJBQU87QUFFakMsZUFBTyxJQUFJLEtBQUs7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxJQUVBLE1BQU0sS0FBSyxJQUFJO0FBQ2IsVUFBSSxDQUFDLEdBQUcsU0FBUyxPQUFPO0FBQUc7QUFFM0IsVUFBSSxjQUFjLE1BQU0sSUFBSSxTQUFTLFNBQVMsRUFBRSxDQUFDO0FBS2pELGFBQU8sa0JBQWtCLEtBQUssVUFBVSxZQUFZLFNBQVMsT0FBTyxDQUFDLENBQUM7QUFBQSxJQUN4RTtBQUFBLEVBQ0Y7QUFDRjtBQUVlLFNBQVIsV0FBNEIsUUFBUTtBQUN6QyxTQUFPO0FBQUEsSUFDTCxnQkFBZ0IsTUFBTTtBQUFBLElBQ3RCLGdCQUFnQixNQUFNO0FBQUEsRUFDeEI7QUFDRjs7O0FENURBLFNBQVMsbUJBQW1COzs7QUVGNFAsU0FBUSxjQUFhO0FBQzdTLE9BQU8sWUFBWTtBQUNuQixPQUFPLFFBQVE7QUFRUixTQUFTLGtCQUFrQixNQUFNO0FBQ3BDLE1BQUksYUFBYSxLQUFLLFFBQVEsRUFBRSxDQUFDLEVBQUU7QUFDbkMsTUFBSSxhQUFhLENBQUM7QUFDbEIsd0JBQXNCLFlBQVksWUFBWSxRQUFRO0FBQ3RELFNBQU87QUFDWDtBQUNBLFNBQVMsc0JBQXNCLFlBQVksaUJBQWlCLFFBQVE7QUFDaEUsV0FBUyxJQUFJLEdBQUcsSUFBSSxXQUFXLFFBQVEsRUFBRSxHQUFHO0FBQ3hDLFFBQUksV0FBVyxDQUFDLEVBQUUsT0FBTztBQUNyQixVQUFJLFVBQVUsU0FBUyxXQUFXLENBQUMsRUFBRSxPQUFPO0FBQzVDLFVBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxTQUFTLEtBQUssR0FBRztBQUNwQyxtQkFBVyxDQUFDLEVBQUUsT0FBTyxXQUFXLENBQUMsRUFBRSxLQUFLLFFBQVEsT0FBTyxFQUFFO0FBQ3pELHdCQUFnQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUFBLE1BQzdDLE9BQU87QUFDSCw4QkFBc0IsV0FBVyxDQUFDLEVBQUUsT0FBTyxpQkFBaUIsT0FBTztBQUFBLE1BQ3ZFO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFFSjtBQUtBLGVBQXNCLFdBQVc7QUFDN0IsTUFBSSxRQUFRLE1BQU0sbUJBQW1CO0FBQ3JDLE1BQUksUUFBUSxNQUFNLFFBQVE7QUFBQSxJQUN4QixNQUFNLElBQUksT0FBTyxTQUFTO0FBQ3hCLFlBQU0sVUFBVSxNQUFNLEdBQUcsU0FBUyxNQUFNLE9BQU87QUFDL0MsWUFBTSxRQUFRLEdBQUcsU0FBUyxJQUFJO0FBRTlCLFVBQUksWUFBWSxRQUFRLE1BQU0sdUNBQXVDO0FBQ3JFLFVBQUksT0FBTztBQUNYLFVBQUcsV0FBVztBQUNaLGVBQU8sVUFBVSxDQUFDLEVBQUUsUUFBUSw2QkFBNEIsRUFBRSxFQUFFLFFBQVEsT0FBTSxFQUFFO0FBQUEsTUFDOUU7QUFDQSxZQUFNLEVBQUUsS0FBSyxJQUFJLE9BQU8sT0FBTztBQUMvQixXQUFLLE9BQU87QUFFWixXQUFLLFlBQVksTUFBTSxVQUFVLGVBQWUsU0FBUyxFQUFFLFVBQVUsZ0JBQWdCLENBQUM7QUFFdEYsV0FBSyxRQUFRLE1BQU0sTUFBTSxlQUFlLFNBQVMsRUFBRSxVQUFVLGdCQUFnQixDQUFDO0FBRzlFLFVBQUcsQ0FBQyxLQUFLLE9BQU87QUFDZCxZQUFJLEtBQUssS0FBSyxNQUFNLEdBQUc7QUFDdkIsYUFBSyxRQUFTLEdBQUcsR0FBRyxTQUFPLENBQUMsRUFBRSxRQUFRLE9BQU0sRUFBRTtBQUFBLE1BQ2hEO0FBRUEsYUFBTztBQUFBLFFBQ0wsYUFBYTtBQUFBLFFBQ2IsYUFBYSxJQUFJLEtBQUssUUFBUSxPQUFPLE9BQU8sQ0FBQztBQUFBLE1BQy9DO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNBLFFBQU0sS0FBSyxZQUFZO0FBQ3ZCLFNBQU87QUFDVDtBQU9BLFNBQVMsYUFBYSxNQUFNLE1BQU07QUFDaEMsU0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxJQUFJO0FBQzdEO0FBRUEsZUFBZSxxQkFBcUI7QUFDbEMsTUFBSSxRQUFRLE1BQU0sT0FBTyxDQUFDLE9BQU8sR0FBRztBQUFBLElBQ2xDLFFBQVEsQ0FBQyxnQkFBZ0IsV0FBVztBQUFBLEVBQ3RDLENBQUM7QUFDRCxTQUFPLE1BQU0sT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLE9BQU8sQ0FBQztBQUN0RDs7O0FGOUVGLElBQU8saUJBQVEsWUFBWTtBQUFBLEVBQ3pCLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxjQUFjLENBQUMsQ0FBQztBQUFBLEVBQ3JELE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQTtBQUFBO0FBQUEsSUFHWCxLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sa0JBQVcsTUFBTSxJQUFJO0FBQUEsTUFDN0IsRUFBRSxNQUFNLG9CQUFhLE1BQU0sV0FBVztBQUFBLE1BQ3RDLEVBQUUsTUFBTSwyQkFBYSxNQUFNLFNBQVM7QUFBQSxJQUN0QztBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLE9BQU8sTUFBTSxTQUFTO0FBQUEsSUFDdEIsVUFBVTtBQUFBLElBQ1YsU0FBUyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1WLGFBQWEsQ0FBQyxFQUFFLE1BQU0sVUFBVSxNQUFNLCtCQUErQixDQUFDO0FBQUEsRUFDeEU7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQTtBQUFBLE1BRVAsWUFBWTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sV0FBVTtBQUFBLFFBQ1YsaUJBQWlCLENBQUMsU0FBUztBQUN6QixjQUFJLElBQUcsa0JBQWtCLElBQUk7QUFDNUIsaUJBQU87QUFBQSxRQUNWO0FBQUE7QUFBQTtBQUFBLE1BR0YsQ0FBQztBQUFBLE1BQ0QsV0FBVztBQUFBLElBQ2I7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBRUEsU0FBUztBQUFBO0FBQUEsRUFFVDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
