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

