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
  AVAILABLE: 'UPLOAD_STATE_AVAILABLE',
  BUSY: 'UPLOAD_STATE_BUSY',
  SUCCESS: 'UPLOAD_STATE_SUCCESS'
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

export const UPDATE_FOLDERS = 'UPDATE_FOLDERS'

export function updateFolders(folders) {
  return {
    type: UPDATE_FOLDERS,
    folders
  }
}


export const SET_POST_STATE = 'SET_POST_STATE'

export function setPostErrors(errors) {
  return {
    type: SET_POST_STATE,
    state: {
      success: false,
      errors
    },
  }
}

export function setPostSuccess() {
  return {
    type: SET_POST_STATE,
    state: {
      success: true,
      errors: {}
    }
  }
}


