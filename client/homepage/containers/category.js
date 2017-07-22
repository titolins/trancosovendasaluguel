import { mapStateToProps as staticPropsMap } from 'homepage/containers/staticcontent'
import { createFetchContentHandler } from 'homepage/containers/fetchcontent'

export const filterItems = (items, category, lang) => {
  return items.map((item, i) => {
    let pictures = item.pictureFolder.pictures || []
    pictures.unshift(item.pictureFolder.cover)
    return {
      cover: item.pictureFolder.cover,
      name: item.name,
      content: item.content[lang],
      pictures: pictures,
      id: item.id,
      url: `/categorias/${category}/casas/${item.id}`
    }
  })
}

export const mapStateToProps = (state, ownProps) => {
  try {
    let category = state.content.dinamic.categories[ownProps.categoryId],
        lang = state.lang.selected,
        items
    if (ownProps.categoryContent === 'category') items = state.content.dinamic.category
    else if (category[ownProps.categoryContent].length > 0) items = category[ownProps.categoryContent]
    else items = category.items
    return {
      title: category ? category.content[lang].title : null,
      items: items ? filterItems(items, ownProps.categoryId, lang) : null,
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
