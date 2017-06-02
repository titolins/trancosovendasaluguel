import React from 'react'
import { connect } from 'react-redux'
import { selectLanguage } from 'client/actions'
import { Languages } from 'client/containers/Content'

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

const ChooseLanguage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelector)

export default ChooseLanguage
