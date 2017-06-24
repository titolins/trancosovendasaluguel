export const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: (state.auth.token !== "") ? true : false
  }
}
