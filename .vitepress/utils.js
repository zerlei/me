import {globby} from 'globby';
import matter from 'gray-matter';
import fs from 'fs-extra';
import filesTime from './filesTime.json';

/**
 * 获取sidebar 目录,当目录下的文件包含'_ca'时，将会在此文件下生成一个sidebar 目录
 * @param {*} item autoside object
 * @returns
 */
export function filterDocsSideBar(item) {
  let beforItems = item;
  let afterItems = {};
  for (const key in beforItems) {
    filterDocsSideBarWork(beforItems[key][0].items, afterItems, `/docs${key}`);
  }
  return afterItems;
}
function filterDocsSideBarWork(beforItems, willInsertItems, prefix) {
  for (let i = 0; i < beforItems.length; ++i) {
    if (beforItems[i].items) {
      var nprefix = prefix + beforItems[i].text + '/';
      if (beforItems[i].text.includes('_ca')) {
        beforItems[i].text = beforItems[i].text.replace('_ca', '');
        willInsertItems[nprefix] = [beforItems[i]];
      } else {
        filterDocsSideBarWork(beforItems[i].items, willInsertItems, nprefix);
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
  let posts = (
    await Promise.all(
      paths.map(async (item) => {
        const content = await fs.readFile(item, 'utf-8');
        const state = fs.statSync(item);
        //查找文字内容的简介
        let despMatch = content.match(/:::\s*info\s*Introduction(?:.|\n)*?:::/);
        let desp = '';
        if (despMatch) {
          desp = despMatch[0].replace(/:::\s*info\s*Introduction/, '').replace(':::', '');
        }
        const {data} = matter(content);
        data.desp = desp;

        const time = getFilesTime(item);
        //创建时间
        data.birthtime = time[0];

        //最后修改时间
        data.mtime = time[1];

        //如果不包含title将使用文件目录作为title
        if (!data.title) {
          let ar = item.split('/');
          data.title = ar[ar.length - 1].replace('.md', '');
        }
        return {
          frontMatter: data,
          regularPath: `/${item.replace('.md', '.html')}`
        };
      })
    )
  ).filter((e) => {
    // 没有写 desp 和 hidden 为 true 的文章将不会被显示
    if ([null, undefined, ''].includes(e.frontMatter.desp) || e.frontMatter.hidden == true) {
      // 用于检查哪些文章被过滤掉了
      // console.log(e.frontMatter.title)
      return false;
    }
    return true;
  });
  posts.sort(_compareDate);

  // let data = [];
  //
  // for (var i = 0; i < 100; i++) {
  //
  //   data.push(...JSON.parse(JSON.stringify(posts)));
  // }
  //
  // for (var j = 0; j < data.length; j++) {
  //   data[j].id= j;
  // }
  for (var j = 0; j < posts.length; j++) {
    posts[j].id = j;
  }

  return posts;
}

function _convertDate(date = new Date().toString()) {
  const json_date = new Date(date).toJSON();
  return json_date.split('T')[0];
}
function getFilesTime(fileName) {
  for (const file of filesTime) {
    if (file[0] == fileName) {
      return [file[1], file[2]];
    }
  }
  return ['', ''];
}

function _compareDate(obj1, obj2) {
  return new Date(obj1.frontMatter.birthtime) < new Date(obj2.frontMatter.birthtime) ? 1 : -1;
}

async function getPostMDFilePaths() {
  let paths = await globby(['**.md'], {
    ignore: ['node_modules', 'README.md']
  });
  return paths.filter((item) => item.includes('docs/'));
}
