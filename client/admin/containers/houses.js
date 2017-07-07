
export const mapStateToProps = (state) => {
  return {
    houses: state.data.houses,
    pictures: state.data.pictures,
    folders: state.data.folders,
    postState: state.post
  }
}
