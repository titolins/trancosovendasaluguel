import { selectLanguage } from 'homepage/actions'
import { Languages } from 'homepage/containers/staticcontent'

import LanguageSelector from 'homepage/components/languageselector'

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

