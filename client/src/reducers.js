import { combineReducers } from 'redux';
import { CHOOSE_LANGUAGE, ADD_CONTENT } from './actions';
import { Languages, Content } from 'client/containers/Content';

const { PT } = Languages;

const initialState = {
  selected: PT,
  content: Content
}

/*
function config(state = {}, action) {
  switch (action.type) {
  case SET_CONFIG:
    return action.config;
  default:
    return state;
  }
}
*/

function lang(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_LANGUAGE:
        /*
      return Object.assign({}, state, {
        selected: action.lang
      })
      */
      let newState = state;
      newState.selected = action.lang;
      return newState;
    default:
      return state
  }
}

function content(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTENT:
        /*
      let pt = Object.assign({}, state.content[Languages[PT]], action.content.PT);
      let en = Object.assign({}, state.content[Languages[EN]], action.content.EN);
      return Object.assign({}, state, { content: {
          PT_BR: pt,
          EN_US: en
        }
      })
      */
      return state
    default:
      return state
  }
}

export default combineReducers({
  //config,
  lang,
  content
});
