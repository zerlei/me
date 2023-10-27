import {globby} from "globby";
import matter from "gray-matter";
import fs from "fs-extra";


/**
 * 获取sidebar 目录,当目录下的文件包含'_ca'时，将会在此文件下生成一个sidebar 目录
 * @param {*} item autoside object
 * @returns 
 */
export function filterDocsSideBar(item) {
    let beforItems = item['/docs/'][0].items
    let afterItems = {}
    filterDocsSideBarWork(beforItems, afterItems, '/docs/')
    return afterItems
}
function filterDocsSideBarWork(beforItems, willInsertItems, prefix) {
    for (let i = 0; i < beforItems.length; ++i) {
        if (beforItems[i].items) {
            var nprefix = prefix + beforItems[i].text + '/'
            if (beforItems[i].text.includes('_ca')) {
                beforItems[i].text = beforItems[i].text.replace('_ca', '')
                willInsertItems[nprefix] = [beforItems[i]]
            } else {
                filterDocsSideBarWork(beforItems[i].items, willInsertItems, nprefix)
            }
        }
    }

}
/**
 * 获取文件结构信息
 * @returns 
 */
export async function getPosts() {
    let paths = await getPostMDFilePaths();
    let posts = await Promise.all(
      paths.map(async (item) => {
        const content = await fs.readFile(item, "utf-8");
        const state = fs.statSync(item)
        //查找文字内容的简介
        let despMatch = content.match(/:::\s*info\s*Introduction(?:.|\n)*:::/)
        let desp = ''
        if(despMatch) {
          desp = despMatch[0].replace(/:::\s*info\s*Introduction/,'').replace(':::','')
        }
        const { data } = matter(content);
        data.desp = desp
        //创建时间
        data.birthtime = state.birthtime.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
        //最后修改时间
        data.mtime = state.mtime.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
       
        //如果不包含title将使用文件目录作为title
        if(!data.title) {
          let ar = item.split('/')
          data.title =  ar[ar.length-1].replace('.md','')
        }
      
        return {
          frontMatter: data,
          regularPath: `/${item.replace(".md", ".html")}`,
        };
      })
    );
    posts.sort(_compareDate);
    return posts;
  }
  
  function _convertDate(date = new Date().toString()) {
    const json_date = new Date(date).toJSON();
    return json_date.split("T")[0];
  }
  
  function _compareDate(obj1, obj2) {
    return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1;
  }
  
  async function getPostMDFilePaths() {
    let paths = await globby(["**.md"], {
      ignore: ["node_modules", "README.md"],
    });
    return paths.filter((item) => item.includes("docs/"));
  }
  
  
