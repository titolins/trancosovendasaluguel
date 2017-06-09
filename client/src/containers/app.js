import { connect } from 'react-redux'

import App from 'client/components/app'

import { addContent } from 'client/actions'

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

export default connect(null, mapDispatchToProps)(App)
