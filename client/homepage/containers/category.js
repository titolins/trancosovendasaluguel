import { mapStateToProps as staticPropsMap } from 'homepage/containers/staticcontent'
import { createFetchContentHandler } from 'homepage/containers/fetchcontent'

export const filterItems = (items, lang) => {
  if (!items) return null
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
  if (state.content.dinamic) window.items = filterItems(state.content.dinamic.category, state.lang.selected)
  try {
    let category = state.content.dinamic.categories[ownProps.categoryId],
        lang = state.lang.selected,
        items
    if (ownProps.categoryContent === 'category') items = state.content.dinamic.category
    else { items = (category[ownProps.categoryContent].length > 0) ? category[ownProps.categoryContent] : category.items }
    return {
      title: category ? category.content[lang].title : null,
      items: items ? filterItems(items, lang) : null,
      ownContent: ownProps.contentId ? staticPropsMap(state, ownProps).ownContent : undefined,
      categoryTypes: state.content.static.categoryTypes[lang],
      categoryId: ownProps.categoryId
    }
  } catch (e) {
    return {
      title: null,
      items: null,
      categoryTypes: state.content.static.categoryTypes[state.lang.selected],
    }
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchContent: createFetchContentHandler(dispatch, "category")
  }
}
