import App from 'client/components/app'

import { addContent } from 'client/actions'

const createFetchContentHandler = (dispatch, contentId) => {
  return  (url) => {
    fetch(url).then((response) => {
      return response.json()
    }).then((responseJson) => {
      dispatch(addContent(responseJson, contentId))
    })
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchContent: createFetchContentHandler(dispatch, ownProps.contentId)
  }
}

