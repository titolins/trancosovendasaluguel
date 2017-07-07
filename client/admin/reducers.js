import { combineReducers } from 'redux'

import {
  SET_JWT_TOKEN,
  REVOKE_JWT_TOKEN,
  UPDATE_PICTURES,
  UPLOAD_STATE,
  SET_UPLOAD_STATE,
  SET_UPLOAD_ERRORS,
  UPDATE_HOUSES,
  UPDATE_FOLDERS,
  SET_POST_STATE,
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
      return action.pictures ? action.pictures.slice() : []
    default:
      return state
  }
}

const initialHousesState = []

let houses = (state = initialHousesState, action) => {
  switch (action.type) {
    case UPDATE_HOUSES:
      return action.houses ? action.houses.slice() : []
    default:
      return state
  }
}

const initialFoldersState = []

let folders = (state = initialFoldersState, action) => {
  switch (action.type) {
    case UPDATE_FOLDERS:
      return action.folders ? action.folders.slice() : []
    default:
      return state
  }
}

export const data = combineReducers({pictures, houses, folders})

const initialUploadState = {
  state: UPLOAD_STATE.AVAILABLE,
  errors: []
}

export function upload(state = initialUploadState, action) {
  switch (action.type) {
    case SET_UPLOAD_STATE:
      return Object.assign({}, state, action.state)
    case SET_UPLOAD_ERRORS:
      return Object.assign({}, state, action.errors)
    default:
      return state
  }
}

const initialPostState = {
  errors: {},
  success: false
}

export function post(state = initialPostState, action) {
  switch (action.type) {
    case SET_POST_STATE:
      return Object.assign({}, state, action.state)
    default:
      return state
  }
}

