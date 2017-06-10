import { mapStateToProps as staticPropsMap } from 'client/containers/staticcontent'

const filterItems = (items, lang) => {
  if (items === null) return null
  return items.map((item) => {
    // in future, if we need an item id, we should enforce it here
    return {
      cover: item.Cover,
      content: item.Content[lang],
      // dev stuff
      categoryId: 1,
      id: 1,
      // when we have the id info from the server we can build the url by
      // concatenation with `${}`
      url: '/categorias/1/casas/1'
    }
  })
}

export const mapStateToProps = (state, ownProps) => {
  try {
    let category = state.content.dinamic.categories[ownProps.categoryId],
        lang = state.lang.selected
    return {
      title: category.Content[lang].Title,
      items: filterItems(category[ownProps.categoryContent], lang),
      ownContent: ownProps.contentId ? staticPropsMap(state, ownProps).ownContent : undefined
    }
  } catch (e) {
    return { title: null, items: null }
  }
}

