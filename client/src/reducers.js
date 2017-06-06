import { combineReducers } from 'redux';
import { CHOOSE_LANGUAGE, ADD_CONTENT } from './actions';
import { Languages, Content } from 'client/containers/staticcontent';

const { PT, EN } = Languages;

const initialLangState = { selected: PT }
const initialContentState = Content

function lang(state = initialLangState, action) {
  switch (action.type) {
    case CHOOSE_LANGUAGE:
      return Object.assign({}, state.lang, {
        selected: action.lang
      })
    default:
      return state
  }
}

function content(state = initialContentState, action) {
  switch (action.type) {
    case ADD_CONTENT:
      let contentState = {}
      contentState[action.contentId] = action.content
      return Object.assign({}, state, { dinamic: Object.assign({}, state.dinamic, contentState) })
    default:
      return state
  }
}

export default combineReducers({
  lang,
  content
});
