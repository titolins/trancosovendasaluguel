import { connect } from 'react-redux'
import { Languages } from 'client/containers/staticcontent'

import CategoryDropdown from 'client/components/categorydropdown'

const filterItems = (items, lang) => {
  if (items === null) return null
  return items.map((item) => {
    // in future, if we need an item id, we should enforce it here
    return item.Content[lang]
  })
}

const mapStateToProps = (state, ownProps) => {
  try {
    let category = state.content.dinamic.categories[ownProps.categoryId],
        lang = state.lang.selected
    return {
      title: category.Content[lang].Title,
      items: filterItems(category.Items, lang)
    }
  } catch (e) {
    //console.log("error parsing category data. probably we didn't received the info from the server. otherwise, there's something broken..")
    //console.log(e)
    return { title: null, items: null }
  }
}

export default connect(
  mapStateToProps
)(CategoryDropdown)
