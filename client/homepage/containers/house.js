import { mapStateToProps as staticPropsMap } from 'homepage/containers/staticcontent'

const getHouseContent = (content, lang, contentId) => {
  let ownContent = content.dinamic[contentId].Content[lang]
  ownContent.Capacity = `${content.dinamic[contentId].Capacity} ${content.static[contentId][lang].people}`
  ownContent.Pictures = content.dinamic[contentId].Pictures
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
        Name: null,
        Description: null,
        Features: null,
        Capacity: null,
        Pictures: null,
      },
      staticContent
    }
  }
}
