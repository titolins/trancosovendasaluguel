import { combineReducers } from 'redux';
import { CHOOSE_LANGUAGE, ADD_CONTENT } from './actions';
import { Languages, Content } from 'client/containers/content';

const { PT, EN } = Languages;

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
      return Object.assign({}, state, {
        selected: action.lang
      })
    default:
      return state
  }
}

/*
// 1st step
// we first get the relevant content of the items, where:
// result[0] = portuguese content
// result[1] = english content
function extractContent(content) {
  content.map((item) => {
    return [ item.Content.PT,
             item.Content.EN ]
  })
}

 *
 * result of the above:
 *
 * ```
 *  [
 *    [item_0[PT],item_0[EN]],
 *    [item_1[PT],item_1[EN]]
 *  ]
 * ```

// 2nd step
// now we need to transform the result above into language arrays
function filterContent(content) {
  return { "PT_BR": extractedContent.filter((item) => { return item[0] }),
           "EN_US": extractedContent.filter((item) => { return item[1] }) }
}

// wrapper
function parseContent(content) {
  console.log("parsed content")
  console.log(filterContent(extractContent(content)))
}
 */

function content(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTENT:
      console.log("state")
      console.log(state)
      console.log("action")
      console.log(action)
      let contentState = {}
      contentState[action.contentId] = action.content

      return Object.assign({}, state.content, { dinamic: Object.assign({}, state.content.dinamic, contentState) })
    default:
      return state
  }
}

export default combineReducers({
  //config,
  lang,
  content
});
