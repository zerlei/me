---
tags:
  - vscode
keys:
  - 编程环境
---

::: info Introduction

我使用vscode 是加 neovim一起使用的，借助vscode neovim 插件，我将大部分快捷键挪到了nvim 的配置文件中，详情可以看https://github.com/ZhaoYouYa/my-nvchad-config 但是还有一些挪不过去，这里记录以下。

:::


> 逐渐适应快捷键是必要的～




### AI 代码提示

我现在用的是腾讯的混元大模型，估计以后要为这个付费。。。 后面的编程估计都缺少不了这个。 

`<tab>` 当提示出现时，按tab补全一个词。

`<S-tab>` 当提示出现时，按tab补全一行。


### 文件查找

`<ctrl-p>` 搜索文件，这个是强大的搜索功能，可以搜索当前文件夹，也可以搜索整个项目。

### 内置功能

`<ctrl-shift-p>` 打开命令面板，可以输入命令。

`<ctrl+alt+h/l>` 移动当前编辑器到左/右分组

## vscode快捷键备份

虽然vscode 有同步快捷键的功能，但是瞎改可能改错，这里备份一下。

```json

// 将键绑定放在此文件中以覆盖默认值auto[]
[
    {
        "key": "ctrl+shift+l",
        "command": "-editor.action.selectHighlights",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+shift+l",
        "command": "-addCursorsAtSearchResults",
        "when": "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        "key": "ctrl+shift+l",
        "command": "-selectAllSearchEditorMatches",
        "when": "inSearchEditor"
    },
    {
        "key": "ctrl+shift+e",
        "command": "-workbench.action.quickOpenNavigatePreviousInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
    },
    {
        "key": "ctrl+shift+e",
        "command": "-workbench.view.explorer"
    },
    {
        "key": "ctrl+alt+b",
        "command": "bookmarks.toggle",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+k",
        "command": "-bookmarks.toggle",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+l",
        "command": "workbench.action.focusRightGroup"
    },
    {
        "key": "ctrl+k ctrl+right",
        "command": "-workbench.action.focusRightGroup"
    },
    {
        "key": "ctrl+h",
        "command": "workbench.action.focusLeftGroup"
    },
    {
        "key": "ctrl+k ctrl+left",
        "command": "-workbench.action.focusLeftGroup"
    },
    {
        "key": "alt+f",
        "command": "editor.action.formatDocument",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
    },
    {
        "key": "shift+alt+f",
        "command": "-editor.action.formatDocument",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
    },
    {
        "key": "alt+pagedown",
        "command": "scrollPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "alt+pagedown",
        "command": "-scrollPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "alt+pageup",
        "command": "scrollPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "alt+pageup",
        "command": "-scrollPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "pageup",
        "command": "-cursorPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "pagedown",
        "command": "-cursorPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+s",
        "command": "saveAll"
    },
    {
        "key": "ctrl+k s",
        "command": "-saveAll"
    },
    {
        "key": "ctrl+k s",
        "command": "workbench.action.files.save"
    },
    {
        "key": "ctrl+s",
        "command": "-workbench.action.files.save"
    },
    {
        "key": "alt+f11",
        "command": "workbench.action.toggleZenMode"
    },
    {
        "key": "ctrl+k z",
        "command": "-workbench.action.toggleZenMode"
    },
    {
        "key": "alt+i",
        "command": "workbench.action.increaseViewSize"
    },
    {
        "key": "alt+d",
        "command": "workbench.action.decreaseViewSize"
    },
    {
        "key": "ctrl+n",
        "command": "workbench.action.toggleSidebarVisibility"
    },
    {
        "key": "ctrl+b",
        "command": "-workbench.action.toggleSidebarVisibility"
    },
    {
        "key": "alt+c",
        "command": "workbench.action.closeActiveEditor"
    },
    {
        "key": "ctrl+f4",
        "command": "-workbench.action.closeActiveEditor"
    },
    {
        "key": "ctrl+f",
        "command": "-vscode-neovim.ctrl-f",
        "when": "editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'"
    },
    {
        "key": "ctrl+c",
        "command": "-vscode-neovim.escape",
        "when": "editorTextFocus && neovim.ctrlKeysNormal && neovim.init && !dirtyDiffVisible && !findWidgetVisible && !inReferenceSearchEditor && !markersNavigationVisible && !notebookCellFocused && !notificationCenterVisible && !parameterHintsVisible && !referenceSearchVisible && neovim.mode == 'normal'"
    },
    {
        "key": "ctrl+c",
        "command": "-vscode-neovim.escape",
        "when": "editorTextFocus && neovim.ctrlKeysInsert && neovim.init && neovim.mode != 'normal'"
    },
    {
        "key": "ctrl+x",
        "command": "-vscode-neovim.send",
        "when": "editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'"
    },
    {
        "key": "ctrl+l",
        "command": "-vscode-neovim.send",
        "when": "editorTextFocus && neovim.ctrlKeysNormal && neovim.init && neovim.mode != 'insert'"
    },
    {
        "key": "alt+right",
        "command": "workbench.action.increaseViewWidth"
    },
    {
        "key": "alt+left",
        "command": "workbench.action.decreaseViewWidth"
    },
    {
        "key": "tab",
        "command": "-editor.action.inlineSuggest.commit",
        "when": "inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible"
    },
    {
        "key": "shift+tab",
        "command": "-acceptAlternativeSelectedSuggestion",
        "when": "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "up",
        "command": "-editor.action.scrollUpHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "down",
        "command": "-editor.action.scrollDownHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "alt+k",
        "command": "selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "up",
        "command": "-selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "tab",
        "command": "-workbench.action.terminal.acceptSelectedSuggestion",
        "when": "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        "key": "shift+tab",
        "command": "-insertPrevSuggestion",
        "when": "hasOtherSuggestions && textInputFocus && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'"
    },
    {
        "key": "tab",
        "command": "-acceptSelectedSuggestion",
        "when": "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "alt+j",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "down",
        "command": "-selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "enter",
        "command": "acceptSelectedSuggestion",
        "when": "acceptSuggestionOnEnter && suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && suggestionMakesTextEdit && textInputFocus"
    },
    {
        "key": "enter",
        "command": "-acceptSelectedSuggestion",
        "when": "acceptSuggestionOnEnter && suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && suggestionMakesTextEdit && textInputFocus"
    },
    {
        "key": "ctrl+c",
        "command": "-vscode-neovim.escape",
        "when": "editorTextFocus && neovim.ctrlKeysNormal.c && neovim.init && !dirtyDiffVisible && !findWidgetVisible && !inReferenceSearchEditor && !markersNavigationVisible && !notebookCellFocused && !notificationCenterVisible && !parameterHintsVisible && !referenceSearchVisible && neovim.mode == 'normal' && editorLangId not in 'neovim.editorLangIdExclusions'"
    },
    {
        "key": "ctrl+c",
        "command": "-vscode-neovim.escape",
        "when": "editorTextFocus && neovim.ctrlKeysInsert.c && neovim.init && neovim.mode != 'normal' && editorLangId not in 'neovim.editorLangIdExclusions'"
    },
    {
        "key": "ctrl+r ctrl+c",
        "command": "-vscode-neovim.send-cmdline",
        "when": "neovim.init && neovim.mode == 'cmdline'"
    },
    {
        "key": "ctrl+c",
        "command": "-editor.action.clipboardCopyAction"
    },
    {
        "key": "ctrl+insert",
        "command": "-editor.action.clipboardCopyAction"
    },
    {
        "key": "ctrl+f",
        "command": "-vscode-neovim.ctrl-f",
        "when": "editorTextFocus && neovim.ctrlKeysNormal.f && neovim.init && neovim.mode != 'insert' && editorLangId not in 'neovim.editorLangIdExclusions'"
    },
    {
        "key": "ctrl+n",
        "command": "-workbench.action.files.newUntitledFile"
    },
    {
        "key": "ctrl+h",
        "command": "breadcrumbs.focusPrevious",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+left",
        "command": "-breadcrumbs.focusPrevious",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+l",
        "command": "breadcrumbs.focusNext",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+right",
        "command": "-breadcrumbs.focusNext",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+l",
        "command": "breadcrumbs.focusNextWithPicker",
        "when": "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus"
    },
    {
        "key": "ctrl+right",
        "command": "-breadcrumbs.focusNextWithPicker",
        "when": "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus"
    },
    {
        "key": "ctrl+w",
        "command": "-workbench.action.closeActiveEditor"
    },
    {
        "key": "ctrl+c",
        "command": "editor.action.clipboardCopyAction"
    },
    {
        "key": "up",
        "command": "editor.action.selectPreviousStickyScrollLine",
        "when": "stickyScrollFocused"
    },
    {
        "key": "up",
        "command": "-editor.action.selectPreviousStickyScrollLine",
        "when": "stickyScrollFocused"
    },
    {
        "key": "alt+k",    
        "command": "-keybindings.editor.recordSearchKeys",
        "when": "inKeybindings && inKeybindingsSearch"
    },
    {
        "key": "shift+tab",
        "command": "editor.action.inlineSuggest.acceptNextLine",
        "when": "inlineSuggestionVisible && !editorReadonly"
    },
    {
        "key": "ctrl+right",
        "command": "-editor.action.inlineSuggest.acceptNextWord",
        "when": "inlineSuggestionVisible && !editorReadonly"
    },
    {
        "key": "tab",
        "command": "editor.action.inlineSuggest.acceptNextWord",
        "when": "inlineSuggestionVisible && !editorReadonly"
    },
    {
        "key": "ctrl+alt+h",
        "command": "workbench.action.moveEditorToPreviousGroup"
    },
    {
        "key": "ctrl+alt+left",
        "command": "-workbench.action.moveEditorToPreviousGroup"
    },
    {
        "key": "ctrl+alt+l",
        "command": "workbench.action.moveEditorToNextGroup"
    },
    {
        "key": "ctrl+alt+right",
        "command": "-workbench.action.moveEditorToNextGroup"
    }
]
```
