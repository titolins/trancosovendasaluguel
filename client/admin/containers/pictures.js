
export const mapStateToProps = (state) => {
  return {
    folders: state.data.folders,
    uploadState: state.upload,
    postState: state.post
  }
}
