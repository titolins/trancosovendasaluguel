
export const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    pictures: state.data.pictures,
    uploadState: state.upload.state
  }
}
