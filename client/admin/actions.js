export const SET_JWT_TOKEN = 'SET_JWT_TOKEN'
export const REVOKE_JWT_TOKEN = 'REVOKE_JWT_TOKEN'

export function setJWTToken(token) {
  return {
    type: SET_JWT_TOKEN,
    token
  }
}

export function revokeJWTToken() {
  return {
    type: REVOKE_JWT_TOKEN
  }
}

export const UPDATE_PICTURES = 'UPDATE_PICTURES'

export function updatePictures(pictures) {
  return {
    type: UPDATE_PICTURES,
    pictures
  }
}

export const UPLOAD_STATE = {
  AVAILABLE: 'AVAILABLE',
  BUSY: 'BUSY'
}

export const SET_UPLOAD_STATE = 'SET_UPLOAD_STATE'

export function setUploadState(state) {
  return {
    type: SET_UPLOAD_STATE,
    state
  }
}

export const SET_UPLOAD_ERRORS = 'SET_UPLOAD_ERRORS'

export function setUploadErrors(errors) {
  return {
    type: SET_UPLOAD_ERRORS,
    errors
  }
}

export const UPDATE_HOUSES = 'UPDATE_HOUSES'

export function updateHouses(houses) {
  return {
    type: UPDATE_HOUSES,
    houses
  }
}

export const SET_POST_ERRORS = 'SET_POST_ERRORS'

export function setPostErrors(errors) {
  return {
    type: SET_POST_ERRORS,
    errors
  }
}
