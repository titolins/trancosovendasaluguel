import { SET_JWT_TOKEN } from './actions'


const initialTokenState = { token: "" }

export function auth(state = initialTokenState, action) {
  switch (action.type) {
    case SET_JWT_TOKEN:
      console.log("auth")
      console.log({auth: action.token})
      return Object.assign({}, state.auth, action.token)
    default:
      return state
  }
}

