
const getHouseContent = (content, lang, contentId) => {
  let ownContent = content.dinamic[contentId].Content[lang]
  ownContent.Capacity = `${content.dinamic[contentId].Capacity} ${content.static[contentId][lang].people}`
  return ownContent
}

export const mapStateToProps = (state, ownProps) => {
  try {
    return {
      ownContent: getHouseContent(state.content, state.lang.selected, ownProps.contentId)
    }
  } catch (e) {
    return {
      ownContent: {
        Name: null,
        Description: null,
        Features: null,
      }
    }
  }
}
