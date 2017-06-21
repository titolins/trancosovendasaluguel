/**
 * action types
 */

//export const SET_CONFIG = 'SET_CONFIG';

// translation stuff
export const CHOOSE_LANGUAGE = 'CHOOSE_LANG';

export const ADD_CONTENT = 'ADD_CONTENT';


/**
 * action creators
 */

/*
export function setConfig(config) {
  return { type: SET_CONFIG, config };
}
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

