import { combineReducers } from 'redux';
import { CHOOSE_LANGUAGE, ADD_CONTENT } from './actions';
import { Languages, Content } from 'client/containers/content';

const { PT, EN } = Languages;

const initialState = {
  selected: PT,
  content: Content
}

function lang(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_LANGUAGE:
      return Object.assign({}, state, {
        selected: action.lang
      })
    default:
      return state
  }
}

function content(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTENT:
      let contentState = {}
      contentState[action.contentId] = action.content
      return Object.assign({}, state.content, { dinamic: Object.assign({}, state.content.dinamic, contentState) })
    default:
      return state
  }
}

export default combineReducers({
  lang,
  content
});
