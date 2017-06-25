import { setJWTToken } from 'admin/actions'
import { revokeJWTToken } from 'admin/actions'

export const mapStateToProps = (state, ownProps) => {
  return {
    store: ownProps.store,
    token: state.auth.token,
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (data) => {
      let headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' },
          url = '/admin'
      fetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers
      }).then(res=>res.json())
        .then(res => dispatch(setJWTToken(res)))
    },
    logout: () => { dispatch(revokeJWTToken()) }
  }
}
