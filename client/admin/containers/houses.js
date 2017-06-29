
export const mapStateToProps = (state) => {
  return {
    houses: state.data.houses,
    pictures: state.data.pictures,
    postState: state.post
  }
}
