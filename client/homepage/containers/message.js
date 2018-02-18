import { setMessageResponse } from 'homepage/actions'


export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (data) => {
      return (e) => {
        e.preventDefault()
        fetch("/api/sendmessage", {
          method: 'post',
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(res=>res.json())
          .then(res=>dispatch(setMessageResponse(res)))
      }
    }
  }
}
