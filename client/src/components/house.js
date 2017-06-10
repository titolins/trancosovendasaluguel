import React from 'react'

import { connect } from 'react-redux'

import { mapDispatchToProps } from 'client/containers/fetchcontent'
import { mapStateToProps } from 'client/containers/house'

class House extends React.Component {
  constructor(props) {
    super(props)
    let { categoryId, houseId } = props.match.params
    let url = `/api/categories/${categoryId}/houses/${houseId}`
    props.fetchContent(url)
  }

  render() {
    let { ownContent } = this.props
    return (
      <div className="container mainContent">
        <div className="row">
          <div className="col-xs-12 col-md-7 houseCarousel">
          </div>
          <div className="col-xs-12 col-md-5">
            <div>{ ownContent.Name }</div>
            <div>{ ownContent.Description }</div>
            <div>{ ownContent.Capacity }</div>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(House)
