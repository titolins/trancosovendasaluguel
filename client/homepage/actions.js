/**
 * action types
 */

//export const SET_CONFIG = 'SET_CONFIG';

// translation stuff
export const CHOOSE_LANGUAGE = 'CHOOSE_LANG'

export const ADD_CONTENT = 'ADD_CONTENT'

export const SET_MESSAGE_RESPONSE = 'SET_MESSAGE_RESPONSE'

/**
 * action creators
 */

// translation
export function selectLanguage(lang) {
  return {
    type: CHOOSE_LANGUAGE,
    lang
  }
}

export function addContent(content, contentId) {
  return {
    type: ADD_CONTENT,
    contentId,
    content
  }
}

export function setMessageResponse(response) {
  return {
    type: SET_MESSAGE_RESPONSE,
    response
  }
}

