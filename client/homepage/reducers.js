import { combineReducers } from 'redux'
import { CHOOSE_LANGUAGE, ADD_CONTENT, SET_MESSAGE_RESPONSE } from './actions'
import { Languages, Content } from 'homepage/containers/staticcontent'

const { PT, EN } = Languages

const initialLangState = { selected: PT }
const initialContentState = Content
const initialMessageState = { error: false, errors: null }

export function lang(state = initialLangState, action) {
  switch (action.type) {
    case CHOOSE_LANGUAGE:
      return Object.assign({}, state.lang, {
        selected: action.lang
      })
    default:
      return state
  }
}

export function content(state = initialContentState, action) {
  switch (action.type) {
    case ADD_CONTENT:
      let contentState = {}
      contentState[action.contentId] = action.content
      return Object.assign({}, state, { dinamic: Object.assign({}, state.dinamic, contentState) })
    default:
      return state
  }
}

export function message(state = initialMessageState, action) {
  switch (action.type) {
    case SET_MESSAGE_RESPONSE:
      return Object.assign({}, state, action.response)
    default:
      return state
  }
}
