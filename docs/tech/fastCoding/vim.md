# vim, cool和高效率的编辑方式

>重要的是: vim十分迷人，但不要使用纯vim作为主力编辑器，使用vscode+neovim+vsneovim扩展

坚持使用vim理由是: 
1. vim的编辑方式提高效率
2. 使用vim时,提高编程效率被显性的放在台面上,**你会一直思考如何提高效率,若不使用vim这种思考就很少**
3. vim可以配置成完全符合你的癖好

使用vim面临的挑战:

1. vim 要记忆许多快捷键，上手难度真的高，而且在前期学习vim的投入效果不明显(仅仅在linux服务器编辑文件会用到...)
2. vim 的配置也十分复杂，纯vim 很难在短时间内表现生产力
3. 你熟悉了vim的编辑方式，但很多其它的工具例如 word 不是vim的快捷方式的.
4. 一个好的vim配置，是一个lua项目，因此你要在熟悉vim的情况下有一个lua工程，这个使用别人的可能会方便一点。

该如何使用vim:

1. vim不是速成的,但也不需要特别刻意练习,逐渐适应vim的快捷键是符合现状的方式.
2. 不要进入 `vim 宗教`.vim是一种编辑方式,只在必要的时候使用纯vim.有闲时使用vim写c++和zig是可以的,vscode+neovim非常适合现状
3. nvim 比传统vim更有前途,使用nvim
4. 基于我的主力编辑是vscode, 因此不应该使用任何配置好的‘nvim ide ’等，把vim当成一个最基本的编辑器即可,在此基础上逐渐熟悉各种插件等。
vim是被很多人忽视的生产力工具，程序员真的可能因为vim拉卡一些差距。

## 简单的vim配置
vscode 配合vim 编辑方式使用vim
```lua
-- init.lua
local opts = {
    noremap = true,
    silent = true
}
local term_opts = {
    silent = true
}
-- Shorten function name
local keymap = vim.api.nvim_set_keymap

-- Remap space as leader key
keymap("", "<Space>", "<Nop>", opts)
vim.g.mapleader = " "
vim.g.maplocalleader = " "

keymap('n', 'J', '3j', opts)
keymap('n', 'K', '3k', opts)
keymap('n', 'L', '$', opts)
keymap('n', 'H', '^', opts)
keymap('n', '<leader>p', '\"*p', opts)

keymap('v', 'L', '$', opts)
keymap('v', 'H', '^', opts)
keymap('v', 'K', '3k', opts)
keymap('v', 'J', '3j', opts)

-- When yanked, move the cursor to the end of the selected text
keymap('v', '<leader>y', '\"*y`>', opts)
keymap('x', 'y', 'y`>', opts)
if vim.g.vscode then
    -- vim.api.nvim_exec([[
    --     nnoremap <leader>c <Cmd>call VSCodeNotify('workbench.action.terminal.toggleTerminal')<CR>
    --     ]], false)
else
end

```
在一些其它编辑工具下,当不支持nvim时

```vim
-- vimrc

let mapleader = " "

nnoremap J 3j
nnoremap K 3k
nnoremap L $
nnoremap H ^
nnoremap <leader>p  "*p

vnoremap J 3j
vnoremap K 3k
vnoremap L $
vnoremap H ^
vnoremap <leader>y  "*y`>
vnoremap y y`>

```

## 掌握vim快捷键
### 2023年

`c` : 从当前位置进入 i model。`cc`,`caw` 等均可用。它可以代替 `daw a` 或者 `dd a`

`gh`: 打开悬浮框,查看鼠标悬停关键字的详细定义

`gH`: 查看鼠标悬停关键字的引用

`Ctrl+f`:使用vscode的搜索快捷键