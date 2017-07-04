import App from 'homepage/components/app'

import { addContent } from 'homepage/actions'

export const createFetchContentHandler = (dispatch, contentId) => {
  return  (url) => {
    fetch(url).then((response) => {
      return response.json()
    }).then((responseJson) => {
      console.log(responseJson)
      dispatch(addContent(responseJson, contentId))
    })
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchContent: createFetchContentHandler(dispatch, ownProps.contentId)
  }
}

