import { SET_JWT_TOKEN } from './actions'
import { REVOKE_JWT_TOKEN } from './actions'


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

