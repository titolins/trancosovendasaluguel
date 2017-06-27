import { combineReducers } from 'redux'

import {
  SET_JWT_TOKEN,
  REVOKE_JWT_TOKEN,
  UPDATE_PICTURES,
  UPLOAD_STATE,
  SET_UPLOAD_STATE,
} from './actions'

const initialTokenState = { token: "" }

export function auth(state = initialTokenState, action) {
  switch (action.type) {
    case SET_JWT_TOKEN:
      return (JSON.parse(`${atob(action.token.token.split(".")[0])}`)["typ"] === "JWT") ? Object.assign({}, state.auth, action.token) : state
    case REVOKE_JWT_TOKEN:
      return Object.assign({}, state.auth, { token: "" } )
    default:
      return state
  }
}

const initialPicturesState = []

let pictures = (state = initialPicturesState, action) => {
  switch (action.type) {
    case UPDATE_PICTURES:
      return action.pictures.slice()
    default:
      return state
  }
}

export const data = combineReducers({pictures})

const initialUploadState = {
  state: UPLOAD_STATE.AVAILABLE
}

export function upload(state = initialUploadState, action) {
  switch (action.type) {
    case SET_UPLOAD_STATE:
      return Object.assign({}, state, action.state)
    default:
      return state
  }
}

