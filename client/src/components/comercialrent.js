import React from 'react'

import { connect } from 'react-redux'
import { mapStateToProps } from 'client/containers/staticcontent'

import './styles/comercialrent.less'

class ComercialRent extends React.Component {
  render() {
    let { ownContent } = this.props
    return (
      <div className="row mainContent py-4">
        <div className="col-xs-12 col-md-8">
          <img className="img-fluid" src="/static/img/aluguelcomercial.jpg"></img>
        </div>
        <div className="col-xs-12 col-md-4 my-auto">
          <h1 className="rentTitle pb-2">{ ownContent.title }</h1>
          <p className="rentText mt-2">{ ownContent.text[0] }</p>
          <p className="rentText">{ ownContent.text[1] }</p>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps)(ComercialRent)
