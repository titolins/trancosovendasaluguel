import { connect } from 'react-redux'

import App from 'client/components/app'

const fetchCategories = () => {
  return (dispatch) => {
    fetch("/api/categories").then((response) => {
      console.log(response)
      // dispatch(response.json)
    })
  }
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, {fetchCategories})(App)
