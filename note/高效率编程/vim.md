> 坚持使用vim理由是: vim的编辑方式是确实提高效率,而且使用vim的过程中,提高编程效率是被显性的放在台面上,你会一直思考如何提高效率,不使用vim这种思考就很少.

1. vim不是速成的,但也不需要特别刻意练习.
2. 不要进入 `vim 宗教`.vim是一种编辑方式,只在必要的时候使用纯vim.有闲时使用vim写c++和zig是可以的.前端就别考虑了,缺少很多相关工具链.
3. nvim 比传统vim更有前途,使用nvim
4. 使用lvim,在这个的基础上折腾.


### nvim+vscode init.lua
vscode 配合vim 编辑方式使用vim
```lua

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
keymap('v', '<leader>y', '\"*y', opts)

if vim.g.vscode then
    -- vim.api.nvim_exec([[
    --     nnoremap <leader>c <Cmd>call VSCodeNotify('workbench.action.terminal.toggleTerminal')<CR>
    --     ]], false)
else
end
```

### 在一些其它编辑工具下,当不支持nvim,使用vimrc


```vim

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
keymap('v', '<leader>y', '\"*y', opts)

if vim.g.vscode then
    -- vim.api.nvim_exec([[
    --     nnoremap <leader>c <Cmd>call VSCodeNotify('workbench.action.terminal.toggleTerminal')<CR>
    --     ]], false)
else
end

```
