
export const mapStateToProps = (state) => {
  return {
    pictures: state.data.pictures,
    folders: state.data.folders,
    uploadState: state.upload,
    postState: state.post
  }
}
