import React from 'react'
import { connect } from 'react-redux'
import { selectLanguage } from 'client/actions'
import { Languages } from 'client/containers/content'

import LanguageSelector from 'client/components/languageselector'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectLanguage(Languages[ownProps.lang]))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: (state.lang.selected === Languages[ownProps.lang]),
    lang: ownProps.lang
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelector)

