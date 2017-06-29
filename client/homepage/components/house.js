import React from 'react'

import { connect } from 'react-redux'

import { mapDispatchToProps } from 'homepage/containers/fetchcontent'
import { mapStateToProps } from 'homepage/containers/house'

import Carousel from 'homepage/components/carousel'

const buildFeatures = (features) => {
  return (<ul>{features.map((f,i) => {return (<li key={i}>{f}</li>)})}</ul>)
}

class House extends React.Component {
  render() {
    let { categoryId, houseId } = props.match.params
    let url = `/api/categories/${categoryId}/houses/${houseId}`
    this.props.fetchContent(url)

    let { ownContent, staticContent } = this.props
    let features = ownContent.features ? buildFeatures(ownContent.features) : null
    let carousel = ownContent.pictures ? (<Carousel pictures={ownContent.pictures} controls={staticContent.controls} />) : null
    return (
      <div className="container mainContent">
        <div className="row py-5">
          <div className="col-xs-12 col-md-6 houseCarousel">
            { carousel }
          </div>
          <div className="col-xs-12 col-md-6">
            <h1 className="sectionTitle fullWidth pb-2">{ staticContent.description }</h1>
            <p>{ ownContent.description }</p>
            <h1 className="sectionTitle fullWidth pb-2">{ staticContent.capacity }</h1>
            <p>{ ownContent.capacity }</p>
            <h1 className="sectionTitle fullWidth pb-2">{ staticContent.features }</h1>
            { features }
          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(House)
