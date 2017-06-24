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
          console.log("headers")
          console.log(atob(res.token.split(".")[0]))
          console.log("payload")
          console.log(atob(res.token.split(".")[1]))
          dispatch(setJWTToken(res))})
    }
  }
}
