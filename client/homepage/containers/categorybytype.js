import { mapStateToProps as staticPropsMap } from 'homepage/containers/staticcontent'

import { filterItems } from 'homepage/containers/category'
import { createFetchContentHandler } from 'homepage/containers/fetchcontent'

export const mapStateToProps = (state, ownProps) => {
  try {
    let typeId = ownProps.match.params.typeId,
        items = state.content.dinamic.categoryByType,
        lang = state.lang.selected
    return {
      title: state.content.static.categoryTypes[lang][typeId],
      items: filterItems(items, ownProps.match.params.categoryId, lang),
      ownContent: ownProps.contentId ? staticPropsMap(state, ownProps).ownContent : undefined,
    }
  } catch (e) {
    return {
      title: null,
      items: null,
      ownContent: null
    }
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchContent: createFetchContentHandler(dispatch, "categoryByType")
  }
}
