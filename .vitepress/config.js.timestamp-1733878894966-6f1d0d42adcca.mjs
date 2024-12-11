// .vitepress/config.js
import AutoSidebar from "file:///home/zerlei/git/me/node_modules/vite-plugin-vitepress-auto-sidebar/dist/index.mjs";

// .vitepress/utils.js
import { globby } from "file:///home/zerlei/git/me/node_modules/globby/index.js";
import matter from "file:///home/zerlei/git/me/node_modules/gray-matter/index.js";
import fs from "file:///home/zerlei/git/me/node_modules/fs-extra/lib/index.js";

// .vitepress/filesTime.json
var filesTime_default = [["about.md", "2023-10-27 23:30:00 ", "2023-12-17 15:12:38 "], ["blog.md", "2024-08-15 22:52:01 ", "2024-08-15 22:52:01 "], ["docs/life/TheEnd.md", "2024-08-27 13:52:02 ", "2024-08-27 13:52:02 "], ["docs/life/\u4FEE\u884C_ca/0-\u4FEE\u884C.md", "2024-05-06 20:44:06 ", "2024-09-13 14:00:49 "], ["docs/life/\u4FEE\u884C_ca/\u4E24\u4EEA\u5BA5.md", "2023-11-07 13:46:38 ", "2024-09-13 14:00:49 "], ["docs/life/\u4FEE\u884C_ca/\u4ED9\u4E50\u5E9C-\u5929\u5730\u5BD3.md", "2024-09-12 10:52:36 ", "2024-09-13 14:00:49 "], ["docs/life/\u4FEE\u884C_ca/\u60CA\u5D16\u949F.md", "2023-11-07 13:46:38 ", "2024-06-05 22:49:40 "], ["docs/life/\u4FEE\u884C_ca/\u62D6\u8089\u884C.md", "2024-06-05 22:49:40 ", "2024-06-05 22:49:40 "], ["docs/life/\u4FEE\u884C_ca/\u795E\u601D\u6D77.md", "2023-11-07 13:46:38 ", "2024-09-12 13:25:42 "], ["docs/life/\u4FEE\u884C_ca/\u8715\u51E1\u58F3.md", "2023-11-09 09:29:45 ", "2024-08-22 10:18:36 "], ["docs/life/\u4FEE\u884C_ca/\u8715\u51E1\u58F3/-1-\u826F\u597D\u7684\u7761\u7720.md", "2024-09-12 10:52:36 ", "2024-11-10 10:12:06 "], ["docs/life/\u4FEE\u884C_ca/\u8715\u51E1\u58F3/0-\u5E38\u770B\u4FEE\u884C\u7684\u5185\u5BB9.md", "2024-08-22 10:18:36 ", "2024-08-22 10:18:36 "], ["docs/life/\u4FEE\u884C_ca/\u8715\u51E1\u58F3/1-\u4E0D\u8981\u5728\u53D1\u5446\u4E2D\u5F85\u592A\u957F\u65F6\u95F4.md", "2024-08-30 09:16:42 ", "2024-09-12 10:52:36 "], ["docs/life/\u4FEE\u884C_ca/\u8715\u51E1\u58F3/2-\u62C9\u5C4E\u7684\u65F6\u5019\u4E0D\u8981\u73A9\u624B\u673A.md", "2024-08-30 09:16:42 ", "2024-08-30 09:16:42 "], ["docs/life/\u4FEE\u884C_ca/\u8715\u51E1\u58F3/3-\u51CF\u5C11\u5728\u4F4E\u8D28\u91CFapp\u6D6A\u8D39\u7684\u65F6\u95F4.md", "2024-09-12 10:52:36 ", "2024-09-12 10:52:36 "], ["docs/life/\u4FEE\u884C_ca/\u8715\u51E1\u58F3/4-\u4FDD\u6301\u751F\u6D3B\u73AF\u5883\u7684\u5E72\u51C0\u6574\u6D01.md", "2024-09-12 10:52:36 ", "2024-10-15 20:27:41 "], ["docs/life/\u4FEE\u884C_ca/\u8715\u51E1\u58F3/5-\u5141\u8BB8\u96F6\u788E\u65F6\u95F4\u7684\u65E0\u6240\u4E8B\u4E8B.md", "2024-11-10 10:12:06 ", "2024-11-10 10:12:06 "], ["docs/life/\u4FEE\u884C_ca/\u8715\u51E1\u58F3/6-\u70ED\u7231\u751F\u6D3B.md", "2024-11-10 10:12:06 ", "2024-11-10 10:12:06 "], ["docs/life/\u5065\u5EB7_ca/\u5065\u5EB7\u751F\u6D3B\u6307\u5357.md", "2024-10-15 20:27:41 ", "2024-10-15 20:27:41 "], ["docs/life/\u5065\u5EB7_ca/\u51CF\u5C11\u9AD8\u8840\u8102\u548C\u8102\u80AA\u809D.md", "2024-10-15 20:27:41 ", "2024-10-15 20:27:41 "], ["docs/life/\u5065\u5EB7_ca/\u597D\u597D\u7761\u89C9.md", "2024-10-15 20:27:41 ", "2024-10-15 20:27:41 "], ["docs/life/\u5065\u5EB7_ca/\u843D\u6795.md", "2024-11-10 10:12:06 ", "2024-11-10 10:12:06 "], ["docs/life/\u5065\u5EB7_ca/\u9AD8\u8D28\u91CF\u751F\u6D3B\u5C0F\u8D34\u58EB.md", "2024-10-15 20:27:41 ", "2024-10-15 20:27:41 "], ["docs/life/\u5B81\u9759\u6B32\u671B\u7CBE\u529B\u89C4\u5F8B--\u7761\u7720.md", "2024-11-10 10:12:06 ", "2024-11-10 10:12:06 "], ["docs/life/\u5B9E\u8DF5/\u884C\u52A8/\u4E0D\u8981\u8BA9\u81EA\u5DF1\u5904\u5728\u4E00\u4E2A\u6F2B\u957F\u7684\u65E0\u53CD\u9988\u7684\u89C4\u5212\u4E2D.md", "2024-07-03 22:51:21 ", "2024-10-17 16:46:39 "], ["docs/life/\u5B9E\u8DF5/\u884C\u52A8/\u6253\u9020\u4E2A\u4EBA\u54C1\u724C.md", "2023-11-07 13:46:38 ", "2024-02-18 08:44:26 "], ["docs/life/\u5B9E\u8DF5/\u884C\u52A8/\u65F6\u95F4\u548C\u7CBE\u529B\u5B89\u6392(Now-v1).md", "2023-11-12 21:47:49 ", "2024-02-18 08:44:26 "], ["docs/life/\u5B9E\u8DF5/\u884C\u52A8/\u7ECF\u9A8C\u548C\u65B9\u6CD5/\u7761\u7720\u9020\u6210\u4F4E\u6548\u7684\u95EE\u9898.md", "2024-03-06 14:28:05 ", "2024-03-06 14:28:05 "], ["docs/life/\u5B9E\u8DF5/\u884C\u52A8/\u7ECF\u9A8C\u548C\u65B9\u6CD5/\u91CD\u590D\u662F\u5B8C\u5168\u5FC5\u8981\u7684.md", "2024-02-18 08:44:26 ", "2024-02-18 08:44:26 "], ["docs/life/\u6E05\u6D01\u7269\u8BED_ca/\u5C45\u4F4F\u548C\u529E\u516C\u73AF\u5883.md", "2024-10-15 20:27:41 ", "2024-10-15 20:27:41 "], ["docs/log_ca/2023\u5E7411\u670810\u65E5.md", "2023-11-10 22:15:26 ", "2024-05-06 23:55:38 "], ["docs/log_ca/2023\u5E7411\u67089\u65E5.md", "2023-11-09 16:23:51 ", "2023-11-10 22:15:26 "], ["docs/log_ca/2024\u5E741\u670817\u65E5.md", "2024-01-24 15:55:42 ", "2024-02-05 17:08:20 "], ["docs/log_ca/2024\u5E741\u67081\u65E5(\u6D4B\u8BD5\u753B\u56FE).md", "2024-01-01 13:41:18 ", "2024-10-15 20:27:41 "], ["docs/log_ca/2024\u5E742\u67085\u65E5.md", "2024-02-05 17:08:20 ", "2024-02-06 17:14:53 "], ["docs/log_ca/2024\u5E746\u670811\u65E5.md", "2024-06-11 13:08:50 ", "2024-06-11 13:08:50 "], ["docs/log_ca/2024\u5E746\u670822\u65E5.md", "2024-06-22 23:23:27 ", "2024-06-22 23:23:27 "], ["docs/log_ca/2024\u5E746\u670824\u65E5.md", "2024-06-24 21:45:11 ", "2024-06-24 21:45:11 "], ["docs/log_ca/2024\u5E747\u670818\u65E5(\u6211\u7684\u7126\u8651).md", "2024-07-19 11:23:23 ", "2024-08-27 14:45:38 "], ["docs/log_ca/2024\u5E747\u67089\u65E5.md", "2024-07-10 08:18:21 ", "2024-07-10 08:18:21 "], ["docs/log_ca/Plan.md", "2023-12-12 11:16:28 ", "2023-12-23 15:02:55 "], ["docs/log_ca/\u524D\u8DEF-\u5206\u6790\u4E0E\u6289\u62E9.md", "2024-07-17 00:03:07 ", "2024-08-30 09:16:42 "], ["docs/tech/DesignaPattern_ca/0-\u8BBE\u8BA1\u6A21\u5F0F-\u5E8F.md", "2024-08-30 09:16:42 ", "2024-08-30 09:16:42 "], ["docs/tech/DesignaPattern_ca/1-7\u5927\u8BBE\u8BA1\u539F\u5219.md", "2024-06-05 22:49:40 ", "2024-08-30 09:16:42 "], ["docs/tech/DesignaPattern_ca/2-\u521B\u5EFA\u578B\u6A21\u5F0F.md", "2024-06-05 22:49:40 ", "2024-08-30 09:16:42 "], ["docs/tech/DesignaPattern_ca/3-\u7ED3\u6784\u578B\u6A21\u5F0F.md", "2024-06-24 21:45:11 ", "2024-08-30 09:16:42 "], ["docs/tech/DesignaPattern_ca/4-\u884C\u4E3A\u6A21\u5F0F.md", "2024-06-26 22:23:27 ", "2024-08-30 09:16:42 "], ["docs/tech/OOAna&Design_ca/0-\u9762\u5411\u5BF9\u8C61\u4E0E\u8BBE\u8BA1\u603B\u7ED3\u7B14\u8BB0.md", "2024-03-28 16:25:58 ", "2024-07-03 22:57:59 "], ["docs/tech/OOAna&Design_ca/1-\u6982\u5FF5-\u590D\u6742\u6027.md", "2023-12-12 11:16:28 ", "2024-03-07 10:35:27 "], ["docs/tech/OOAna&Design_ca/2-\u6982\u5FF5-\u5BF9\u8C61\u6A21\u578B.md", "2023-12-12 11:16:28 ", "2024-08-30 09:16:42 "], ["docs/tech/OOAna&Design_ca/3-\u6982\u5FF5-\u7C7B\u4E0E\u5BF9\u8C61.md", "2023-12-23 15:02:55 ", "2024-03-07 10:35:27 "], ["docs/tech/OOAna&Design_ca/4-\u6982\u5FF5-\u5206\u7C7B.md", "2024-01-03 08:55:05 ", "2024-01-03 08:55:05 "], ["docs/tech/OOAna&Design_ca/5-UML/0.\u524D\u8A00.md", "2024-01-24 15:55:42 ", "2024-03-26 17:46:22 "], ["docs/tech/OOAna&Design_ca/5-UML/1.\u5305\u56FE.md", "2024-02-06 17:14:53 ", "2024-02-06 17:14:53 "], ["docs/tech/OOAna&Design_ca/5-UML/2.\u7EC4\u4EF6\u56FE.md", "2024-01-24 15:55:42 ", "2024-03-26 17:46:22 "], ["docs/tech/OOAna&Design_ca/5-UML/3.\u90E8\u7F72\u56FE.md", "2024-02-06 17:14:53 ", "2024-03-26 17:46:22 "], ["docs/tech/OOAna&Design_ca/5-UML/4.\u7528\u4F8B\u56FE.md", "2024-02-29 18:30:17 ", "2024-02-29 18:30:17 "], ["docs/tech/OOAna&Design_ca/5-UML/5.\u6D3B\u52A8\u56FE.md", "2024-02-29 18:30:17 ", "2024-03-26 17:46:22 "], ["docs/tech/OOAna&Design_ca/5-UML/6.\u7C7B\u56FE.md", "2024-02-29 18:30:17 ", "2024-03-26 17:46:22 "], ["docs/tech/OOAna&Design_ca/5-UML/7.\u5E8F\u5217\u56FE(\u65F6\u5E8F\u56FE).md", "2024-02-29 18:30:17 ", "2024-02-29 18:30:17 "], ["docs/tech/OOAna&Design_ca/5-UML/8.\u72B6\u6001\u673A\u56FE.md", "2024-02-29 18:30:17 ", "2024-03-26 17:46:22 "], ["docs/tech/OOAna&Design_ca/5-UML/9.\u65F6\u95F4\u56FE.md", "2024-02-29 18:30:17 ", "2024-02-29 18:30:17 "], ["docs/tech/OOAna&Design_ca/5-UML/A.\u5176\u5B83\u56FE.md", "2024-02-29 18:30:17 ", "2024-03-26 17:46:22 "], ["docs/tech/OOAna&Design_ca/6-\u8868\u793A\u6CD5-\u8FC7\u7A0B.md", "2024-03-06 18:29:40 ", "2024-03-26 17:46:22 "], ["docs/tech/OOAna&Design_ca/7-\u5B9E\u6218-\u5F00\u53D1\u8FC7\u7A0B\u8003\u8651\u7684\u8981\u7D20.md", "2024-03-06 14:28:05 ", "2024-03-26 17:46:22 "], ["docs/tech/cpp/qt/\u8BB0\u5F55\u4E00\u6B21qt6-msvc32-static-MT\u7684\u9759\u6001\u7F16\u8BD1.md", "2024-03-28 16:25:58 ", "2024-04-10 22:55:21 "], ["docs/tech/cpp/\u4E00\u6B21clangd\u63D0\u793A\u9519\u8BEF\u7684\u6392\u67E5.md", "2024-04-18 16:25:00 ", "2024-08-15 22:52:01 "], ["docs/tech/db/timescaledb.md", "2024-04-10 22:55:21 ", "2024-04-10 22:55:21 "], ["docs/tech/devops/git_ca/git-profile.md", "2024-07-17 00:03:07 ", "2024-08-15 22:52:01 "], ["docs/tech/devops/git_ca/git\u548Cgithub\u8D26\u53F7\u4E0D\u7EDF\u4E00.md", "2024-07-17 00:03:07 ", "2024-07-17 11:45:17 "], ["docs/tech/devops/git_ca/git\u6700\u4F73\u5B9E\u8DF5.md", "2024-08-15 22:52:01 ", "2024-08-30 09:16:42 "], ["docs/tech/english_ca/grammar/0-\u540D\u8BCD\u77ED\u8BED.md", "2024-06-22 23:23:27 ", "2024-07-17 00:03:07 "], ["docs/tech/english_ca/grammar/1-\u540D\u8BCD.md", "2024-07-19 11:23:23 ", "2024-09-12 10:52:36 "], ["docs/tech/english_ca/grammar/2-\u9650\u5B9A\u8BCD-\u51A0\u8BCD.md", "2024-09-12 10:52:36 ", "2024-09-19 08:58:35 "], ["docs/tech/english_ca/grammar/index.md", "2024-06-22 23:23:27 ", "2024-07-17 00:03:07 "], ["docs/tech/english_ca/readme.md", "2024-06-22 23:23:27 ", "2024-07-17 00:03:07 "], ["docs/tech/fastCoding/kde/kwin\u4F7F\u7528\u6280\u5DE7.md", "2024-02-29 18:30:17 ", "2024-02-29 18:30:17 "], ["docs/tech/fastCoding/vim_ca/vim\u6587\u4EF6\u5185\u79FB\u52A8.md", "2024-06-05 22:49:40 ", "2024-06-05 22:49:40 "], ["docs/tech/fastCoding/vim_ca/vim\u67E5\u627E\u548C\u66FF\u6362.md", "2024-06-05 22:49:40 ", "2024-07-17 00:03:07 "], ["docs/tech/fastCoding/vim_ca/\u6B22\u8FCE\u6765\u5230vim\u5B97\u6559.md", "2023-12-23 15:02:55 ", "2024-08-30 09:16:42 "], ["docs/tech/fastCoding/vim_ca/\u6E10\u8FDB\u5F0F\u5B66\u4E60vim.md", "2023-12-23 15:02:55 ", "2024-09-12 10:52:36 "], ["docs/tech/fastCoding/vscode\u5FEB\u6377\u952E.md", "2024-06-05 22:49:40 ", "2024-09-13 14:00:49 "], ["docs/tech/fastCoding/\u5F00\u53D1\u73AF\u5883\u7EF4\u62A4\u548C\u7BA1\u7406.md", "2024-04-18 16:25:00 ", "2024-05-06 20:44:06 "], ["docs/tech/fastCoding/\u5FEB\u6377\u952Echore.md", "2024-09-13 14:00:49 ", "2024-09-13 14:06:40 "], ["docs/tech/fastCoding/\u7F16\u7A0B\u73AF\u5883-\u63D0\u9AD8\u6548\u7387\u7684\u65B9\u5F0F.md", "2023-12-28 18:26:18 ", "2024-05-06 20:44:06 "], ["docs/tech/linux_kde_suse_ca/0-opensuse_linux\u7D22\u5F15.md", "2024-05-06 20:44:06 ", "2024-05-06 20:44:06 "], ["docs/tech/linux_kde_suse_ca/1-\u5B89\u88C5\u5B8C\u6210qt\u4E4B\u540E\u7F3A\u5C11opengl\u5E93.md", "2024-05-06 20:44:06 ", "2024-05-06 20:44:06 "], ["docs/tech/linux_kde_suse_ca/2-\u4E2D\u6587\u8F93\u5165\u6CD5\u95EE\u9898.md", "2024-05-06 20:44:06 ", "2024-05-06 21:02:15 "], ["docs/tech/linux_kde_suse_ca/3-linux\u5371\u5BB3\u5065\u5EB7.md", "2024-05-06 20:44:06 ", "2024-05-06 20:44:06 "], ["docs/tech/linux_kde_suse_ca/4-\u4F7F\u7528linux\u7684\u6210\u957F\u548C\u4EE3\u4EF7.md", "2024-05-06 20:44:06 ", "2024-05-06 20:44:06 "], ["docs/tech/linux_kde_suse_ca/5-\u7EC8\u6781\u7684zsh.md", "2024-05-06 20:44:06 ", "2024-05-06 20:44:06 "], ["docs/tech/linux_kde_suse_ca/kde_ca/1-kde.md", "2024-05-06 20:44:06 ", "2024-05-06 20:44:06 "], ["docs/tech/project/FileSqlServerSync_ca/profile.md", "2024-10-15 20:27:41 ", "2024-10-17 17:08:30 "], ["docs/tech/project/FileSqlServerSync_ca/\u4F7F\u7528\u73AF\u5883.md", "2024-10-17 16:46:39 ", "2024-11-10 10:12:06 "], ["docs/tech/project/FileSqlServerSync_ca/\u914D\u7F6E\u6587\u4EF6.md", "2024-10-17 16:46:39 ", "2024-11-10 10:12:06 "], ["docs/tech/project/\u6253\u5370\u7F51\u9875\u7684\u81EA\u52A8\u5316\u5DE5\u5177.md", "2023-10-18 17:13:19 ", "2024-01-01 13:41:18 "], ["docs/tech/ubuntu\u4E00\u6B21\u7F51\u7EDC\u6545\u969C\u6392\u67E5\u8BB0\u5F55.md", "2024-08-19 22:40:57 ", "2024-08-19 22:40:57 "], ["docs/tech/\u4E00\u4E2A\u7CFB\u7EDF\u7EA7\u7A0B\u5E8F\u5458.md", "2024-07-19 11:23:23 ", "2024-07-19 11:23:23 "], ["docs/tech/\u524D\u7AEF/vue\u7684h\u51FD\u6570Vnode\u548Crender.md", "2024-06-07 22:35:04 ", "2024-06-08 00:12:49 "], ["docs/tech/\u5EFA\u4E00\u4E2Ablog\u7F51\u7AD9.md", "2023-11-06 15:43:15 ", "2024-06-07 13:23:53 "], ["docs/tech/\u6280\u672F\u5EFA\u8BBE.md", "2023-11-06 15:43:15 ", "2023-11-15 22:31:03 "], ["docs/tech/\u6280\u672F\u6587\u7AE0\u5F15\u7528/Iot\u6570\u636E\u4F20\u8F93\u534F\u8BAE.md", "2023-11-06 15:43:15 ", "2023-11-10 22:15:26 "], ["docs/tech/\u6280\u672F\u6587\u7AE0\u5F15\u7528/wsl\u548Chost\u4E3B\u673A\u4E4B\u95F4\u7684\u7F51\u7EDC.md", "2023-11-06 15:43:15 ", "2023-11-10 22:15:26 "], ["docs/tech/\u6570\u636E\u7ED3\u6784&\u7B97\u6CD5_ca/0-\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u7B80\u4ECB.md", "2023-10-27 10:50:53 ", "2023-10-27 22:19:24 "], ["docs/tech/\u6570\u636E\u7ED3\u6784&\u7B97\u6CD5_ca/1-\u65F6\u95F4&\u7A7A\u95F4\u590D\u6742\u5EA6.md", "2023-10-18 17:13:19 ", "2023-11-10 22:15:26 "], ["docs/tech/\u8D44\u6E90\u6536\u5F55.md", "2023-11-10 22:15:26 ", "2023-11-10 22:15:26 "], ["docs/tech/\u9762\u5411\u4E1A\u52A1\u7684\u5B8C\u5907\u751F\u4EA7\u529B/(\u76F4\u9762\u4E1A\u52A1)1-\u6280\u672F\u9009\u578B.md", "2023-11-10 22:15:26 ", "2023-11-10 22:15:26 "], ["docs/tech/\u9762\u5411\u4E1A\u52A1\u7684\u5B8C\u5907\u751F\u4EA7\u529B/\u8C08\u8C08csharp.md", "2024-02-18 08:54:33 ", "2024-05-06 21:02:15 "], ["history.md", "2023-10-27 23:30:00 ", "2024-05-16 11:31:54 "], ["index.md", "2023-07-21 15:10:50 ", "2024-10-15 20:27:41 "], ["navigation.md", "2024-06-27 14:32:59 ", "2024-06-28 13:20:46 "], ["readme.md", "2023-10-18 17:13:19 ", "2024-09-19 13:49:16 "]];

// .vitepress/utils.js
function filterDocsSideBar(item) {
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
      let despMatch = content.match(/:::\s*info\s*Introduction(?:.|\n)*?:::/);
      let desp = "";
      if (despMatch) {
        desp = despMatch[0].replace(/:::\s*info\s*Introduction/, "").replace(":::", "");
      }
      const { data } = matter(content);
      data.desp = desp;
      const time = getFilesTime(item);
      data.birthtime = time[0];
      data.mtime = time[1];
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
  for (var j = 0; j < posts.length; j++) {
    posts[j].id = j;
  }
  return posts;
}
function getFilesTime(fileName) {
  for (const file of filesTime_default) {
    if (file[0] == fileName) {
      return [file[1], file[2]];
    }
  }
  return ["", ""];
}
function _compareDate(obj1, obj2) {
  return new Date(obj1.frontMatter.birthtime) < new Date(obj2.frontMatter.birthtime) ? 1 : -1;
}
async function getPostMDFilePaths() {
  let paths = await globby(["**.md"], {
    ignore: ["node_modules", "README.md"]
  });
  return paths.filter((item) => item.includes("docs/"));
}

// .vitepress/config.js
import markdownFootnote from "file:///home/zerlei/git/me/node_modules/markdown-it-footnote/index.mjs";

// .vitepress/theme/lib/deflate.ts
var deflate_default = {
  zip_deflate,
  encode64
};
var zip_WSIZE = 32768;
var zip_STORED_BLOCK = 0;
var zip_STATIC_TREES = 1;
var zip_DYN_TREES = 2;
var zip_DEFAULT_LEVEL = 6;
var zip_FULL_SEARCH = true;
var zip_INBUFSIZ = 32768;
var zip_INBUF_EXTRA = 64;
var zip_OUTBUFSIZ = 1024 * 8;
var zip_window_size = 2 * zip_WSIZE;
var zip_MIN_MATCH = 3;
var zip_MAX_MATCH = 258;
var zip_BITS = 16;
var zip_LIT_BUFSIZE = 8192;
var zip_HASH_BITS = 13;
var zip_DIST_BUFSIZE = zip_LIT_BUFSIZE;
var zip_HASH_SIZE = 1 << zip_HASH_BITS;
var zip_HASH_MASK = zip_HASH_SIZE - 1;
var zip_WMASK = zip_WSIZE - 1;
var zip_NIL = 0;
var zip_TOO_FAR = 4096;
var zip_MIN_LOOKAHEAD = zip_MAX_MATCH + zip_MIN_MATCH + 1;
var zip_MAX_DIST = zip_WSIZE - zip_MIN_LOOKAHEAD;
var zip_SMALLEST = 1;
var zip_MAX_BITS = 15;
var zip_MAX_BL_BITS = 7;
var zip_LENGTH_CODES = 29;
var zip_LITERALS = 256;
var zip_END_BLOCK = 256;
var zip_L_CODES = zip_LITERALS + 1 + zip_LENGTH_CODES;
var zip_D_CODES = 30;
var zip_BL_CODES = 19;
var zip_REP_3_6 = 16;
var zip_REPZ_3_10 = 17;
var zip_REPZ_11_138 = 18;
var zip_HEAP_SIZE = 2 * zip_L_CODES + 1;
var zip_H_SHIFT = Number.parseInt(
  (zip_HASH_BITS + zip_MIN_MATCH - 1) / zip_MIN_MATCH
);
var zip_free_queue;
var zip_qhead;
var zip_qtail;
var zip_initflag;
var zip_outbuf = null;
var zip_outcnt;
var zip_outoff;
var zip_complete;
var zip_window;
var zip_d_buf;
var zip_l_buf;
var zip_prev;
var zip_bi_buf;
var zip_bi_valid;
var zip_block_start;
var zip_ins_h;
var zip_hash_head;
var zip_prev_match;
var zip_match_available;
var zip_match_length;
var zip_prev_length;
var zip_strstart;
var zip_match_start;
var zip_eofile;
var zip_lookahead;
var zip_max_chain_length;
var zip_max_lazy_match;
var zip_compr_level;
var zip_good_match;
var zip_nice_match;
var zip_dyn_ltree;
var zip_dyn_dtree;
var zip_static_ltree;
var zip_static_dtree;
var zip_bl_tree;
var zip_l_desc;
var zip_d_desc;
var zip_bl_desc;
var zip_bl_count;
var zip_heap;
var zip_heap_len;
var zip_heap_max;
var zip_depth;
var zip_length_code;
var zip_dist_code;
var zip_base_length;
var zip_base_dist;
var zip_flag_buf;
var zip_last_lit;
var zip_last_dist;
var zip_last_flags;
var zip_flags;
var zip_flag_bit;
var zip_opt_len;
var zip_static_len;
var zip_deflate_data;
var zip_deflate_pos;
var zip_extra_lbits = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0
];
var zip_extra_dbits = [
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13
];
var zip_extra_blbits = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  3,
  7
];
var zip_bl_order = [
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
];
var zip_configuration_table = [
  new zip_DeflateConfiguration(0, 0, 0, 0),
  new zip_DeflateConfiguration(4, 4, 8, 4),
  new zip_DeflateConfiguration(4, 5, 16, 8),
  new zip_DeflateConfiguration(4, 6, 32, 32),
  new zip_DeflateConfiguration(4, 4, 16, 16),
  new zip_DeflateConfiguration(8, 16, 32, 32),
  new zip_DeflateConfiguration(8, 16, 128, 128),
  new zip_DeflateConfiguration(8, 32, 128, 256),
  new zip_DeflateConfiguration(32, 128, 258, 1024),
  new zip_DeflateConfiguration(32, 258, 258, 4096)
];
function zip_DeflateCT() {
  this.fc = 0;
  this.dl = 0;
}
function zip_DeflateTreeDesc() {
  this.dyn_tree = null;
  this.static_tree = null;
  this.extra_bits = null;
  this.extra_base = 0;
  this.elems = 0;
  this.max_length = 0;
  this.max_code = 0;
}
function zip_DeflateConfiguration(a, b, c, d) {
  this.good_length = a;
  this.max_lazy = b;
  this.nice_length = c;
  this.max_chain = d;
}
function zip_DeflateBuffer() {
  this.next = null;
  this.len = 0;
  this.ptr = Array.from({ length: zip_OUTBUFSIZ });
  this.off = 0;
}
function zip_deflate_start(level) {
  let i;
  if (!level)
    level = zip_DEFAULT_LEVEL;
  else if (level < 1)
    level = 1;
  else if (level > 9)
    level = 9;
  zip_compr_level = level;
  zip_initflag = false;
  zip_eofile = false;
  if (zip_outbuf != null)
    return;
  zip_free_queue = zip_qhead = zip_qtail = null;
  zip_outbuf = Array.from({ length: zip_OUTBUFSIZ });
  zip_window = Array.from({ length: zip_window_size });
  zip_d_buf = Array.from({ length: zip_DIST_BUFSIZE });
  zip_l_buf = Array.from({ length: zip_INBUFSIZ + zip_INBUF_EXTRA });
  zip_prev = Array.from({ length: 1 << zip_BITS });
  zip_dyn_ltree = Array.from({ length: zip_HEAP_SIZE });
  for (i = 0; i < zip_HEAP_SIZE; i++)
    zip_dyn_ltree[i] = new zip_DeflateCT();
  zip_dyn_dtree = Array.from({ length: 2 * zip_D_CODES + 1 });
  for (i = 0; i < 2 * zip_D_CODES + 1; i++)
    zip_dyn_dtree[i] = new zip_DeflateCT();
  zip_static_ltree = Array.from({ length: zip_L_CODES + 2 });
  for (i = 0; i < zip_L_CODES + 2; i++)
    zip_static_ltree[i] = new zip_DeflateCT();
  zip_static_dtree = Array.from({ length: zip_D_CODES });
  for (i = 0; i < zip_D_CODES; i++)
    zip_static_dtree[i] = new zip_DeflateCT();
  zip_bl_tree = Array.from({ length: 2 * zip_BL_CODES + 1 });
  for (i = 0; i < 2 * zip_BL_CODES + 1; i++)
    zip_bl_tree[i] = new zip_DeflateCT();
  zip_l_desc = new zip_DeflateTreeDesc();
  zip_d_desc = new zip_DeflateTreeDesc();
  zip_bl_desc = new zip_DeflateTreeDesc();
  zip_bl_count = Array.from({ length: zip_MAX_BITS + 1 });
  zip_heap = Array.from({ length: 2 * zip_L_CODES + 1 });
  zip_depth = Array.from({ length: 2 * zip_L_CODES + 1 });
  zip_length_code = Array.from({ length: zip_MAX_MATCH - zip_MIN_MATCH + 1 });
  zip_dist_code = Array.from({ length: 512 });
  zip_base_length = Array.from({ length: zip_LENGTH_CODES });
  zip_base_dist = Array.from({ length: zip_D_CODES });
  zip_flag_buf = Array.from({ length: Number.parseInt(zip_LIT_BUFSIZE / 8) });
}
function zip_reuse_queue(p) {
  p.next = zip_free_queue;
  zip_free_queue = p;
}
function zip_new_queue() {
  let p;
  if (zip_free_queue != null) {
    p = zip_free_queue;
    zip_free_queue = zip_free_queue.next;
  } else {
    p = new zip_DeflateBuffer();
  }
  p.next = null;
  p.len = p.off = 0;
  return p;
}
function zip_head1(i) {
  return zip_prev[zip_WSIZE + i];
}
function zip_head2(i, val) {
  return zip_prev[zip_WSIZE + i] = val;
}
function zip_put_byte(c) {
  zip_outbuf[zip_outoff + zip_outcnt++] = c;
  if (zip_outoff + zip_outcnt == zip_OUTBUFSIZ)
    zip_qoutbuf();
}
function zip_put_short(w) {
  w &= 65535;
  if (zip_outoff + zip_outcnt < zip_OUTBUFSIZ - 2) {
    zip_outbuf[zip_outoff + zip_outcnt++] = w & 255;
    zip_outbuf[zip_outoff + zip_outcnt++] = w >>> 8;
  } else {
    zip_put_byte(w & 255);
    zip_put_byte(w >>> 8);
  }
}
function zip_INSERT_STRING() {
  zip_ins_h = (zip_ins_h << zip_H_SHIFT ^ zip_window[zip_strstart + zip_MIN_MATCH - 1] & 255) & zip_HASH_MASK;
  zip_hash_head = zip_head1(zip_ins_h);
  zip_prev[zip_strstart & zip_WMASK] = zip_hash_head;
  zip_head2(zip_ins_h, zip_strstart);
}
function zip_SEND_CODE(c, tree) {
  zip_send_bits(tree[c].fc, tree[c].dl);
}
function zip_D_CODE(dist) {
  return (dist < 256 ? zip_dist_code[dist] : zip_dist_code[256 + (dist >> 7)]) & 255;
}
function zip_SMALLER(tree, n, m) {
  return tree[n].fc < tree[m].fc || tree[n].fc == tree[m].fc && zip_depth[n] <= zip_depth[m];
}
function zip_read_buff(buff, offset, n) {
  let i;
  for (i = 0; i < n && zip_deflate_pos < zip_deflate_data.length; i++)
    buff[offset + i] = zip_deflate_data.charCodeAt(zip_deflate_pos++) & 255;
  return i;
}
function zip_lm_init() {
  let j;
  for (j = 0; j < zip_HASH_SIZE; j++)
    zip_prev[zip_WSIZE + j] = 0;
  zip_max_lazy_match = zip_configuration_table[zip_compr_level].max_lazy;
  zip_good_match = zip_configuration_table[zip_compr_level].good_length;
  if (!zip_FULL_SEARCH)
    zip_nice_match = zip_configuration_table[zip_compr_level].nice_length;
  zip_max_chain_length = zip_configuration_table[zip_compr_level].max_chain;
  zip_strstart = 0;
  zip_block_start = 0;
  zip_lookahead = zip_read_buff(zip_window, 0, 2 * zip_WSIZE);
  if (zip_lookahead <= 0) {
    zip_eofile = true;
    zip_lookahead = 0;
    return;
  }
  zip_eofile = false;
  while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile)
    zip_fill_window();
  zip_ins_h = 0;
  for (j = 0; j < zip_MIN_MATCH - 1; j++) {
    zip_ins_h = (zip_ins_h << zip_H_SHIFT ^ zip_window[j] & 255) & zip_HASH_MASK;
  }
}
function zip_longest_match(cur_match) {
  let chain_length = zip_max_chain_length;
  let scanp = zip_strstart;
  let matchp;
  let len;
  let best_len = zip_prev_length;
  const limit = zip_strstart > zip_MAX_DIST ? zip_strstart - zip_MAX_DIST : zip_NIL;
  const strendp = zip_strstart + zip_MAX_MATCH;
  let scan_end1 = zip_window[scanp + best_len - 1];
  let scan_end = zip_window[scanp + best_len];
  if (zip_prev_length >= zip_good_match)
    chain_length >>= 2;
  do {
    matchp = cur_match;
    if (zip_window[matchp + best_len] != scan_end || zip_window[matchp + best_len - 1] != scan_end1 || zip_window[matchp] != zip_window[scanp] || zip_window[++matchp] != zip_window[scanp + 1])
      continue;
    scanp += 2;
    matchp++;
    do {
    } while (zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && scanp < strendp);
    len = zip_MAX_MATCH - (strendp - scanp);
    scanp = strendp - zip_MAX_MATCH;
    if (len > best_len) {
      zip_match_start = cur_match;
      best_len = len;
      if (zip_FULL_SEARCH) {
        if (len >= zip_MAX_MATCH)
          break;
      } else if (len >= zip_nice_match) {
        break;
      }
      scan_end1 = zip_window[scanp + best_len - 1];
      scan_end = zip_window[scanp + best_len];
    }
  } while ((cur_match = zip_prev[cur_match & zip_WMASK]) > limit && --chain_length != 0);
  return best_len;
}
function zip_fill_window() {
  let n, m;
  let more = zip_window_size - zip_lookahead - zip_strstart;
  if (more == -1) {
    more--;
  } else if (zip_strstart >= zip_WSIZE + zip_MAX_DIST) {
    for (n = 0; n < zip_WSIZE; n++)
      zip_window[n] = zip_window[n + zip_WSIZE];
    zip_match_start -= zip_WSIZE;
    zip_strstart -= zip_WSIZE;
    zip_block_start -= zip_WSIZE;
    for (n = 0; n < zip_HASH_SIZE; n++) {
      m = zip_head1(n);
      zip_head2(n, m >= zip_WSIZE ? m - zip_WSIZE : zip_NIL);
    }
    for (n = 0; n < zip_WSIZE; n++) {
      m = zip_prev[n];
      zip_prev[n] = m >= zip_WSIZE ? m - zip_WSIZE : zip_NIL;
    }
    more += zip_WSIZE;
  }
  if (!zip_eofile) {
    n = zip_read_buff(zip_window, zip_strstart + zip_lookahead, more);
    if (n <= 0)
      zip_eofile = true;
    else
      zip_lookahead += n;
  }
}
function zip_deflate_fast() {
  while (zip_lookahead != 0 && zip_qhead == null) {
    var flush;
    zip_INSERT_STRING();
    if (zip_hash_head != zip_NIL && zip_strstart - zip_hash_head <= zip_MAX_DIST) {
      zip_match_length = zip_longest_match(zip_hash_head);
      if (zip_match_length > zip_lookahead)
        zip_match_length = zip_lookahead;
    }
    if (zip_match_length >= zip_MIN_MATCH) {
      flush = zip_ct_tally(
        zip_strstart - zip_match_start,
        zip_match_length - zip_MIN_MATCH
      );
      zip_lookahead -= zip_match_length;
      if (zip_match_length <= zip_max_lazy_match) {
        zip_match_length--;
        do {
          zip_strstart++;
          zip_INSERT_STRING();
        } while (--zip_match_length != 0);
        zip_strstart++;
      } else {
        zip_strstart += zip_match_length;
        zip_match_length = 0;
        zip_ins_h = zip_window[zip_strstart] & 255;
        zip_ins_h = (zip_ins_h << zip_H_SHIFT ^ zip_window[zip_strstart + 1] & 255) & zip_HASH_MASK;
      }
    } else {
      flush = zip_ct_tally(0, zip_window[zip_strstart] & 255);
      zip_lookahead--;
      zip_strstart++;
    }
    if (flush) {
      zip_flush_block(0);
      zip_block_start = zip_strstart;
    }
    while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile)
      zip_fill_window();
  }
}
function zip_deflate_better() {
  while (zip_lookahead != 0 && zip_qhead == null) {
    zip_INSERT_STRING();
    zip_prev_length = zip_match_length;
    zip_prev_match = zip_match_start;
    zip_match_length = zip_MIN_MATCH - 1;
    if (zip_hash_head != zip_NIL && zip_prev_length < zip_max_lazy_match && zip_strstart - zip_hash_head <= zip_MAX_DIST) {
      zip_match_length = zip_longest_match(zip_hash_head);
      if (zip_match_length > zip_lookahead)
        zip_match_length = zip_lookahead;
      if (zip_match_length == zip_MIN_MATCH && zip_strstart - zip_match_start > zip_TOO_FAR) {
        zip_match_length--;
      }
    }
    if (zip_prev_length >= zip_MIN_MATCH && zip_match_length <= zip_prev_length) {
      var flush;
      flush = zip_ct_tally(
        zip_strstart - 1 - zip_prev_match,
        zip_prev_length - zip_MIN_MATCH
      );
      zip_lookahead -= zip_prev_length - 1;
      zip_prev_length -= 2;
      do {
        zip_strstart++;
        zip_INSERT_STRING();
      } while (--zip_prev_length != 0);
      zip_match_available = 0;
      zip_match_length = zip_MIN_MATCH - 1;
      zip_strstart++;
      if (flush) {
        zip_flush_block(0);
        zip_block_start = zip_strstart;
      }
    } else if (zip_match_available != 0) {
      if (zip_ct_tally(0, zip_window[zip_strstart - 1] & 255)) {
        zip_flush_block(0);
        zip_block_start = zip_strstart;
      }
      zip_strstart++;
      zip_lookahead--;
    } else {
      zip_match_available = 1;
      zip_strstart++;
      zip_lookahead--;
    }
    while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile)
      zip_fill_window();
  }
}
function zip_init_deflate() {
  if (zip_eofile)
    return;
  zip_bi_buf = 0;
  zip_bi_valid = 0;
  zip_ct_init();
  zip_lm_init();
  zip_qhead = null;
  zip_outcnt = 0;
  zip_outoff = 0;
  if (zip_compr_level <= 3) {
    zip_prev_length = zip_MIN_MATCH - 1;
    zip_match_length = 0;
  } else {
    zip_match_length = zip_MIN_MATCH - 1;
    zip_match_available = 0;
  }
  zip_complete = false;
}
function zip_deflate_internal(buff, off, buff_size) {
  let n;
  if (!zip_initflag) {
    zip_init_deflate();
    zip_initflag = true;
    if (zip_lookahead == 0) {
      zip_complete = true;
      return 0;
    }
  }
  if ((n = zip_qcopy(buff, off, buff_size)) == buff_size)
    return buff_size;
  if (zip_complete)
    return n;
  if (zip_compr_level <= 3) {
    zip_deflate_fast();
  } else {
    zip_deflate_better();
  }
  if (zip_lookahead == 0) {
    if (zip_match_available != 0)
      zip_ct_tally(0, zip_window[zip_strstart - 1] & 255);
    zip_flush_block(1);
    zip_complete = true;
  }
  return n + zip_qcopy(buff, n + off, buff_size - n);
}
function zip_qcopy(buff, off, buff_size) {
  let n, i, j;
  n = 0;
  while (zip_qhead != null && n < buff_size) {
    i = buff_size - n;
    if (i > zip_qhead.len)
      i = zip_qhead.len;
    for (j = 0; j < i; j++)
      buff[off + n + j] = zip_qhead.ptr[zip_qhead.off + j];
    zip_qhead.off += i;
    zip_qhead.len -= i;
    n += i;
    if (zip_qhead.len == 0) {
      var p;
      p = zip_qhead;
      zip_qhead = zip_qhead.next;
      zip_reuse_queue(p);
    }
  }
  if (n == buff_size)
    return n;
  if (zip_outoff < zip_outcnt) {
    i = buff_size - n;
    if (i > zip_outcnt - zip_outoff)
      i = zip_outcnt - zip_outoff;
    for (j = 0; j < i; j++)
      buff[off + n + j] = zip_outbuf[zip_outoff + j];
    zip_outoff += i;
    n += i;
    if (zip_outcnt == zip_outoff)
      zip_outcnt = zip_outoff = 0;
  }
  return n;
}
function zip_ct_init() {
  let n;
  let bits;
  let length;
  let code;
  let dist;
  if (zip_static_dtree[0].dl != 0)
    return;
  zip_l_desc.dyn_tree = zip_dyn_ltree;
  zip_l_desc.static_tree = zip_static_ltree;
  zip_l_desc.extra_bits = zip_extra_lbits;
  zip_l_desc.extra_base = zip_LITERALS + 1;
  zip_l_desc.elems = zip_L_CODES;
  zip_l_desc.max_length = zip_MAX_BITS;
  zip_l_desc.max_code = 0;
  zip_d_desc.dyn_tree = zip_dyn_dtree;
  zip_d_desc.static_tree = zip_static_dtree;
  zip_d_desc.extra_bits = zip_extra_dbits;
  zip_d_desc.extra_base = 0;
  zip_d_desc.elems = zip_D_CODES;
  zip_d_desc.max_length = zip_MAX_BITS;
  zip_d_desc.max_code = 0;
  zip_bl_desc.dyn_tree = zip_bl_tree;
  zip_bl_desc.static_tree = null;
  zip_bl_desc.extra_bits = zip_extra_blbits;
  zip_bl_desc.extra_base = 0;
  zip_bl_desc.elems = zip_BL_CODES;
  zip_bl_desc.max_length = zip_MAX_BL_BITS;
  zip_bl_desc.max_code = 0;
  length = 0;
  for (code = 0; code < zip_LENGTH_CODES - 1; code++) {
    zip_base_length[code] = length;
    for (n = 0; n < 1 << zip_extra_lbits[code]; n++)
      zip_length_code[length++] = code;
  }
  zip_length_code[length - 1] = code;
  dist = 0;
  for (code = 0; code < 16; code++) {
    zip_base_dist[code] = dist;
    for (n = 0; n < 1 << zip_extra_dbits[code]; n++)
      zip_dist_code[dist++] = code;
  }
  dist >>= 7;
  for (; code < zip_D_CODES; code++) {
    zip_base_dist[code] = dist << 7;
    for (n = 0; n < 1 << zip_extra_dbits[code] - 7; n++)
      zip_dist_code[256 + dist++] = code;
  }
  for (bits = 0; bits <= zip_MAX_BITS; bits++)
    zip_bl_count[bits] = 0;
  n = 0;
  while (n <= 143) {
    zip_static_ltree[n++].dl = 8;
    zip_bl_count[8]++;
  }
  while (n <= 255) {
    zip_static_ltree[n++].dl = 9;
    zip_bl_count[9]++;
  }
  while (n <= 279) {
    zip_static_ltree[n++].dl = 7;
    zip_bl_count[7]++;
  }
  while (n <= 287) {
    zip_static_ltree[n++].dl = 8;
    zip_bl_count[8]++;
  }
  zip_gen_codes(zip_static_ltree, zip_L_CODES + 1);
  for (n = 0; n < zip_D_CODES; n++) {
    zip_static_dtree[n].dl = 5;
    zip_static_dtree[n].fc = zip_bi_reverse(n, 5);
  }
  zip_init_block();
}
function zip_init_block() {
  let n;
  for (n = 0; n < zip_L_CODES; n++) zip_dyn_ltree[n].fc = 0;
  for (n = 0; n < zip_D_CODES; n++) zip_dyn_dtree[n].fc = 0;
  for (n = 0; n < zip_BL_CODES; n++) zip_bl_tree[n].fc = 0;
  zip_dyn_ltree[zip_END_BLOCK].fc = 1;
  zip_opt_len = zip_static_len = 0;
  zip_last_lit = zip_last_dist = zip_last_flags = 0;
  zip_flags = 0;
  zip_flag_bit = 1;
}
function zip_pqdownheap(tree, k) {
  const v = zip_heap[k];
  let j = k << 1;
  while (j <= zip_heap_len) {
    if (j < zip_heap_len && zip_SMALLER(tree, zip_heap[j + 1], zip_heap[j])) {
      j++;
    }
    if (zip_SMALLER(tree, v, zip_heap[j]))
      break;
    zip_heap[k] = zip_heap[j];
    k = j;
    j <<= 1;
  }
  zip_heap[k] = v;
}
function zip_gen_bitlen(desc) {
  const tree = desc.dyn_tree;
  const extra = desc.extra_bits;
  const base = desc.extra_base;
  const max_code = desc.max_code;
  const max_length = desc.max_length;
  const stree = desc.static_tree;
  let h;
  let n, m;
  let bits;
  let xbits;
  let f;
  let overflow = 0;
  for (bits = 0; bits <= zip_MAX_BITS; bits++)
    zip_bl_count[bits] = 0;
  tree[zip_heap[zip_heap_max]].dl = 0;
  for (h = zip_heap_max + 1; h < zip_HEAP_SIZE; h++) {
    n = zip_heap[h];
    bits = tree[tree[n].dl].dl + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n].dl = bits;
    if (n > max_code)
      continue;
    zip_bl_count[bits]++;
    xbits = 0;
    if (n >= base)
      xbits = extra[n - base];
    f = tree[n].fc;
    zip_opt_len += f * (bits + xbits);
    if (stree != null)
      zip_static_len += f * (stree[n].dl + xbits);
  }
  if (overflow == 0)
    return;
  do {
    bits = max_length - 1;
    while (zip_bl_count[bits] == 0) {
      bits--;
    }
    zip_bl_count[bits]--;
    zip_bl_count[bits + 1] += 2;
    zip_bl_count[max_length]--;
    overflow -= 2;
  } while (overflow > 0);
  for (bits = max_length; bits != 0; bits--) {
    n = zip_bl_count[bits];
    while (n != 0) {
      m = zip_heap[--h];
      if (m > max_code)
        continue;
      if (tree[m].dl != bits) {
        zip_opt_len += (bits - tree[m].dl) * tree[m].fc;
        tree[m].fc = bits;
      }
      n--;
    }
  }
}
function zip_gen_codes(tree, max_code) {
  const next_code = Array.from({ length: zip_MAX_BITS + 1 });
  let code = 0;
  let bits;
  let n;
  for (bits = 1; bits <= zip_MAX_BITS; bits++) {
    code = code + zip_bl_count[bits - 1] << 1;
    next_code[bits] = code;
  }
  for (n = 0; n <= max_code; n++) {
    const len = tree[n].dl;
    if (len == 0)
      continue;
    tree[n].fc = zip_bi_reverse(next_code[len]++, len);
  }
}
function zip_build_tree(desc) {
  const tree = desc.dyn_tree;
  const stree = desc.static_tree;
  const elems = desc.elems;
  let n, m;
  let max_code = -1;
  let node = elems;
  zip_heap_len = 0;
  zip_heap_max = zip_HEAP_SIZE;
  for (n = 0; n < elems; n++) {
    if (tree[n].fc != 0) {
      zip_heap[++zip_heap_len] = max_code = n;
      zip_depth[n] = 0;
    } else {
      tree[n].dl = 0;
    }
  }
  while (zip_heap_len < 2) {
    const xnew = zip_heap[++zip_heap_len] = max_code < 2 ? ++max_code : 0;
    tree[xnew].fc = 1;
    zip_depth[xnew] = 0;
    zip_opt_len--;
    if (stree != null)
      zip_static_len -= stree[xnew].dl;
  }
  desc.max_code = max_code;
  for (n = zip_heap_len >> 1; n >= 1; n--)
    zip_pqdownheap(tree, n);
  do {
    n = zip_heap[zip_SMALLEST];
    zip_heap[zip_SMALLEST] = zip_heap[zip_heap_len--];
    zip_pqdownheap(tree, zip_SMALLEST);
    m = zip_heap[zip_SMALLEST];
    zip_heap[--zip_heap_max] = n;
    zip_heap[--zip_heap_max] = m;
    tree[node].fc = tree[n].fc + tree[m].fc;
    if (zip_depth[n] > zip_depth[m] + 1)
      zip_depth[node] = zip_depth[n];
    else
      zip_depth[node] = zip_depth[m] + 1;
    tree[n].dl = tree[m].dl = node;
    zip_heap[zip_SMALLEST] = node++;
    zip_pqdownheap(tree, zip_SMALLEST);
  } while (zip_heap_len >= 2);
  zip_heap[--zip_heap_max] = zip_heap[zip_SMALLEST];
  zip_gen_bitlen(desc);
  zip_gen_codes(tree, max_code);
}
function zip_scan_tree(tree, max_code) {
  let n;
  let prevlen = -1;
  let curlen;
  let nextlen = tree[0].dl;
  let count = 0;
  let max_count = 7;
  let min_count = 4;
  if (nextlen == 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[max_code + 1].dl = 65535;
  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[n + 1].dl;
    if (++count < max_count && curlen == nextlen) {
      continue;
    } else if (count < min_count) {
      zip_bl_tree[curlen].fc += count;
    } else if (curlen != 0) {
      if (curlen != prevlen) {
        zip_bl_tree[curlen].fc++;
      }
      zip_bl_tree[zip_REP_3_6].fc++;
    } else if (count <= 10) {
      zip_bl_tree[zip_REPZ_3_10].fc++;
    } else {
      zip_bl_tree[zip_REPZ_11_138].fc++;
    }
    count = 0;
    prevlen = curlen;
    if (nextlen == 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen == nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}
function zip_send_tree(tree, max_code) {
  let n;
  let prevlen = -1;
  let curlen;
  let nextlen = tree[0].dl;
  let count = 0;
  let max_count = 7;
  let min_count = 4;
  if (nextlen == 0) {
    max_count = 138;
    min_count = 3;
  }
  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[n + 1].dl;
    if (++count < max_count && curlen == nextlen) {
      continue;
    } else if (count < min_count) {
      do
        zip_SEND_CODE(curlen, zip_bl_tree);
      while (--count != 0);
    } else if (curlen != 0) {
      if (curlen != prevlen) {
        zip_SEND_CODE(curlen, zip_bl_tree);
        count--;
      }
      zip_SEND_CODE(zip_REP_3_6, zip_bl_tree);
      zip_send_bits(count - 3, 2);
    } else if (count <= 10) {
      zip_SEND_CODE(zip_REPZ_3_10, zip_bl_tree);
      zip_send_bits(count - 3, 3);
    } else {
      zip_SEND_CODE(zip_REPZ_11_138, zip_bl_tree);
      zip_send_bits(count - 11, 7);
    }
    count = 0;
    prevlen = curlen;
    if (nextlen == 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen == nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}
function zip_build_bl_tree() {
  let max_blindex;
  zip_scan_tree(zip_dyn_ltree, zip_l_desc.max_code);
  zip_scan_tree(zip_dyn_dtree, zip_d_desc.max_code);
  zip_build_tree(zip_bl_desc);
  for (max_blindex = zip_BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (zip_bl_tree[zip_bl_order[max_blindex]].dl != 0)
      break;
  }
  zip_opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  return max_blindex;
}
function zip_send_all_trees(lcodes, dcodes, blcodes) {
  let rank;
  zip_send_bits(lcodes - 257, 5);
  zip_send_bits(dcodes - 1, 5);
  zip_send_bits(blcodes - 4, 4);
  for (rank = 0; rank < blcodes; rank++) {
    zip_send_bits(zip_bl_tree[zip_bl_order[rank]].dl, 3);
  }
  zip_send_tree(zip_dyn_ltree, lcodes - 1);
  zip_send_tree(zip_dyn_dtree, dcodes - 1);
}
function zip_flush_block(eof) {
  let opt_lenb, static_lenb;
  let max_blindex;
  let stored_len;
  stored_len = zip_strstart - zip_block_start;
  zip_flag_buf[zip_last_flags] = zip_flags;
  zip_build_tree(zip_l_desc);
  zip_build_tree(zip_d_desc);
  max_blindex = zip_build_bl_tree();
  opt_lenb = zip_opt_len + 3 + 7 >> 3;
  static_lenb = zip_static_len + 3 + 7 >> 3;
  if (static_lenb <= opt_lenb)
    opt_lenb = static_lenb;
  if (stored_len + 4 <= opt_lenb && zip_block_start >= 0) {
    let i;
    zip_send_bits((zip_STORED_BLOCK << 1) + eof, 3);
    zip_bi_windup();
    zip_put_short(stored_len);
    zip_put_short(~stored_len);
    for (i = 0; i < stored_len; i++)
      zip_put_byte(zip_window[zip_block_start + i]);
  } else if (static_lenb == opt_lenb) {
    zip_send_bits((zip_STATIC_TREES << 1) + eof, 3);
    zip_compress_block(zip_static_ltree, zip_static_dtree);
  } else {
    zip_send_bits((zip_DYN_TREES << 1) + eof, 3);
    zip_send_all_trees(
      zip_l_desc.max_code + 1,
      zip_d_desc.max_code + 1,
      max_blindex + 1
    );
    zip_compress_block(zip_dyn_ltree, zip_dyn_dtree);
  }
  zip_init_block();
  if (eof != 0)
    zip_bi_windup();
}
function zip_ct_tally(dist, lc) {
  zip_l_buf[zip_last_lit++] = lc;
  if (dist == 0) {
    zip_dyn_ltree[lc].fc++;
  } else {
    dist--;
    zip_dyn_ltree[zip_length_code[lc] + zip_LITERALS + 1].fc++;
    zip_dyn_dtree[zip_D_CODE(dist)].fc++;
    zip_d_buf[zip_last_dist++] = dist;
    zip_flags |= zip_flag_bit;
  }
  zip_flag_bit <<= 1;
  if ((zip_last_lit & 7) == 0) {
    zip_flag_buf[zip_last_flags++] = zip_flags;
    zip_flags = 0;
    zip_flag_bit = 1;
  }
  if (zip_compr_level > 2 && (zip_last_lit & 4095) == 0) {
    let out_length = zip_last_lit * 8;
    const in_length = zip_strstart - zip_block_start;
    let dcode;
    for (dcode = 0; dcode < zip_D_CODES; dcode++)
      out_length += zip_dyn_dtree[dcode].fc * (5 + zip_extra_dbits[dcode]);
    out_length >>= 3;
    if (zip_last_dist < Number.parseInt(zip_last_lit / 2) && out_length < Number.parseInt(in_length / 2))
      return true;
  }
  return zip_last_lit == zip_LIT_BUFSIZE - 1 || zip_last_dist == zip_DIST_BUFSIZE;
}
function zip_compress_block(ltree, dtree) {
  let dist;
  let lc;
  let lx = 0;
  let dx = 0;
  let fx = 0;
  let flag = 0;
  let code;
  let extra;
  if (zip_last_lit != 0) {
    do {
      if ((lx & 7) == 0)
        flag = zip_flag_buf[fx++];
      lc = zip_l_buf[lx++] & 255;
      if ((flag & 1) == 0) {
        zip_SEND_CODE(lc, ltree);
      } else {
        code = zip_length_code[lc];
        zip_SEND_CODE(code + zip_LITERALS + 1, ltree);
        extra = zip_extra_lbits[code];
        if (extra != 0) {
          lc -= zip_base_length[code];
          zip_send_bits(lc, extra);
        }
        dist = zip_d_buf[dx++];
        code = zip_D_CODE(dist);
        zip_SEND_CODE(code, dtree);
        extra = zip_extra_dbits[code];
        if (extra != 0) {
          dist -= zip_base_dist[code];
          zip_send_bits(dist, extra);
        }
      }
      flag >>= 1;
    } while (lx < zip_last_lit);
  }
  zip_SEND_CODE(zip_END_BLOCK, ltree);
}
var zip_Buf_size = 16;
function zip_send_bits(value, length) {
  if (zip_bi_valid > zip_Buf_size - length) {
    zip_bi_buf |= value << zip_bi_valid;
    zip_put_short(zip_bi_buf);
    zip_bi_buf = value >> zip_Buf_size - zip_bi_valid;
    zip_bi_valid += length - zip_Buf_size;
  } else {
    zip_bi_buf |= value << zip_bi_valid;
    zip_bi_valid += length;
  }
}
function zip_bi_reverse(code, len) {
  let res = 0;
  do {
    res |= code & 1;
    code >>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >> 1;
}
function zip_bi_windup() {
  if (zip_bi_valid > 8)
    zip_put_short(zip_bi_buf);
  else if (zip_bi_valid > 0)
    zip_put_byte(zip_bi_buf);
  zip_bi_buf = 0;
  zip_bi_valid = 0;
}
function zip_qoutbuf() {
  if (zip_outcnt != 0) {
    let q, i;
    q = zip_new_queue();
    if (zip_qhead == null)
      zip_qhead = zip_qtail = q;
    else
      zip_qtail = zip_qtail.next = q;
    q.len = zip_outcnt - zip_outoff;
    for (i = 0; i < q.len; i++)
      q.ptr[i] = zip_outbuf[zip_outoff + i];
    zip_outcnt = zip_outoff = 0;
  }
}
function zip_deflate(str, level) {
  let out, buff;
  let i, j;
  zip_deflate_data = str;
  zip_deflate_pos = 0;
  if (typeof level === "undefined")
    level = zip_DEFAULT_LEVEL;
  zip_deflate_start(level);
  buff = Array.from({ length: 1024 });
  out = "";
  while ((i = zip_deflate_internal(buff, 0, buff.length)) > 0) {
    for (j = 0; j < i; j++)
      out += String.fromCharCode(buff[j]);
  }
  zip_deflate_data = null;
  return out;
}
function encode64(data) {
  let r = "";
  for (let i = 0; i < data.length; i += 3) {
    if (i + 2 == data.length) {
      r += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), 0);
    } else if (i + 1 == data.length) {
      r += append3bytes(data.charCodeAt(i), 0, 0);
    } else {
      r += append3bytes(
        data.charCodeAt(i),
        data.charCodeAt(i + 1),
        data.charCodeAt(i + 2)
      );
    }
  }
  return r;
}
function append3bytes(b1, b2, b3) {
  const c1 = b1 >> 2;
  const c2 = (b1 & 3) << 4 | b2 >> 4;
  const c3 = (b2 & 15) << 2 | b3 >> 6;
  const c4 = b3 & 63;
  let r = "";
  r += encode6bit(c1 & 63);
  r += encode6bit(c2 & 63);
  r += encode6bit(c3 & 63);
  r += encode6bit(c4 & 63);
  return r;
}
function encode6bit(b) {
  if (b < 10)
    return String.fromCharCode(48 + b);
  b -= 10;
  if (b < 26)
    return String.fromCharCode(65 + b);
  b -= 26;
  if (b < 26)
    return String.fromCharCode(97 + b);
  b -= 26;
  if (b == 0)
    return "-";
  if (b == 1)
    return "_";
  return "?";
}

// .vitepress/theme/lib/plantuml-parser.ts
var functions = {
  options: {
    showController: false
  },
  initialize(options) {
    if (options) this.options = Object.assign(this.options, options);
  },
  getOptions(langName) {
    return this.options?.[langName] ? Object.assign({}, this.options, this.options?.[langName]) : this.options;
  },
  getMarkup(code, diagramName, langName) {
    const opt = this.getOptions(langName);
    const srcVal = this.generateSource(code, diagramName, opt);
    const img = `<div data-${opt.imageFormat || "svg"}="${"data-diagram-plantuml" /* PLANTUML */}" class="${"diagram-m" /* IMG */}"><img src="${srcVal}" alt="uml diagram"></div>`;
    return img;
  },
  generateSource(umlCode, diagramName, pluginOptions) {
    let umlContent = umlCode;
    debugger;
    if (!umlCode.startsWith("@start")) {
      umlContent = `@start${diagramName}
${umlCode}
@end${diagramName}`;
    }
    const imageFormat = pluginOptions?.imageFormat || "svg";
    const server = pluginOptions?.server || "https://www.plantuml.com/plantuml";
    const zippedCode = deflate_default.zip_deflate(umlContent, 9);
    const base64Encoded = deflate_default.encode64(zippedCode);
    return `${server}/${imageFormat}/${base64Encoded}`;
  }
};
var plantuml_parser_default = {
  functions
};

// .vitepress/theme/lib/plantuml.ts
var MarkdownItPlantUml = (md, options = {}) => {
  plantuml_parser_default.functions.initialize(options);
  const defaultRenderer = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options2, env, slf) => {
    const token = tokens[idx];
    const code = token.content.trim();
    const info = token.info ? md.utils.unescapeAll(token.info).trim() : "";
    let langName = "";
    if (info)
      langName = info.split(/\s+/g)[0];
    switch (langName) {
      case "plantuml":
      case "dot":
        return plantuml_parser_default.functions.getMarkup(code, "uml", langName);
      case "ditaa":
        return plantuml_parser_default.functions.getMarkup(code, "ditaa", langName);
    }
    return defaultRenderer(tokens, idx, options2, env, slf);
  };
};
var plantuml_default = MarkdownItPlantUml;

// .vitepress/config.js
import { withMermaid } from "file:///home/zerlei/git/me/node_modules/vitepress-plugin-mermaid/dist/vitepress-plugin-mermaid.es.mjs";
import mdItCustomAttrs from "file:///home/zerlei/git/me/node_modules/markdown-it-custom-attrs/index.js";
var config_default = withMermaid({
  head: [
    ["link", { rel: "icon", href: "/zerlei.svg" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"
      }
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"
      }
    ]
  ],
  title: "Zerlei\u7684\u5B66\u4E60\u7B14\u8BB0",
  lang: "zh-cn",
  description: "\u{1F308}A programmer,there are his blogs\u{1F308}",
  themeConfig: {
    // logo:'../asserts/zerlei.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "home", link: "/" },
      { text: "blogs", link: "/blog" },
      { text: "navigation", link: "/navigation" },
      { text: "projects", link: "/project" }
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
    socialLinks: [{ icon: "github", link: "https://github.com/ZhaoYouYa/me/issues" }],
    outline: "deep"
  },
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        path: "/docs/",
        collapsed: true,
        sideBarResolved: (data) => {
          let d = filterDocsSideBar(data);
          return d;
        },
        sideBarItemsResolved(data) {
          data = data.filter((item) => {
            for (let word of [".png", ".jpg", ".jpeg", ".gif", ".svg"]) {
              if (item.text.includes(word)) {
                return false;
              }
            }
            if (item.link) {
              item.link = `/docs${item.link}`;
            }
            return true;
          });
          return data;
        }
        // You can also set options to adjust sidebar data
        // see option document below
      })
      // htmlImport()
    ],
    server: {
      host: "0.0.0.0",
      port: 6769
    }
  },
  markdown: {
    config: (md) => {
      md.use(markdownFootnote);
      md.use(plantuml_default);
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery"
      });
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcuanMiLCAiLnZpdGVwcmVzcy91dGlscy5qcyIsICIudml0ZXByZXNzL2ZpbGVzVGltZS5qc29uIiwgIi52aXRlcHJlc3MvdGhlbWUvbGliL2RlZmxhdGUudHMiLCAiLnZpdGVwcmVzcy90aGVtZS9saWIvcGxhbnR1bWwtcGFyc2VyLnRzIiwgIi52aXRlcHJlc3MvdGhlbWUvbGliL3BsYW50dW1sLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvemVybGVpL2dpdC9tZS8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS96ZXJsZWkvZ2l0L21lLy52aXRlcHJlc3MvY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3plcmxlaS9naXQvbWUvLnZpdGVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgQXV0b1NpZGViYXIgZnJvbSAndml0ZS1wbHVnaW4tdml0ZXByZXNzLWF1dG8tc2lkZWJhcic7XG4vLyBpbXBvcnQgaHRtbEltcG9ydCBmcm9tICcuL3BsdWdpbi92aXRlaHRtbCc7XG5pbXBvcnQge2ZpbHRlckRvY3NTaWRlQmFyLCBnZXRQb3N0c30gZnJvbSAnLi91dGlscyc7XG4vLyBpbXBvcnQgTWFya2Rvd25JdERpYWdyYW1zIGZyb20gJ21hcmtkb3duLWl0LWRpYWdyYW0nXG4vLyBpbXBvcnQgbWFya2Rvd25JdFRleHR1YWxVbWwgZnJvbSAnbWFya2Rvd24taXQtdGV4dHVhbC11bWwnO1xuaW1wb3J0IG1hcmtkb3duRm9vdG5vdGUgZnJvbSAnbWFya2Rvd24taXQtZm9vdG5vdGUnO1xuaW1wb3J0IE1hcmtkb3duSXRQbGFudFVtbCBmcm9tICcuL3RoZW1lL2xpYi9wbGFudHVtbCc7XG5pbXBvcnQge3dpdGhNZXJtYWlkfSBmcm9tICd2aXRlcHJlc3MtcGx1Z2luLW1lcm1haWQnO1xuaW1wb3J0IG1kSXRDdXN0b21BdHRycyBmcm9tICdtYXJrZG93bi1pdC1jdXN0b20tYXR0cnMnO1xuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgd2l0aE1lcm1haWQoe1xuICBoZWFkOiBbXG4gICAgWydsaW5rJywge3JlbDogJ2ljb24nLCBocmVmOiAnL3plcmxlaS5zdmcnfV0sXG4gICAgW1xuICAgICAgJ2xpbmsnLFxuICAgICAge1xuICAgICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQGZhbmN5YXBwcy91aS9kaXN0L2ZhbmN5Ym94LmNzcydcbiAgICAgIH1cbiAgICBdLFxuICAgIFtcbiAgICAgICdzY3JpcHQnLFxuICAgICAge1xuICAgICAgICBzcmM6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0BmYW5jeWFwcHMvdWlANC4wL2Rpc3QvZmFuY3lib3gudW1kLmpzJ1xuICAgICAgfVxuICAgIF1cbiAgXSxcbiAgdGl0bGU6ICdaZXJsZWlcdTc2ODRcdTVCNjZcdTRFNjBcdTdCMTRcdThCQjAnLFxuICBsYW5nOiAnemgtY24nLFxuICBkZXNjcmlwdGlvbjogJ1x1RDgzQ1x1REYwOEEgcHJvZ3JhbW1lcix0aGVyZSBhcmUgaGlzIGJsb2dzXHVEODNDXHVERjA4JyxcbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBsb2dvOicuLi9hc3NlcnRzL3plcmxlaS5zdmcnLFxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcbiAgICBuYXY6IFtcbiAgICAgIHt0ZXh0OiAnaG9tZScsIGxpbms6ICcvJ30sXG4gICAgICB7dGV4dDogJ2Jsb2dzJywgbGluazogJy9ibG9nJ30sXG4gICAgICB7dGV4dDogJ25hdmlnYXRpb24nLCBsaW5rOiAnL25hdmlnYXRpb24nfSxcbiAgICAgIHt0ZXh0OiAncHJvamVjdHMnLCBsaW5rOiAnL3Byb2plY3QnfVxuICAgIF0sXG4gICAgLy8gc2VhcmNoOiB7XG4gICAgLy8gICBwcm92aWRlcjogXCJsb2NhbFwiLFxuICAgIC8vIH0sXG4gICAgcG9zdHM6IGF3YWl0IGdldFBvc3RzKCksXG4gICAgc2lkZWJhcjogW10sXG4gICAgLy8gZm9vdGVyOiB7XG4gICAgLy8gICBjb3B5cmlnaHQ6XG4gICAgLy8gICAgIFwiQ29weXJpZ2h0IFx1MDBBOSAyMDE5LXByZXNlbnQgRXZhbiBZb3UgIFx1RDgzRVx1REVGMiBcdTdCNDlcdTYyMTEgXHU2NzA5XHU1N0RGXHU1NDBEXHVGRjBDXHU2MjExXHU1QzMxXHU2MzYyXHU2Mzg5XHU2NzA5XHU4QkVEXHU3Q0ZCXCIsXG4gICAgLy8gfSxcblxuICAgIHNvY2lhbExpbmtzOiBbe2ljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL1poYW9Zb3VZYS9tZS9pc3N1ZXMnfV0sXG4gICAgb3V0bGluZTogJ2RlZXAnXG4gIH0sXG4gIHZpdGU6IHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyBhZGQgcGx1Z2luXG4gICAgICBBdXRvU2lkZWJhcih7XG4gICAgICAgIHBhdGg6ICcvZG9jcy8nLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIHNpZGVCYXJSZXNvbHZlZDogKGRhdGEpID0+IHtcbiAgICAgICAgICBsZXQgZCA9IGZpbHRlckRvY3NTaWRlQmFyKGRhdGEpO1xuICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9LFxuICAgICAgICBzaWRlQmFySXRlbXNSZXNvbHZlZChkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAvL1x1NzZFRVx1NUY1NVx1NUMwNlx1OEZDN1x1NkVFNFx1OEZEOVx1NEU5Qlx1NjU4N1x1NEVGNlxuICAgICAgICAgICAgZm9yIChsZXQgd29yZCBvZiBbJy5wbmcnLCAnLmpwZycsICcuanBlZycsICcuZ2lmJywgJy5zdmcnXSkge1xuICAgICAgICAgICAgICBpZiAoaXRlbS50ZXh0LmluY2x1ZGVzKHdvcmQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5saW5rKSB7XG4gICAgICAgICAgICAgIGl0ZW0ubGluayA9IGAvZG9jcyR7aXRlbS5saW5rfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvLyBZb3UgY2FuIGFsc28gc2V0IG9wdGlvbnMgdG8gYWRqdXN0IHNpZGViYXIgZGF0YVxuICAgICAgICAvLyBzZWUgb3B0aW9uIGRvY3VtZW50IGJlbG93XG4gICAgICB9KVxuICAgICAgLy8gaHRtbEltcG9ydCgpXG4gICAgXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICAgIHBvcnQ6IDY3NjlcbiAgICB9XG4gIH0sXG4gIG1hcmtkb3duOiB7XG4gICAgY29uZmlnOiAobWQpID0+IHtcbiAgICAgIC8vIG1kLnVzZShtYXJrZG93bkl0VGV4dHVhbFVtbCk7XG4gICAgICBtZC51c2UobWFya2Rvd25Gb290bm90ZSk7XG4gICAgICBtZC51c2UoTWFya2Rvd25JdFBsYW50VW1sKTtcbiAgICAgIG1kLnVzZShtZEl0Q3VzdG9tQXR0cnMsICdpbWFnZScsIHtcbiAgICAgICAgJ2RhdGEtZmFuY3lib3gnOiAnZ2FsbGVyeSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG4vLyBleHBvcnQgZGVmYXVsdCh7XG4vL1xuLy8gICAvLyBtZXJtYWlkOiB7XG4vLyAgIC8vICAgLy8gcmVmZXIgaHR0cHM6Ly9tZXJtYWlkLmpzLm9yZy9jb25maWcvc2V0dXAvbW9kdWxlcy9tZXJtYWlkQVBJLmh0bWwjbWVybWFpZGFwaS1jb25maWd1cmF0aW9uLWRlZmF1bHRzIGZvciBvcHRpb25zXG4vLyAgIC8vIH0sXG4vLyB9KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvemVybGVpL2dpdC9tZS8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS96ZXJsZWkvZ2l0L21lLy52aXRlcHJlc3MvdXRpbHMuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvemVybGVpL2dpdC9tZS8udml0ZXByZXNzL3V0aWxzLmpzXCI7aW1wb3J0IHtnbG9iYnl9IGZyb20gJ2dsb2JieSc7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgZmlsZXNUaW1lIGZyb20gJy4vZmlsZXNUaW1lLmpzb24nO1xuXG4vKipcbiAqIFx1ODNCN1x1NTNENnNpZGViYXIgXHU3NkVFXHU1RjU1LFx1NUY1M1x1NzZFRVx1NUY1NVx1NEUwQlx1NzY4NFx1NjU4N1x1NEVGNlx1NTMwNVx1NTQyQidfY2EnXHU2NUY2XHVGRjBDXHU1QzA2XHU0RjFBXHU1NzI4XHU2QjY0XHU2NTg3XHU0RUY2XHU0RTBCXHU3NTFGXHU2MjEwXHU0RTAwXHU0RTJBc2lkZWJhciBcdTc2RUVcdTVGNTVcbiAqIEBwYXJhbSB7Kn0gaXRlbSBhdXRvc2lkZSBvYmplY3RcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJEb2NzU2lkZUJhcihpdGVtKSB7XG4gIGxldCBiZWZvckl0ZW1zID0gaXRlbTtcbiAgbGV0IGFmdGVySXRlbXMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gYmVmb3JJdGVtcykge1xuICAgIGZpbHRlckRvY3NTaWRlQmFyV29yayhiZWZvckl0ZW1zW2tleV1bMF0uaXRlbXMsIGFmdGVySXRlbXMsIGAvZG9jcyR7a2V5fWApO1xuICB9XG4gIHJldHVybiBhZnRlckl0ZW1zO1xufVxuZnVuY3Rpb24gZmlsdGVyRG9jc1NpZGVCYXJXb3JrKGJlZm9ySXRlbXMsIHdpbGxJbnNlcnRJdGVtcywgcHJlZml4KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmVmb3JJdGVtcy5sZW5ndGg7ICsraSkge1xuICAgIGlmIChiZWZvckl0ZW1zW2ldLml0ZW1zKSB7XG4gICAgICB2YXIgbnByZWZpeCA9IHByZWZpeCArIGJlZm9ySXRlbXNbaV0udGV4dCArICcvJztcbiAgICAgIGlmIChiZWZvckl0ZW1zW2ldLnRleHQuaW5jbHVkZXMoJ19jYScpKSB7XG4gICAgICAgIGJlZm9ySXRlbXNbaV0udGV4dCA9IGJlZm9ySXRlbXNbaV0udGV4dC5yZXBsYWNlKCdfY2EnLCAnJyk7XG4gICAgICAgIHdpbGxJbnNlcnRJdGVtc1tucHJlZml4XSA9IFtiZWZvckl0ZW1zW2ldXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbHRlckRvY3NTaWRlQmFyV29yayhiZWZvckl0ZW1zW2ldLml0ZW1zLCB3aWxsSW5zZXJ0SXRlbXMsIG5wcmVmaXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBcdTgzQjdcdTUzRDZcdTY1ODdcdTRFRjZcdTdFRDNcdTY3ODRcdTRGRTFcdTYwNkZcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgbGV0IHBhdGhzID0gYXdhaXQgZ2V0UG9zdE1ERmlsZVBhdGhzKCk7XG4gIGxldCBwb3N0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIHBhdGhzLm1hcChhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZzLnJlYWRGaWxlKGl0ZW0sICd1dGYtOCcpO1xuICAgICAgY29uc3Qgc3RhdGUgPSBmcy5zdGF0U3luYyhpdGVtKTtcbiAgICAgIC8vXHU2N0U1XHU2MjdFXHU2NTg3XHU1QjU3XHU1MTg1XHU1QkI5XHU3Njg0XHU3QjgwXHU0RUNCXG4gICAgICBsZXQgZGVzcE1hdGNoID0gY29udGVudC5tYXRjaCgvOjo6XFxzKmluZm9cXHMqSW50cm9kdWN0aW9uKD86LnxcXG4pKj86OjovKTtcbiAgICAgIGxldCBkZXNwID0gJyc7XG4gICAgICBpZiAoZGVzcE1hdGNoKSB7XG4gICAgICAgIGRlc3AgPSBkZXNwTWF0Y2hbMF0ucmVwbGFjZSgvOjo6XFxzKmluZm9cXHMqSW50cm9kdWN0aW9uLywgJycpLnJlcGxhY2UoJzo6OicsICcnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtkYXRhfSA9IG1hdHRlcihjb250ZW50KTtcbiAgICAgIGRhdGEuZGVzcCA9IGRlc3A7XG5cbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRGaWxlc1RpbWUoaXRlbSlcbiAgICAgIC8vXHU1MjFCXHU1RUZBXHU2NUY2XHU5NUY0XG4gICAgICBkYXRhLmJpcnRodGltZSA9ICB0aW1lWzBdXG5cbiAgICAgIC8vXHU2NzAwXHU1NDBFXHU0RkVFXHU2NTM5XHU2NUY2XHU5NUY0XG4gICAgICBkYXRhLm10aW1lID0gIHRpbWVbMV1cblxuICAgICAgLy9cdTU5ODJcdTY3OUNcdTRFMERcdTUzMDVcdTU0MkJ0aXRsZVx1NUMwNlx1NEY3Rlx1NzUyOFx1NjU4N1x1NEVGNlx1NzZFRVx1NUY1NVx1NEY1Q1x1NEUzQXRpdGxlXG4gICAgICBpZiAoIWRhdGEudGl0bGUpIHtcbiAgICAgICAgbGV0IGFyID0gaXRlbS5zcGxpdCgnLycpO1xuICAgICAgICBkYXRhLnRpdGxlID0gYXJbYXIubGVuZ3RoIC0gMV0ucmVwbGFjZSgnLm1kJywgJycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZnJvbnRNYXR0ZXI6IGRhdGEsXG4gICAgICAgIHJlZ3VsYXJQYXRoOiBgLyR7aXRlbS5yZXBsYWNlKCcubWQnLCAnLmh0bWwnKX1gXG4gICAgICB9O1xuICAgIH0pXG4gICk7XG4gIHBvc3RzLnNvcnQoX2NvbXBhcmVEYXRlKTtcblxuICAvLyBsZXQgZGF0YSA9IFtdO1xuICAvL1xuICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gIC8vXG4gIC8vICAgZGF0YS5wdXNoKC4uLkpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zdHMpKSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gZm9yICh2YXIgaiA9IDA7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XG4gIC8vICAgZGF0YVtqXS5pZD0gajtcbiAgLy8gfVxuICBmb3IgKHZhciBqID0gMDsgaiA8IHBvc3RzLmxlbmd0aDsgaisrKSB7XG4gICAgcG9zdHNbal0uaWQgPSBqO1xuICB9XG5cbiAgcmV0dXJuIHBvc3RzO1xufVxuXG5mdW5jdGlvbiBfY29udmVydERhdGUoZGF0ZSA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKSkge1xuICBjb25zdCBqc29uX2RhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0pTT04oKTtcbiAgcmV0dXJuIGpzb25fZGF0ZS5zcGxpdCgnVCcpWzBdO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNUaW1lKGZpbGVOYW1lKSB7XG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlc1RpbWUpIHtcbiAgICBpZihmaWxlWzBdID09IGZpbGVOYW1lKXtcbiAgICAgIHJldHVybiBbZmlsZVsxXSxmaWxlWzJdXVxuICAgIH1cbiAgfVxuICByZXR1cm4gWycnLCcnXVxufVxuXG5mdW5jdGlvbiBfY29tcGFyZURhdGUob2JqMSwgb2JqMikge1xuICByZXR1cm4gbmV3IERhdGUob2JqMS5mcm9udE1hdHRlci5iaXJ0aHRpbWUpIDwgbmV3IERhdGUob2JqMi5mcm9udE1hdHRlci5iaXJ0aHRpbWUpID8gMSA6IC0xO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRQb3N0TURGaWxlUGF0aHMoKSB7XG4gIGxldCBwYXRocyA9IGF3YWl0IGdsb2JieShbJyoqLm1kJ10sIHtcbiAgICBpZ25vcmU6IFsnbm9kZV9tb2R1bGVzJywgJ1JFQURNRS5tZCddXG4gIH0pO1xuICByZXR1cm4gcGF0aHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluY2x1ZGVzKCdkb2NzLycpKTtcbn1cbiIsICJbW1wiYWJvdXQubWRcIixcIjIwMjMtMTAtMjcgMjM6MzA6MDAgXCIsXCIyMDIzLTEyLTE3IDE1OjEyOjM4IFwiXSxbXCJibG9nLm1kXCIsXCIyMDI0LTA4LTE1IDIyOjUyOjAxIFwiLFwiMjAyNC0wOC0xNSAyMjo1MjowMSBcIl0sW1wiZG9jcy9saWZlL1RoZUVuZC5tZFwiLFwiMjAyNC0wOC0yNyAxMzo1MjowMiBcIixcIjIwMjQtMDgtMjcgMTM6NTI6MDIgXCJdLFtcImRvY3MvbGlmZS9cdTRGRUVcdTg4NENfY2EvMC1cdTRGRUVcdTg4NEMubWRcIixcIjIwMjQtMDUtMDYgMjA6NDQ6MDYgXCIsXCIyMDI0LTA5LTEzIDE0OjAwOjQ5IFwiXSxbXCJkb2NzL2xpZmUvXHU0RkVFXHU4ODRDX2NhL1x1NEUyNFx1NEVFQVx1NUJBNS5tZFwiLFwiMjAyMy0xMS0wNyAxMzo0NjozOCBcIixcIjIwMjQtMDktMTMgMTQ6MDA6NDkgXCJdLFtcImRvY3MvbGlmZS9cdTRGRUVcdTg4NENfY2EvXHU0RUQ5XHU0RTUwXHU1RTlDLVx1NTkyOVx1NTczMFx1NUJEMy5tZFwiLFwiMjAyNC0wOS0xMiAxMDo1MjozNiBcIixcIjIwMjQtMDktMTMgMTQ6MDA6NDkgXCJdLFtcImRvY3MvbGlmZS9cdTRGRUVcdTg4NENfY2EvXHU2MENBXHU1RDE2XHU5NDlGLm1kXCIsXCIyMDIzLTExLTA3IDEzOjQ2OjM4IFwiLFwiMjAyNC0wNi0wNSAyMjo0OTo0MCBcIl0sW1wiZG9jcy9saWZlL1x1NEZFRVx1ODg0Q19jYS9cdTYyRDZcdTgwODlcdTg4NEMubWRcIixcIjIwMjQtMDYtMDUgMjI6NDk6NDAgXCIsXCIyMDI0LTA2LTA1IDIyOjQ5OjQwIFwiXSxbXCJkb2NzL2xpZmUvXHU0RkVFXHU4ODRDX2NhL1x1Nzk1RVx1NjAxRFx1NkQ3Ny5tZFwiLFwiMjAyMy0xMS0wNyAxMzo0NjozOCBcIixcIjIwMjQtMDktMTIgMTM6MjU6NDIgXCJdLFtcImRvY3MvbGlmZS9cdTRGRUVcdTg4NENfY2EvXHU4NzE1XHU1MUUxXHU1OEYzLm1kXCIsXCIyMDIzLTExLTA5IDA5OjI5OjQ1IFwiLFwiMjAyNC0wOC0yMiAxMDoxODozNiBcIl0sW1wiZG9jcy9saWZlL1x1NEZFRVx1ODg0Q19jYS9cdTg3MTVcdTUxRTFcdTU4RjMvLTEtXHU4MjZGXHU1OTdEXHU3Njg0XHU3NzYxXHU3NzIwLm1kXCIsXCIyMDI0LTA5LTEyIDEwOjUyOjM2IFwiLFwiMjAyNC0xMS0xMCAxMDoxMjowNiBcIl0sW1wiZG9jcy9saWZlL1x1NEZFRVx1ODg0Q19jYS9cdTg3MTVcdTUxRTFcdTU4RjMvMC1cdTVFMzhcdTc3MEJcdTRGRUVcdTg4NENcdTc2ODRcdTUxODVcdTVCQjkubWRcIixcIjIwMjQtMDgtMjIgMTA6MTg6MzYgXCIsXCIyMDI0LTA4LTIyIDEwOjE4OjM2IFwiXSxbXCJkb2NzL2xpZmUvXHU0RkVFXHU4ODRDX2NhL1x1ODcxNVx1NTFFMVx1NThGMy8xLVx1NEUwRFx1ODk4MVx1NTcyOFx1NTNEMVx1NTQ0Nlx1NEUyRFx1NUY4NVx1NTkyQVx1OTU3Rlx1NjVGNlx1OTVGNC5tZFwiLFwiMjAyNC0wOC0zMCAwOToxNjo0MiBcIixcIjIwMjQtMDktMTIgMTA6NTI6MzYgXCJdLFtcImRvY3MvbGlmZS9cdTRGRUVcdTg4NENfY2EvXHU4NzE1XHU1MUUxXHU1OEYzLzItXHU2MkM5XHU1QzRFXHU3Njg0XHU2NUY2XHU1MDE5XHU0RTBEXHU4OTgxXHU3M0E5XHU2MjRCXHU2NzNBLm1kXCIsXCIyMDI0LTA4LTMwIDA5OjE2OjQyIFwiLFwiMjAyNC0wOC0zMCAwOToxNjo0MiBcIl0sW1wiZG9jcy9saWZlL1x1NEZFRVx1ODg0Q19jYS9cdTg3MTVcdTUxRTFcdTU4RjMvMy1cdTUxQ0ZcdTVDMTFcdTU3MjhcdTRGNEVcdThEMjhcdTkxQ0ZhcHBcdTZENkFcdThEMzlcdTc2ODRcdTY1RjZcdTk1RjQubWRcIixcIjIwMjQtMDktMTIgMTA6NTI6MzYgXCIsXCIyMDI0LTA5LTEyIDEwOjUyOjM2IFwiXSxbXCJkb2NzL2xpZmUvXHU0RkVFXHU4ODRDX2NhL1x1ODcxNVx1NTFFMVx1NThGMy80LVx1NEZERFx1NjMwMVx1NzUxRlx1NkQzQlx1NzNBRlx1NTg4M1x1NzY4NFx1NUU3Mlx1NTFDMFx1NjU3NFx1NkQwMS5tZFwiLFwiMjAyNC0wOS0xMiAxMDo1MjozNiBcIixcIjIwMjQtMTAtMTUgMjA6Mjc6NDEgXCJdLFtcImRvY3MvbGlmZS9cdTRGRUVcdTg4NENfY2EvXHU4NzE1XHU1MUUxXHU1OEYzLzUtXHU1MTQxXHU4QkI4XHU5NkY2XHU3ODhFXHU2NUY2XHU5NUY0XHU3Njg0XHU2NUUwXHU2MjQwXHU0RThCXHU0RThCLm1kXCIsXCIyMDI0LTExLTEwIDEwOjEyOjA2IFwiLFwiMjAyNC0xMS0xMCAxMDoxMjowNiBcIl0sW1wiZG9jcy9saWZlL1x1NEZFRVx1ODg0Q19jYS9cdTg3MTVcdTUxRTFcdTU4RjMvNi1cdTcwRURcdTcyMzFcdTc1MUZcdTZEM0IubWRcIixcIjIwMjQtMTEtMTAgMTA6MTI6MDYgXCIsXCIyMDI0LTExLTEwIDEwOjEyOjA2IFwiXSxbXCJkb2NzL2xpZmUvXHU1MDY1XHU1RUI3X2NhL1x1NTA2NVx1NUVCN1x1NzUxRlx1NkQzQlx1NjMwN1x1NTM1Ny5tZFwiLFwiMjAyNC0xMC0xNSAyMDoyNzo0MSBcIixcIjIwMjQtMTAtMTUgMjA6Mjc6NDEgXCJdLFtcImRvY3MvbGlmZS9cdTUwNjVcdTVFQjdfY2EvXHU1MUNGXHU1QzExXHU5QUQ4XHU4ODQwXHU4MTAyXHU1NDhDXHU4MTAyXHU4MEFBXHU4MDlELm1kXCIsXCIyMDI0LTEwLTE1IDIwOjI3OjQxIFwiLFwiMjAyNC0xMC0xNSAyMDoyNzo0MSBcIl0sW1wiZG9jcy9saWZlL1x1NTA2NVx1NUVCN19jYS9cdTU5N0RcdTU5N0RcdTc3NjFcdTg5QzkubWRcIixcIjIwMjQtMTAtMTUgMjA6Mjc6NDEgXCIsXCIyMDI0LTEwLTE1IDIwOjI3OjQxIFwiXSxbXCJkb2NzL2xpZmUvXHU1MDY1XHU1RUI3X2NhL1x1ODQzRFx1Njc5NS5tZFwiLFwiMjAyNC0xMS0xMCAxMDoxMjowNiBcIixcIjIwMjQtMTEtMTAgMTA6MTI6MDYgXCJdLFtcImRvY3MvbGlmZS9cdTUwNjVcdTVFQjdfY2EvXHU5QUQ4XHU4RDI4XHU5MUNGXHU3NTFGXHU2RDNCXHU1QzBGXHU4RDM0XHU1OEVCLm1kXCIsXCIyMDI0LTEwLTE1IDIwOjI3OjQxIFwiLFwiMjAyNC0xMC0xNSAyMDoyNzo0MSBcIl0sW1wiZG9jcy9saWZlL1x1NUI4MVx1OTc1OVx1NkIzMlx1NjcxQlx1N0NCRVx1NTI5Qlx1ODlDNFx1NUY4Qi0tXHU3NzYxXHU3NzIwLm1kXCIsXCIyMDI0LTExLTEwIDEwOjEyOjA2IFwiLFwiMjAyNC0xMS0xMCAxMDoxMjowNiBcIl0sW1wiZG9jcy9saWZlL1x1NUI5RVx1OERGNS9cdTg4NENcdTUyQTgvXHU0RTBEXHU4OTgxXHU4QkE5XHU4MUVBXHU1REYxXHU1OTA0XHU1NzI4XHU0RTAwXHU0RTJBXHU2RjJCXHU5NTdGXHU3Njg0XHU2NUUwXHU1M0NEXHU5OTg4XHU3Njg0XHU4OUM0XHU1MjEyXHU0RTJELm1kXCIsXCIyMDI0LTA3LTAzIDIyOjUxOjIxIFwiLFwiMjAyNC0xMC0xNyAxNjo0NjozOSBcIl0sW1wiZG9jcy9saWZlL1x1NUI5RVx1OERGNS9cdTg4NENcdTUyQTgvXHU2MjUzXHU5MDIwXHU0RTJBXHU0RUJBXHU1NEMxXHU3MjRDLm1kXCIsXCIyMDIzLTExLTA3IDEzOjQ2OjM4IFwiLFwiMjAyNC0wMi0xOCAwODo0NDoyNiBcIl0sW1wiZG9jcy9saWZlL1x1NUI5RVx1OERGNS9cdTg4NENcdTUyQTgvXHU2NUY2XHU5NUY0XHU1NDhDXHU3Q0JFXHU1MjlCXHU1Qjg5XHU2MzkyKE5vdy12MSkubWRcIixcIjIwMjMtMTEtMTIgMjE6NDc6NDkgXCIsXCIyMDI0LTAyLTE4IDA4OjQ0OjI2IFwiXSxbXCJkb2NzL2xpZmUvXHU1QjlFXHU4REY1L1x1ODg0Q1x1NTJBOC9cdTdFQ0ZcdTlBOENcdTU0OENcdTY1QjlcdTZDRDUvXHU3NzYxXHU3NzIwXHU5MDIwXHU2MjEwXHU0RjRFXHU2NTQ4XHU3Njg0XHU5NUVFXHU5ODk4Lm1kXCIsXCIyMDI0LTAzLTA2IDE0OjI4OjA1IFwiLFwiMjAyNC0wMy0wNiAxNDoyODowNSBcIl0sW1wiZG9jcy9saWZlL1x1NUI5RVx1OERGNS9cdTg4NENcdTUyQTgvXHU3RUNGXHU5QThDXHU1NDhDXHU2NUI5XHU2Q0Q1L1x1OTFDRFx1NTkwRFx1NjYyRlx1NUI4Q1x1NTE2OFx1NUZDNVx1ODk4MVx1NzY4NC5tZFwiLFwiMjAyNC0wMi0xOCAwODo0NDoyNiBcIixcIjIwMjQtMDItMTggMDg6NDQ6MjYgXCJdLFtcImRvY3MvbGlmZS9cdTZFMDVcdTZEMDFcdTcyNjlcdThCRURfY2EvXHU1QzQ1XHU0RjRGXHU1NDhDXHU1MjlFXHU1MTZDXHU3M0FGXHU1ODgzLm1kXCIsXCIyMDI0LTEwLTE1IDIwOjI3OjQxIFwiLFwiMjAyNC0xMC0xNSAyMDoyNzo0MSBcIl0sW1wiZG9jcy9sb2dfY2EvMjAyM1x1NUU3NDExXHU2NzA4MTBcdTY1RTUubWRcIixcIjIwMjMtMTEtMTAgMjI6MTU6MjYgXCIsXCIyMDI0LTA1LTA2IDIzOjU1OjM4IFwiXSxbXCJkb2NzL2xvZ19jYS8yMDIzXHU1RTc0MTFcdTY3MDg5XHU2NUU1Lm1kXCIsXCIyMDIzLTExLTA5IDE2OjIzOjUxIFwiLFwiMjAyMy0xMS0xMCAyMjoxNToyNiBcIl0sW1wiZG9jcy9sb2dfY2EvMjAyNFx1NUU3NDFcdTY3MDgxN1x1NjVFNS5tZFwiLFwiMjAyNC0wMS0yNCAxNTo1NTo0MiBcIixcIjIwMjQtMDItMDUgMTc6MDg6MjAgXCJdLFtcImRvY3MvbG9nX2NhLzIwMjRcdTVFNzQxXHU2NzA4MVx1NjVFNShcdTZENEJcdThCRDVcdTc1M0JcdTU2RkUpLm1kXCIsXCIyMDI0LTAxLTAxIDEzOjQxOjE4IFwiLFwiMjAyNC0xMC0xNSAyMDoyNzo0MSBcIl0sW1wiZG9jcy9sb2dfY2EvMjAyNFx1NUU3NDJcdTY3MDg1XHU2NUU1Lm1kXCIsXCIyMDI0LTAyLTA1IDE3OjA4OjIwIFwiLFwiMjAyNC0wMi0wNiAxNzoxNDo1MyBcIl0sW1wiZG9jcy9sb2dfY2EvMjAyNFx1NUU3NDZcdTY3MDgxMVx1NjVFNS5tZFwiLFwiMjAyNC0wNi0xMSAxMzowODo1MCBcIixcIjIwMjQtMDYtMTEgMTM6MDg6NTAgXCJdLFtcImRvY3MvbG9nX2NhLzIwMjRcdTVFNzQ2XHU2NzA4MjJcdTY1RTUubWRcIixcIjIwMjQtMDYtMjIgMjM6MjM6MjcgXCIsXCIyMDI0LTA2LTIyIDIzOjIzOjI3IFwiXSxbXCJkb2NzL2xvZ19jYS8yMDI0XHU1RTc0Nlx1NjcwODI0XHU2NUU1Lm1kXCIsXCIyMDI0LTA2LTI0IDIxOjQ1OjExIFwiLFwiMjAyNC0wNi0yNCAyMTo0NToxMSBcIl0sW1wiZG9jcy9sb2dfY2EvMjAyNFx1NUU3NDdcdTY3MDgxOFx1NjVFNShcdTYyMTFcdTc2ODRcdTcxMjZcdTg2NTEpLm1kXCIsXCIyMDI0LTA3LTE5IDExOjIzOjIzIFwiLFwiMjAyNC0wOC0yNyAxNDo0NTozOCBcIl0sW1wiZG9jcy9sb2dfY2EvMjAyNFx1NUU3NDdcdTY3MDg5XHU2NUU1Lm1kXCIsXCIyMDI0LTA3LTEwIDA4OjE4OjIxIFwiLFwiMjAyNC0wNy0xMCAwODoxODoyMSBcIl0sW1wiZG9jcy9sb2dfY2EvUGxhbi5tZFwiLFwiMjAyMy0xMi0xMiAxMToxNjoyOCBcIixcIjIwMjMtMTItMjMgMTU6MDI6NTUgXCJdLFtcImRvY3MvbG9nX2NhL1x1NTI0RFx1OERFRi1cdTUyMDZcdTY3OTBcdTRFMEVcdTYyODlcdTYyRTkubWRcIixcIjIwMjQtMDctMTcgMDA6MDM6MDcgXCIsXCIyMDI0LTA4LTMwIDA5OjE2OjQyIFwiXSxbXCJkb2NzL3RlY2gvRGVzaWduYVBhdHRlcm5fY2EvMC1cdThCQkVcdThCQTFcdTZBMjFcdTVGMEYtXHU1RThGLm1kXCIsXCIyMDI0LTA4LTMwIDA5OjE2OjQyIFwiLFwiMjAyNC0wOC0zMCAwOToxNjo0MiBcIl0sW1wiZG9jcy90ZWNoL0Rlc2lnbmFQYXR0ZXJuX2NhLzEtN1x1NTkyN1x1OEJCRVx1OEJBMVx1NTM5Rlx1NTIxOS5tZFwiLFwiMjAyNC0wNi0wNSAyMjo0OTo0MCBcIixcIjIwMjQtMDgtMzAgMDk6MTY6NDIgXCJdLFtcImRvY3MvdGVjaC9EZXNpZ25hUGF0dGVybl9jYS8yLVx1NTIxQlx1NUVGQVx1NTc4Qlx1NkEyMVx1NUYwRi5tZFwiLFwiMjAyNC0wNi0wNSAyMjo0OTo0MCBcIixcIjIwMjQtMDgtMzAgMDk6MTY6NDIgXCJdLFtcImRvY3MvdGVjaC9EZXNpZ25hUGF0dGVybl9jYS8zLVx1N0VEM1x1Njc4NFx1NTc4Qlx1NkEyMVx1NUYwRi5tZFwiLFwiMjAyNC0wNi0yNCAyMTo0NToxMSBcIixcIjIwMjQtMDgtMzAgMDk6MTY6NDIgXCJdLFtcImRvY3MvdGVjaC9EZXNpZ25hUGF0dGVybl9jYS80LVx1ODg0Q1x1NEUzQVx1NkEyMVx1NUYwRi5tZFwiLFwiMjAyNC0wNi0yNiAyMjoyMzoyNyBcIixcIjIwMjQtMDgtMzAgMDk6MTY6NDIgXCJdLFtcImRvY3MvdGVjaC9PT0FuYSZEZXNpZ25fY2EvMC1cdTk3NjJcdTU0MTFcdTVCRjlcdThDNjFcdTRFMEVcdThCQkVcdThCQTFcdTYwM0JcdTdFRDNcdTdCMTRcdThCQjAubWRcIixcIjIwMjQtMDMtMjggMTY6MjU6NTggXCIsXCIyMDI0LTA3LTAzIDIyOjU3OjU5IFwiXSxbXCJkb2NzL3RlY2gvT09BbmEmRGVzaWduX2NhLzEtXHU2OTgyXHU1RkY1LVx1NTkwRFx1Njc0Mlx1NjAyNy5tZFwiLFwiMjAyMy0xMi0xMiAxMToxNjoyOCBcIixcIjIwMjQtMDMtMDcgMTA6MzU6MjcgXCJdLFtcImRvY3MvdGVjaC9PT0FuYSZEZXNpZ25fY2EvMi1cdTY5ODJcdTVGRjUtXHU1QkY5XHU4QzYxXHU2QTIxXHU1NzhCLm1kXCIsXCIyMDIzLTEyLTEyIDExOjE2OjI4IFwiLFwiMjAyNC0wOC0zMCAwOToxNjo0MiBcIl0sW1wiZG9jcy90ZWNoL09PQW5hJkRlc2lnbl9jYS8zLVx1Njk4Mlx1NUZGNS1cdTdDN0JcdTRFMEVcdTVCRjlcdThDNjEubWRcIixcIjIwMjMtMTItMjMgMTU6MDI6NTUgXCIsXCIyMDI0LTAzLTA3IDEwOjM1OjI3IFwiXSxbXCJkb2NzL3RlY2gvT09BbmEmRGVzaWduX2NhLzQtXHU2OTgyXHU1RkY1LVx1NTIwNlx1N0M3Qi5tZFwiLFwiMjAyNC0wMS0wMyAwODo1NTowNSBcIixcIjIwMjQtMDEtMDMgMDg6NTU6MDUgXCJdLFtcImRvY3MvdGVjaC9PT0FuYSZEZXNpZ25fY2EvNS1VTUwvMC5cdTUyNERcdThBMDAubWRcIixcIjIwMjQtMDEtMjQgMTU6NTU6NDIgXCIsXCIyMDI0LTAzLTI2IDE3OjQ2OjIyIFwiXSxbXCJkb2NzL3RlY2gvT09BbmEmRGVzaWduX2NhLzUtVU1MLzEuXHU1MzA1XHU1NkZFLm1kXCIsXCIyMDI0LTAyLTA2IDE3OjE0OjUzIFwiLFwiMjAyNC0wMi0wNiAxNzoxNDo1MyBcIl0sW1wiZG9jcy90ZWNoL09PQW5hJkRlc2lnbl9jYS81LVVNTC8yLlx1N0VDNFx1NEVGNlx1NTZGRS5tZFwiLFwiMjAyNC0wMS0yNCAxNTo1NTo0MiBcIixcIjIwMjQtMDMtMjYgMTc6NDY6MjIgXCJdLFtcImRvY3MvdGVjaC9PT0FuYSZEZXNpZ25fY2EvNS1VTUwvMy5cdTkwRThcdTdGNzJcdTU2RkUubWRcIixcIjIwMjQtMDItMDYgMTc6MTQ6NTMgXCIsXCIyMDI0LTAzLTI2IDE3OjQ2OjIyIFwiXSxbXCJkb2NzL3RlY2gvT09BbmEmRGVzaWduX2NhLzUtVU1MLzQuXHU3NTI4XHU0RjhCXHU1NkZFLm1kXCIsXCIyMDI0LTAyLTI5IDE4OjMwOjE3IFwiLFwiMjAyNC0wMi0yOSAxODozMDoxNyBcIl0sW1wiZG9jcy90ZWNoL09PQW5hJkRlc2lnbl9jYS81LVVNTC81Llx1NkQzQlx1NTJBOFx1NTZGRS5tZFwiLFwiMjAyNC0wMi0yOSAxODozMDoxNyBcIixcIjIwMjQtMDMtMjYgMTc6NDY6MjIgXCJdLFtcImRvY3MvdGVjaC9PT0FuYSZEZXNpZ25fY2EvNS1VTUwvNi5cdTdDN0JcdTU2RkUubWRcIixcIjIwMjQtMDItMjkgMTg6MzA6MTcgXCIsXCIyMDI0LTAzLTI2IDE3OjQ2OjIyIFwiXSxbXCJkb2NzL3RlY2gvT09BbmEmRGVzaWduX2NhLzUtVU1MLzcuXHU1RThGXHU1MjE3XHU1NkZFKFx1NjVGNlx1NUU4Rlx1NTZGRSkubWRcIixcIjIwMjQtMDItMjkgMTg6MzA6MTcgXCIsXCIyMDI0LTAyLTI5IDE4OjMwOjE3IFwiXSxbXCJkb2NzL3RlY2gvT09BbmEmRGVzaWduX2NhLzUtVU1MLzguXHU3MkI2XHU2MDAxXHU2NzNBXHU1NkZFLm1kXCIsXCIyMDI0LTAyLTI5IDE4OjMwOjE3IFwiLFwiMjAyNC0wMy0yNiAxNzo0NjoyMiBcIl0sW1wiZG9jcy90ZWNoL09PQW5hJkRlc2lnbl9jYS81LVVNTC85Llx1NjVGNlx1OTVGNFx1NTZGRS5tZFwiLFwiMjAyNC0wMi0yOSAxODozMDoxNyBcIixcIjIwMjQtMDItMjkgMTg6MzA6MTcgXCJdLFtcImRvY3MvdGVjaC9PT0FuYSZEZXNpZ25fY2EvNS1VTUwvQS5cdTUxNzZcdTVCODNcdTU2RkUubWRcIixcIjIwMjQtMDItMjkgMTg6MzA6MTcgXCIsXCIyMDI0LTAzLTI2IDE3OjQ2OjIyIFwiXSxbXCJkb2NzL3RlY2gvT09BbmEmRGVzaWduX2NhLzYtXHU4ODY4XHU3OTNBXHU2Q0Q1LVx1OEZDN1x1N0EwQi5tZFwiLFwiMjAyNC0wMy0wNiAxODoyOTo0MCBcIixcIjIwMjQtMDMtMjYgMTc6NDY6MjIgXCJdLFtcImRvY3MvdGVjaC9PT0FuYSZEZXNpZ25fY2EvNy1cdTVCOUVcdTYyMTgtXHU1RjAwXHU1M0QxXHU4RkM3XHU3QTBCXHU4MDAzXHU4NjUxXHU3Njg0XHU4OTgxXHU3RDIwLm1kXCIsXCIyMDI0LTAzLTA2IDE0OjI4OjA1IFwiLFwiMjAyNC0wMy0yNiAxNzo0NjoyMiBcIl0sW1wiZG9jcy90ZWNoL2NwcC9xdC9cdThCQjBcdTVGNTVcdTRFMDBcdTZCMjFxdDYtbXN2YzMyLXN0YXRpYy1NVFx1NzY4NFx1OTc1OVx1NjAwMVx1N0YxNlx1OEJEMS5tZFwiLFwiMjAyNC0wMy0yOCAxNjoyNTo1OCBcIixcIjIwMjQtMDQtMTAgMjI6NTU6MjEgXCJdLFtcImRvY3MvdGVjaC9jcHAvXHU0RTAwXHU2QjIxY2xhbmdkXHU2M0QwXHU3OTNBXHU5NTE5XHU4QkVGXHU3Njg0XHU2MzkyXHU2N0U1Lm1kXCIsXCIyMDI0LTA0LTE4IDE2OjI1OjAwIFwiLFwiMjAyNC0wOC0xNSAyMjo1MjowMSBcIl0sW1wiZG9jcy90ZWNoL2RiL3RpbWVzY2FsZWRiLm1kXCIsXCIyMDI0LTA0LTEwIDIyOjU1OjIxIFwiLFwiMjAyNC0wNC0xMCAyMjo1NToyMSBcIl0sW1wiZG9jcy90ZWNoL2Rldm9wcy9naXRfY2EvZ2l0LXByb2ZpbGUubWRcIixcIjIwMjQtMDctMTcgMDA6MDM6MDcgXCIsXCIyMDI0LTA4LTE1IDIyOjUyOjAxIFwiXSxbXCJkb2NzL3RlY2gvZGV2b3BzL2dpdF9jYS9naXRcdTU0OENnaXRodWJcdThEMjZcdTUzRjdcdTRFMERcdTdFREZcdTRFMDAubWRcIixcIjIwMjQtMDctMTcgMDA6MDM6MDcgXCIsXCIyMDI0LTA3LTE3IDExOjQ1OjE3IFwiXSxbXCJkb2NzL3RlY2gvZGV2b3BzL2dpdF9jYS9naXRcdTY3MDBcdTRGNzNcdTVCOUVcdThERjUubWRcIixcIjIwMjQtMDgtMTUgMjI6NTI6MDEgXCIsXCIyMDI0LTA4LTMwIDA5OjE2OjQyIFwiXSxbXCJkb2NzL3RlY2gvZW5nbGlzaF9jYS9ncmFtbWFyLzAtXHU1NDBEXHU4QkNEXHU3N0VEXHU4QkVELm1kXCIsXCIyMDI0LTA2LTIyIDIzOjIzOjI3IFwiLFwiMjAyNC0wNy0xNyAwMDowMzowNyBcIl0sW1wiZG9jcy90ZWNoL2VuZ2xpc2hfY2EvZ3JhbW1hci8xLVx1NTQwRFx1OEJDRC5tZFwiLFwiMjAyNC0wNy0xOSAxMToyMzoyMyBcIixcIjIwMjQtMDktMTIgMTA6NTI6MzYgXCJdLFtcImRvY3MvdGVjaC9lbmdsaXNoX2NhL2dyYW1tYXIvMi1cdTk2NTBcdTVCOUFcdThCQ0QtXHU1MUEwXHU4QkNELm1kXCIsXCIyMDI0LTA5LTEyIDEwOjUyOjM2IFwiLFwiMjAyNC0wOS0xOSAwODo1ODozNSBcIl0sW1wiZG9jcy90ZWNoL2VuZ2xpc2hfY2EvZ3JhbW1hci9pbmRleC5tZFwiLFwiMjAyNC0wNi0yMiAyMzoyMzoyNyBcIixcIjIwMjQtMDctMTcgMDA6MDM6MDcgXCJdLFtcImRvY3MvdGVjaC9lbmdsaXNoX2NhL3JlYWRtZS5tZFwiLFwiMjAyNC0wNi0yMiAyMzoyMzoyNyBcIixcIjIwMjQtMDctMTcgMDA6MDM6MDcgXCJdLFtcImRvY3MvdGVjaC9mYXN0Q29kaW5nL2tkZS9rd2luXHU0RjdGXHU3NTI4XHU2MjgwXHU1REU3Lm1kXCIsXCIyMDI0LTAyLTI5IDE4OjMwOjE3IFwiLFwiMjAyNC0wMi0yOSAxODozMDoxNyBcIl0sW1wiZG9jcy90ZWNoL2Zhc3RDb2RpbmcvdmltX2NhL3ZpbVx1NjU4N1x1NEVGNlx1NTE4NVx1NzlGQlx1NTJBOC5tZFwiLFwiMjAyNC0wNi0wNSAyMjo0OTo0MCBcIixcIjIwMjQtMDYtMDUgMjI6NDk6NDAgXCJdLFtcImRvY3MvdGVjaC9mYXN0Q29kaW5nL3ZpbV9jYS92aW1cdTY3RTVcdTYyN0VcdTU0OENcdTY2RkZcdTYzNjIubWRcIixcIjIwMjQtMDYtMDUgMjI6NDk6NDAgXCIsXCIyMDI0LTA3LTE3IDAwOjAzOjA3IFwiXSxbXCJkb2NzL3RlY2gvZmFzdENvZGluZy92aW1fY2EvXHU2QjIyXHU4RkNFXHU2NzY1XHU1MjMwdmltXHU1Qjk3XHU2NTU5Lm1kXCIsXCIyMDIzLTEyLTIzIDE1OjAyOjU1IFwiLFwiMjAyNC0wOC0zMCAwOToxNjo0MiBcIl0sW1wiZG9jcy90ZWNoL2Zhc3RDb2RpbmcvdmltX2NhL1x1NkUxMFx1OEZEQlx1NUYwRlx1NUI2Nlx1NEU2MHZpbS5tZFwiLFwiMjAyMy0xMi0yMyAxNTowMjo1NSBcIixcIjIwMjQtMDktMTIgMTA6NTI6MzYgXCJdLFtcImRvY3MvdGVjaC9mYXN0Q29kaW5nL3ZzY29kZVx1NUZFQlx1NjM3N1x1OTUyRS5tZFwiLFwiMjAyNC0wNi0wNSAyMjo0OTo0MCBcIixcIjIwMjQtMDktMTMgMTQ6MDA6NDkgXCJdLFtcImRvY3MvdGVjaC9mYXN0Q29kaW5nL1x1NUYwMFx1NTNEMVx1NzNBRlx1NTg4M1x1N0VGNFx1NjJBNFx1NTQ4Q1x1N0JBMVx1NzQwNi5tZFwiLFwiMjAyNC0wNC0xOCAxNjoyNTowMCBcIixcIjIwMjQtMDUtMDYgMjA6NDQ6MDYgXCJdLFtcImRvY3MvdGVjaC9mYXN0Q29kaW5nL1x1NUZFQlx1NjM3N1x1OTUyRWNob3JlLm1kXCIsXCIyMDI0LTA5LTEzIDE0OjAwOjQ5IFwiLFwiMjAyNC0wOS0xMyAxNDowNjo0MCBcIl0sW1wiZG9jcy90ZWNoL2Zhc3RDb2RpbmcvXHU3RjE2XHU3QTBCXHU3M0FGXHU1ODgzLVx1NjNEMFx1OUFEOFx1NjU0OFx1NzM4N1x1NzY4NFx1NjVCOVx1NUYwRi5tZFwiLFwiMjAyMy0xMi0yOCAxODoyNjoxOCBcIixcIjIwMjQtMDUtMDYgMjA6NDQ6MDYgXCJdLFtcImRvY3MvdGVjaC9saW51eF9rZGVfc3VzZV9jYS8wLW9wZW5zdXNlX2xpbnV4XHU3RDIyXHU1RjE1Lm1kXCIsXCIyMDI0LTA1LTA2IDIwOjQ0OjA2IFwiLFwiMjAyNC0wNS0wNiAyMDo0NDowNiBcIl0sW1wiZG9jcy90ZWNoL2xpbnV4X2tkZV9zdXNlX2NhLzEtXHU1Qjg5XHU4OEM1XHU1QjhDXHU2MjEwcXRcdTRFNEJcdTU0MEVcdTdGM0FcdTVDMTFvcGVuZ2xcdTVFOTMubWRcIixcIjIwMjQtMDUtMDYgMjA6NDQ6MDYgXCIsXCIyMDI0LTA1LTA2IDIwOjQ0OjA2IFwiXSxbXCJkb2NzL3RlY2gvbGludXhfa2RlX3N1c2VfY2EvMi1cdTRFMkRcdTY1ODdcdThGOTNcdTUxNjVcdTZDRDVcdTk1RUVcdTk4OTgubWRcIixcIjIwMjQtMDUtMDYgMjA6NDQ6MDYgXCIsXCIyMDI0LTA1LTA2IDIxOjAyOjE1IFwiXSxbXCJkb2NzL3RlY2gvbGludXhfa2RlX3N1c2VfY2EvMy1saW51eFx1NTM3MVx1NUJCM1x1NTA2NVx1NUVCNy5tZFwiLFwiMjAyNC0wNS0wNiAyMDo0NDowNiBcIixcIjIwMjQtMDUtMDYgMjA6NDQ6MDYgXCJdLFtcImRvY3MvdGVjaC9saW51eF9rZGVfc3VzZV9jYS80LVx1NEY3Rlx1NzUyOGxpbnV4XHU3Njg0XHU2MjEwXHU5NTdGXHU1NDhDXHU0RUUzXHU0RUY3Lm1kXCIsXCIyMDI0LTA1LTA2IDIwOjQ0OjA2IFwiLFwiMjAyNC0wNS0wNiAyMDo0NDowNiBcIl0sW1wiZG9jcy90ZWNoL2xpbnV4X2tkZV9zdXNlX2NhLzUtXHU3RUM4XHU2NzgxXHU3Njg0enNoLm1kXCIsXCIyMDI0LTA1LTA2IDIwOjQ0OjA2IFwiLFwiMjAyNC0wNS0wNiAyMDo0NDowNiBcIl0sW1wiZG9jcy90ZWNoL2xpbnV4X2tkZV9zdXNlX2NhL2tkZV9jYS8xLWtkZS5tZFwiLFwiMjAyNC0wNS0wNiAyMDo0NDowNiBcIixcIjIwMjQtMDUtMDYgMjA6NDQ6MDYgXCJdLFtcImRvY3MvdGVjaC9wcm9qZWN0L0ZpbGVTcWxTZXJ2ZXJTeW5jX2NhL3Byb2ZpbGUubWRcIixcIjIwMjQtMTAtMTUgMjA6Mjc6NDEgXCIsXCIyMDI0LTEwLTE3IDE3OjA4OjMwIFwiXSxbXCJkb2NzL3RlY2gvcHJvamVjdC9GaWxlU3FsU2VydmVyU3luY19jYS9cdTRGN0ZcdTc1MjhcdTczQUZcdTU4ODMubWRcIixcIjIwMjQtMTAtMTcgMTY6NDY6MzkgXCIsXCIyMDI0LTExLTEwIDEwOjEyOjA2IFwiXSxbXCJkb2NzL3RlY2gvcHJvamVjdC9GaWxlU3FsU2VydmVyU3luY19jYS9cdTkxNERcdTdGNkVcdTY1ODdcdTRFRjYubWRcIixcIjIwMjQtMTAtMTcgMTY6NDY6MzkgXCIsXCIyMDI0LTExLTEwIDEwOjEyOjA2IFwiXSxbXCJkb2NzL3RlY2gvcHJvamVjdC9cdTYyNTNcdTUzNzBcdTdGNTFcdTk4NzVcdTc2ODRcdTgxRUFcdTUyQThcdTUzMTZcdTVERTVcdTUxNzcubWRcIixcIjIwMjMtMTAtMTggMTc6MTM6MTkgXCIsXCIyMDI0LTAxLTAxIDEzOjQxOjE4IFwiXSxbXCJkb2NzL3RlY2gvdWJ1bnR1XHU0RTAwXHU2QjIxXHU3RjUxXHU3RURDXHU2NTQ1XHU5NjlDXHU2MzkyXHU2N0U1XHU4QkIwXHU1RjU1Lm1kXCIsXCIyMDI0LTA4LTE5IDIyOjQwOjU3IFwiLFwiMjAyNC0wOC0xOSAyMjo0MDo1NyBcIl0sW1wiZG9jcy90ZWNoL1x1NEUwMFx1NEUyQVx1N0NGQlx1N0VERlx1N0VBN1x1N0EwQlx1NUU4Rlx1NTQ1OC5tZFwiLFwiMjAyNC0wNy0xOSAxMToyMzoyMyBcIixcIjIwMjQtMDctMTkgMTE6MjM6MjMgXCJdLFtcImRvY3MvdGVjaC9cdTUyNERcdTdBRUYvdnVlXHU3Njg0aFx1NTFGRFx1NjU3MFZub2RlXHU1NDhDcmVuZGVyLm1kXCIsXCIyMDI0LTA2LTA3IDIyOjM1OjA0IFwiLFwiMjAyNC0wNi0wOCAwMDoxMjo0OSBcIl0sW1wiZG9jcy90ZWNoL1x1NUVGQVx1NEUwMFx1NEUyQWJsb2dcdTdGNTFcdTdBRDkubWRcIixcIjIwMjMtMTEtMDYgMTU6NDM6MTUgXCIsXCIyMDI0LTA2LTA3IDEzOjIzOjUzIFwiXSxbXCJkb2NzL3RlY2gvXHU2MjgwXHU2NzJGXHU1RUZBXHU4QkJFLm1kXCIsXCIyMDIzLTExLTA2IDE1OjQzOjE1IFwiLFwiMjAyMy0xMS0xNSAyMjozMTowMyBcIl0sW1wiZG9jcy90ZWNoL1x1NjI4MFx1NjcyRlx1NjU4N1x1N0FFMFx1NUYxNVx1NzUyOC9Jb3RcdTY1NzBcdTYzNkVcdTRGMjBcdThGOTNcdTUzNEZcdThCQUUubWRcIixcIjIwMjMtMTEtMDYgMTU6NDM6MTUgXCIsXCIyMDIzLTExLTEwIDIyOjE1OjI2IFwiXSxbXCJkb2NzL3RlY2gvXHU2MjgwXHU2NzJGXHU2NTg3XHU3QUUwXHU1RjE1XHU3NTI4L3dzbFx1NTQ4Q2hvc3RcdTRFM0JcdTY3M0FcdTRFNEJcdTk1RjRcdTc2ODRcdTdGNTFcdTdFREMubWRcIixcIjIwMjMtMTEtMDYgMTU6NDM6MTUgXCIsXCIyMDIzLTExLTEwIDIyOjE1OjI2IFwiXSxbXCJkb2NzL3RlY2gvXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0Jlx1N0I5N1x1NkNENV9jYS8wLVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENVx1N0I4MFx1NEVDQi5tZFwiLFwiMjAyMy0xMC0yNyAxMDo1MDo1MyBcIixcIjIwMjMtMTAtMjcgMjI6MTk6MjQgXCJdLFtcImRvY3MvdGVjaC9cdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQmXHU3Qjk3XHU2Q0Q1X2NhLzEtXHU2NUY2XHU5NUY0Jlx1N0E3QVx1OTVGNFx1NTkwRFx1Njc0Mlx1NUVBNi5tZFwiLFwiMjAyMy0xMC0xOCAxNzoxMzoxOSBcIixcIjIwMjMtMTEtMTAgMjI6MTU6MjYgXCJdLFtcImRvY3MvdGVjaC9cdThENDRcdTZFOTBcdTY1MzZcdTVGNTUubWRcIixcIjIwMjMtMTEtMTAgMjI6MTU6MjYgXCIsXCIyMDIzLTExLTEwIDIyOjE1OjI2IFwiXSxbXCJkb2NzL3RlY2gvXHU5NzYyXHU1NDExXHU0RTFBXHU1MkExXHU3Njg0XHU1QjhDXHU1OTA3XHU3NTFGXHU0RUE3XHU1MjlCLyhcdTc2RjRcdTk3NjJcdTRFMUFcdTUyQTEpMS1cdTYyODBcdTY3MkZcdTkwMDlcdTU3OEIubWRcIixcIjIwMjMtMTEtMTAgMjI6MTU6MjYgXCIsXCIyMDIzLTExLTEwIDIyOjE1OjI2IFwiXSxbXCJkb2NzL3RlY2gvXHU5NzYyXHU1NDExXHU0RTFBXHU1MkExXHU3Njg0XHU1QjhDXHU1OTA3XHU3NTFGXHU0RUE3XHU1MjlCL1x1OEMwOFx1OEMwOGNzaGFycC5tZFwiLFwiMjAyNC0wMi0xOCAwODo1NDozMyBcIixcIjIwMjQtMDUtMDYgMjE6MDI6MTUgXCJdLFtcImhpc3RvcnkubWRcIixcIjIwMjMtMTAtMjcgMjM6MzA6MDAgXCIsXCIyMDI0LTA1LTE2IDExOjMxOjU0IFwiXSxbXCJpbmRleC5tZFwiLFwiMjAyMy0wNy0yMSAxNToxMDo1MCBcIixcIjIwMjQtMTAtMTUgMjA6Mjc6NDEgXCJdLFtcIm5hdmlnYXRpb24ubWRcIixcIjIwMjQtMDYtMjcgMTQ6MzI6NTkgXCIsXCIyMDI0LTA2LTI4IDEzOjIwOjQ2IFwiXSxbXCJyZWFkbWUubWRcIixcIjIwMjMtMTAtMTggMTc6MTM6MTkgXCIsXCIyMDI0LTA5LTE5IDEzOjQ5OjE2IFwiXV0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3plcmxlaS9naXQvbWUvLnZpdGVwcmVzcy90aGVtZS9saWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3plcmxlaS9naXQvbWUvLnZpdGVwcmVzcy90aGVtZS9saWIvZGVmbGF0ZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS96ZXJsZWkvZ2l0L21lLy52aXRlcHJlc3MvdGhlbWUvbGliL2RlZmxhdGUudHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBjdXJseSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVubW9kaWZpZWQtbG9vcC1jb25kaXRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIHVudXNlZC1pbXBvcnRzL25vLXVudXNlZC12YXJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbi8qIGVzbGludC1kaXNhYmxlIHZhcnMtb24tdG9wICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB0cy9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcblxuLy8gVXNpbmcgdGhpcyBsaWJyYXJ5IHNvIHRoYXQgb3VyIGltZyBsaW5rcyBhcmUgY29tcGF0aWJsZSB3aXRoIHBsYW50VW1sIHdlYnNpdGUuXG4vLyBUT0RPOiByZXBsYWNlIHRoaXMgbGlicmFyeSB3aXRoIHpsaWIgb25jZSB3ZSBjcmVhdGUgb3VyIHByaXZhdGUgdW1sIHNlcnZlci5cblxuJ3VzZSBzdHJpY3QnXG5cbi8vIEFkZGVkIHRvIG9yaWdpbmFsOlxuZXhwb3J0IGRlZmF1bHQge1xuICB6aXBfZGVmbGF0ZSxcbiAgZW5jb2RlNjQsXG59XG5cbi8vIE9yaWdpbmFsW3NvbWUgcGFydHMgbW9kaWZpZWQgdG8gYXZvaWQgZXJyb3JzXTpcblxuLyogQ29weXJpZ2h0IChDKSAxOTk5IE1hc2FuYW8gSXp1bW8gPGl6QG9uaWNvcy5jby5qcD5cbiAqIFZlcnNpb246IDEuMC4xXG4gKiBMYXN0TW9kaWZpZWQ6IERlYyAyNSAxOTk5XG4gKi9cblxuLyogSW50ZXJmYWNlOlxuICogZGF0YSA9IHppcF9kZWZsYXRlKHNyYyk7XG4gKi9cblxuLyogY29uc3RhbnQgcGFyYW1ldGVycyAqL1xuY29uc3QgemlwX1dTSVpFID0gMzI3NjggLy8gU2xpZGluZyBXaW5kb3cgc2l6ZVxuY29uc3QgemlwX1NUT1JFRF9CTE9DSyA9IDBcbmNvbnN0IHppcF9TVEFUSUNfVFJFRVMgPSAxXG5jb25zdCB6aXBfRFlOX1RSRUVTID0gMlxuXG4vKiBmb3IgZGVmbGF0ZSAqL1xuY29uc3QgemlwX0RFRkFVTFRfTEVWRUwgPSA2XG5jb25zdCB6aXBfRlVMTF9TRUFSQ0ggPSB0cnVlXG5jb25zdCB6aXBfSU5CVUZTSVogPSAzMjc2OCAvLyBJbnB1dCBidWZmZXIgc2l6ZVxuY29uc3QgemlwX0lOQlVGX0VYVFJBID0gNjQgLy8gRXh0cmEgYnVmZmVyXG5jb25zdCB6aXBfT1VUQlVGU0laID0gMTAyNCAqIDhcbmNvbnN0IHppcF93aW5kb3dfc2l6ZSA9IDIgKiB6aXBfV1NJWkVcbmNvbnN0IHppcF9NSU5fTUFUQ0ggPSAzXG5jb25zdCB6aXBfTUFYX01BVENIID0gMjU4XG5jb25zdCB6aXBfQklUUyA9IDE2XG4vLyBmb3IgU01BTExfTUVNXG5jb25zdCB6aXBfTElUX0JVRlNJWkUgPSAweDIwMDBcbmNvbnN0IHppcF9IQVNIX0JJVFMgPSAxM1xuLy8gZm9yIE1FRElVTV9NRU1cbi8vIHZhciB6aXBfTElUX0JVRlNJWkUgPSAweDQwMDA7XG4vLyB2YXIgemlwX0hBU0hfQklUUyA9IDE0O1xuLy8gZm9yIEJJR19NRU1cbi8vIHZhciB6aXBfTElUX0JVRlNJWkUgPSAweDgwMDA7XG4vLyB2YXIgemlwX0hBU0hfQklUUyA9IDE1O1xuLy8gaWYgKHppcF9MSVRfQlVGU0laRSA+IHppcF9JTkJVRlNJWikgeyBhbGVydCgnZXJyb3I6IHppcF9JTkJVRlNJWiBpcyB0b28gc21hbGwnKTsgfVxuLy8gaWYgKCh6aXBfV1NJWkUgPDwgMSkgPiAoMSA8PCB6aXBfQklUUykpIHsgYWxlcnQoJ2Vycm9yOiB6aXBfV1NJWkUgaXMgdG9vIGxhcmdlJyk7IH1cbi8vIGlmICh6aXBfSEFTSF9CSVRTID4gemlwX0JJVFMgLSAxKSB7IGFsZXJ0KCdlcnJvcjogemlwX0hBU0hfQklUUyBpcyB0b28gbGFyZ2UnKTsgfVxuLy8gaWYgKHppcF9IQVNIX0JJVFMgPCA4IHx8IHppcF9NQVhfTUFUQ0ggIT0gMjU4KSB7IGFsZXJ0KCdlcnJvcjogQ29kZSB0b28gY2xldmVyJyk7IH1cbmNvbnN0IHppcF9ESVNUX0JVRlNJWkUgPSB6aXBfTElUX0JVRlNJWkVcbmNvbnN0IHppcF9IQVNIX1NJWkUgPSAxIDw8IHppcF9IQVNIX0JJVFNcbmNvbnN0IHppcF9IQVNIX01BU0sgPSB6aXBfSEFTSF9TSVpFIC0gMVxuY29uc3QgemlwX1dNQVNLID0gemlwX1dTSVpFIC0gMVxuY29uc3QgemlwX05JTCA9IDAgLy8gVGFpbCBvZiBoYXNoIGNoYWluc1xuY29uc3QgemlwX1RPT19GQVIgPSA0MDk2XG5jb25zdCB6aXBfTUlOX0xPT0tBSEVBRCA9IHppcF9NQVhfTUFUQ0ggKyB6aXBfTUlOX01BVENIICsgMVxuY29uc3QgemlwX01BWF9ESVNUID0gemlwX1dTSVpFIC0gemlwX01JTl9MT09LQUhFQURcbmNvbnN0IHppcF9TTUFMTEVTVCA9IDFcbmNvbnN0IHppcF9NQVhfQklUUyA9IDE1XG5jb25zdCB6aXBfTUFYX0JMX0JJVFMgPSA3XG5jb25zdCB6aXBfTEVOR1RIX0NPREVTID0gMjlcbmNvbnN0IHppcF9MSVRFUkFMUyA9IDI1NlxuY29uc3QgemlwX0VORF9CTE9DSyA9IDI1NlxuY29uc3QgemlwX0xfQ09ERVMgPSB6aXBfTElURVJBTFMgKyAxICsgemlwX0xFTkdUSF9DT0RFU1xuY29uc3QgemlwX0RfQ09ERVMgPSAzMFxuY29uc3QgemlwX0JMX0NPREVTID0gMTlcbmNvbnN0IHppcF9SRVBfM182ID0gMTZcbmNvbnN0IHppcF9SRVBaXzNfMTAgPSAxN1xuY29uc3QgemlwX1JFUFpfMTFfMTM4ID0gMThcbmNvbnN0IHppcF9IRUFQX1NJWkUgPSAyICogemlwX0xfQ09ERVMgKyAxXG5jb25zdCB6aXBfSF9TSElGVCA9IE51bWJlci5wYXJzZUludChcbiAgKHppcF9IQVNIX0JJVFMgKyB6aXBfTUlOX01BVENIIC0gMSkgLyB6aXBfTUlOX01BVENILFxuKVxuXG4vKiB2YXJpYWJsZXMgKi9cbmxldCB6aXBfZnJlZV9xdWV1ZVxubGV0IHppcF9xaGVhZCwgemlwX3F0YWlsXG5sZXQgemlwX2luaXRmbGFnXG5sZXQgemlwX291dGJ1ZiA9IG51bGxcbmxldCB6aXBfb3V0Y250LCB6aXBfb3V0b2ZmXG5sZXQgemlwX2NvbXBsZXRlXG5sZXQgemlwX3dpbmRvd1xubGV0IHppcF9kX2J1ZlxubGV0IHppcF9sX2J1ZlxubGV0IHppcF9wcmV2XG5sZXQgemlwX2JpX2J1ZlxubGV0IHppcF9iaV92YWxpZFxubGV0IHppcF9ibG9ja19zdGFydFxubGV0IHppcF9pbnNfaFxubGV0IHppcF9oYXNoX2hlYWRcbmxldCB6aXBfcHJldl9tYXRjaFxubGV0IHppcF9tYXRjaF9hdmFpbGFibGVcbmxldCB6aXBfbWF0Y2hfbGVuZ3RoXG5sZXQgemlwX3ByZXZfbGVuZ3RoXG5sZXQgemlwX3N0cnN0YXJ0XG5sZXQgemlwX21hdGNoX3N0YXJ0XG5sZXQgemlwX2VvZmlsZVxubGV0IHppcF9sb29rYWhlYWRcbmxldCB6aXBfbWF4X2NoYWluX2xlbmd0aFxubGV0IHppcF9tYXhfbGF6eV9tYXRjaFxubGV0IHppcF9jb21wcl9sZXZlbFxubGV0IHppcF9nb29kX21hdGNoXG5sZXQgemlwX25pY2VfbWF0Y2hcbmxldCB6aXBfZHluX2x0cmVlXG5sZXQgemlwX2R5bl9kdHJlZVxubGV0IHppcF9zdGF0aWNfbHRyZWVcbmxldCB6aXBfc3RhdGljX2R0cmVlXG5sZXQgemlwX2JsX3RyZWVcbmxldCB6aXBfbF9kZXNjXG5sZXQgemlwX2RfZGVzY1xubGV0IHppcF9ibF9kZXNjXG5sZXQgemlwX2JsX2NvdW50XG5sZXQgemlwX2hlYXBcbmxldCB6aXBfaGVhcF9sZW5cbmxldCB6aXBfaGVhcF9tYXhcbmxldCB6aXBfZGVwdGhcbmxldCB6aXBfbGVuZ3RoX2NvZGVcbmxldCB6aXBfZGlzdF9jb2RlXG5sZXQgemlwX2Jhc2VfbGVuZ3RoXG5sZXQgemlwX2Jhc2VfZGlzdFxubGV0IHppcF9mbGFnX2J1ZlxubGV0IHppcF9sYXN0X2xpdFxubGV0IHppcF9sYXN0X2Rpc3RcbmxldCB6aXBfbGFzdF9mbGFnc1xubGV0IHppcF9mbGFnc1xubGV0IHppcF9mbGFnX2JpdFxubGV0IHppcF9vcHRfbGVuXG5sZXQgemlwX3N0YXRpY19sZW5cbmxldCB6aXBfZGVmbGF0ZV9kYXRhXG5sZXQgemlwX2RlZmxhdGVfcG9zXG5cbi8qIGNvbnN0YW50IHRhYmxlcyAqL1xuY29uc3QgemlwX2V4dHJhX2xiaXRzID0gW1xuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAxLFxuICAxLFxuICAxLFxuICAxLFxuICAyLFxuICAyLFxuICAyLFxuICAyLFxuICAzLFxuICAzLFxuICAzLFxuICAzLFxuICA0LFxuICA0LFxuICA0LFxuICA0LFxuICA1LFxuICA1LFxuICA1LFxuICA1LFxuICAwLFxuXVxuY29uc3QgemlwX2V4dHJhX2RiaXRzID0gW1xuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAxLFxuICAxLFxuICAyLFxuICAyLFxuICAzLFxuICAzLFxuICA0LFxuICA0LFxuICA1LFxuICA1LFxuICA2LFxuICA2LFxuICA3LFxuICA3LFxuICA4LFxuICA4LFxuICA5LFxuICA5LFxuICAxMCxcbiAgMTAsXG4gIDExLFxuICAxMSxcbiAgMTIsXG4gIDEyLFxuICAxMyxcbiAgMTMsXG5dXG5jb25zdCB6aXBfZXh0cmFfYmxiaXRzID0gW1xuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAwLFxuICAyLFxuICAzLFxuICA3LFxuXVxuY29uc3QgemlwX2JsX29yZGVyID0gW1xuICAxNixcbiAgMTcsXG4gIDE4LFxuICAwLFxuICA4LFxuICA3LFxuICA5LFxuICA2LFxuICAxMCxcbiAgNSxcbiAgMTEsXG4gIDQsXG4gIDEyLFxuICAzLFxuICAxMyxcbiAgMixcbiAgMTQsXG4gIDEsXG4gIDE1LFxuXVxuY29uc3QgemlwX2NvbmZpZ3VyYXRpb25fdGFibGUgPSBbXG4gIG5ldyB6aXBfRGVmbGF0ZUNvbmZpZ3VyYXRpb24oMCwgMCwgMCwgMCksXG4gIG5ldyB6aXBfRGVmbGF0ZUNvbmZpZ3VyYXRpb24oNCwgNCwgOCwgNCksXG4gIG5ldyB6aXBfRGVmbGF0ZUNvbmZpZ3VyYXRpb24oNCwgNSwgMTYsIDgpLFxuICBuZXcgemlwX0RlZmxhdGVDb25maWd1cmF0aW9uKDQsIDYsIDMyLCAzMiksXG4gIG5ldyB6aXBfRGVmbGF0ZUNvbmZpZ3VyYXRpb24oNCwgNCwgMTYsIDE2KSxcbiAgbmV3IHppcF9EZWZsYXRlQ29uZmlndXJhdGlvbig4LCAxNiwgMzIsIDMyKSxcbiAgbmV3IHppcF9EZWZsYXRlQ29uZmlndXJhdGlvbig4LCAxNiwgMTI4LCAxMjgpLFxuICBuZXcgemlwX0RlZmxhdGVDb25maWd1cmF0aW9uKDgsIDMyLCAxMjgsIDI1NiksXG4gIG5ldyB6aXBfRGVmbGF0ZUNvbmZpZ3VyYXRpb24oMzIsIDEyOCwgMjU4LCAxMDI0KSxcbiAgbmV3IHppcF9EZWZsYXRlQ29uZmlndXJhdGlvbigzMiwgMjU4LCAyNTgsIDQwOTYpLFxuXVxuXG4vKiBvYmplY3RzIChkZWZsYXRlKSAqL1xuXG5mdW5jdGlvbiB6aXBfRGVmbGF0ZUNUKCkge1xuICB0aGlzLmZjID0gMCAvLyBmcmVxdWVuY3kgY291bnQgb3IgYml0IHN0cmluZ1xuICB0aGlzLmRsID0gMCAvLyBmYXRoZXIgbm9kZSBpbiBIdWZmbWFuIHRyZWUgb3IgbGVuZ3RoIG9mIGJpdCBzdHJpbmdcbn1cblxuZnVuY3Rpb24gemlwX0RlZmxhdGVUcmVlRGVzYygpIHtcbiAgdGhpcy5keW5fdHJlZSA9IG51bGwgLy8gdGhlIGR5bmFtaWMgdHJlZVxuICB0aGlzLnN0YXRpY190cmVlID0gbnVsbCAvLyBjb3JyZXNwb25kaW5nIHN0YXRpYyB0cmVlIG9yIE5VTExcbiAgdGhpcy5leHRyYV9iaXRzID0gbnVsbCAvLyBleHRyYSBiaXRzIGZvciBlYWNoIGNvZGUgb3IgTlVMTFxuICB0aGlzLmV4dHJhX2Jhc2UgPSAwIC8vIGJhc2UgaW5kZXggZm9yIGV4dHJhX2JpdHNcbiAgdGhpcy5lbGVtcyA9IDAgLy8gbWF4IG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgdHJlZVxuICB0aGlzLm1heF9sZW5ndGggPSAwIC8vIG1heCBiaXQgbGVuZ3RoIGZvciB0aGUgY29kZXNcbiAgdGhpcy5tYXhfY29kZSA9IDAgLy8gbGFyZ2VzdCBjb2RlIHdpdGggbm9uIHplcm8gZnJlcXVlbmN5XG59XG5cbi8qIFZhbHVlcyBmb3IgbWF4X2xhenlfbWF0Y2gsIGdvb2RfbWF0Y2ggYW5kIG1heF9jaGFpbl9sZW5ndGgsIGRlcGVuZGluZyBvblxuICogdGhlIGRlc2lyZWQgcGFjayBsZXZlbCAoMC4uOSkuIFRoZSB2YWx1ZXMgZ2l2ZW4gYmVsb3cgaGF2ZSBiZWVuIHR1bmVkIHRvXG4gKiBleGNsdWRlIHdvcnN0IGNhc2UgcGVyZm9ybWFuY2UgZm9yIHBhdGhvbG9naWNhbCBmaWxlcy4gQmV0dGVyIHZhbHVlcyBtYXkgYmVcbiAqIGZvdW5kIGZvciBzcGVjaWZpYyBmaWxlcy5cbiAqL1xuZnVuY3Rpb24gemlwX0RlZmxhdGVDb25maWd1cmF0aW9uKGEsIGIsIGMsIGQpIHtcbiAgdGhpcy5nb29kX2xlbmd0aCA9IGEgLy8gcmVkdWNlIGxhenkgc2VhcmNoIGFib3ZlIHRoaXMgbWF0Y2ggbGVuZ3RoXG4gIHRoaXMubWF4X2xhenkgPSBiIC8vIGRvIG5vdCBwZXJmb3JtIGxhenkgc2VhcmNoIGFib3ZlIHRoaXMgbWF0Y2ggbGVuZ3RoXG4gIHRoaXMubmljZV9sZW5ndGggPSBjIC8vIHF1aXQgc2VhcmNoIGFib3ZlIHRoaXMgbWF0Y2ggbGVuZ3RoXG4gIHRoaXMubWF4X2NoYWluID0gZFxufVxuXG5mdW5jdGlvbiB6aXBfRGVmbGF0ZUJ1ZmZlcigpIHtcbiAgdGhpcy5uZXh0ID0gbnVsbFxuICB0aGlzLmxlbiA9IDBcbiAgdGhpcy5wdHIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB6aXBfT1VUQlVGU0laIH0pXG4gIHRoaXMub2ZmID0gMFxufVxuXG4vKiByb3V0aW5lcyAoZGVmbGF0ZSkgKi9cblxuZnVuY3Rpb24gemlwX2RlZmxhdGVfc3RhcnQobGV2ZWwpIHtcbiAgbGV0IGlcblxuICBpZiAoIWxldmVsKVxuICAgIGxldmVsID0gemlwX0RFRkFVTFRfTEVWRUxcbiAgZWxzZSBpZiAobGV2ZWwgPCAxKVxuICAgIGxldmVsID0gMVxuICBlbHNlIGlmIChsZXZlbCA+IDkpXG4gICAgbGV2ZWwgPSA5XG5cbiAgemlwX2NvbXByX2xldmVsID0gbGV2ZWxcbiAgemlwX2luaXRmbGFnID0gZmFsc2VcbiAgemlwX2VvZmlsZSA9IGZhbHNlXG4gIGlmICh6aXBfb3V0YnVmICE9IG51bGwpXG4gICAgcmV0dXJuXG5cbiAgemlwX2ZyZWVfcXVldWUgPSB6aXBfcWhlYWQgPSB6aXBfcXRhaWwgPSBudWxsXG4gIHppcF9vdXRidWYgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB6aXBfT1VUQlVGU0laIH0pXG4gIHppcF93aW5kb3cgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB6aXBfd2luZG93X3NpemUgfSlcbiAgemlwX2RfYnVmID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogemlwX0RJU1RfQlVGU0laRSB9KVxuICB6aXBfbF9idWYgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB6aXBfSU5CVUZTSVogKyB6aXBfSU5CVUZfRVhUUkEgfSlcbiAgemlwX3ByZXYgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxIDw8IHppcF9CSVRTIH0pXG4gIHppcF9keW5fbHRyZWUgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB6aXBfSEVBUF9TSVpFIH0pXG4gIGZvciAoaSA9IDA7IGkgPCB6aXBfSEVBUF9TSVpFOyBpKyspXG4gICAgemlwX2R5bl9sdHJlZVtpXSA9IG5ldyB6aXBfRGVmbGF0ZUNUKClcblxuICB6aXBfZHluX2R0cmVlID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMiAqIHppcF9EX0NPREVTICsgMSB9KVxuICBmb3IgKGkgPSAwOyBpIDwgMiAqIHppcF9EX0NPREVTICsgMTsgaSsrKVxuICAgIHppcF9keW5fZHRyZWVbaV0gPSBuZXcgemlwX0RlZmxhdGVDVCgpXG5cbiAgemlwX3N0YXRpY19sdHJlZSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHppcF9MX0NPREVTICsgMiB9KVxuICBmb3IgKGkgPSAwOyBpIDwgemlwX0xfQ09ERVMgKyAyOyBpKyspXG4gICAgemlwX3N0YXRpY19sdHJlZVtpXSA9IG5ldyB6aXBfRGVmbGF0ZUNUKClcblxuICB6aXBfc3RhdGljX2R0cmVlID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogemlwX0RfQ09ERVMgfSlcbiAgZm9yIChpID0gMDsgaSA8IHppcF9EX0NPREVTOyBpKyspXG4gICAgemlwX3N0YXRpY19kdHJlZVtpXSA9IG5ldyB6aXBfRGVmbGF0ZUNUKClcblxuICB6aXBfYmxfdHJlZSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDIgKiB6aXBfQkxfQ09ERVMgKyAxIH0pXG4gIGZvciAoaSA9IDA7IGkgPCAyICogemlwX0JMX0NPREVTICsgMTsgaSsrKVxuICAgIHppcF9ibF90cmVlW2ldID0gbmV3IHppcF9EZWZsYXRlQ1QoKVxuXG4gIHppcF9sX2Rlc2MgPSBuZXcgemlwX0RlZmxhdGVUcmVlRGVzYygpXG4gIHppcF9kX2Rlc2MgPSBuZXcgemlwX0RlZmxhdGVUcmVlRGVzYygpXG4gIHppcF9ibF9kZXNjID0gbmV3IHppcF9EZWZsYXRlVHJlZURlc2MoKVxuICB6aXBfYmxfY291bnQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB6aXBfTUFYX0JJVFMgKyAxIH0pXG4gIHppcF9oZWFwID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMiAqIHppcF9MX0NPREVTICsgMSB9KVxuICB6aXBfZGVwdGggPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyICogemlwX0xfQ09ERVMgKyAxIH0pXG4gIHppcF9sZW5ndGhfY29kZSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHppcF9NQVhfTUFUQ0ggLSB6aXBfTUlOX01BVENIICsgMSB9KVxuICB6aXBfZGlzdF9jb2RlID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNTEyIH0pXG4gIHppcF9iYXNlX2xlbmd0aCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHppcF9MRU5HVEhfQ09ERVMgfSlcbiAgemlwX2Jhc2VfZGlzdCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHppcF9EX0NPREVTIH0pXG4gIHppcF9mbGFnX2J1ZiA9IEFycmF5LmZyb20oeyBsZW5ndGg6IE51bWJlci5wYXJzZUludCh6aXBfTElUX0JVRlNJWkUgLyA4KSB9KVxufVxuXG5mdW5jdGlvbiB6aXBfZGVmbGF0ZV9lbmQoKSB7XG4gIHppcF9mcmVlX3F1ZXVlID0gemlwX3FoZWFkID0gemlwX3F0YWlsID0gbnVsbFxuICB6aXBfb3V0YnVmID0gbnVsbFxuICB6aXBfd2luZG93ID0gbnVsbFxuICB6aXBfZF9idWYgPSBudWxsXG4gIHppcF9sX2J1ZiA9IG51bGxcbiAgemlwX3ByZXYgPSBudWxsXG4gIHppcF9keW5fbHRyZWUgPSBudWxsXG4gIHppcF9keW5fZHRyZWUgPSBudWxsXG4gIHppcF9zdGF0aWNfbHRyZWUgPSBudWxsXG4gIHppcF9zdGF0aWNfZHRyZWUgPSBudWxsXG4gIHppcF9ibF90cmVlID0gbnVsbFxuICB6aXBfbF9kZXNjID0gbnVsbFxuICB6aXBfZF9kZXNjID0gbnVsbFxuICB6aXBfYmxfZGVzYyA9IG51bGxcbiAgemlwX2JsX2NvdW50ID0gbnVsbFxuICB6aXBfaGVhcCA9IG51bGxcbiAgemlwX2RlcHRoID0gbnVsbFxuICB6aXBfbGVuZ3RoX2NvZGUgPSBudWxsXG4gIHppcF9kaXN0X2NvZGUgPSBudWxsXG4gIHppcF9iYXNlX2xlbmd0aCA9IG51bGxcbiAgemlwX2Jhc2VfZGlzdCA9IG51bGxcbiAgemlwX2ZsYWdfYnVmID0gbnVsbFxufVxuXG5mdW5jdGlvbiB6aXBfcmV1c2VfcXVldWUocCkge1xuICBwLm5leHQgPSB6aXBfZnJlZV9xdWV1ZVxuICB6aXBfZnJlZV9xdWV1ZSA9IHBcbn1cblxuZnVuY3Rpb24gemlwX25ld19xdWV1ZSgpIHtcbiAgbGV0IHBcblxuICBpZiAoemlwX2ZyZWVfcXVldWUgIT0gbnVsbCkge1xuICAgIHAgPSB6aXBfZnJlZV9xdWV1ZVxuICAgIHppcF9mcmVlX3F1ZXVlID0gemlwX2ZyZWVfcXVldWUubmV4dFxuICB9XG4gIGVsc2Uge1xuICAgIHAgPSBuZXcgemlwX0RlZmxhdGVCdWZmZXIoKVxuICB9XG4gIHAubmV4dCA9IG51bGxcbiAgcC5sZW4gPSBwLm9mZiA9IDBcblxuICByZXR1cm4gcFxufVxuXG5mdW5jdGlvbiB6aXBfaGVhZDEoaSkge1xuICByZXR1cm4gemlwX3ByZXZbemlwX1dTSVpFICsgaV1cbn1cblxuZnVuY3Rpb24gemlwX2hlYWQyKGksIHZhbCkge1xuICByZXR1cm4gKHppcF9wcmV2W3ppcF9XU0laRSArIGldID0gdmFsKVxufVxuXG4vKiBwdXRfYnl0ZSBpcyB1c2VkIGZvciB0aGUgY29tcHJlc3NlZCBvdXRwdXQsIHB1dF91Ynl0ZSBmb3IgdGhlXG4gKiB1bmNvbXByZXNzZWQgb3V0cHV0LiBIb3dldmVyIHVubHp3KCkgdXNlcyB3aW5kb3cgZm9yIGl0c1xuICogc3VmZml4IHRhYmxlIGluc3RlYWQgb2YgaXRzIG91dHB1dCBidWZmZXIsIHNvIGl0IGRvZXMgbm90IHVzZSBwdXRfdWJ5dGVcbiAqICh0byBiZSBjbGVhbmVkIHVwKS5cbiAqL1xuZnVuY3Rpb24gemlwX3B1dF9ieXRlKGMpIHtcbiAgemlwX291dGJ1Zlt6aXBfb3V0b2ZmICsgemlwX291dGNudCsrXSA9IGNcbiAgaWYgKHppcF9vdXRvZmYgKyB6aXBfb3V0Y250ID09IHppcF9PVVRCVUZTSVopXG4gICAgemlwX3FvdXRidWYoKVxufVxuXG4vKiBPdXRwdXQgYSAxNiBiaXQgdmFsdWUsIGxzYiBmaXJzdCAqL1xuZnVuY3Rpb24gemlwX3B1dF9zaG9ydCh3KSB7XG4gIHcgJj0gMHhGRkZGXG4gIGlmICh6aXBfb3V0b2ZmICsgemlwX291dGNudCA8IHppcF9PVVRCVUZTSVogLSAyKSB7XG4gICAgemlwX291dGJ1Zlt6aXBfb3V0b2ZmICsgemlwX291dGNudCsrXSA9IHcgJiAweEZGXG4gICAgemlwX291dGJ1Zlt6aXBfb3V0b2ZmICsgemlwX291dGNudCsrXSA9IHcgPj4+IDhcbiAgfVxuICBlbHNlIHtcbiAgICB6aXBfcHV0X2J5dGUodyAmIDB4RkYpXG4gICAgemlwX3B1dF9ieXRlKHcgPj4+IDgpXG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEluc2VydCBzdHJpbmcgcyBpbiB0aGUgZGljdGlvbmFyeSBhbmQgc2V0IG1hdGNoX2hlYWQgdG8gdGhlIHByZXZpb3VzIGhlYWRcbiAqIG9mIHRoZSBoYXNoIGNoYWluICh0aGUgbW9zdCByZWNlbnQgc3RyaW5nIHdpdGggc2FtZSBoYXNoIGtleSkuIFJldHVyblxuICogdGhlIHByZXZpb3VzIGxlbmd0aCBvZiB0aGUgaGFzaCBjaGFpbi5cbiAqIElOICBhc3NlcnRpb246IGFsbCBjYWxscyB0byB0byBJTlNFUlRfU1RSSU5HIGFyZSBtYWRlIHdpdGggY29uc2VjdXRpdmVcbiAqICAgIGlucHV0IGNoYXJhY3RlcnMgYW5kIHRoZSBmaXJzdCBNSU5fTUFUQ0ggYnl0ZXMgb2YgcyBhcmUgdmFsaWRcbiAqICAgIChleGNlcHQgZm9yIHRoZSBsYXN0IE1JTl9NQVRDSC0xIGJ5dGVzIG9mIHRoZSBpbnB1dCBmaWxlKS5cbiAqL1xuZnVuY3Rpb24gemlwX0lOU0VSVF9TVFJJTkcoKSB7XG4gIHppcF9pbnNfaFxuICAgID0gKCh6aXBfaW5zX2ggPDwgemlwX0hfU0hJRlQpXG4gICAgXiAoemlwX3dpbmRvd1t6aXBfc3Ryc3RhcnQgKyB6aXBfTUlOX01BVENIIC0gMV0gJiAweEZGKSlcbiAgICAmIHppcF9IQVNIX01BU0tcbiAgemlwX2hhc2hfaGVhZCA9IHppcF9oZWFkMSh6aXBfaW5zX2gpXG4gIHppcF9wcmV2W3ppcF9zdHJzdGFydCAmIHppcF9XTUFTS10gPSB6aXBfaGFzaF9oZWFkXG4gIHppcF9oZWFkMih6aXBfaW5zX2gsIHppcF9zdHJzdGFydClcbn1cblxuLyogU2VuZCBhIGNvZGUgb2YgdGhlIGdpdmVuIHRyZWUuIGMgYW5kIHRyZWUgbXVzdCBub3QgaGF2ZSBzaWRlIGVmZmVjdHMgKi9cbmZ1bmN0aW9uIHppcF9TRU5EX0NPREUoYywgdHJlZSkge1xuICB6aXBfc2VuZF9iaXRzKHRyZWVbY10uZmMsIHRyZWVbY10uZGwpXG59XG5cbi8qIE1hcHBpbmcgZnJvbSBhIGRpc3RhbmNlIHRvIGEgZGlzdGFuY2UgY29kZS4gZGlzdCBpcyB0aGUgZGlzdGFuY2UgLSAxIGFuZFxuICogbXVzdCBub3QgaGF2ZSBzaWRlIGVmZmVjdHMuIGRpc3RfY29kZVsyNTZdIGFuZCBkaXN0X2NvZGVbMjU3XSBhcmUgbmV2ZXJcbiAqIHVzZWQuXG4gKi9cbmZ1bmN0aW9uIHppcF9EX0NPREUoZGlzdCkge1xuICByZXR1cm4gKFxuICAgIChkaXN0IDwgMjU2ID8gemlwX2Rpc3RfY29kZVtkaXN0XSA6IHppcF9kaXN0X2NvZGVbMjU2ICsgKGRpc3QgPj4gNyldKSAmIDB4RkZcbiAgKVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29tcGFyZXMgdG8gc3VidHJlZXMsIHVzaW5nIHRoZSB0cmVlIGRlcHRoIGFzIHRpZSBicmVha2VyIHdoZW5cbiAqIHRoZSBzdWJ0cmVlcyBoYXZlIGVxdWFsIGZyZXF1ZW5jeS4gVGhpcyBtaW5pbWl6ZXMgdGhlIHdvcnN0IGNhc2UgbGVuZ3RoLlxuICovXG5mdW5jdGlvbiB6aXBfU01BTExFUih0cmVlLCBuLCBtKSB7XG4gIHJldHVybiAoXG4gICAgdHJlZVtuXS5mYyA8IHRyZWVbbV0uZmNcbiAgICB8fCAodHJlZVtuXS5mYyA9PSB0cmVlW21dLmZjICYmIHppcF9kZXB0aFtuXSA8PSB6aXBfZGVwdGhbbV0pXG4gIClcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIHJlYWQgc3RyaW5nIGRhdGFcbiAqL1xuZnVuY3Rpb24gemlwX3JlYWRfYnVmZihidWZmLCBvZmZzZXQsIG4pIHtcbiAgbGV0IGlcbiAgZm9yIChpID0gMDsgaSA8IG4gJiYgemlwX2RlZmxhdGVfcG9zIDwgemlwX2RlZmxhdGVfZGF0YS5sZW5ndGg7IGkrKylcbiAgICBidWZmW29mZnNldCArIGldID0gemlwX2RlZmxhdGVfZGF0YS5jaGFyQ29kZUF0KHppcF9kZWZsYXRlX3BvcysrKSAmIDB4RkZcblxuICByZXR1cm4gaVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW5pdGlhbGl6ZSB0aGUgXCJsb25nZXN0IG1hdGNoXCIgcm91dGluZXMgZm9yIGEgbmV3IGZpbGVcbiAqL1xuZnVuY3Rpb24gemlwX2xtX2luaXQoKSB7XG4gIGxldCBqXG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgaGFzaCB0YWJsZS4gKi9cbiAgZm9yIChcbiAgICBqID0gMDtcbiAgICBqIDwgemlwX0hBU0hfU0laRTtcbiAgICBqKysgLy9cdHppcF9oZWFkMihqLCB6aXBfTklMKTtcbiAgKVxuICAgIHppcF9wcmV2W3ppcF9XU0laRSArIGpdID0gMFxuXG4gIC8qIHByZXYgd2lsbCBiZSBpbml0aWFsaXplZCBvbiB0aGUgZmx5ICovXG5cbiAgLyogU2V0IHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyczpcbiAgICovXG4gIHppcF9tYXhfbGF6eV9tYXRjaCA9IHppcF9jb25maWd1cmF0aW9uX3RhYmxlW3ppcF9jb21wcl9sZXZlbF0ubWF4X2xhenlcbiAgemlwX2dvb2RfbWF0Y2ggPSB6aXBfY29uZmlndXJhdGlvbl90YWJsZVt6aXBfY29tcHJfbGV2ZWxdLmdvb2RfbGVuZ3RoXG4gIGlmICghemlwX0ZVTExfU0VBUkNIKVxuICAgIHppcF9uaWNlX21hdGNoID0gemlwX2NvbmZpZ3VyYXRpb25fdGFibGVbemlwX2NvbXByX2xldmVsXS5uaWNlX2xlbmd0aFxuXG4gIHppcF9tYXhfY2hhaW5fbGVuZ3RoID0gemlwX2NvbmZpZ3VyYXRpb25fdGFibGVbemlwX2NvbXByX2xldmVsXS5tYXhfY2hhaW5cblxuICB6aXBfc3Ryc3RhcnQgPSAwXG4gIHppcF9ibG9ja19zdGFydCA9IDBcblxuICB6aXBfbG9va2FoZWFkID0gemlwX3JlYWRfYnVmZih6aXBfd2luZG93LCAwLCAyICogemlwX1dTSVpFKVxuICBpZiAoemlwX2xvb2thaGVhZCA8PSAwKSB7XG4gICAgemlwX2VvZmlsZSA9IHRydWVcbiAgICB6aXBfbG9va2FoZWFkID0gMFxuICAgIHJldHVyblxuICB9XG4gIHppcF9lb2ZpbGUgPSBmYWxzZVxuICAvKiBNYWtlIHN1cmUgdGhhdCB3ZSBhbHdheXMgaGF2ZSBlbm91Z2ggbG9va2FoZWFkLiBUaGlzIGlzIGltcG9ydGFudFxuICAgKiBpZiBpbnB1dCBjb21lcyBmcm9tIGEgZGV2aWNlIHN1Y2ggYXMgYSB0dHkuXG4gICAqL1xuICB3aGlsZSAoemlwX2xvb2thaGVhZCA8IHppcF9NSU5fTE9PS0FIRUFEICYmICF6aXBfZW9maWxlKVxuICAgIHppcF9maWxsX3dpbmRvdygpXG5cbiAgLyogSWYgbG9va2FoZWFkIDwgTUlOX01BVENILCBpbnNfaCBpcyBnYXJiYWdlLCBidXQgdGhpcyBpc1xuICAgKiBub3QgaW1wb3J0YW50IHNpbmNlIG9ubHkgbGl0ZXJhbCBieXRlcyB3aWxsIGJlIGVtaXR0ZWQuXG4gICAqL1xuICB6aXBfaW5zX2ggPSAwXG4gIGZvciAoaiA9IDA7IGogPCB6aXBfTUlOX01BVENIIC0gMTsgaisrKSB7XG4gICAgLy8gICAgICBVUERBVEVfSEFTSChpbnNfaCwgd2luZG93W2pdKTtcbiAgICB6aXBfaW5zX2hcbiAgICAgID0gKCh6aXBfaW5zX2ggPDwgemlwX0hfU0hJRlQpIF4gKHppcF93aW5kb3dbal0gJiAweEZGKSkgJiB6aXBfSEFTSF9NQVNLXG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNldCBtYXRjaF9zdGFydCB0byB0aGUgbG9uZ2VzdCBtYXRjaCBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gc3RyaW5nIGFuZFxuICogcmV0dXJuIGl0cyBsZW5ndGguIE1hdGNoZXMgc2hvcnRlciBvciBlcXVhbCB0byBwcmV2X2xlbmd0aCBhcmUgZGlzY2FyZGVkLFxuICogaW4gd2hpY2ggY2FzZSB0aGUgcmVzdWx0IGlzIGVxdWFsIHRvIHByZXZfbGVuZ3RoIGFuZCBtYXRjaF9zdGFydCBpc1xuICogZ2FyYmFnZS5cbiAqIElOIGFzc2VydGlvbnM6IGN1cl9tYXRjaCBpcyB0aGUgaGVhZCBvZiB0aGUgaGFzaCBjaGFpbiBmb3IgdGhlIGN1cnJlbnRcbiAqICAgc3RyaW5nIChzdHJzdGFydCkgYW5kIGl0cyBkaXN0YW5jZSBpcyA8PSBNQVhfRElTVCwgYW5kIHByZXZfbGVuZ3RoID49IDFcbiAqL1xuZnVuY3Rpb24gemlwX2xvbmdlc3RfbWF0Y2goY3VyX21hdGNoKSB7XG4gIGxldCBjaGFpbl9sZW5ndGggPSB6aXBfbWF4X2NoYWluX2xlbmd0aCAvLyBtYXggaGFzaCBjaGFpbiBsZW5ndGhcbiAgbGV0IHNjYW5wID0gemlwX3N0cnN0YXJ0IC8vIGN1cnJlbnQgc3RyaW5nXG4gIGxldCBtYXRjaHAgLy8gbWF0Y2hlZCBzdHJpbmdcbiAgbGV0IGxlbiAvLyBsZW5ndGggb2YgY3VycmVudCBtYXRjaFxuICBsZXQgYmVzdF9sZW4gPSB6aXBfcHJldl9sZW5ndGggLy8gYmVzdCBtYXRjaCBsZW5ndGggc28gZmFyXG5cbiAgLyogU3RvcCB3aGVuIGN1cl9tYXRjaCBiZWNvbWVzIDw9IGxpbWl0LiBUbyBzaW1wbGlmeSB0aGUgY29kZSxcbiAgICogd2UgcHJldmVudCBtYXRjaGVzIHdpdGggdGhlIHN0cmluZyBvZiB3aW5kb3cgaW5kZXggMC5cbiAgICovXG4gIGNvbnN0IGxpbWl0XG4gICAgPSB6aXBfc3Ryc3RhcnQgPiB6aXBfTUFYX0RJU1QgPyB6aXBfc3Ryc3RhcnQgLSB6aXBfTUFYX0RJU1QgOiB6aXBfTklMXG5cbiAgY29uc3Qgc3RyZW5kcCA9IHppcF9zdHJzdGFydCArIHppcF9NQVhfTUFUQ0hcbiAgbGV0IHNjYW5fZW5kMSA9IHppcF93aW5kb3dbc2NhbnAgKyBiZXN0X2xlbiAtIDFdXG4gIGxldCBzY2FuX2VuZCA9IHppcF93aW5kb3dbc2NhbnAgKyBiZXN0X2xlbl1cblxuICAvKiBEbyBub3Qgd2FzdGUgdG9vIG11Y2ggdGltZSBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBnb29kIG1hdGNoOiAqL1xuICBpZiAoemlwX3ByZXZfbGVuZ3RoID49IHppcF9nb29kX21hdGNoKVxuICAgIGNoYWluX2xlbmd0aCA+Pj0gMlxuXG4gIC8vICBBc3NlcnQoZW5jb2Rlci0+c3Ryc3RhcnQgPD0gd2luZG93X3NpemUtTUlOX0xPT0tBSEVBRCwgXCJpbnN1ZmZpY2llbnQgbG9va2FoZWFkXCIpO1xuXG4gIGRvIHtcbiAgICAvLyAgICBBc3NlcnQoY3VyX21hdGNoIDwgZW5jb2Rlci0+c3Ryc3RhcnQsIFwibm8gZnV0dXJlXCIpO1xuICAgIG1hdGNocCA9IGN1cl9tYXRjaFxuXG4gICAgLyogU2tpcCB0byBuZXh0IG1hdGNoIGlmIHRoZSBtYXRjaCBsZW5ndGggY2Fubm90IGluY3JlYXNlXG4gICAgICogb3IgaWYgdGhlIG1hdGNoIGxlbmd0aCBpcyBsZXNzIHRoYW4gMjpcbiAgICAgKi9cbiAgICBpZiAoXG4gICAgICB6aXBfd2luZG93W21hdGNocCArIGJlc3RfbGVuXSAhPSBzY2FuX2VuZFxuICAgICAgfHwgemlwX3dpbmRvd1ttYXRjaHAgKyBiZXN0X2xlbiAtIDFdICE9IHNjYW5fZW5kMVxuICAgICAgfHwgemlwX3dpbmRvd1ttYXRjaHBdICE9IHppcF93aW5kb3dbc2NhbnBdXG4gICAgICB8fCB6aXBfd2luZG93WysrbWF0Y2hwXSAhPSB6aXBfd2luZG93W3NjYW5wICsgMV1cbiAgICApXG4gICAgICBjb250aW51ZVxuXG4gICAgLyogVGhlIGNoZWNrIGF0IGJlc3RfbGVuLTEgY2FuIGJlIHJlbW92ZWQgYmVjYXVzZSBpdCB3aWxsIGJlIG1hZGVcbiAgICAgKiBhZ2FpbiBsYXRlci4gKFRoaXMgaGV1cmlzdGljIGlzIG5vdCBhbHdheXMgYSB3aW4uKVxuICAgICAqIEl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gY29tcGFyZSBzY2FuWzJdIGFuZCBtYXRjaFsyXSBzaW5jZSB0aGV5XG4gICAgICogYXJlIGFsd2F5cyBlcXVhbCB3aGVuIHRoZSBvdGhlciBieXRlcyBtYXRjaCwgZ2l2ZW4gdGhhdFxuICAgICAqIHRoZSBoYXNoIGtleXMgYXJlIGVxdWFsIGFuZCB0aGF0IEhBU0hfQklUUyA+PSA4LlxuICAgICAqL1xuICAgIHNjYW5wICs9IDJcbiAgICBtYXRjaHArK1xuXG4gICAgLyogV2UgY2hlY2sgZm9yIGluc3VmZmljaWVudCBsb29rYWhlYWQgb25seSBldmVyeSA4dGggY29tcGFyaXNvbjtcbiAgICAgKiB0aGUgMjU2dGggY2hlY2sgd2lsbCBiZSBtYWRlIGF0IHN0cnN0YXJ0KzI1OC5cbiAgICAgKi9cbiAgICBkbyB7fSB3aGlsZSAoXG4gICAgICB6aXBfd2luZG93Wysrc2NhbnBdID09IHppcF93aW5kb3dbKyttYXRjaHBdXG4gICAgICAmJiB6aXBfd2luZG93Wysrc2NhbnBdID09IHppcF93aW5kb3dbKyttYXRjaHBdXG4gICAgICAmJiB6aXBfd2luZG93Wysrc2NhbnBdID09IHppcF93aW5kb3dbKyttYXRjaHBdXG4gICAgICAmJiB6aXBfd2luZG93Wysrc2NhbnBdID09IHppcF93aW5kb3dbKyttYXRjaHBdXG4gICAgICAmJiB6aXBfd2luZG93Wysrc2NhbnBdID09IHppcF93aW5kb3dbKyttYXRjaHBdXG4gICAgICAmJiB6aXBfd2luZG93Wysrc2NhbnBdID09IHppcF93aW5kb3dbKyttYXRjaHBdXG4gICAgICAmJiB6aXBfd2luZG93Wysrc2NhbnBdID09IHppcF93aW5kb3dbKyttYXRjaHBdXG4gICAgICAmJiB6aXBfd2luZG93Wysrc2NhbnBdID09IHppcF93aW5kb3dbKyttYXRjaHBdXG4gICAgICAmJiBzY2FucCA8IHN0cmVuZHBcbiAgICApXG5cbiAgICBsZW4gPSB6aXBfTUFYX01BVENIIC0gKHN0cmVuZHAgLSBzY2FucClcbiAgICBzY2FucCA9IHN0cmVuZHAgLSB6aXBfTUFYX01BVENIXG5cbiAgICBpZiAobGVuID4gYmVzdF9sZW4pIHtcbiAgICAgIHppcF9tYXRjaF9zdGFydCA9IGN1cl9tYXRjaFxuICAgICAgYmVzdF9sZW4gPSBsZW5cbiAgICAgIGlmICh6aXBfRlVMTF9TRUFSQ0gpIHtcbiAgICAgICAgaWYgKGxlbiA+PSB6aXBfTUFYX01BVENIKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChsZW4gPj0gemlwX25pY2VfbWF0Y2gpIHsgYnJlYWsgfVxuXG4gICAgICBzY2FuX2VuZDEgPSB6aXBfd2luZG93W3NjYW5wICsgYmVzdF9sZW4gLSAxXVxuICAgICAgc2Nhbl9lbmQgPSB6aXBfd2luZG93W3NjYW5wICsgYmVzdF9sZW5dXG4gICAgfVxuICB9IHdoaWxlIChcbiAgICAoY3VyX21hdGNoID0gemlwX3ByZXZbY3VyX21hdGNoICYgemlwX1dNQVNLXSkgPiBsaW1pdFxuICAgICYmIC0tY2hhaW5fbGVuZ3RoICE9IDBcbiAgKVxuXG4gIHJldHVybiBiZXN0X2xlblxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRmlsbCB0aGUgd2luZG93IHdoZW4gdGhlIGxvb2thaGVhZCBiZWNvbWVzIGluc3VmZmljaWVudC5cbiAqIFVwZGF0ZXMgc3Ryc3RhcnQgYW5kIGxvb2thaGVhZCwgYW5kIHNldHMgZW9maWxlIGlmIGVuZCBvZiBpbnB1dCBmaWxlLlxuICogSU4gYXNzZXJ0aW9uOiBsb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEICYmIHN0cnN0YXJ0ICsgbG9va2FoZWFkID4gMFxuICogT1VUIGFzc2VydGlvbnM6IGF0IGxlYXN0IG9uZSBieXRlIGhhcyBiZWVuIHJlYWQsIG9yIGVvZmlsZSBpcyBzZXQ7XG4gKiAgICBmaWxlIHJlYWRzIGFyZSBwZXJmb3JtZWQgZm9yIGF0IGxlYXN0IHR3byBieXRlcyAocmVxdWlyZWQgZm9yIHRoZVxuICogICAgdHJhbnNsYXRlX2VvbCBvcHRpb24pLlxuICovXG5mdW5jdGlvbiB6aXBfZmlsbF93aW5kb3coKSB7XG4gIGxldCBuLCBtXG5cbiAgLy8gQW1vdW50IG9mIGZyZWUgc3BhY2UgYXQgdGhlIGVuZCBvZiB0aGUgd2luZG93LlxuICBsZXQgbW9yZSA9IHppcF93aW5kb3dfc2l6ZSAtIHppcF9sb29rYWhlYWQgLSB6aXBfc3Ryc3RhcnRcblxuICAvKiBJZiB0aGUgd2luZG93IGlzIGFsbW9zdCBmdWxsIGFuZCB0aGVyZSBpcyBpbnN1ZmZpY2llbnQgbG9va2FoZWFkLFxuICAgKiBtb3ZlIHRoZSB1cHBlciBoYWxmIHRvIHRoZSBsb3dlciBvbmUgdG8gbWFrZSByb29tIGluIHRoZSB1cHBlciBoYWxmLlxuICAgKi9cbiAgaWYgKG1vcmUgPT0gLTEpIHtcbiAgICAvKiBWZXJ5IHVubGlrZWx5LCBidXQgcG9zc2libGUgb24gMTYgYml0IG1hY2hpbmUgaWYgc3Ryc3RhcnQgPT0gMFxuICAgICAqIGFuZCBsb29rYWhlYWQgPT0gMSAoaW5wdXQgZG9uZSBvbmUgYnl0ZSBhdCB0aW1lKVxuICAgICAqL1xuICAgIG1vcmUtLVxuICB9XG4gIGVsc2UgaWYgKHppcF9zdHJzdGFydCA+PSB6aXBfV1NJWkUgKyB6aXBfTUFYX0RJU1QpIHtcbiAgICAvKiBCeSB0aGUgSU4gYXNzZXJ0aW9uLCB0aGUgd2luZG93IGlzIG5vdCBlbXB0eSBzbyB3ZSBjYW4ndCBjb25mdXNlXG4gICAgICogbW9yZSA9PSAwIHdpdGggbW9yZSA9PSA2NEsgb24gYSAxNiBiaXQgbWFjaGluZS5cbiAgICAgKi9cbiAgICAvL1x0QXNzZXJ0KHdpbmRvd19zaXplID09ICh1bGcpMipXU0laRSwgXCJubyBzbGlkaW5nIHdpdGggQklHX01FTVwiKTtcblxuICAgIC8vXHRTeXN0ZW0uYXJyYXljb3B5KHdpbmRvdywgV1NJWkUsIHdpbmRvdywgMCwgV1NJWkUpO1xuICAgIGZvciAobiA9IDA7IG4gPCB6aXBfV1NJWkU7IG4rKylcbiAgICAgIHppcF93aW5kb3dbbl0gPSB6aXBfd2luZG93W24gKyB6aXBfV1NJWkVdXG5cbiAgICB6aXBfbWF0Y2hfc3RhcnQgLT0gemlwX1dTSVpFXG4gICAgemlwX3N0cnN0YXJ0IC09IHppcF9XU0laRSAvKiB3ZSBub3cgaGF2ZSBzdHJzdGFydCA+PSBNQVhfRElTVDogKi9cbiAgICB6aXBfYmxvY2tfc3RhcnQgLT0gemlwX1dTSVpFXG5cbiAgICBmb3IgKG4gPSAwOyBuIDwgemlwX0hBU0hfU0laRTsgbisrKSB7XG4gICAgICBtID0gemlwX2hlYWQxKG4pXG4gICAgICB6aXBfaGVhZDIobiwgbSA+PSB6aXBfV1NJWkUgPyBtIC0gemlwX1dTSVpFIDogemlwX05JTClcbiAgICB9XG4gICAgZm9yIChuID0gMDsgbiA8IHppcF9XU0laRTsgbisrKSB7XG4gICAgICAvKiBJZiBuIGlzIG5vdCBvbiBhbnkgaGFzaCBjaGFpbiwgcHJldltuXSBpcyBnYXJiYWdlIGJ1dFxuICAgICAgICogaXRzIHZhbHVlIHdpbGwgbmV2ZXIgYmUgdXNlZC5cbiAgICAgICAqL1xuICAgICAgbSA9IHppcF9wcmV2W25dXG4gICAgICB6aXBfcHJldltuXSA9IG0gPj0gemlwX1dTSVpFID8gbSAtIHppcF9XU0laRSA6IHppcF9OSUxcbiAgICB9XG4gICAgbW9yZSArPSB6aXBfV1NJWkVcbiAgfVxuICAvLyBBdCB0aGlzIHBvaW50LCBtb3JlID49IDJcbiAgaWYgKCF6aXBfZW9maWxlKSB7XG4gICAgbiA9IHppcF9yZWFkX2J1ZmYoemlwX3dpbmRvdywgemlwX3N0cnN0YXJ0ICsgemlwX2xvb2thaGVhZCwgbW9yZSlcbiAgICBpZiAobiA8PSAwKVxuICAgICAgemlwX2VvZmlsZSA9IHRydWVcbiAgICBlbHNlXG4gICAgICB6aXBfbG9va2FoZWFkICs9IG5cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUHJvY2Vzc2VzIGEgbmV3IGlucHV0IGZpbGUgYW5kIHJldHVybiBpdHMgY29tcHJlc3NlZCBsZW5ndGguIFRoaXNcbiAqIGZ1bmN0aW9uIGRvZXMgbm90IHBlcmZvcm0gbGF6eSBldmFsdWF0aW9ub2YgbWF0Y2hlcyBhbmQgaW5zZXJ0c1xuICogbmV3IHN0cmluZ3MgaW4gdGhlIGRpY3Rpb25hcnkgb25seSBmb3IgdW5tYXRjaGVkIHN0cmluZ3Mgb3IgZm9yIHNob3J0XG4gKiBtYXRjaGVzLiBJdCBpcyB1c2VkIG9ubHkgZm9yIHRoZSBmYXN0IGNvbXByZXNzaW9uIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIHppcF9kZWZsYXRlX2Zhc3QoKSB7XG4gIHdoaWxlICh6aXBfbG9va2FoZWFkICE9IDAgJiYgemlwX3FoZWFkID09IG51bGwpIHtcbiAgICB2YXIgZmx1c2ggLy8gc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkXG5cbiAgICAvKiBJbnNlcnQgdGhlIHN0cmluZyB3aW5kb3dbc3Ryc3RhcnQgLi4gc3Ryc3RhcnQrMl0gaW4gdGhlXG4gICAgICogZGljdGlvbmFyeSwgYW5kIHNldCBoYXNoX2hlYWQgdG8gdGhlIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW46XG4gICAgICovXG4gICAgemlwX0lOU0VSVF9TVFJJTkcoKVxuXG4gICAgLyogRmluZCB0aGUgbG9uZ2VzdCBtYXRjaCwgZGlzY2FyZGluZyB0aG9zZSA8PSBwcmV2X2xlbmd0aC5cbiAgICAgKiBBdCB0aGlzIHBvaW50IHdlIGhhdmUgYWx3YXlzIG1hdGNoX2xlbmd0aCA8IE1JTl9NQVRDSFxuICAgICAqL1xuICAgIGlmIChcbiAgICAgIHppcF9oYXNoX2hlYWQgIT0gemlwX05JTFxuICAgICAgJiYgemlwX3N0cnN0YXJ0IC0gemlwX2hhc2hfaGVhZCA8PSB6aXBfTUFYX0RJU1RcbiAgICApIHtcbiAgICAgIC8qIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLCB3ZSBwcmV2ZW50IG1hdGNoZXMgd2l0aCB0aGUgc3RyaW5nXG4gICAgICAgKiBvZiB3aW5kb3cgaW5kZXggMCAoaW4gcGFydGljdWxhciB3ZSBoYXZlIHRvIGF2b2lkIGEgbWF0Y2hcbiAgICAgICAqIG9mIHRoZSBzdHJpbmcgd2l0aCBpdHNlbGYgYXQgdGhlIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWxlKS5cbiAgICAgICAqL1xuICAgICAgemlwX21hdGNoX2xlbmd0aCA9IHppcF9sb25nZXN0X21hdGNoKHppcF9oYXNoX2hlYWQpXG4gICAgICAvKiBsb25nZXN0X21hdGNoKCkgc2V0cyBtYXRjaF9zdGFydCAqL1xuICAgICAgaWYgKHppcF9tYXRjaF9sZW5ndGggPiB6aXBfbG9va2FoZWFkKVxuICAgICAgICB6aXBfbWF0Y2hfbGVuZ3RoID0gemlwX2xvb2thaGVhZFxuICAgIH1cbiAgICBpZiAoemlwX21hdGNoX2xlbmd0aCA+PSB6aXBfTUlOX01BVENIKSB7XG4gICAgICAvL1x0ICAgIGNoZWNrX21hdGNoKHN0cnN0YXJ0LCBtYXRjaF9zdGFydCwgbWF0Y2hfbGVuZ3RoKTtcblxuICAgICAgZmx1c2ggPSB6aXBfY3RfdGFsbHkoXG4gICAgICAgIHppcF9zdHJzdGFydCAtIHppcF9tYXRjaF9zdGFydCxcbiAgICAgICAgemlwX21hdGNoX2xlbmd0aCAtIHppcF9NSU5fTUFUQ0gsXG4gICAgICApXG4gICAgICB6aXBfbG9va2FoZWFkIC09IHppcF9tYXRjaF9sZW5ndGhcblxuICAgICAgLyogSW5zZXJ0IG5ldyBzdHJpbmdzIGluIHRoZSBoYXNoIHRhYmxlIG9ubHkgaWYgdGhlIG1hdGNoIGxlbmd0aFxuICAgICAgICogaXMgbm90IHRvbyBsYXJnZS4gVGhpcyBzYXZlcyB0aW1lIGJ1dCBkZWdyYWRlcyBjb21wcmVzc2lvbi5cbiAgICAgICAqL1xuICAgICAgaWYgKHppcF9tYXRjaF9sZW5ndGggPD0gemlwX21heF9sYXp5X21hdGNoKSB7XG4gICAgICAgIHppcF9tYXRjaF9sZW5ndGgtLSAvLyBzdHJpbmcgYXQgc3Ryc3RhcnQgYWxyZWFkeSBpbiBoYXNoIHRhYmxlXG4gICAgICAgIGRvIHtcbiAgICAgICAgICB6aXBfc3Ryc3RhcnQrK1xuICAgICAgICAgIHppcF9JTlNFUlRfU1RSSU5HKClcbiAgICAgICAgICAvKiBzdHJzdGFydCBuZXZlciBleGNlZWRzIFdTSVpFLU1BWF9NQVRDSCwgc28gdGhlcmUgYXJlXG4gICAgICAgICAgICogYWx3YXlzIE1JTl9NQVRDSCBieXRlcyBhaGVhZC4gSWYgbG9va2FoZWFkIDwgTUlOX01BVENIXG4gICAgICAgICAgICogdGhlc2UgYnl0ZXMgYXJlIGdhcmJhZ2UsIGJ1dCBpdCBkb2VzIG5vdCBtYXR0ZXIgc2luY2VcbiAgICAgICAgICAgKiB0aGUgbmV4dCBsb29rYWhlYWQgYnl0ZXMgd2lsbCBiZSBlbWl0dGVkIGFzIGxpdGVyYWxzLlxuICAgICAgICAgICAqL1xuICAgICAgICB9IHdoaWxlICgtLXppcF9tYXRjaF9sZW5ndGggIT0gMClcbiAgICAgICAgemlwX3N0cnN0YXJ0KytcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB6aXBfc3Ryc3RhcnQgKz0gemlwX21hdGNoX2xlbmd0aFxuICAgICAgICB6aXBfbWF0Y2hfbGVuZ3RoID0gMFxuICAgICAgICB6aXBfaW5zX2ggPSB6aXBfd2luZG93W3ppcF9zdHJzdGFydF0gJiAweEZGXG4gICAgICAgIC8vXHRcdFVQREFURV9IQVNIKGluc19oLCB3aW5kb3dbc3Ryc3RhcnQgKyAxXSk7XG4gICAgICAgIHppcF9pbnNfaFxuICAgICAgICAgID0gKCh6aXBfaW5zX2ggPDwgemlwX0hfU0hJRlQpIF4gKHppcF93aW5kb3dbemlwX3N0cnN0YXJ0ICsgMV0gJiAweEZGKSlcbiAgICAgICAgICAmIHppcF9IQVNIX01BU0tcblxuICAgICAgICAvLyAjaWYgTUlOX01BVENIICE9IDNcbiAgICAgICAgLy9cdFx0Q2FsbCBVUERBVEVfSEFTSCgpIE1JTl9NQVRDSC0zIG1vcmUgdGltZXNcbiAgICAgICAgLy8gI2VuZGlmXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLyogTm8gbWF0Y2gsIG91dHB1dCBhIGxpdGVyYWwgYnl0ZSAqL1xuICAgICAgZmx1c2ggPSB6aXBfY3RfdGFsbHkoMCwgemlwX3dpbmRvd1t6aXBfc3Ryc3RhcnRdICYgMHhGRilcbiAgICAgIHppcF9sb29rYWhlYWQtLVxuICAgICAgemlwX3N0cnN0YXJ0KytcbiAgICB9XG4gICAgaWYgKGZsdXNoKSB7XG4gICAgICB6aXBfZmx1c2hfYmxvY2soMClcbiAgICAgIHppcF9ibG9ja19zdGFydCA9IHppcF9zdHJzdGFydFxuICAgIH1cblxuICAgIC8qIE1ha2Ugc3VyZSB0aGF0IHdlIGFsd2F5cyBoYXZlIGVub3VnaCBsb29rYWhlYWQsIGV4Y2VwdFxuICAgICAqIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0IGZpbGUuIFdlIG5lZWQgTUFYX01BVENIIGJ5dGVzXG4gICAgICogZm9yIHRoZSBuZXh0IG1hdGNoLCBwbHVzIE1JTl9NQVRDSCBieXRlcyB0byBpbnNlcnQgdGhlXG4gICAgICogc3RyaW5nIGZvbGxvd2luZyB0aGUgbmV4dCBtYXRjaC5cbiAgICAgKi9cbiAgICB3aGlsZSAoemlwX2xvb2thaGVhZCA8IHppcF9NSU5fTE9PS0FIRUFEICYmICF6aXBfZW9maWxlKVxuICAgICAgemlwX2ZpbGxfd2luZG93KClcbiAgfVxufVxuXG5mdW5jdGlvbiB6aXBfZGVmbGF0ZV9iZXR0ZXIoKSB7XG4gIC8qIFByb2Nlc3MgdGhlIGlucHV0IGJsb2NrLiAqL1xuICB3aGlsZSAoemlwX2xvb2thaGVhZCAhPSAwICYmIHppcF9xaGVhZCA9PSBudWxsKSB7XG4gICAgLyogSW5zZXJ0IHRoZSBzdHJpbmcgd2luZG93W3N0cnN0YXJ0IC4uIHN0cnN0YXJ0KzJdIGluIHRoZVxuICAgICAqIGRpY3Rpb25hcnksIGFuZCBzZXQgaGFzaF9oZWFkIHRvIHRoZSBoZWFkIG9mIHRoZSBoYXNoIGNoYWluOlxuICAgICAqL1xuICAgIHppcF9JTlNFUlRfU1RSSU5HKClcblxuICAgIC8qIEZpbmQgdGhlIGxvbmdlc3QgbWF0Y2gsIGRpc2NhcmRpbmcgdGhvc2UgPD0gcHJldl9sZW5ndGguXG4gICAgICovXG4gICAgemlwX3ByZXZfbGVuZ3RoID0gemlwX21hdGNoX2xlbmd0aFxuICAgIHppcF9wcmV2X21hdGNoID0gemlwX21hdGNoX3N0YXJ0XG4gICAgemlwX21hdGNoX2xlbmd0aCA9IHppcF9NSU5fTUFUQ0ggLSAxXG5cbiAgICBpZiAoXG4gICAgICB6aXBfaGFzaF9oZWFkICE9IHppcF9OSUxcbiAgICAgICYmIHppcF9wcmV2X2xlbmd0aCA8IHppcF9tYXhfbGF6eV9tYXRjaFxuICAgICAgJiYgemlwX3N0cnN0YXJ0IC0gemlwX2hhc2hfaGVhZCA8PSB6aXBfTUFYX0RJU1RcbiAgICApIHtcbiAgICAgIC8qIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLCB3ZSBwcmV2ZW50IG1hdGNoZXMgd2l0aCB0aGUgc3RyaW5nXG4gICAgICAgKiBvZiB3aW5kb3cgaW5kZXggMCAoaW4gcGFydGljdWxhciB3ZSBoYXZlIHRvIGF2b2lkIGEgbWF0Y2hcbiAgICAgICAqIG9mIHRoZSBzdHJpbmcgd2l0aCBpdHNlbGYgYXQgdGhlIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWxlKS5cbiAgICAgICAqL1xuICAgICAgemlwX21hdGNoX2xlbmd0aCA9IHppcF9sb25nZXN0X21hdGNoKHppcF9oYXNoX2hlYWQpXG4gICAgICAvKiBsb25nZXN0X21hdGNoKCkgc2V0cyBtYXRjaF9zdGFydCAqL1xuICAgICAgaWYgKHppcF9tYXRjaF9sZW5ndGggPiB6aXBfbG9va2FoZWFkKVxuICAgICAgICB6aXBfbWF0Y2hfbGVuZ3RoID0gemlwX2xvb2thaGVhZFxuXG4gICAgICAvKiBJZ25vcmUgYSBsZW5ndGggMyBtYXRjaCBpZiBpdCBpcyB0b28gZGlzdGFudDogKi9cbiAgICAgIGlmIChcbiAgICAgICAgemlwX21hdGNoX2xlbmd0aCA9PSB6aXBfTUlOX01BVENIXG4gICAgICAgICYmIHppcF9zdHJzdGFydCAtIHppcF9tYXRjaF9zdGFydCA+IHppcF9UT09fRkFSXG4gICAgICApIHtcbiAgICAgICAgLyogSWYgcHJldl9tYXRjaCBpcyBhbHNvIE1JTl9NQVRDSCwgbWF0Y2hfc3RhcnQgaXMgZ2FyYmFnZVxuICAgICAgICAgKiBidXQgd2Ugd2lsbCBpZ25vcmUgdGhlIGN1cnJlbnQgbWF0Y2ggYW55d2F5LlxuICAgICAgICAgKi9cbiAgICAgICAgemlwX21hdGNoX2xlbmd0aC0tXG4gICAgICB9XG4gICAgfVxuICAgIC8qIElmIHRoZXJlIHdhcyBhIG1hdGNoIGF0IHRoZSBwcmV2aW91cyBzdGVwIGFuZCB0aGUgY3VycmVudFxuICAgICAqIG1hdGNoIGlzIG5vdCBiZXR0ZXIsIG91dHB1dCB0aGUgcHJldmlvdXMgbWF0Y2g6XG4gICAgICovXG4gICAgaWYgKFxuICAgICAgemlwX3ByZXZfbGVuZ3RoID49IHppcF9NSU5fTUFUQ0hcbiAgICAgICYmIHppcF9tYXRjaF9sZW5ndGggPD0gemlwX3ByZXZfbGVuZ3RoXG4gICAgKSB7XG4gICAgICB2YXIgZmx1c2ggLy8gc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkXG5cbiAgICAgIC8vXHQgICAgY2hlY2tfbWF0Y2goc3Ryc3RhcnQgLSAxLCBwcmV2X21hdGNoLCBwcmV2X2xlbmd0aCk7XG4gICAgICBmbHVzaCA9IHppcF9jdF90YWxseShcbiAgICAgICAgemlwX3N0cnN0YXJ0IC0gMSAtIHppcF9wcmV2X21hdGNoLFxuICAgICAgICB6aXBfcHJldl9sZW5ndGggLSB6aXBfTUlOX01BVENILFxuICAgICAgKVxuXG4gICAgICAvKiBJbnNlcnQgaW4gaGFzaCB0YWJsZSBhbGwgc3RyaW5ncyB1cCB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaC5cbiAgICAgICAqIHN0cnN0YXJ0LTEgYW5kIHN0cnN0YXJ0IGFyZSBhbHJlYWR5IGluc2VydGVkLlxuICAgICAgICovXG4gICAgICB6aXBfbG9va2FoZWFkIC09IHppcF9wcmV2X2xlbmd0aCAtIDFcbiAgICAgIHppcF9wcmV2X2xlbmd0aCAtPSAyXG4gICAgICBkbyB7XG4gICAgICAgIHppcF9zdHJzdGFydCsrXG4gICAgICAgIHppcF9JTlNFUlRfU1RSSU5HKClcbiAgICAgICAgLyogc3Ryc3RhcnQgbmV2ZXIgZXhjZWVkcyBXU0laRS1NQVhfTUFUQ0gsIHNvIHRoZXJlIGFyZVxuICAgICAgICAgKiBhbHdheXMgTUlOX01BVENIIGJ5dGVzIGFoZWFkLiBJZiBsb29rYWhlYWQgPCBNSU5fTUFUQ0hcbiAgICAgICAgICogdGhlc2UgYnl0ZXMgYXJlIGdhcmJhZ2UsIGJ1dCBpdCBkb2VzIG5vdCBtYXR0ZXIgc2luY2UgdGhlXG4gICAgICAgICAqIG5leHQgbG9va2FoZWFkIGJ5dGVzIHdpbGwgYWx3YXlzIGJlIGVtaXR0ZWQgYXMgbGl0ZXJhbHMuXG4gICAgICAgICAqL1xuICAgICAgfSB3aGlsZSAoLS16aXBfcHJldl9sZW5ndGggIT0gMClcbiAgICAgIHppcF9tYXRjaF9hdmFpbGFibGUgPSAwXG4gICAgICB6aXBfbWF0Y2hfbGVuZ3RoID0gemlwX01JTl9NQVRDSCAtIDFcbiAgICAgIHppcF9zdHJzdGFydCsrXG4gICAgICBpZiAoZmx1c2gpIHtcbiAgICAgICAgemlwX2ZsdXNoX2Jsb2NrKDApXG4gICAgICAgIHppcF9ibG9ja19zdGFydCA9IHppcF9zdHJzdGFydFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh6aXBfbWF0Y2hfYXZhaWxhYmxlICE9IDApIHtcbiAgICAgIC8qIElmIHRoZXJlIHdhcyBubyBtYXRjaCBhdCB0aGUgcHJldmlvdXMgcG9zaXRpb24sIG91dHB1dCBhXG4gICAgICAgKiBzaW5nbGUgbGl0ZXJhbC4gSWYgdGhlcmUgd2FzIGEgbWF0Y2ggYnV0IHRoZSBjdXJyZW50IG1hdGNoXG4gICAgICAgKiBpcyBsb25nZXIsIHRydW5jYXRlIHRoZSBwcmV2aW91cyBtYXRjaCB0byBhIHNpbmdsZSBsaXRlcmFsLlxuICAgICAgICovXG4gICAgICBpZiAoemlwX2N0X3RhbGx5KDAsIHppcF93aW5kb3dbemlwX3N0cnN0YXJ0IC0gMV0gJiAweEZGKSkge1xuICAgICAgICB6aXBfZmx1c2hfYmxvY2soMClcbiAgICAgICAgemlwX2Jsb2NrX3N0YXJ0ID0gemlwX3N0cnN0YXJ0XG4gICAgICB9XG4gICAgICB6aXBfc3Ryc3RhcnQrK1xuICAgICAgemlwX2xvb2thaGVhZC0tXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLyogVGhlcmUgaXMgbm8gcHJldmlvdXMgbWF0Y2ggdG8gY29tcGFyZSB3aXRoLCB3YWl0IGZvclxuICAgICAgICogdGhlIG5leHQgc3RlcCB0byBkZWNpZGUuXG4gICAgICAgKi9cbiAgICAgIHppcF9tYXRjaF9hdmFpbGFibGUgPSAxXG4gICAgICB6aXBfc3Ryc3RhcnQrK1xuICAgICAgemlwX2xvb2thaGVhZC0tXG4gICAgfVxuXG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG4gICAgICogYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgZmlsZS4gV2UgbmVlZCBNQVhfTUFUQ0ggYnl0ZXNcbiAgICAgKiBmb3IgdGhlIG5leHQgbWF0Y2gsIHBsdXMgTUlOX01BVENIIGJ5dGVzIHRvIGluc2VydCB0aGVcbiAgICAgKiBzdHJpbmcgZm9sbG93aW5nIHRoZSBuZXh0IG1hdGNoLlxuICAgICAqL1xuICAgIHdoaWxlICh6aXBfbG9va2FoZWFkIDwgemlwX01JTl9MT09LQUhFQUQgJiYgIXppcF9lb2ZpbGUpXG4gICAgICB6aXBfZmlsbF93aW5kb3coKVxuICB9XG59XG5cbmZ1bmN0aW9uIHppcF9pbml0X2RlZmxhdGUoKSB7XG4gIGlmICh6aXBfZW9maWxlKVxuICAgIHJldHVyblxuXG4gIHppcF9iaV9idWYgPSAwXG4gIHppcF9iaV92YWxpZCA9IDBcbiAgemlwX2N0X2luaXQoKVxuICB6aXBfbG1faW5pdCgpXG5cbiAgemlwX3FoZWFkID0gbnVsbFxuICB6aXBfb3V0Y250ID0gMFxuICB6aXBfb3V0b2ZmID0gMFxuXG4gIGlmICh6aXBfY29tcHJfbGV2ZWwgPD0gMykge1xuICAgIHppcF9wcmV2X2xlbmd0aCA9IHppcF9NSU5fTUFUQ0ggLSAxXG4gICAgemlwX21hdGNoX2xlbmd0aCA9IDBcbiAgfVxuICBlbHNlIHtcbiAgICB6aXBfbWF0Y2hfbGVuZ3RoID0gemlwX01JTl9NQVRDSCAtIDFcbiAgICB6aXBfbWF0Y2hfYXZhaWxhYmxlID0gMFxuICB9XG5cbiAgemlwX2NvbXBsZXRlID0gZmFsc2Vcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNhbWUgYXMgYWJvdmUsIGJ1dCBhY2hpZXZlcyBiZXR0ZXIgY29tcHJlc3Npb24uIFdlIHVzZSBhIGxhenlcbiAqIGV2YWx1YXRpb24gZm9yIG1hdGNoZXM6IGEgbWF0Y2ggaXMgZmluYWxseSBhZG9wdGVkIG9ubHkgaWYgdGhlcmUgaXNcbiAqIG5vIGJldHRlciBtYXRjaCBhdCB0aGUgbmV4dCB3aW5kb3cgcG9zaXRpb24uXG4gKi9cbmZ1bmN0aW9uIHppcF9kZWZsYXRlX2ludGVybmFsKGJ1ZmYsIG9mZiwgYnVmZl9zaXplKSB7XG4gIGxldCBuXG5cbiAgaWYgKCF6aXBfaW5pdGZsYWcpIHtcbiAgICB6aXBfaW5pdF9kZWZsYXRlKClcbiAgICB6aXBfaW5pdGZsYWcgPSB0cnVlXG4gICAgaWYgKHppcF9sb29rYWhlYWQgPT0gMCkge1xuICAgICAgLy8gZW1wdHlcbiAgICAgIHppcF9jb21wbGV0ZSA9IHRydWVcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgaWYgKChuID0gemlwX3Fjb3B5KGJ1ZmYsIG9mZiwgYnVmZl9zaXplKSkgPT0gYnVmZl9zaXplKVxuICAgIHJldHVybiBidWZmX3NpemVcblxuICBpZiAoemlwX2NvbXBsZXRlKVxuICAgIHJldHVybiBuXG5cbiAgaWYgKHppcF9jb21wcl9sZXZlbCA8PSAzKSB7XG4gICAgLy8gb3B0aW1pemVkIGZvciBzcGVlZFxuICAgIHppcF9kZWZsYXRlX2Zhc3QoKVxuICB9XG4gIGVsc2Uge1xuICAgIHppcF9kZWZsYXRlX2JldHRlcigpXG4gIH1cbiAgaWYgKHppcF9sb29rYWhlYWQgPT0gMCkge1xuICAgIGlmICh6aXBfbWF0Y2hfYXZhaWxhYmxlICE9IDApXG4gICAgICB6aXBfY3RfdGFsbHkoMCwgemlwX3dpbmRvd1t6aXBfc3Ryc3RhcnQgLSAxXSAmIDB4RkYpXG5cbiAgICB6aXBfZmx1c2hfYmxvY2soMSlcbiAgICB6aXBfY29tcGxldGUgPSB0cnVlXG4gIH1cbiAgcmV0dXJuIG4gKyB6aXBfcWNvcHkoYnVmZiwgbiArIG9mZiwgYnVmZl9zaXplIC0gbilcbn1cblxuZnVuY3Rpb24gemlwX3Fjb3B5KGJ1ZmYsIG9mZiwgYnVmZl9zaXplKSB7XG4gIGxldCBuLCBpLCBqXG5cbiAgbiA9IDBcbiAgd2hpbGUgKHppcF9xaGVhZCAhPSBudWxsICYmIG4gPCBidWZmX3NpemUpIHtcbiAgICBpID0gYnVmZl9zaXplIC0gblxuICAgIGlmIChpID4gemlwX3FoZWFkLmxlbilcbiAgICAgIGkgPSB6aXBfcWhlYWQubGVuXG5cbiAgICAvLyAgICAgIFN5c3RlbS5hcnJheWNvcHkocWhlYWQucHRyLCBxaGVhZC5vZmYsIGJ1ZmYsIG9mZiArIG4sIGkpO1xuICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspXG4gICAgICBidWZmW29mZiArIG4gKyBqXSA9IHppcF9xaGVhZC5wdHJbemlwX3FoZWFkLm9mZiArIGpdXG5cbiAgICB6aXBfcWhlYWQub2ZmICs9IGlcbiAgICB6aXBfcWhlYWQubGVuIC09IGlcbiAgICBuICs9IGlcbiAgICBpZiAoemlwX3FoZWFkLmxlbiA9PSAwKSB7XG4gICAgICB2YXIgcFxuICAgICAgcCA9IHppcF9xaGVhZFxuICAgICAgemlwX3FoZWFkID0gemlwX3FoZWFkLm5leHRcbiAgICAgIHppcF9yZXVzZV9xdWV1ZShwKVxuICAgIH1cbiAgfVxuXG4gIGlmIChuID09IGJ1ZmZfc2l6ZSlcbiAgICByZXR1cm4gblxuXG4gIGlmICh6aXBfb3V0b2ZmIDwgemlwX291dGNudCkge1xuICAgIGkgPSBidWZmX3NpemUgLSBuXG4gICAgaWYgKGkgPiB6aXBfb3V0Y250IC0gemlwX291dG9mZilcbiAgICAgIGkgPSB6aXBfb3V0Y250IC0gemlwX291dG9mZlxuXG4gICAgLy8gU3lzdGVtLmFycmF5Y29weShvdXRidWYsIG91dG9mZiwgYnVmZiwgb2ZmICsgbiwgaSk7XG4gICAgZm9yIChqID0gMDsgaiA8IGk7IGorKylcbiAgICAgIGJ1ZmZbb2ZmICsgbiArIGpdID0gemlwX291dGJ1Zlt6aXBfb3V0b2ZmICsgal1cblxuICAgIHppcF9vdXRvZmYgKz0gaVxuICAgIG4gKz0gaVxuICAgIGlmICh6aXBfb3V0Y250ID09IHppcF9vdXRvZmYpXG4gICAgICB6aXBfb3V0Y250ID0gemlwX291dG9mZiA9IDBcbiAgfVxuICByZXR1cm4gblxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQWxsb2NhdGUgdGhlIG1hdGNoIGJ1ZmZlciwgaW5pdGlhbGl6ZSB0aGUgdmFyaW91cyB0YWJsZXMgYW5kIHNhdmUgdGhlXG4gKiBsb2NhdGlvbiBvZiB0aGUgaW50ZXJuYWwgZmlsZSBhdHRyaWJ1dGUgKGFzY2lpL2JpbmFyeSkgYW5kIG1ldGhvZFxuICogKERFRkxBVEUvU1RPUkUpLlxuICovXG5mdW5jdGlvbiB6aXBfY3RfaW5pdCgpIHtcbiAgbGV0IG4gLy8gaXRlcmF0ZXMgb3ZlciB0cmVlIGVsZW1lbnRzXG4gIGxldCBiaXRzIC8vIGJpdCBjb3VudGVyXG4gIGxldCBsZW5ndGggLy8gbGVuZ3RoIHZhbHVlXG4gIGxldCBjb2RlIC8vIGNvZGUgdmFsdWVcbiAgbGV0IGRpc3QgLy8gZGlzdGFuY2UgaW5kZXhcblxuICBpZiAoemlwX3N0YXRpY19kdHJlZVswXS5kbCAhPSAwKVxuICAgIHJldHVybiAvLyBjdF9pbml0IGFscmVhZHkgY2FsbGVkXG5cbiAgemlwX2xfZGVzYy5keW5fdHJlZSA9IHppcF9keW5fbHRyZWVcbiAgemlwX2xfZGVzYy5zdGF0aWNfdHJlZSA9IHppcF9zdGF0aWNfbHRyZWVcbiAgemlwX2xfZGVzYy5leHRyYV9iaXRzID0gemlwX2V4dHJhX2xiaXRzXG4gIHppcF9sX2Rlc2MuZXh0cmFfYmFzZSA9IHppcF9MSVRFUkFMUyArIDFcbiAgemlwX2xfZGVzYy5lbGVtcyA9IHppcF9MX0NPREVTXG4gIHppcF9sX2Rlc2MubWF4X2xlbmd0aCA9IHppcF9NQVhfQklUU1xuICB6aXBfbF9kZXNjLm1heF9jb2RlID0gMFxuXG4gIHppcF9kX2Rlc2MuZHluX3RyZWUgPSB6aXBfZHluX2R0cmVlXG4gIHppcF9kX2Rlc2Muc3RhdGljX3RyZWUgPSB6aXBfc3RhdGljX2R0cmVlXG4gIHppcF9kX2Rlc2MuZXh0cmFfYml0cyA9IHppcF9leHRyYV9kYml0c1xuICB6aXBfZF9kZXNjLmV4dHJhX2Jhc2UgPSAwXG4gIHppcF9kX2Rlc2MuZWxlbXMgPSB6aXBfRF9DT0RFU1xuICB6aXBfZF9kZXNjLm1heF9sZW5ndGggPSB6aXBfTUFYX0JJVFNcbiAgemlwX2RfZGVzYy5tYXhfY29kZSA9IDBcblxuICB6aXBfYmxfZGVzYy5keW5fdHJlZSA9IHppcF9ibF90cmVlXG4gIHppcF9ibF9kZXNjLnN0YXRpY190cmVlID0gbnVsbFxuICB6aXBfYmxfZGVzYy5leHRyYV9iaXRzID0gemlwX2V4dHJhX2JsYml0c1xuICB6aXBfYmxfZGVzYy5leHRyYV9iYXNlID0gMFxuICB6aXBfYmxfZGVzYy5lbGVtcyA9IHppcF9CTF9DT0RFU1xuICB6aXBfYmxfZGVzYy5tYXhfbGVuZ3RoID0gemlwX01BWF9CTF9CSVRTXG4gIHppcF9ibF9kZXNjLm1heF9jb2RlID0gMFxuXG4gIC8vIEluaXRpYWxpemUgdGhlIG1hcHBpbmcgbGVuZ3RoICgwLi4yNTUpIC0+IGxlbmd0aCBjb2RlICgwLi4yOClcbiAgbGVuZ3RoID0gMFxuICBmb3IgKGNvZGUgPSAwOyBjb2RlIDwgemlwX0xFTkdUSF9DT0RFUyAtIDE7IGNvZGUrKykge1xuICAgIHppcF9iYXNlX2xlbmd0aFtjb2RlXSA9IGxlbmd0aFxuICAgIGZvciAobiA9IDA7IG4gPCAxIDw8IHppcF9leHRyYV9sYml0c1tjb2RlXTsgbisrKVxuICAgICAgemlwX2xlbmd0aF9jb2RlW2xlbmd0aCsrXSA9IGNvZGVcbiAgfVxuICAvLyBBc3NlcnQgKGxlbmd0aCA9PSAyNTYsIFwiY3RfaW5pdDogbGVuZ3RoICE9IDI1NlwiKTtcblxuICAvKiBOb3RlIHRoYXQgdGhlIGxlbmd0aCAyNTUgKG1hdGNoIGxlbmd0aCAyNTgpIGNhbiBiZSByZXByZXNlbnRlZFxuICAgKiBpbiB0d28gZGlmZmVyZW50IHdheXM6IGNvZGUgMjg0ICsgNSBiaXRzIG9yIGNvZGUgMjg1LCBzbyB3ZVxuICAgKiBvdmVyd3JpdGUgbGVuZ3RoX2NvZGVbMjU1XSB0byB1c2UgdGhlIGJlc3QgZW5jb2Rpbmc6XG4gICAqL1xuICB6aXBfbGVuZ3RoX2NvZGVbbGVuZ3RoIC0gMV0gPSBjb2RlXG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgbWFwcGluZyBkaXN0ICgwLi4zMkspIC0+IGRpc3QgY29kZSAoMC4uMjkpICovXG4gIGRpc3QgPSAwXG4gIGZvciAoY29kZSA9IDA7IGNvZGUgPCAxNjsgY29kZSsrKSB7XG4gICAgemlwX2Jhc2VfZGlzdFtjb2RlXSA9IGRpc3RcbiAgICBmb3IgKG4gPSAwOyBuIDwgMSA8PCB6aXBfZXh0cmFfZGJpdHNbY29kZV07IG4rKylcbiAgICAgIHppcF9kaXN0X2NvZGVbZGlzdCsrXSA9IGNvZGVcbiAgfVxuICAvLyBBc3NlcnQgKGRpc3QgPT0gMjU2LCBcImN0X2luaXQ6IGRpc3QgIT0gMjU2XCIpO1xuICBkaXN0ID4+PSA3IC8vIGZyb20gbm93IG9uLCBhbGwgZGlzdGFuY2VzIGFyZSBkaXZpZGVkIGJ5IDEyOFxuICBmb3IgKDsgY29kZSA8IHppcF9EX0NPREVTOyBjb2RlKyspIHtcbiAgICB6aXBfYmFzZV9kaXN0W2NvZGVdID0gZGlzdCA8PCA3XG4gICAgZm9yIChuID0gMDsgbiA8IDEgPDwgKHppcF9leHRyYV9kYml0c1tjb2RlXSAtIDcpOyBuKyspXG4gICAgICB6aXBfZGlzdF9jb2RlWzI1NiArIGRpc3QrK10gPSBjb2RlXG4gIH1cbiAgLy8gQXNzZXJ0IChkaXN0ID09IDI1NiwgXCJjdF9pbml0OiAyNTYrZGlzdCAhPSA1MTJcIik7XG5cbiAgLy8gQ29uc3RydWN0IHRoZSBjb2RlcyBvZiB0aGUgc3RhdGljIGxpdGVyYWwgdHJlZVxuICBmb3IgKGJpdHMgPSAwOyBiaXRzIDw9IHppcF9NQVhfQklUUzsgYml0cysrKVxuICAgIHppcF9ibF9jb3VudFtiaXRzXSA9IDBcblxuICBuID0gMFxuICB3aGlsZSAobiA8PSAxNDMpIHtcbiAgICB6aXBfc3RhdGljX2x0cmVlW24rK10uZGwgPSA4XG4gICAgemlwX2JsX2NvdW50WzhdKytcbiAgfVxuICB3aGlsZSAobiA8PSAyNTUpIHtcbiAgICB6aXBfc3RhdGljX2x0cmVlW24rK10uZGwgPSA5XG4gICAgemlwX2JsX2NvdW50WzldKytcbiAgfVxuICB3aGlsZSAobiA8PSAyNzkpIHtcbiAgICB6aXBfc3RhdGljX2x0cmVlW24rK10uZGwgPSA3XG4gICAgemlwX2JsX2NvdW50WzddKytcbiAgfVxuICB3aGlsZSAobiA8PSAyODcpIHtcbiAgICB6aXBfc3RhdGljX2x0cmVlW24rK10uZGwgPSA4XG4gICAgemlwX2JsX2NvdW50WzhdKytcbiAgfVxuICAvKiBDb2RlcyAyODYgYW5kIDI4NyBkbyBub3QgZXhpc3QsIGJ1dCB3ZSBtdXN0IGluY2x1ZGUgdGhlbSBpbiB0aGVcbiAgICogdHJlZSBjb25zdHJ1Y3Rpb24gdG8gZ2V0IGEgY2Fub25pY2FsIEh1ZmZtYW4gdHJlZSAobG9uZ2VzdCBjb2RlXG4gICAqIGFsbCBvbmVzKVxuICAgKi9cbiAgemlwX2dlbl9jb2Rlcyh6aXBfc3RhdGljX2x0cmVlLCB6aXBfTF9DT0RFUyArIDEpXG5cbiAgLyogVGhlIHN0YXRpYyBkaXN0YW5jZSB0cmVlIGlzIHRyaXZpYWw6ICovXG4gIGZvciAobiA9IDA7IG4gPCB6aXBfRF9DT0RFUzsgbisrKSB7XG4gICAgemlwX3N0YXRpY19kdHJlZVtuXS5kbCA9IDVcbiAgICB6aXBfc3RhdGljX2R0cmVlW25dLmZjID0gemlwX2JpX3JldmVyc2UobiwgNSlcbiAgfVxuXG4gIC8vIEluaXRpYWxpemUgdGhlIGZpcnN0IGJsb2NrIG9mIHRoZSBmaXJzdCBmaWxlOlxuICB6aXBfaW5pdF9ibG9jaygpXG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIGEgbmV3IGJsb2NrLlxuICovXG5mdW5jdGlvbiB6aXBfaW5pdF9ibG9jaygpIHtcbiAgbGV0IG4gLy8gaXRlcmF0ZXMgb3ZlciB0cmVlIGVsZW1lbnRzXG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGUgdHJlZXMuXG4gIGZvciAobiA9IDA7IG4gPCB6aXBfTF9DT0RFUzsgbisrKSB6aXBfZHluX2x0cmVlW25dLmZjID0gMFxuICBmb3IgKG4gPSAwOyBuIDwgemlwX0RfQ09ERVM7IG4rKykgemlwX2R5bl9kdHJlZVtuXS5mYyA9IDBcbiAgZm9yIChuID0gMDsgbiA8IHppcF9CTF9DT0RFUzsgbisrKSB6aXBfYmxfdHJlZVtuXS5mYyA9IDBcblxuICB6aXBfZHluX2x0cmVlW3ppcF9FTkRfQkxPQ0tdLmZjID0gMVxuICB6aXBfb3B0X2xlbiA9IHppcF9zdGF0aWNfbGVuID0gMFxuICB6aXBfbGFzdF9saXQgPSB6aXBfbGFzdF9kaXN0ID0gemlwX2xhc3RfZmxhZ3MgPSAwXG4gIHppcF9mbGFncyA9IDBcbiAgemlwX2ZsYWdfYml0ID0gMVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUmVzdG9yZSB0aGUgaGVhcCBwcm9wZXJ0eSBieSBtb3ZpbmcgZG93biB0aGUgdHJlZSBzdGFydGluZyBhdCBub2RlIGssXG4gKiBleGNoYW5naW5nIGEgbm9kZSB3aXRoIHRoZSBzbWFsbGVzdCBvZiBpdHMgdHdvIHNvbnMgaWYgbmVjZXNzYXJ5LCBzdG9wcGluZ1xuICogd2hlbiB0aGUgaGVhcCBwcm9wZXJ0eSBpcyByZS1lc3RhYmxpc2hlZCAoZWFjaCBmYXRoZXIgc21hbGxlciB0aGFuIGl0c1xuICogdHdvIHNvbnMpLlxuICovXG5mdW5jdGlvbiB6aXBfcHFkb3duaGVhcChcbiAgdHJlZSwgLy8gdGhlIHRyZWUgdG8gcmVzdG9yZVxuICBrLFxuKSB7XG4gIC8vIG5vZGUgdG8gbW92ZSBkb3duXG4gIGNvbnN0IHYgPSB6aXBfaGVhcFtrXVxuICBsZXQgaiA9IGsgPDwgMSAvLyBsZWZ0IHNvbiBvZiBrXG5cbiAgd2hpbGUgKGogPD0gemlwX2hlYXBfbGVuKSB7XG4gICAgLy8gU2V0IGogdG8gdGhlIHNtYWxsZXN0IG9mIHRoZSB0d28gc29uczpcbiAgICBpZiAoaiA8IHppcF9oZWFwX2xlbiAmJiB6aXBfU01BTExFUih0cmVlLCB6aXBfaGVhcFtqICsgMV0sIHppcF9oZWFwW2pdKSkge1xuICAgICAgaisrXG4gICAgfVxuXG4gICAgLy8gRXhpdCBpZiB2IGlzIHNtYWxsZXIgdGhhbiBib3RoIHNvbnNcbiAgICBpZiAoemlwX1NNQUxMRVIodHJlZSwgdiwgemlwX2hlYXBbal0pKVxuICAgICAgYnJlYWtcblxuICAgIC8vIEV4Y2hhbmdlIHYgd2l0aCB0aGUgc21hbGxlc3Qgc29uXG4gICAgemlwX2hlYXBba10gPSB6aXBfaGVhcFtqXVxuICAgIGsgPSBqXG5cbiAgICAvLyBBbmQgY29udGludWUgZG93biB0aGUgdHJlZSwgc2V0dGluZyBqIHRvIHRoZSBsZWZ0IHNvbiBvZiBrXG4gICAgaiA8PD0gMVxuICB9XG4gIHppcF9oZWFwW2tdID0gdlxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29tcHV0ZSB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RocyBmb3IgYSB0cmVlIGFuZCB1cGRhdGUgdGhlIHRvdGFsIGJpdCBsZW5ndGhcbiAqIGZvciB0aGUgY3VycmVudCBibG9jay5cbiAqIElOIGFzc2VydGlvbjogdGhlIGZpZWxkcyBmcmVxIGFuZCBkYWQgYXJlIHNldCwgaGVhcFtoZWFwX21heF0gYW5kXG4gKiAgICBhYm92ZSBhcmUgdGhlIHRyZWUgbm9kZXMgc29ydGVkIGJ5IGluY3JlYXNpbmcgZnJlcXVlbmN5LlxuICogT1VUIGFzc2VydGlvbnM6IHRoZSBmaWVsZCBsZW4gaXMgc2V0IHRvIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGgsIHRoZVxuICogICAgIGFycmF5IGJsX2NvdW50IGNvbnRhaW5zIHRoZSBmcmVxdWVuY2llcyBmb3IgZWFjaCBiaXQgbGVuZ3RoLlxuICogICAgIFRoZSBsZW5ndGggb3B0X2xlbiBpcyB1cGRhdGVkOyBzdGF0aWNfbGVuIGlzIGFsc28gdXBkYXRlZCBpZiBzdHJlZSBpc1xuICogICAgIG5vdCBudWxsLlxuICovXG5mdW5jdGlvbiB6aXBfZ2VuX2JpdGxlbihkZXNjKSB7XG4gIC8vIHRoZSB0cmVlIGRlc2NyaXB0b3JcbiAgY29uc3QgdHJlZSA9IGRlc2MuZHluX3RyZWVcbiAgY29uc3QgZXh0cmEgPSBkZXNjLmV4dHJhX2JpdHNcbiAgY29uc3QgYmFzZSA9IGRlc2MuZXh0cmFfYmFzZVxuICBjb25zdCBtYXhfY29kZSA9IGRlc2MubWF4X2NvZGVcbiAgY29uc3QgbWF4X2xlbmd0aCA9IGRlc2MubWF4X2xlbmd0aFxuICBjb25zdCBzdHJlZSA9IGRlc2Muc3RhdGljX3RyZWVcbiAgbGV0IGggLy8gaGVhcCBpbmRleFxuICBsZXQgbiwgbSAvLyBpdGVyYXRlIG92ZXIgdGhlIHRyZWUgZWxlbWVudHNcbiAgbGV0IGJpdHMgLy8gYml0IGxlbmd0aFxuICBsZXQgeGJpdHMgLy8gZXh0cmEgYml0c1xuICBsZXQgZiAvLyBmcmVxdWVuY3lcbiAgbGV0IG92ZXJmbG93ID0gMCAvLyBudW1iZXIgb2YgZWxlbWVudHMgd2l0aCBiaXQgbGVuZ3RoIHRvbyBsYXJnZVxuXG4gIGZvciAoYml0cyA9IDA7IGJpdHMgPD0gemlwX01BWF9CSVRTOyBiaXRzKyspXG4gICAgemlwX2JsX2NvdW50W2JpdHNdID0gMFxuXG4gIC8qIEluIGEgZmlyc3QgcGFzcywgY29tcHV0ZSB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RocyAod2hpY2ggbWF5XG4gICAqIG92ZXJmbG93IGluIHRoZSBjYXNlIG9mIHRoZSBiaXQgbGVuZ3RoIHRyZWUpLlxuICAgKi9cbiAgdHJlZVt6aXBfaGVhcFt6aXBfaGVhcF9tYXhdXS5kbCA9IDAgLy8gcm9vdCBvZiB0aGUgaGVhcFxuXG4gIGZvciAoaCA9IHppcF9oZWFwX21heCArIDE7IGggPCB6aXBfSEVBUF9TSVpFOyBoKyspIHtcbiAgICBuID0gemlwX2hlYXBbaF1cbiAgICBiaXRzID0gdHJlZVt0cmVlW25dLmRsXS5kbCArIDFcbiAgICBpZiAoYml0cyA+IG1heF9sZW5ndGgpIHtcbiAgICAgIGJpdHMgPSBtYXhfbGVuZ3RoXG4gICAgICBvdmVyZmxvdysrXG4gICAgfVxuICAgIHRyZWVbbl0uZGwgPSBiaXRzXG4gICAgLy8gV2Ugb3ZlcndyaXRlIHRyZWVbbl0uZGwgd2hpY2ggaXMgbm8gbG9uZ2VyIG5lZWRlZFxuXG4gICAgaWYgKG4gPiBtYXhfY29kZSlcbiAgICAgIGNvbnRpbnVlXG4gICAgLy8gbm90IGEgbGVhZiBub2RlXG5cbiAgICB6aXBfYmxfY291bnRbYml0c10rK1xuICAgIHhiaXRzID0gMFxuICAgIGlmIChuID49IGJhc2UpXG4gICAgICB4Yml0cyA9IGV4dHJhW24gLSBiYXNlXVxuXG4gICAgZiA9IHRyZWVbbl0uZmNcbiAgICB6aXBfb3B0X2xlbiArPSBmICogKGJpdHMgKyB4Yml0cylcbiAgICBpZiAoc3RyZWUgIT0gbnVsbClcbiAgICAgIHppcF9zdGF0aWNfbGVuICs9IGYgKiAoc3RyZWVbbl0uZGwgKyB4Yml0cylcbiAgfVxuICBpZiAob3ZlcmZsb3cgPT0gMClcbiAgICByZXR1cm5cblxuICAvLyBUaGlzIGhhcHBlbnMgZm9yIGV4YW1wbGUgb24gb2JqMiBhbmQgcGljIG9mIHRoZSBDYWxnYXJ5IGNvcnB1c1xuXG4gIC8vIEZpbmQgdGhlIGZpcnN0IGJpdCBsZW5ndGggd2hpY2ggY291bGQgaW5jcmVhc2U6XG4gIGRvIHtcbiAgICBiaXRzID0gbWF4X2xlbmd0aCAtIDFcbiAgICB3aGlsZSAoemlwX2JsX2NvdW50W2JpdHNdID09IDApIHtcbiAgICAgIGJpdHMtLVxuICAgIH1cbiAgICB6aXBfYmxfY291bnRbYml0c10tLSAvLyBtb3ZlIG9uZSBsZWFmIGRvd24gdGhlIHRyZWVcbiAgICB6aXBfYmxfY291bnRbYml0cyArIDFdICs9IDIgLy8gbW92ZSBvbmUgb3ZlcmZsb3cgaXRlbSBhcyBpdHMgYnJvdGhlclxuICAgIHppcF9ibF9jb3VudFttYXhfbGVuZ3RoXS0tXG4gICAgLyogVGhlIGJyb3RoZXIgb2YgdGhlIG92ZXJmbG93IGl0ZW0gYWxzbyBtb3ZlcyBvbmUgc3RlcCB1cCxcbiAgICAgKiBidXQgdGhpcyBkb2VzIG5vdCBhZmZlY3QgYmxfY291bnRbbWF4X2xlbmd0aF1cbiAgICAgKi9cbiAgICBvdmVyZmxvdyAtPSAyXG4gIH0gd2hpbGUgKG92ZXJmbG93ID4gMClcblxuICAvKiBOb3cgcmVjb21wdXRlIGFsbCBiaXQgbGVuZ3Rocywgc2Nhbm5pbmcgaW4gaW5jcmVhc2luZyBmcmVxdWVuY3kuXG4gICAqIGggaXMgc3RpbGwgZXF1YWwgdG8gSEVBUF9TSVpFLiAoSXQgaXMgc2ltcGxlciB0byByZWNvbnN0cnVjdCBhbGxcbiAgICogbGVuZ3RocyBpbnN0ZWFkIG9mIGZpeGluZyBvbmx5IHRoZSB3cm9uZyBvbmVzLiBUaGlzIGlkZWEgaXMgdGFrZW5cbiAgICogZnJvbSAnYXInIHdyaXR0ZW4gYnkgSGFydWhpa28gT2t1bXVyYS4pXG4gICAqL1xuICBmb3IgKGJpdHMgPSBtYXhfbGVuZ3RoOyBiaXRzICE9IDA7IGJpdHMtLSkge1xuICAgIG4gPSB6aXBfYmxfY291bnRbYml0c11cbiAgICB3aGlsZSAobiAhPSAwKSB7XG4gICAgICBtID0gemlwX2hlYXBbLS1oXVxuICAgICAgaWYgKG0gPiBtYXhfY29kZSlcbiAgICAgICAgY29udGludWVcblxuICAgICAgaWYgKHRyZWVbbV0uZGwgIT0gYml0cykge1xuICAgICAgICB6aXBfb3B0X2xlbiArPSAoYml0cyAtIHRyZWVbbV0uZGwpICogdHJlZVttXS5mY1xuICAgICAgICB0cmVlW21dLmZjID0gYml0c1xuICAgICAgfVxuICAgICAgbi0tXG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBHZW5lcmF0ZSB0aGUgY29kZXMgZm9yIGEgZ2l2ZW4gdHJlZSBhbmQgYml0IGNvdW50cyAod2hpY2ggbmVlZCBub3QgYmVcbiAqIG9wdGltYWwpLlxuICogSU4gYXNzZXJ0aW9uOiB0aGUgYXJyYXkgYmxfY291bnQgY29udGFpbnMgdGhlIGJpdCBsZW5ndGggc3RhdGlzdGljcyBmb3JcbiAqIHRoZSBnaXZlbiB0cmVlIGFuZCB0aGUgZmllbGQgbGVuIGlzIHNldCBmb3IgYWxsIHRyZWUgZWxlbWVudHMuXG4gKiBPVVQgYXNzZXJ0aW9uOiB0aGUgZmllbGQgY29kZSBpcyBzZXQgZm9yIGFsbCB0cmVlIGVsZW1lbnRzIG9mIG5vblxuICogICAgIHplcm8gY29kZSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIHppcF9nZW5fY29kZXMoXG4gIHRyZWUsIC8vIHRoZSB0cmVlIHRvIGRlY29yYXRlXG4gIG1heF9jb2RlLFxuKSB7XG4gIC8vIGxhcmdlc3QgY29kZSB3aXRoIG5vbiB6ZXJvIGZyZXF1ZW5jeVxuICBjb25zdCBuZXh0X2NvZGUgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB6aXBfTUFYX0JJVFMgKyAxIH0pIC8vIG5leHQgY29kZSB2YWx1ZSBmb3IgZWFjaCBiaXQgbGVuZ3RoXG4gIGxldCBjb2RlID0gMCAvLyBydW5uaW5nIGNvZGUgdmFsdWVcbiAgbGV0IGJpdHMgLy8gYml0IGluZGV4XG4gIGxldCBuIC8vIGNvZGUgaW5kZXhcblxuICAvKiBUaGUgZGlzdHJpYnV0aW9uIGNvdW50cyBhcmUgZmlyc3QgdXNlZCB0byBnZW5lcmF0ZSB0aGUgY29kZSB2YWx1ZXNcbiAgICogd2l0aG91dCBiaXQgcmV2ZXJzYWwuXG4gICAqL1xuICBmb3IgKGJpdHMgPSAxOyBiaXRzIDw9IHppcF9NQVhfQklUUzsgYml0cysrKSB7XG4gICAgY29kZSA9IChjb2RlICsgemlwX2JsX2NvdW50W2JpdHMgLSAxXSkgPDwgMVxuICAgIG5leHRfY29kZVtiaXRzXSA9IGNvZGVcbiAgfVxuXG4gIC8qIENoZWNrIHRoYXQgdGhlIGJpdCBjb3VudHMgaW4gYmxfY291bnQgYXJlIGNvbnNpc3RlbnQuIFRoZSBsYXN0IGNvZGVcbiAgICogbXVzdCBiZSBhbGwgb25lcy5cbiAgICovXG4gIC8vICAgIEFzc2VydCAoY29kZSArIGVuY29kZXItPmJsX2NvdW50W01BWF9CSVRTXS0xID09ICgxPDxNQVhfQklUUyktMSxcbiAgLy9cdCAgICBcImluY29uc2lzdGVudCBiaXQgY291bnRzXCIpO1xuICAvLyAgICBUcmFjZXYoKHN0ZGVycixcIlxcbmdlbl9jb2RlczogbWF4X2NvZGUgJWQgXCIsIG1heF9jb2RlKSk7XG5cbiAgZm9yIChuID0gMDsgbiA8PSBtYXhfY29kZTsgbisrKSB7XG4gICAgY29uc3QgbGVuID0gdHJlZVtuXS5kbFxuICAgIGlmIChsZW4gPT0gMClcbiAgICAgIGNvbnRpbnVlXG5cbiAgICAvLyBOb3cgcmV2ZXJzZSB0aGUgYml0c1xuICAgIHRyZWVbbl0uZmMgPSB6aXBfYmlfcmV2ZXJzZShuZXh0X2NvZGVbbGVuXSsrLCBsZW4pXG5cbiAgICAvLyAgICAgIFRyYWNlYyh0cmVlICE9IHN0YXRpY19sdHJlZSwgKHN0ZGVycixcIlxcbm4gJTNkICVjIGwgJTJkIGMgJTR4ICgleCkgXCIsXG4gICAgLy9cdCAgbiwgKGlzZ3JhcGgobikgPyBuIDogJyAnKSwgbGVuLCB0cmVlW25dLmZjLCBuZXh0X2NvZGVbbGVuXS0xKSk7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbnN0cnVjdCBvbmUgSHVmZm1hbiB0cmVlIGFuZCBhc3NpZ25zIHRoZSBjb2RlIGJpdCBzdHJpbmdzIGFuZCBsZW5ndGhzLlxuICogVXBkYXRlIHRoZSB0b3RhbCBiaXQgbGVuZ3RoIGZvciB0aGUgY3VycmVudCBibG9jay5cbiAqIElOIGFzc2VydGlvbjogdGhlIGZpZWxkIGZyZXEgaXMgc2V0IGZvciBhbGwgdHJlZSBlbGVtZW50cy5cbiAqIE9VVCBhc3NlcnRpb25zOiB0aGUgZmllbGRzIGxlbiBhbmQgY29kZSBhcmUgc2V0IHRvIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGhcbiAqICAgICBhbmQgY29ycmVzcG9uZGluZyBjb2RlLiBUaGUgbGVuZ3RoIG9wdF9sZW4gaXMgdXBkYXRlZDsgc3RhdGljX2xlbiBpc1xuICogICAgIGFsc28gdXBkYXRlZCBpZiBzdHJlZSBpcyBub3QgbnVsbC4gVGhlIGZpZWxkIG1heF9jb2RlIGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gemlwX2J1aWxkX3RyZWUoZGVzYykge1xuICAvLyB0aGUgdHJlZSBkZXNjcmlwdG9yXG4gIGNvbnN0IHRyZWUgPSBkZXNjLmR5bl90cmVlXG4gIGNvbnN0IHN0cmVlID0gZGVzYy5zdGF0aWNfdHJlZVxuICBjb25zdCBlbGVtcyA9IGRlc2MuZWxlbXNcbiAgbGV0IG4sIG0gLy8gaXRlcmF0ZSBvdmVyIGhlYXAgZWxlbWVudHNcbiAgbGV0IG1heF9jb2RlID0gLTEgLy8gbGFyZ2VzdCBjb2RlIHdpdGggbm9uIHplcm8gZnJlcXVlbmN5XG4gIGxldCBub2RlID0gZWxlbXMgLy8gbmV4dCBpbnRlcm5hbCBub2RlIG9mIHRoZSB0cmVlXG5cbiAgLyogQ29uc3RydWN0IHRoZSBpbml0aWFsIGhlYXAsIHdpdGggbGVhc3QgZnJlcXVlbnQgZWxlbWVudCBpblxuICAgKiBoZWFwW1NNQUxMRVNUXS4gVGhlIHNvbnMgb2YgaGVhcFtuXSBhcmUgaGVhcFsyKm5dIGFuZCBoZWFwWzIqbisxXS5cbiAgICogaGVhcFswXSBpcyBub3QgdXNlZC5cbiAgICovXG4gIHppcF9oZWFwX2xlbiA9IDBcbiAgemlwX2hlYXBfbWF4ID0gemlwX0hFQVBfU0laRVxuXG4gIGZvciAobiA9IDA7IG4gPCBlbGVtczsgbisrKSB7XG4gICAgaWYgKHRyZWVbbl0uZmMgIT0gMCkge1xuICAgICAgemlwX2hlYXBbKyt6aXBfaGVhcF9sZW5dID0gbWF4X2NvZGUgPSBuXG4gICAgICB6aXBfZGVwdGhbbl0gPSAwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdHJlZVtuXS5kbCA9IDBcbiAgICB9XG4gIH1cblxuICAvKiBUaGUgcGt6aXAgZm9ybWF0IHJlcXVpcmVzIHRoYXQgYXQgbGVhc3Qgb25lIGRpc3RhbmNlIGNvZGUgZXhpc3RzLFxuICAgKiBhbmQgdGhhdCBhdCBsZWFzdCBvbmUgYml0IHNob3VsZCBiZSBzZW50IGV2ZW4gaWYgdGhlcmUgaXMgb25seSBvbmVcbiAgICogcG9zc2libGUgY29kZS4gU28gdG8gYXZvaWQgc3BlY2lhbCBjaGVja3MgbGF0ZXIgb24gd2UgZm9yY2UgYXQgbGVhc3RcbiAgICogdHdvIGNvZGVzIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeS5cbiAgICovXG4gIHdoaWxlICh6aXBfaGVhcF9sZW4gPCAyKSB7XG4gICAgY29uc3QgeG5ldyA9ICh6aXBfaGVhcFsrK3ppcF9oZWFwX2xlbl0gPSBtYXhfY29kZSA8IDIgPyArK21heF9jb2RlIDogMClcbiAgICB0cmVlW3huZXddLmZjID0gMVxuICAgIHppcF9kZXB0aFt4bmV3XSA9IDBcbiAgICB6aXBfb3B0X2xlbi0tXG4gICAgaWYgKHN0cmVlICE9IG51bGwpXG4gICAgICB6aXBfc3RhdGljX2xlbiAtPSBzdHJlZVt4bmV3XS5kbFxuXG4gICAgLy8gbmV3IGlzIDAgb3IgMSBzbyBpdCBkb2VzIG5vdCBoYXZlIGV4dHJhIGJpdHNcbiAgfVxuICBkZXNjLm1heF9jb2RlID0gbWF4X2NvZGVcblxuICAvKiBUaGUgZWxlbWVudHMgaGVhcFtoZWFwX2xlbi8yKzEgLi4gaGVhcF9sZW5dIGFyZSBsZWF2ZXMgb2YgdGhlIHRyZWUsXG4gICAqIGVzdGFibGlzaCBzdWItaGVhcHMgb2YgaW5jcmVhc2luZyBsZW5ndGhzOlxuICAgKi9cbiAgZm9yIChuID0gemlwX2hlYXBfbGVuID4+IDE7IG4gPj0gMTsgbi0tKVxuICAgIHppcF9wcWRvd25oZWFwKHRyZWUsIG4pXG5cbiAgLyogQ29uc3RydWN0IHRoZSBIdWZmbWFuIHRyZWUgYnkgcmVwZWF0ZWRseSBjb21iaW5pbmcgdGhlIGxlYXN0IHR3b1xuICAgKiBmcmVxdWVudCBub2Rlcy5cbiAgICovXG4gIGRvIHtcbiAgICBuID0gemlwX2hlYXBbemlwX1NNQUxMRVNUXVxuICAgIHppcF9oZWFwW3ppcF9TTUFMTEVTVF0gPSB6aXBfaGVhcFt6aXBfaGVhcF9sZW4tLV1cbiAgICB6aXBfcHFkb3duaGVhcCh0cmVlLCB6aXBfU01BTExFU1QpXG5cbiAgICBtID0gemlwX2hlYXBbemlwX1NNQUxMRVNUXSAvLyBtID0gbm9kZSBvZiBuZXh0IGxlYXN0IGZyZXF1ZW5jeVxuXG4gICAgLy8ga2VlcCB0aGUgbm9kZXMgc29ydGVkIGJ5IGZyZXF1ZW5jeVxuICAgIHppcF9oZWFwWy0temlwX2hlYXBfbWF4XSA9IG5cbiAgICB6aXBfaGVhcFstLXppcF9oZWFwX21heF0gPSBtXG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgbm9kZSBmYXRoZXIgb2YgbiBhbmQgbVxuICAgIHRyZWVbbm9kZV0uZmMgPSB0cmVlW25dLmZjICsgdHJlZVttXS5mY1xuICAgIC8vXHRkZXB0aFtub2RlXSA9IChjaGFyKShNQVgoZGVwdGhbbl0sIGRlcHRoW21dKSArIDEpO1xuICAgIGlmICh6aXBfZGVwdGhbbl0gPiB6aXBfZGVwdGhbbV0gKyAxKVxuICAgICAgemlwX2RlcHRoW25vZGVdID0gemlwX2RlcHRoW25dXG4gICAgZWxzZVxuICAgICAgemlwX2RlcHRoW25vZGVdID0gemlwX2RlcHRoW21dICsgMVxuXG4gICAgdHJlZVtuXS5kbCA9IHRyZWVbbV0uZGwgPSBub2RlXG5cbiAgICAvLyBhbmQgaW5zZXJ0IHRoZSBuZXcgbm9kZSBpbiB0aGUgaGVhcFxuICAgIHppcF9oZWFwW3ppcF9TTUFMTEVTVF0gPSBub2RlKytcbiAgICB6aXBfcHFkb3duaGVhcCh0cmVlLCB6aXBfU01BTExFU1QpXG4gIH0gd2hpbGUgKHppcF9oZWFwX2xlbiA+PSAyKVxuXG4gIHppcF9oZWFwWy0temlwX2hlYXBfbWF4XSA9IHppcF9oZWFwW3ppcF9TTUFMTEVTVF1cblxuICAvKiBBdCB0aGlzIHBvaW50LCB0aGUgZmllbGRzIGZyZXEgYW5kIGRhZCBhcmUgc2V0LiBXZSBjYW4gbm93XG4gICAqIGdlbmVyYXRlIHRoZSBiaXQgbGVuZ3Rocy5cbiAgICovXG4gIHppcF9nZW5fYml0bGVuKGRlc2MpXG5cbiAgLy8gVGhlIGZpZWxkIGxlbiBpcyBub3cgc2V0LCB3ZSBjYW4gZ2VuZXJhdGUgdGhlIGJpdCBjb2Rlc1xuICB6aXBfZ2VuX2NvZGVzKHRyZWUsIG1heF9jb2RlKVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2NhbiBhIGxpdGVyYWwgb3IgZGlzdGFuY2UgdHJlZSB0byBkZXRlcm1pbmUgdGhlIGZyZXF1ZW5jaWVzIG9mIHRoZSBjb2Rlc1xuICogaW4gdGhlIGJpdCBsZW5ndGggdHJlZS4gVXBkYXRlcyBvcHRfbGVuIHRvIHRha2UgaW50byBhY2NvdW50IHRoZSByZXBlYXRcbiAqIGNvdW50cy4gKFRoZSBjb250cmlidXRpb24gb2YgdGhlIGJpdCBsZW5ndGggY29kZXMgd2lsbCBiZSBhZGRlZCBsYXRlclxuICogZHVyaW5nIHRoZSBjb25zdHJ1Y3Rpb24gb2YgYmxfdHJlZS4pXG4gKi9cbmZ1bmN0aW9uIHppcF9zY2FuX3RyZWUoXG4gIHRyZWUsIC8vIHRoZSB0cmVlIHRvIGJlIHNjYW5uZWRcbiAgbWF4X2NvZGUsXG4pIHtcbiAgLy8gYW5kIGl0cyBsYXJnZXN0IGNvZGUgb2Ygbm9uIHplcm8gZnJlcXVlbmN5XG4gIGxldCBuIC8vIGl0ZXJhdGVzIG92ZXIgYWxsIHRyZWUgZWxlbWVudHNcbiAgbGV0IHByZXZsZW4gPSAtMSAvLyBsYXN0IGVtaXR0ZWQgbGVuZ3RoXG4gIGxldCBjdXJsZW4gLy8gbGVuZ3RoIG9mIGN1cnJlbnQgY29kZVxuICBsZXQgbmV4dGxlbiA9IHRyZWVbMF0uZGwgLy8gbGVuZ3RoIG9mIG5leHQgY29kZVxuICBsZXQgY291bnQgPSAwIC8vIHJlcGVhdCBjb3VudCBvZiB0aGUgY3VycmVudCBjb2RlXG4gIGxldCBtYXhfY291bnQgPSA3IC8vIG1heCByZXBlYXQgY291bnRcbiAgbGV0IG1pbl9jb3VudCA9IDQgLy8gbWluIHJlcGVhdCBjb3VudFxuXG4gIGlmIChuZXh0bGVuID09IDApIHtcbiAgICBtYXhfY291bnQgPSAxMzhcbiAgICBtaW5fY291bnQgPSAzXG4gIH1cbiAgdHJlZVttYXhfY29kZSArIDFdLmRsID0gMHhGRkZGIC8vIGd1YXJkXG5cbiAgZm9yIChuID0gMDsgbiA8PSBtYXhfY29kZTsgbisrKSB7XG4gICAgY3VybGVuID0gbmV4dGxlblxuICAgIG5leHRsZW4gPSB0cmVlW24gKyAxXS5kbFxuICAgIGlmICgrK2NvdW50IDwgbWF4X2NvdW50ICYmIGN1cmxlbiA9PSBuZXh0bGVuKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBlbHNlIGlmIChjb3VudCA8IG1pbl9jb3VudCkge1xuICAgICAgemlwX2JsX3RyZWVbY3VybGVuXS5mYyArPSBjb3VudFxuICAgIH1cbiAgICBlbHNlIGlmIChjdXJsZW4gIT0gMCkge1xuICAgICAgaWYgKGN1cmxlbiAhPSBwcmV2bGVuKSB7XG4gICAgICAgIHppcF9ibF90cmVlW2N1cmxlbl0uZmMrK1xuICAgICAgfVxuICAgICAgemlwX2JsX3RyZWVbemlwX1JFUF8zXzZdLmZjKytcbiAgICB9XG4gICAgZWxzZSBpZiAoY291bnQgPD0gMTApIHtcbiAgICAgIHppcF9ibF90cmVlW3ppcF9SRVBaXzNfMTBdLmZjKytcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB6aXBfYmxfdHJlZVt6aXBfUkVQWl8xMV8xMzhdLmZjKytcbiAgICB9XG4gICAgY291bnQgPSAwXG4gICAgcHJldmxlbiA9IGN1cmxlblxuICAgIGlmIChuZXh0bGVuID09IDApIHtcbiAgICAgIG1heF9jb3VudCA9IDEzOFxuICAgICAgbWluX2NvdW50ID0gM1xuICAgIH1cbiAgICBlbHNlIGlmIChjdXJsZW4gPT0gbmV4dGxlbikge1xuICAgICAgbWF4X2NvdW50ID0gNlxuICAgICAgbWluX2NvdW50ID0gM1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1heF9jb3VudCA9IDdcbiAgICAgIG1pbl9jb3VudCA9IDRcbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgYSBsaXRlcmFsIG9yIGRpc3RhbmNlIHRyZWUgaW4gY29tcHJlc3NlZCBmb3JtLCB1c2luZyB0aGUgY29kZXMgaW5cbiAqIGJsX3RyZWUuXG4gKi9cbmZ1bmN0aW9uIHppcF9zZW5kX3RyZWUoXG4gIHRyZWUsIC8vIHRoZSB0cmVlIHRvIGJlIHNjYW5uZWRcbiAgbWF4X2NvZGUsXG4pIHtcbiAgLy8gYW5kIGl0cyBsYXJnZXN0IGNvZGUgb2Ygbm9uIHplcm8gZnJlcXVlbmN5XG4gIGxldCBuIC8vIGl0ZXJhdGVzIG92ZXIgYWxsIHRyZWUgZWxlbWVudHNcbiAgbGV0IHByZXZsZW4gPSAtMSAvLyBsYXN0IGVtaXR0ZWQgbGVuZ3RoXG4gIGxldCBjdXJsZW4gLy8gbGVuZ3RoIG9mIGN1cnJlbnQgY29kZVxuICBsZXQgbmV4dGxlbiA9IHRyZWVbMF0uZGwgLy8gbGVuZ3RoIG9mIG5leHQgY29kZVxuICBsZXQgY291bnQgPSAwIC8vIHJlcGVhdCBjb3VudCBvZiB0aGUgY3VycmVudCBjb2RlXG4gIGxldCBtYXhfY291bnQgPSA3IC8vIG1heCByZXBlYXQgY291bnRcbiAgbGV0IG1pbl9jb3VudCA9IDQgLyogZ3VhcmQgYWxyZWFkeSBzZXQgKi8gLy8gbWluIHJlcGVhdCBjb3VudFxuXG4gIC8qIHRyZWVbbWF4X2NvZGUrMV0uZGwgPSAtMTsgKi8gaWYgKG5leHRsZW4gPT0gMCkge1xuICAgIG1heF9jb3VudCA9IDEzOFxuICAgIG1pbl9jb3VudCA9IDNcbiAgfVxuXG4gIGZvciAobiA9IDA7IG4gPD0gbWF4X2NvZGU7IG4rKykge1xuICAgIGN1cmxlbiA9IG5leHRsZW5cbiAgICBuZXh0bGVuID0gdHJlZVtuICsgMV0uZGxcbiAgICBpZiAoKytjb3VudCA8IG1heF9jb3VudCAmJiBjdXJsZW4gPT0gbmV4dGxlbikge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgZWxzZSBpZiAoY291bnQgPCBtaW5fY291bnQpIHtcbiAgICAgIGRvXG4gICAgICAgIHppcF9TRU5EX0NPREUoY3VybGVuLCB6aXBfYmxfdHJlZSlcbiAgICAgIHdoaWxlICgtLWNvdW50ICE9IDApXG4gICAgfVxuICAgIGVsc2UgaWYgKGN1cmxlbiAhPSAwKSB7XG4gICAgICBpZiAoY3VybGVuICE9IHByZXZsZW4pIHtcbiAgICAgICAgemlwX1NFTkRfQ09ERShjdXJsZW4sIHppcF9ibF90cmVlKVxuICAgICAgICBjb3VudC0tXG4gICAgICB9XG4gICAgICAvLyBBc3NlcnQoY291bnQgPj0gMyAmJiBjb3VudCA8PSA2LCBcIiAzXzY/XCIpO1xuICAgICAgemlwX1NFTkRfQ09ERSh6aXBfUkVQXzNfNiwgemlwX2JsX3RyZWUpXG4gICAgICB6aXBfc2VuZF9iaXRzKGNvdW50IC0gMywgMilcbiAgICB9XG4gICAgZWxzZSBpZiAoY291bnQgPD0gMTApIHtcbiAgICAgIHppcF9TRU5EX0NPREUoemlwX1JFUFpfM18xMCwgemlwX2JsX3RyZWUpXG4gICAgICB6aXBfc2VuZF9iaXRzKGNvdW50IC0gMywgMylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB6aXBfU0VORF9DT0RFKHppcF9SRVBaXzExXzEzOCwgemlwX2JsX3RyZWUpXG4gICAgICB6aXBfc2VuZF9iaXRzKGNvdW50IC0gMTEsIDcpXG4gICAgfVxuICAgIGNvdW50ID0gMFxuICAgIHByZXZsZW4gPSBjdXJsZW5cbiAgICBpZiAobmV4dGxlbiA9PSAwKSB7XG4gICAgICBtYXhfY291bnQgPSAxMzhcbiAgICAgIG1pbl9jb3VudCA9IDNcbiAgICB9XG4gICAgZWxzZSBpZiAoY3VybGVuID09IG5leHRsZW4pIHtcbiAgICAgIG1heF9jb3VudCA9IDZcbiAgICAgIG1pbl9jb3VudCA9IDNcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtYXhfY291bnQgPSA3XG4gICAgICBtaW5fY291bnQgPSA0XG4gICAgfVxuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb25zdHJ1Y3QgdGhlIEh1ZmZtYW4gdHJlZSBmb3IgdGhlIGJpdCBsZW5ndGhzIGFuZCByZXR1cm4gdGhlIGluZGV4IGluXG4gKiBibF9vcmRlciBvZiB0aGUgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgdG8gc2VuZC5cbiAqL1xuZnVuY3Rpb24gemlwX2J1aWxkX2JsX3RyZWUoKSB7XG4gIGxldCBtYXhfYmxpbmRleCAvLyBpbmRleCBvZiBsYXN0IGJpdCBsZW5ndGggY29kZSBvZiBub24gemVybyBmcmVxXG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSBiaXQgbGVuZ3RoIGZyZXF1ZW5jaWVzIGZvciBsaXRlcmFsIGFuZCBkaXN0YW5jZSB0cmVlc1xuICB6aXBfc2Nhbl90cmVlKHppcF9keW5fbHRyZWUsIHppcF9sX2Rlc2MubWF4X2NvZGUpXG4gIHppcF9zY2FuX3RyZWUoemlwX2R5bl9kdHJlZSwgemlwX2RfZGVzYy5tYXhfY29kZSlcblxuICAvLyBCdWlsZCB0aGUgYml0IGxlbmd0aCB0cmVlOlxuICB6aXBfYnVpbGRfdHJlZSh6aXBfYmxfZGVzYylcbiAgLyogb3B0X2xlbiBub3cgaW5jbHVkZXMgdGhlIGxlbmd0aCBvZiB0aGUgdHJlZSByZXByZXNlbnRhdGlvbnMsIGV4Y2VwdFxuICAgKiB0aGUgbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aHMgY29kZXMgYW5kIHRoZSA1KzUrNCBiaXRzIGZvciB0aGUgY291bnRzLlxuICAgKi9cblxuICAvKiBEZXRlcm1pbmUgdGhlIG51bWJlciBvZiBiaXQgbGVuZ3RoIGNvZGVzIHRvIHNlbmQuIFRoZSBwa3ppcCBmb3JtYXRcbiAgICogcmVxdWlyZXMgdGhhdCBhdCBsZWFzdCA0IGJpdCBsZW5ndGggY29kZXMgYmUgc2VudC4gKGFwcG5vdGUudHh0IHNheXNcbiAgICogMyBidXQgdGhlIGFjdHVhbCB2YWx1ZSB1c2VkIGlzIDQuKVxuICAgKi9cbiAgZm9yIChtYXhfYmxpbmRleCA9IHppcF9CTF9DT0RFUyAtIDE7IG1heF9ibGluZGV4ID49IDM7IG1heF9ibGluZGV4LS0pIHtcbiAgICBpZiAoemlwX2JsX3RyZWVbemlwX2JsX29yZGVyW21heF9ibGluZGV4XV0uZGwgIT0gMClcbiAgICAgIGJyZWFrXG4gIH1cblxuICAvKiBVcGRhdGUgb3B0X2xlbiB0byBpbmNsdWRlIHRoZSBiaXQgbGVuZ3RoIHRyZWUgYW5kIGNvdW50cyAqL1xuICB6aXBfb3B0X2xlbiArPSAzICogKG1heF9ibGluZGV4ICsgMSkgKyA1ICsgNSArIDRcbiAgLy8gICAgVHJhY2V2KChzdGRlcnIsIFwiXFxuZHluIHRyZWVzOiBkeW4gJWxkLCBzdGF0ICVsZFwiLFxuICAvL1x0ICAgIGVuY29kZXItPm9wdF9sZW4sIGVuY29kZXItPnN0YXRpY19sZW4pKTtcblxuICByZXR1cm4gbWF4X2JsaW5kZXhcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgdGhlIGhlYWRlciBmb3IgYSBibG9jayB1c2luZyBkeW5hbWljIEh1ZmZtYW4gdHJlZXM6IHRoZSBjb3VudHMsIHRoZVxuICogbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aCBjb2RlcywgdGhlIGxpdGVyYWwgdHJlZSBhbmQgdGhlIGRpc3RhbmNlIHRyZWUuXG4gKiBJTiBhc3NlcnRpb246IGxjb2RlcyA+PSAyNTcsIGRjb2RlcyA+PSAxLCBibGNvZGVzID49IDQuXG4gKi9cbmZ1bmN0aW9uIHppcF9zZW5kX2FsbF90cmVlcyhsY29kZXMsIGRjb2RlcywgYmxjb2Rlcykge1xuICAvLyBudW1iZXIgb2YgY29kZXMgZm9yIGVhY2ggdHJlZVxuICBsZXQgcmFuayAvLyBpbmRleCBpbiBibF9vcmRlclxuXG4gIC8vICAgIEFzc2VydCAobGNvZGVzID49IDI1NyAmJiBkY29kZXMgPj0gMSAmJiBibGNvZGVzID49IDQsIFwibm90IGVub3VnaCBjb2Rlc1wiKTtcbiAgLy8gICAgQXNzZXJ0IChsY29kZXMgPD0gTF9DT0RFUyAmJiBkY29kZXMgPD0gRF9DT0RFUyAmJiBibGNvZGVzIDw9IEJMX0NPREVTLFxuICAvL1x0ICAgIFwidG9vIG1hbnkgY29kZXNcIik7XG4gIC8vICAgIFRyYWNldigoc3RkZXJyLCBcIlxcbmJsIGNvdW50czogXCIpKTtcbiAgemlwX3NlbmRfYml0cyhsY29kZXMgLSAyNTcsIDUpIC8vIG5vdCArMjU1IGFzIHN0YXRlZCBpbiBhcHBub3RlLnR4dFxuICB6aXBfc2VuZF9iaXRzKGRjb2RlcyAtIDEsIDUpXG4gIHppcF9zZW5kX2JpdHMoYmxjb2RlcyAtIDQsIDQpIC8vIG5vdCAtMyBhcyBzdGF0ZWQgaW4gYXBwbm90ZS50eHRcbiAgZm9yIChyYW5rID0gMDsgcmFuayA8IGJsY29kZXM7IHJhbmsrKykge1xuICAgIC8vICAgICAgVHJhY2V2KChzdGRlcnIsIFwiXFxuYmwgY29kZSAlMmQgXCIsIGJsX29yZGVyW3JhbmtdKSk7XG4gICAgemlwX3NlbmRfYml0cyh6aXBfYmxfdHJlZVt6aXBfYmxfb3JkZXJbcmFua11dLmRsLCAzKVxuICB9XG5cbiAgLy8gc2VuZCB0aGUgbGl0ZXJhbCB0cmVlXG4gIHppcF9zZW5kX3RyZWUoemlwX2R5bl9sdHJlZSwgbGNvZGVzIC0gMSlcblxuICAvLyBzZW5kIHRoZSBkaXN0YW5jZSB0cmVlXG4gIHppcF9zZW5kX3RyZWUoemlwX2R5bl9kdHJlZSwgZGNvZGVzIC0gMSlcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIERldGVybWluZSB0aGUgYmVzdCBlbmNvZGluZyBmb3IgdGhlIGN1cnJlbnQgYmxvY2s6IGR5bmFtaWMgdHJlZXMsIHN0YXRpY1xuICogdHJlZXMgb3Igc3RvcmUsIGFuZCBvdXRwdXQgdGhlIGVuY29kZWQgYmxvY2sgdG8gdGhlIHppcCBmaWxlLlxuICovXG5mdW5jdGlvbiB6aXBfZmx1c2hfYmxvY2soZW9mKSB7XG4gIC8vIHRydWUgaWYgdGhpcyBpcyB0aGUgbGFzdCBibG9jayBmb3IgYSBmaWxlXG4gIGxldCBvcHRfbGVuYiwgc3RhdGljX2xlbmIgLy8gb3B0X2xlbiBhbmQgc3RhdGljX2xlbiBpbiBieXRlc1xuICBsZXQgbWF4X2JsaW5kZXggLy8gaW5kZXggb2YgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgb2Ygbm9uIHplcm8gZnJlcVxuICBsZXQgc3RvcmVkX2xlbiAvLyBsZW5ndGggb2YgaW5wdXQgYmxvY2tcblxuICBzdG9yZWRfbGVuID0gemlwX3N0cnN0YXJ0IC0gemlwX2Jsb2NrX3N0YXJ0XG4gIHppcF9mbGFnX2J1Zlt6aXBfbGFzdF9mbGFnc10gPSB6aXBfZmxhZ3MgLy8gU2F2ZSB0aGUgZmxhZ3MgZm9yIHRoZSBsYXN0IDggaXRlbXNcblxuICAvLyBDb25zdHJ1Y3QgdGhlIGxpdGVyYWwgYW5kIGRpc3RhbmNlIHRyZWVzXG4gIHppcF9idWlsZF90cmVlKHppcF9sX2Rlc2MpXG4gIC8vICAgIFRyYWNldigoc3RkZXJyLCBcIlxcbmxpdCBkYXRhOiBkeW4gJWxkLCBzdGF0ICVsZFwiLFxuICAvL1x0ICAgIGVuY29kZXItPm9wdF9sZW4sIGVuY29kZXItPnN0YXRpY19sZW4pKTtcblxuICB6aXBfYnVpbGRfdHJlZSh6aXBfZF9kZXNjKVxuICAvLyAgICBUcmFjZXYoKHN0ZGVyciwgXCJcXG5kaXN0IGRhdGE6IGR5biAlbGQsIHN0YXQgJWxkXCIsXG4gIC8vXHQgICAgZW5jb2Rlci0+b3B0X2xlbiwgZW5jb2Rlci0+c3RhdGljX2xlbikpO1xuICAvKiBBdCB0aGlzIHBvaW50LCBvcHRfbGVuIGFuZCBzdGF0aWNfbGVuIGFyZSB0aGUgdG90YWwgYml0IGxlbmd0aHMgb2ZcbiAgICogdGhlIGNvbXByZXNzZWQgYmxvY2sgZGF0YSwgZXhjbHVkaW5nIHRoZSB0cmVlIHJlcHJlc2VudGF0aW9ucy5cbiAgICovXG5cbiAgLyogQnVpbGQgdGhlIGJpdCBsZW5ndGggdHJlZSBmb3IgdGhlIGFib3ZlIHR3byB0cmVlcywgYW5kIGdldCB0aGUgaW5kZXhcbiAgICogaW4gYmxfb3JkZXIgb2YgdGhlIGxhc3QgYml0IGxlbmd0aCBjb2RlIHRvIHNlbmQuXG4gICAqL1xuICBtYXhfYmxpbmRleCA9IHppcF9idWlsZF9ibF90cmVlKClcblxuICAvLyBEZXRlcm1pbmUgdGhlIGJlc3QgZW5jb2RpbmcuIENvbXB1dGUgZmlyc3QgdGhlIGJsb2NrIGxlbmd0aCBpbiBieXRlc1xuICBvcHRfbGVuYiA9ICh6aXBfb3B0X2xlbiArIDMgKyA3KSA+PiAzXG4gIHN0YXRpY19sZW5iID0gKHppcF9zdGF0aWNfbGVuICsgMyArIDcpID4+IDNcblxuICAvLyAgICBUcmFjZSgoc3RkZXJyLCBcIlxcbm9wdCAlbHUoJWx1KSBzdGF0ICVsdSglbHUpIHN0b3JlZCAlbHUgbGl0ICV1IGRpc3QgJXUgXCIsXG4gIC8vXHQgICBvcHRfbGVuYiwgZW5jb2Rlci0+b3B0X2xlbixcbiAgLy9cdCAgIHN0YXRpY19sZW5iLCBlbmNvZGVyLT5zdGF0aWNfbGVuLCBzdG9yZWRfbGVuLFxuICAvL1x0ICAgZW5jb2Rlci0+bGFzdF9saXQsIGVuY29kZXItPmxhc3RfZGlzdCkpO1xuXG4gIGlmIChzdGF0aWNfbGVuYiA8PSBvcHRfbGVuYilcbiAgICBvcHRfbGVuYiA9IHN0YXRpY19sZW5iXG5cbiAgaWYgKFxuICAgIHN0b3JlZF9sZW4gKyA0IDw9IG9wdF9sZW5iIC8vIDQ6IHR3byB3b3JkcyBmb3IgdGhlIGxlbmd0aHNcbiAgICAmJiB6aXBfYmxvY2tfc3RhcnQgPj0gMFxuICApIHtcbiAgICBsZXQgaVxuXG4gICAgLyogVGhlIHRlc3QgYnVmICE9IE5VTEwgaXMgb25seSBuZWNlc3NhcnkgaWYgTElUX0JVRlNJWkUgPiBXU0laRS5cbiAgICAgKiBPdGhlcndpc2Ugd2UgY2FuJ3QgaGF2ZSBwcm9jZXNzZWQgbW9yZSB0aGFuIFdTSVpFIGlucHV0IGJ5dGVzIHNpbmNlXG4gICAgICogdGhlIGxhc3QgYmxvY2sgZmx1c2gsIGJlY2F1c2UgY29tcHJlc3Npb24gd291bGQgaGF2ZSBiZWVuXG4gICAgICogc3VjY2Vzc2Z1bC4gSWYgTElUX0JVRlNJWkUgPD0gV1NJWkUsIGl0IGlzIG5ldmVyIHRvbyBsYXRlIHRvXG4gICAgICogdHJhbnNmb3JtIGEgYmxvY2sgaW50byBhIHN0b3JlZCBibG9jay5cbiAgICAgKi9cbiAgICB6aXBfc2VuZF9iaXRzKCh6aXBfU1RPUkVEX0JMT0NLIDw8IDEpICsgZW9mLCAzKSAvKiBzZW5kIGJsb2NrIHR5cGUgKi9cbiAgICB6aXBfYmlfd2luZHVwKCkgLyogYWxpZ24gb24gYnl0ZSBib3VuZGFyeSAqL1xuICAgIHppcF9wdXRfc2hvcnQoc3RvcmVkX2xlbilcbiAgICB6aXBfcHV0X3Nob3J0KH5zdG9yZWRfbGVuKVxuXG4gICAgLy8gY29weSBibG9ja1xuICAgIC8qXG4gICAgICBwID0gJndpbmRvd1tibG9ja19zdGFydF07XG4gICAgICBmb3IoaSA9IDA7IGkgPCBzdG9yZWRfbGVuOyBpKyspXG4gIHB1dF9ieXRlKHBbaV0pO1xuICAqL1xuICAgIGZvciAoaSA9IDA7IGkgPCBzdG9yZWRfbGVuOyBpKyspXG4gICAgICB6aXBfcHV0X2J5dGUoemlwX3dpbmRvd1t6aXBfYmxvY2tfc3RhcnQgKyBpXSlcbiAgfVxuICBlbHNlIGlmIChzdGF0aWNfbGVuYiA9PSBvcHRfbGVuYikge1xuICAgIHppcF9zZW5kX2JpdHMoKHppcF9TVEFUSUNfVFJFRVMgPDwgMSkgKyBlb2YsIDMpXG4gICAgemlwX2NvbXByZXNzX2Jsb2NrKHppcF9zdGF0aWNfbHRyZWUsIHppcF9zdGF0aWNfZHRyZWUpXG4gIH1cbiAgZWxzZSB7XG4gICAgemlwX3NlbmRfYml0cygoemlwX0RZTl9UUkVFUyA8PCAxKSArIGVvZiwgMylcbiAgICB6aXBfc2VuZF9hbGxfdHJlZXMoXG4gICAgICB6aXBfbF9kZXNjLm1heF9jb2RlICsgMSxcbiAgICAgIHppcF9kX2Rlc2MubWF4X2NvZGUgKyAxLFxuICAgICAgbWF4X2JsaW5kZXggKyAxLFxuICAgIClcbiAgICB6aXBfY29tcHJlc3NfYmxvY2soemlwX2R5bl9sdHJlZSwgemlwX2R5bl9kdHJlZSlcbiAgfVxuXG4gIHppcF9pbml0X2Jsb2NrKClcblxuICBpZiAoZW9mICE9IDApXG4gICAgemlwX2JpX3dpbmR1cCgpXG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTYXZlIHRoZSBtYXRjaCBpbmZvIGFuZCB0YWxseSB0aGUgZnJlcXVlbmN5IGNvdW50cy4gUmV0dXJuIHRydWUgaWZcbiAqIHRoZSBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZC5cbiAqL1xuZnVuY3Rpb24gemlwX2N0X3RhbGx5KFxuICBkaXN0LCAvLyBkaXN0YW5jZSBvZiBtYXRjaGVkIHN0cmluZ1xuICBsYyxcbikge1xuICAvLyBtYXRjaCBsZW5ndGgtTUlOX01BVENIIG9yIHVubWF0Y2hlZCBjaGFyIChpZiBkaXN0PT0wKVxuICB6aXBfbF9idWZbemlwX2xhc3RfbGl0KytdID0gbGNcbiAgaWYgKGRpc3QgPT0gMCkge1xuICAgIC8vIGxjIGlzIHRoZSB1bm1hdGNoZWQgY2hhclxuICAgIHppcF9keW5fbHRyZWVbbGNdLmZjKytcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBIZXJlLCBsYyBpcyB0aGUgbWF0Y2ggbGVuZ3RoIC0gTUlOX01BVENIXG4gICAgZGlzdC0tIC8vIGRpc3QgPSBtYXRjaCBkaXN0YW5jZSAtIDFcbiAgICAvLyAgICAgIEFzc2VydCgodXNoKWRpc3QgPCAodXNoKU1BWF9ESVNUICYmXG4gICAgLy9cdCAgICAgKHVzaClsYyA8PSAodXNoKShNQVhfTUFUQ0gtTUlOX01BVENIKSAmJlxuICAgIC8vXHQgICAgICh1c2gpRF9DT0RFKGRpc3QpIDwgKHVzaClEX0NPREVTLCAgXCJjdF90YWxseTogYmFkIG1hdGNoXCIpO1xuXG4gICAgemlwX2R5bl9sdHJlZVt6aXBfbGVuZ3RoX2NvZGVbbGNdICsgemlwX0xJVEVSQUxTICsgMV0uZmMrK1xuICAgIHppcF9keW5fZHRyZWVbemlwX0RfQ09ERShkaXN0KV0uZmMrK1xuXG4gICAgemlwX2RfYnVmW3ppcF9sYXN0X2Rpc3QrK10gPSBkaXN0XG4gICAgemlwX2ZsYWdzIHw9IHppcF9mbGFnX2JpdFxuICB9XG4gIHppcF9mbGFnX2JpdCA8PD0gMVxuXG4gIC8vIE91dHB1dCB0aGUgZmxhZ3MgaWYgdGhleSBmaWxsIGEgYnl0ZVxuICBpZiAoKHppcF9sYXN0X2xpdCAmIDcpID09IDApIHtcbiAgICB6aXBfZmxhZ19idWZbemlwX2xhc3RfZmxhZ3MrK10gPSB6aXBfZmxhZ3NcbiAgICB6aXBfZmxhZ3MgPSAwXG4gICAgemlwX2ZsYWdfYml0ID0gMVxuICB9XG4gIC8vIFRyeSB0byBndWVzcyBpZiBpdCBpcyBwcm9maXRhYmxlIHRvIHN0b3AgdGhlIGN1cnJlbnQgYmxvY2sgaGVyZVxuICBpZiAoemlwX2NvbXByX2xldmVsID4gMiAmJiAoemlwX2xhc3RfbGl0ICYgMHhGRkYpID09IDApIHtcbiAgICAvLyBDb21wdXRlIGFuIHVwcGVyIGJvdW5kIGZvciB0aGUgY29tcHJlc3NlZCBsZW5ndGhcbiAgICBsZXQgb3V0X2xlbmd0aCA9IHppcF9sYXN0X2xpdCAqIDhcbiAgICBjb25zdCBpbl9sZW5ndGggPSB6aXBfc3Ryc3RhcnQgLSB6aXBfYmxvY2tfc3RhcnRcbiAgICBsZXQgZGNvZGVcblxuICAgIGZvciAoZGNvZGUgPSAwOyBkY29kZSA8IHppcF9EX0NPREVTOyBkY29kZSsrKVxuICAgICAgb3V0X2xlbmd0aCArPSB6aXBfZHluX2R0cmVlW2Rjb2RlXS5mYyAqICg1ICsgemlwX2V4dHJhX2RiaXRzW2Rjb2RlXSlcblxuICAgIG91dF9sZW5ndGggPj49IDNcbiAgICAvLyAgICAgIFRyYWNlKChzdGRlcnIsXCJcXG5sYXN0X2xpdCAldSwgbGFzdF9kaXN0ICV1LCBpbiAlbGQsIG91dCB+JWxkKCVsZCUlKSBcIixcbiAgICAvL1x0ICAgICBlbmNvZGVyLT5sYXN0X2xpdCwgZW5jb2Rlci0+bGFzdF9kaXN0LCBpbl9sZW5ndGgsIG91dF9sZW5ndGgsXG4gICAgLy9cdCAgICAgMTAwTCAtIG91dF9sZW5ndGgqMTAwTC9pbl9sZW5ndGgpKTtcbiAgICBpZiAoXG4gICAgICB6aXBfbGFzdF9kaXN0IDwgTnVtYmVyLnBhcnNlSW50KHppcF9sYXN0X2xpdCAvIDIpXG4gICAgICAmJiBvdXRfbGVuZ3RoIDwgTnVtYmVyLnBhcnNlSW50KGluX2xlbmd0aCAvIDIpXG4gICAgKVxuICAgICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gKFxuICAgIHppcF9sYXN0X2xpdCA9PSB6aXBfTElUX0JVRlNJWkUgLSAxIHx8IHppcF9sYXN0X2Rpc3QgPT0gemlwX0RJU1RfQlVGU0laRVxuICApXG4gIC8qIFdlIGF2b2lkIGVxdWFsaXR5IHdpdGggTElUX0JVRlNJWkUgYmVjYXVzZSBvZiB3cmFwYXJvdW5kIGF0IDY0S1xuICAgKiBvbiAxNiBiaXQgbWFjaGluZXMgYW5kIGJlY2F1c2Ugc3RvcmVkIGJsb2NrcyBhcmUgcmVzdHJpY3RlZCB0b1xuICAgKiA2NEstMSBieXRlcy5cbiAgICovXG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIHRoZSBibG9jayBkYXRhIGNvbXByZXNzZWQgdXNpbmcgdGhlIGdpdmVuIEh1ZmZtYW4gdHJlZXNcbiAqL1xuZnVuY3Rpb24gemlwX2NvbXByZXNzX2Jsb2NrKFxuICBsdHJlZSwgLy8gbGl0ZXJhbCB0cmVlXG4gIGR0cmVlLFxuKSB7XG4gIC8vIGRpc3RhbmNlIHRyZWVcbiAgbGV0IGRpc3QgLy8gZGlzdGFuY2Ugb2YgbWF0Y2hlZCBzdHJpbmdcbiAgbGV0IGxjIC8vIG1hdGNoIGxlbmd0aCBvciB1bm1hdGNoZWQgY2hhciAoaWYgZGlzdCA9PSAwKVxuICBsZXQgbHggPSAwIC8vIHJ1bm5pbmcgaW5kZXggaW4gbF9idWZcbiAgbGV0IGR4ID0gMCAvLyBydW5uaW5nIGluZGV4IGluIGRfYnVmXG4gIGxldCBmeCA9IDAgLy8gcnVubmluZyBpbmRleCBpbiBmbGFnX2J1ZlxuICBsZXQgZmxhZyA9IDAgLy8gY3VycmVudCBmbGFnc1xuICBsZXQgY29kZSAvLyB0aGUgY29kZSB0byBzZW5kXG4gIGxldCBleHRyYSAvLyBudW1iZXIgb2YgZXh0cmEgYml0cyB0byBzZW5kXG5cbiAgaWYgKHppcF9sYXN0X2xpdCAhPSAwKSB7XG4gICAgZG8ge1xuICAgICAgaWYgKChseCAmIDcpID09IDApXG4gICAgICAgIGZsYWcgPSB6aXBfZmxhZ19idWZbZngrK11cblxuICAgICAgbGMgPSB6aXBfbF9idWZbbHgrK10gJiAweEZGXG4gICAgICBpZiAoKGZsYWcgJiAxKSA9PSAwKSB7XG4gICAgICAgIHppcF9TRU5EX0NPREUobGMsIGx0cmVlKSAvKiBzZW5kIGEgbGl0ZXJhbCBieXRlICovXG4gICAgICAgIC8vXHRUcmFjZWN2KGlzZ3JhcGgobGMpLCAoc3RkZXJyLFwiICclYycgXCIsIGxjKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gSGVyZSwgbGMgaXMgdGhlIG1hdGNoIGxlbmd0aCAtIE1JTl9NQVRDSFxuICAgICAgICBjb2RlID0gemlwX2xlbmd0aF9jb2RlW2xjXVxuICAgICAgICB6aXBfU0VORF9DT0RFKGNvZGUgKyB6aXBfTElURVJBTFMgKyAxLCBsdHJlZSkgLy8gc2VuZCB0aGUgbGVuZ3RoIGNvZGVcbiAgICAgICAgZXh0cmEgPSB6aXBfZXh0cmFfbGJpdHNbY29kZV1cbiAgICAgICAgaWYgKGV4dHJhICE9IDApIHtcbiAgICAgICAgICBsYyAtPSB6aXBfYmFzZV9sZW5ndGhbY29kZV1cbiAgICAgICAgICB6aXBfc2VuZF9iaXRzKGxjLCBleHRyYSkgLy8gc2VuZCB0aGUgZXh0cmEgbGVuZ3RoIGJpdHNcbiAgICAgICAgfVxuICAgICAgICBkaXN0ID0gemlwX2RfYnVmW2R4KytdXG4gICAgICAgIC8vIEhlcmUsIGRpc3QgaXMgdGhlIG1hdGNoIGRpc3RhbmNlIC0gMVxuICAgICAgICBjb2RlID0gemlwX0RfQ09ERShkaXN0KVxuICAgICAgICAvL1x0QXNzZXJ0IChjb2RlIDwgRF9DT0RFUywgXCJiYWQgZF9jb2RlXCIpO1xuXG4gICAgICAgIHppcF9TRU5EX0NPREUoY29kZSwgZHRyZWUpIC8vIHNlbmQgdGhlIGRpc3RhbmNlIGNvZGVcbiAgICAgICAgZXh0cmEgPSB6aXBfZXh0cmFfZGJpdHNbY29kZV1cbiAgICAgICAgaWYgKGV4dHJhICE9IDApIHtcbiAgICAgICAgICBkaXN0IC09IHppcF9iYXNlX2Rpc3RbY29kZV1cbiAgICAgICAgICB6aXBfc2VuZF9iaXRzKGRpc3QsIGV4dHJhKSAvLyBzZW5kIHRoZSBleHRyYSBkaXN0YW5jZSBiaXRzXG4gICAgICAgIH1cbiAgICAgIH0gLy8gbGl0ZXJhbCBvciBtYXRjaCBwYWlyID9cbiAgICAgIGZsYWcgPj49IDFcbiAgICB9IHdoaWxlIChseCA8IHppcF9sYXN0X2xpdClcbiAgfVxuXG4gIHppcF9TRU5EX0NPREUoemlwX0VORF9CTE9DSywgbHRyZWUpXG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIGEgdmFsdWUgb24gYSBnaXZlbiBudW1iZXIgb2YgYml0cy5cbiAqIElOIGFzc2VydGlvbjogbGVuZ3RoIDw9IDE2IGFuZCB2YWx1ZSBmaXRzIGluIGxlbmd0aCBiaXRzLlxuICovXG5jb25zdCB6aXBfQnVmX3NpemUgPSAxNiAvLyBiaXQgc2l6ZSBvZiBiaV9idWZcbmZ1bmN0aW9uIHppcF9zZW5kX2JpdHMoXG4gIHZhbHVlLCAvLyB2YWx1ZSB0byBzZW5kXG4gIGxlbmd0aCxcbikge1xuICAvLyBudW1iZXIgb2YgYml0c1xuICAvKiBJZiBub3QgZW5vdWdoIHJvb20gaW4gYmlfYnVmLCB1c2UgKHZhbGlkKSBiaXRzIGZyb20gYmlfYnVmIGFuZFxuICAgKiAoMTYgLSBiaV92YWxpZCkgYml0cyBmcm9tIHZhbHVlLCBsZWF2aW5nICh3aWR0aCAtICgxNi1iaV92YWxpZCkpXG4gICAqIHVudXNlZCBiaXRzIGluIHZhbHVlLlxuICAgKi9cbiAgaWYgKHppcF9iaV92YWxpZCA+IHppcF9CdWZfc2l6ZSAtIGxlbmd0aCkge1xuICAgIHppcF9iaV9idWYgfD0gdmFsdWUgPDwgemlwX2JpX3ZhbGlkXG4gICAgemlwX3B1dF9zaG9ydCh6aXBfYmlfYnVmKVxuICAgIHppcF9iaV9idWYgPSB2YWx1ZSA+PiAoemlwX0J1Zl9zaXplIC0gemlwX2JpX3ZhbGlkKVxuICAgIHppcF9iaV92YWxpZCArPSBsZW5ndGggLSB6aXBfQnVmX3NpemVcbiAgfVxuICBlbHNlIHtcbiAgICB6aXBfYmlfYnVmIHw9IHZhbHVlIDw8IHppcF9iaV92YWxpZFxuICAgIHppcF9iaV92YWxpZCArPSBsZW5ndGhcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUmV2ZXJzZSB0aGUgZmlyc3QgbGVuIGJpdHMgb2YgYSBjb2RlLCB1c2luZyBzdHJhaWdodGZvcndhcmQgY29kZSAoYSBmYXN0ZXJcbiAqIG1ldGhvZCB3b3VsZCB1c2UgYSB0YWJsZSlcbiAqIElOIGFzc2VydGlvbjogMSA8PSBsZW4gPD0gMTVcbiAqL1xuZnVuY3Rpb24gemlwX2JpX3JldmVyc2UoXG4gIGNvZGUsIC8vIHRoZSB2YWx1ZSB0byBpbnZlcnRcbiAgbGVuLFxuKSB7XG4gIC8vIGl0cyBiaXQgbGVuZ3RoXG4gIGxldCByZXMgPSAwXG4gIGRvIHtcbiAgICByZXMgfD0gY29kZSAmIDFcbiAgICBjb2RlID4+PSAxXG4gICAgcmVzIDw8PSAxXG4gIH0gd2hpbGUgKC0tbGVuID4gMClcbiAgcmV0dXJuIHJlcyA+PiAxXG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBXcml0ZSBvdXQgYW55IHJlbWFpbmluZyBiaXRzIGluIGFuIGluY29tcGxldGUgYnl0ZS5cbiAqL1xuZnVuY3Rpb24gemlwX2JpX3dpbmR1cCgpIHtcbiAgaWYgKHppcF9iaV92YWxpZCA+IDgpXG4gICAgemlwX3B1dF9zaG9ydCh6aXBfYmlfYnVmKVxuICBlbHNlIGlmICh6aXBfYmlfdmFsaWQgPiAwKVxuICAgIHppcF9wdXRfYnl0ZSh6aXBfYmlfYnVmKVxuXG4gIHppcF9iaV9idWYgPSAwXG4gIHppcF9iaV92YWxpZCA9IDBcbn1cblxuZnVuY3Rpb24gemlwX3FvdXRidWYoKSB7XG4gIGlmICh6aXBfb3V0Y250ICE9IDApIHtcbiAgICBsZXQgcSwgaVxuICAgIHEgPSB6aXBfbmV3X3F1ZXVlKClcbiAgICBpZiAoemlwX3FoZWFkID09IG51bGwpXG4gICAgICB6aXBfcWhlYWQgPSB6aXBfcXRhaWwgPSBxXG4gICAgZWxzZVxuICAgICAgemlwX3F0YWlsID0gemlwX3F0YWlsLm5leHQgPSBxXG5cbiAgICBxLmxlbiA9IHppcF9vdXRjbnQgLSB6aXBfb3V0b2ZmXG4gICAgLy8gICAgICBTeXN0ZW0uYXJyYXljb3B5KHppcF9vdXRidWYsIHppcF9vdXRvZmYsIHEucHRyLCAwLCBxLmxlbik7XG4gICAgZm9yIChpID0gMDsgaSA8IHEubGVuOyBpKyspXG4gICAgICBxLnB0cltpXSA9IHppcF9vdXRidWZbemlwX291dG9mZiArIGldXG5cbiAgICB6aXBfb3V0Y250ID0gemlwX291dG9mZiA9IDBcbiAgfVxufVxuXG5mdW5jdGlvbiB6aXBfZGVmbGF0ZShzdHIsIGxldmVsKSB7XG4gIGxldCBvdXQsIGJ1ZmZcbiAgbGV0IGksIGpcblxuICB6aXBfZGVmbGF0ZV9kYXRhID0gc3RyXG4gIHppcF9kZWZsYXRlX3BvcyA9IDBcbiAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgbGV2ZWwgPSB6aXBfREVGQVVMVF9MRVZFTFxuXG4gIHppcF9kZWZsYXRlX3N0YXJ0KGxldmVsKVxuXG4gIGJ1ZmYgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMDI0IH0pXG4gIG91dCA9ICcnXG4gIHdoaWxlICgoaSA9IHppcF9kZWZsYXRlX2ludGVybmFsKGJ1ZmYsIDAsIGJ1ZmYubGVuZ3RoKSkgPiAwKSB7XG4gICAgZm9yIChqID0gMDsgaiA8IGk7IGorKylcbiAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZmZbal0pXG4gIH1cbiAgemlwX2RlZmxhdGVfZGF0YSA9IG51bGwgLy8gRy5DLlxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIGVuY29kZTY0KGRhdGEpIHtcbiAgbGV0IHIgPSAnJ1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBpZiAoaSArIDIgPT0gZGF0YS5sZW5ndGgpIHtcbiAgICAgIHIgKz0gYXBwZW5kM2J5dGVzKGRhdGEuY2hhckNvZGVBdChpKSwgZGF0YS5jaGFyQ29kZUF0KGkgKyAxKSwgMClcbiAgICB9XG4gICAgZWxzZSBpZiAoaSArIDEgPT0gZGF0YS5sZW5ndGgpIHtcbiAgICAgIHIgKz0gYXBwZW5kM2J5dGVzKGRhdGEuY2hhckNvZGVBdChpKSwgMCwgMClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByICs9IGFwcGVuZDNieXRlcyhcbiAgICAgICAgZGF0YS5jaGFyQ29kZUF0KGkpLFxuICAgICAgICBkYXRhLmNoYXJDb2RlQXQoaSArIDEpLFxuICAgICAgICBkYXRhLmNoYXJDb2RlQXQoaSArIDIpLFxuICAgICAgKVxuICAgIH1cbiAgfVxuICByZXR1cm4gclxufVxuXG5mdW5jdGlvbiBhcHBlbmQzYnl0ZXMoYjEsIGIyLCBiMykge1xuICBjb25zdCBjMSA9IGIxID4+IDJcbiAgY29uc3QgYzIgPSAoKGIxICYgMHgzKSA8PCA0KSB8IChiMiA+PiA0KVxuICBjb25zdCBjMyA9ICgoYjIgJiAweEYpIDw8IDIpIHwgKGIzID4+IDYpXG4gIGNvbnN0IGM0ID0gYjMgJiAweDNGXG4gIGxldCByID0gJydcbiAgciArPSBlbmNvZGU2Yml0KGMxICYgMHgzRilcbiAgciArPSBlbmNvZGU2Yml0KGMyICYgMHgzRilcbiAgciArPSBlbmNvZGU2Yml0KGMzICYgMHgzRilcbiAgciArPSBlbmNvZGU2Yml0KGM0ICYgMHgzRilcbiAgcmV0dXJuIHJcbn1cblxuZnVuY3Rpb24gZW5jb2RlNmJpdChiKSB7XG4gIGlmIChiIDwgMTApXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoNDggKyBiKVxuXG4gIGIgLT0gMTBcbiAgaWYgKGIgPCAyNilcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGIpXG5cbiAgYiAtPSAyNlxuICBpZiAoYiA8IDI2KVxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3ICsgYilcblxuICBiIC09IDI2XG4gIGlmIChiID09IDApXG4gICAgcmV0dXJuICctJ1xuXG4gIGlmIChiID09IDEpXG4gICAgcmV0dXJuICdfJ1xuXG4gIHJldHVybiAnPydcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvemVybGVpL2dpdC9tZS8udml0ZXByZXNzL3RoZW1lL2xpYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvemVybGVpL2dpdC9tZS8udml0ZXByZXNzL3RoZW1lL2xpYi9wbGFudHVtbC1wYXJzZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvemVybGVpL2dpdC9tZS8udml0ZXByZXNzL3RoZW1lL2xpYi9wbGFudHVtbC1wYXJzZXIudHNcIjsndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0eXBlIHtMYW5nVHlwZSwgUGxhbnR1bWxPcHRpb25zfSBmcm9tICcuL3R5cGVzLnRzJztcblxuaW1wb3J0IGRlZmxhdGUgZnJvbSAnLi9kZWZsYXRlJztcblxuZW51bSBTZWxlY3RvckVudW0ge1xuICBJTUcgPSAnZGlhZ3JhbS1tJyxcbiAgTU9EQUwgPSAnZGF0YS1kaWFncmFtLW1vZGFsJyxcbiAgUExBTlRVTUwgPSAnZGF0YS1kaWFncmFtLXBsYW50dW1sJyxcbiAgTUVSTUFJRCA9ICdkYXRhLWRpYWdyYW0tbWVybWFpZCdcbn1cbmNvbnN0IGZ1bmN0aW9ucyA9IHtcbiAgb3B0aW9uczoge1xuICAgIHNob3dDb250cm9sbGVyOiBmYWxzZVxuICB9IGFzIFBsYW50dW1sT3B0aW9ucyxcblxuICBpbml0aWFsaXplKG9wdGlvbnM6IFBsYW50dW1sT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmIChvcHRpb25zKSB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gIH0sXG5cbiAgZ2V0T3B0aW9ucyhsYW5nTmFtZTogTGFuZ1R5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zPy5bbGFuZ05hbWVdID8gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB0aGlzLm9wdGlvbnM/LltsYW5nTmFtZV0pIDogdGhpcy5vcHRpb25zO1xuICB9LFxuXG4gIGdldE1hcmt1cChjb2RlOiBzdHJpbmcsIGRpYWdyYW1OYW1lOiBzdHJpbmcsIGxhbmdOYW1lOiBMYW5nVHlwZSk6IHN0cmluZyB7XG4gICAgY29uc3Qgb3B0ID0gdGhpcy5nZXRPcHRpb25zKGxhbmdOYW1lKTtcbiAgICBjb25zdCBzcmNWYWwgPSB0aGlzLmdlbmVyYXRlU291cmNlKGNvZGUsIGRpYWdyYW1OYW1lLCBvcHQpO1xuICAgIGNvbnN0IGltZyA9IGA8ZGl2IGRhdGEtJHtvcHQuaW1hZ2VGb3JtYXQgfHwgJ3N2Zyd9PVwiJHtTZWxlY3RvckVudW0uUExBTlRVTUx9XCIgY2xhc3M9XCIke1NlbGVjdG9yRW51bS5JTUd9XCI+PGltZyBzcmM9XCIke3NyY1ZhbH1cIiBhbHQ9XCJ1bWwgZGlhZ3JhbVwiPjwvZGl2PmA7XG4gICAgcmV0dXJuIGltZztcbiAgfSxcblxuICBnZW5lcmF0ZVNvdXJjZSh1bWxDb2RlOiBzdHJpbmcsIGRpYWdyYW1OYW1lOiBzdHJpbmcsIHBsdWdpbk9wdGlvbnM6IFBsYW50dW1sT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgbGV0IHVtbENvbnRlbnQgPSB1bWxDb2RlO1xuICAgIGRlYnVnZ2VyXG4gICAgaWYgKCF1bWxDb2RlLnN0YXJ0c1dpdGgoJ0BzdGFydCcpKSB7XG4gICAgICB1bWxDb250ZW50ID0gYEBzdGFydCR7ZGlhZ3JhbU5hbWV9XFxuJHt1bWxDb2RlfVxcbkBlbmQke2RpYWdyYW1OYW1lfWA7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGltYWdlRm9ybWF0ID0gcGx1Z2luT3B0aW9ucz8uaW1hZ2VGb3JtYXQgfHwgJ3N2Zyc7XG4gICAgY29uc3Qgc2VydmVyID0gcGx1Z2luT3B0aW9ucz8uc2VydmVyIHx8ICdodHRwczovL3d3dy5wbGFudHVtbC5jb20vcGxhbnR1bWwnO1xuICAgIGNvbnN0IHppcHBlZENvZGUgPSBkZWZsYXRlLnppcF9kZWZsYXRlKHVtbENvbnRlbnQsIDkpO1xuICAgIGNvbnN0IGJhc2U2NEVuY29kZWQgPSBkZWZsYXRlLmVuY29kZTY0KHppcHBlZENvZGUpO1xuICAgIHJldHVybiBgJHtzZXJ2ZXJ9LyR7aW1hZ2VGb3JtYXR9LyR7YmFzZTY0RW5jb2RlZH1gO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZ1bmN0aW9uc1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvemVybGVpL2dpdC9tZS8udml0ZXByZXNzL3RoZW1lL2xpYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvemVybGVpL2dpdC9tZS8udml0ZXByZXNzL3RoZW1lL2xpYi9wbGFudHVtbC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS96ZXJsZWkvZ2l0L21lLy52aXRlcHJlc3MvdGhlbWUvbGliL3BsYW50dW1sLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW5XaXRoT3B0aW9ucyB9IGZyb20gJ21hcmtkb3duLWl0J1xuaW1wb3J0ICogYXMgcGxhdHVtbEZ1bmN0aW9ucyBmcm9tICcuL3BsYW50dW1sLXBhcnNlcidcbmltcG9ydCB0eXBlIHsgUGxhbnR1bWxPcHRpb25zIH0gZnJvbSAnLi90eXBlcydcbmNvbnN0IE1hcmtkb3duSXRQbGFudFVtbDogUGx1Z2luV2l0aE9wdGlvbnM8UGxhbnR1bWxPcHRpb25zPiA9IChtZCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIHBsYXR1bWxGdW5jdGlvbnMuZGVmYXVsdC5mdW5jdGlvbnMuaW5pdGlhbGl6ZShvcHRpb25zKVxuXG4gIGNvbnN0IGRlZmF1bHRSZW5kZXJlciA9IG1kLnJlbmRlcmVyLnJ1bGVzLmZlbmNlIS5iaW5kKG1kLnJlbmRlcmVyLnJ1bGVzKVxuXG4gIG1kLnJlbmRlcmVyLnJ1bGVzLmZlbmNlID0gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNsZikgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2lkeF1cbiAgICBjb25zdCBjb2RlID0gdG9rZW4uY29udGVudC50cmltKClcbiAgICBjb25zdCBpbmZvID0gdG9rZW4uaW5mbyA/IG1kLnV0aWxzLnVuZXNjYXBlQWxsKHRva2VuLmluZm8pLnRyaW0oKSA6ICcnXG4gICAgbGV0IGxhbmdOYW1lID0gJydcbiAgICBpZiAoaW5mbylcbiAgICAgIGxhbmdOYW1lID0gaW5mby5zcGxpdCgvXFxzKy9nKVswXVxuXG4gICAgc3dpdGNoIChsYW5nTmFtZSkge1xuICAgICAgY2FzZSAncGxhbnR1bWwnOlxuICAgICAgY2FzZSAnZG90JzpcbiAgICAgICAgcmV0dXJuIHBsYXR1bWxGdW5jdGlvbnMuZGVmYXVsdC5mdW5jdGlvbnMuZ2V0TWFya3VwKGNvZGUsICd1bWwnLCBsYW5nTmFtZSlcbiAgICAgIGNhc2UgJ2RpdGFhJzpcbiAgICAgICAgcmV0dXJuIHBsYXR1bWxGdW5jdGlvbnMuZGVmYXVsdC5mdW5jdGlvbnMuZ2V0TWFya3VwKGNvZGUsICdkaXRhYScsIGxhbmdOYW1lKVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFJlbmRlcmVyKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNsZilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bkl0UGxhbnRVbWxcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1EsT0FBTyxpQkFBaUI7OztBQ0ExQixTQUFRLGNBQWE7QUFDclIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sUUFBUTs7O0FDRmYseUJBQUMsQ0FBQyxZQUFXLHdCQUF1QixzQkFBc0IsR0FBRSxDQUFDLFdBQVUsd0JBQXVCLHNCQUFzQixHQUFFLENBQUMsdUJBQXNCLHdCQUF1QixzQkFBc0IsR0FBRSxDQUFDLCtDQUEwQix3QkFBdUIsc0JBQXNCLEdBQUUsQ0FBQyxtREFBeUIsd0JBQXVCLHNCQUFzQixHQUFFLENBQUMsc0VBQTZCLHdCQUF1QixzQkFB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QUFJO0FBQ0osSUFBSTtBQUNKLElBQUk7QUFDSixJQUFJO0FBQ0osSUFBSTtBQUNKLElBQUk7QUFDSixJQUFJO0FBQ0osSUFBSTtBQUNKLElBQUk7QUFDSixJQUFJO0FBQ0osSUFBSTtBQUNKLElBQUk7QUFDSixJQUFJO0FBQ0osSUFBSTtBQUNKLElBQUk7QUFDSixJQUFJO0FBQ0osSUFBSTtBQUdKLElBQU0sa0JBQWtCO0FBQUEsRUFDdEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFDQSxJQUFNLGtCQUFrQjtBQUFBLEVBQ3RCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjtBQUNBLElBQU0sbUJBQW1CO0FBQUEsRUFDdkI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FB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
