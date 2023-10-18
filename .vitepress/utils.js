
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