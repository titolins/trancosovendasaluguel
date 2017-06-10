
import App from 'client/components/app'

import { addContent } from 'client/actions'

const createFetchContentHandler = (dispatch, url, contentId) => {
  return  () => {
    fetch(url).then((response) => {
      return response.json()
    }).then((responseJson) => {
      dispatch(addContent(responseJson, contentId))
    })
  }
}

const createFetchCategoriesHandler = (dispatch) => {
  return  () => {
    fetch("/api/categories").then((response) => {
      return response.json()
    }).then((responseJson) => {
      dispatch(addContent(responseJson, "categories"))
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: createFetchCategoriesHandler(dispatch)
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: createFetchContentHandler(dispatch, ownProps.url, ownProps.contentId)
  }
}

//export default connect(null, mapDispatchToProps)(App)
