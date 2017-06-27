
export const mapStateToProps = (state) => {
  return {
    houses: state.data.houses,
    postState: state.post
  }
}
