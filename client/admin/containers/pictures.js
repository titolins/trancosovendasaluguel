
export const mapStateToProps = (state) => {
  return {
    pictures: state.data.pictures,
    uploadState: state.upload
  }
}
