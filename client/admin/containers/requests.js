export const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchContent: (url, data) => {
      let content = {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${this.props.token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(url, content).then(res=>res.json())
    }
  }
}
