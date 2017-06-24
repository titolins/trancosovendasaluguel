export const SET_JWT_TOKEN = 'SET_JWT_TOKEN'

export function setJWTToken(token) {
  return {
    type: SET_JWT_TOKEN,
    token
  }
}
