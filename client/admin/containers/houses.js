
export const mapStateToProps = (state) => {
  return {
    houses: state.data.houses,
    folders: state.data.folders,
    postState: state.post
  }
}
