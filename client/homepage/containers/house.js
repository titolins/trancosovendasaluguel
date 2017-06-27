import { mapStateToProps as staticPropsMap } from 'homepage/containers/staticcontent'

const getHouseContent = (content, lang, contentId) => {
  let ownContent = content.dinamic[contentId].content[lang]
  ownContent.capacity = `${content.dinamic[contentId].capacity} ${content.static[contentId][lang].people}`
  ownContent.pictures = content.dinamic[contentId].pictures
  return ownContent
}

export const mapStateToProps = (state, ownProps) => {
  let staticContent = staticPropsMap(state, ownProps).ownContent
  try {
    return {
      ownContent: getHouseContent(state.content, state.lang.selected, ownProps.contentId),
      staticContent
    }
  } catch (e) {
    return {
      ownContent: {
        name: null,
        description: null,
        features: null,
        capacity: null,
        pictures: null,
      },
      staticContent
    }
  }
}
