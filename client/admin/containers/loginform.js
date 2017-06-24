import { setJWTToken } from 'admin/actions'

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
        .then(res => {
          console.log(res)
          dispatch(setJWTToken(res))})
    }
  }
}
