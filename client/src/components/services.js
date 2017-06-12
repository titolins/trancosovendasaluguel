import React from 'react'

import { connect } from 'react-redux'
import { mapStateToProps } from 'client/containers/staticcontent'

import './styles/services.less'

class Services extends React.Component {
  render() {
    let { ownContent } = this.props
    return (
      <div className="row mainContent py-4">
        <div className="col-xs-12 servicesBackground">
          <div className="col-xs-12 offset-md-6 col-md-6 fillBackground fullHeight">
            <h1 className="sectionTitle halfWidth">{ ownContent.title }</h1>
            <ul>
              <h3 className="serviceTitle">{ ownContent.types.title }</h3>
              { ownContent.types.services.map((s, i) => {
                return (<li className="serviceText" key={i}>{s}</li>)
              }) }
            </ul>
            <ul>
              <h3 className="serviceTitle">{ ownContent.arrival.car.title }</h3>
              <p className="serviceText">{ ownContent.arrival.car.text }</p>
            </ul>
            <ul>
              <h3 className="serviceTitle">{ ownContent.arrival.plane.title }</h3>
              <p className="serviceText">{ ownContent.arrival.plane.text }</p>
            </ul>
            <ul>
              <h3 className="serviceTitle">{ ownContent.arrival.bus.title }</h3>
              <p className="serviceText">{ ownContent.arrival.bus.text }</p>
            </ul>
            <ul>
              <h3 className="serviceTitle">{ ownContent.distances.title }</h3>
              { ownContent.distances.capitals.map((c, i) => {
                return (<li className="serviceText" key={i}>{c}</li>)
              }) }
            </ul>
            <ul>
              <h3 className="serviceTitle">{ ownContent.location.title }</h3>
              <li className="serviceText">{ ownContent.location.coordinates[0] }</li>
              <li className="serviceText">{ ownContent.location.coordinates[1] }</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps)(Services)
