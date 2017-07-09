import { mapStateToProps as staticPropsMap } from 'homepage/containers/staticcontent'

export const filterItems = (items, lang) => {
  if (items === null) return null
  return items.map((item) => {
    // in future, if we need an item id, we should enforce it here
    return {
      cover: item.pictureFolder.cover,
      name: item.name,
      content: item.content[lang],
      // dev stuff
      pictures: item.pictureFolder.pictures,
      //categoryId: item.category.name,
      id: item.id,
      url: `/categorias/${item.categories[0]}/casas/${item.id}`
      // when we have the id info from the server we can build the url by
      // concatenation with `${}`
      //url: '/categorias/1/casas/1'
    }
  })
}

export const mapStateToProps = (state, ownProps) => {
  try {
    let category = state.content.dinamic.categories[ownProps.categoryId],
        lang = state.lang.selected
    return {
      title: category.content[lang].title,
      items: filterItems(category[ownProps.categoryContent], lang),
      ownContent: ownProps.contentId ? staticPropsMap(state, ownProps).ownContent : undefined,
      categoryId: ownProps.categoryId
    }
  } catch (e) {
    return { title: null, items: null }
  }
}

