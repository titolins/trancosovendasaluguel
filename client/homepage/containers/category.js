import { mapStateToProps as staticPropsMap } from 'homepage/containers/staticcontent'

export const filterItems = (items, lang) => {
  if (items === null) return null
  return items.map((item) => {
    return {
      cover: item.pictureFolder.cover,
      name: item.name,
      content: item.content[lang],
      pictures: item.pictureFolder.pictures,
      //categoryId: item.category.name,
      id: item.id,
      url: `/categorias/${item.categories[0]}/casas/${item.id}`
    }
  })
}

export const mapStateToProps = (state, ownProps) => {
  try {
    let category = state.content.dinamic.categories[ownProps.categoryId],
        lang = state.lang.selected,
        items = (category[ownProps.categoryContent].length > 0) ? category[ownProps.categoryContent] : category.items
    return {
      title: category.content[lang].title,
      items: filterItems(items, lang),
      ownContent: ownProps.contentId ? staticPropsMap(state, ownProps).ownContent : undefined,
      categoryId: ownProps.categoryId
    }
  } catch (e) {
    return { title: null, items: null }
  }
}

