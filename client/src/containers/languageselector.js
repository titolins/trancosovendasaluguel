import { selectLanguage } from 'client/actions'
import { Languages } from 'client/containers/staticcontent'

import LanguageSelector from 'client/components/languageselector'

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectLanguage(Languages[ownProps.lang]))
    }
  }
}

export const mapStateToProps = (state, ownProps) => {
  return {
    active: (state.lang.selected === Languages[ownProps.lang]),
    lang: ownProps.lang,
    margins: ownProps.margins
  }
}

