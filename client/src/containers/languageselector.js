import { connect } from 'react-redux'
import { selectLanguage } from 'client/actions'
import { Languages } from 'client/containers/staticcontent'

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
    lang: ownProps.lang,
    margins: ownProps.margins
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelector)

