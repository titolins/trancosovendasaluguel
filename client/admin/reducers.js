import { SET_JWT_TOKEN } from './actions'


const initialTokenState = { token: "" }

export function token(state = initialTokenState, action) {
  switch (action.type) {
    case SET_JWT_TOKEN:
      return Object.assign({}, state.token, { token: action.token })
    default:
      return state
  }
}

