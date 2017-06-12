import React from 'react'

import { connect } from 'react-redux'

import { mapStateToProps } from 'client/containers/staticcontent'

import './styles/about.less'

class About extends React.Component {
  render() {
    let { ownContent } = this.props
    return (
      <div className="mainContent">
        <div className="row">
          <div className="col-xs-12">
            <img className="img-fluid" src="/static/img/sobre.jpg"></img>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-xs-12 col-md-7 my-auto">
            <img className="img-fluid" src="/static/img/sobre_2.jpg"></img>
          </div>
          <div className="col-xs-12 col-md-5 my-auto">
            <p className="aboutText">{ ownContent.text[0] }</p>
            <p className="aboutText">{ ownContent.text[1] }</p>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-xs-12 col-md-6 my-auto">
            <p className="aboutText">{ ownContent.text[2] }</p>
            <p className="aboutText">{ ownContent.text[3] }</p>
            <p className="aboutText">{ ownContent.text[4] }</p>
          </div>
          <div className="col-xs-12 col-md-6 my-auto">
            <img className="img-fluid" src="/static/img/sobre_3.jpg"></img>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-xs-12">
            <img className="img-fluid" src="/static/img/sobre_4.jpg"></img>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps)(About)
