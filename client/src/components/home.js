import React from 'react'

import { connect } from 'react-redux'
import { mapStateToProps } from 'client/containers/staticcontent'

import FeaturedSection from 'client/components/featuredsection'

import './styles/home.less'

class Home extends React.Component {
  render() {
    let { ownContent } = this.props
    return (
      <div className="mainContent">
        <div className="welcome">
          <div className="row">
            <div className="col-xs-12">
              <img className="mainPicture" src="/static/img/main_photo.png"></img>
            </div>
          </div>
          <div className="container py-5">
            <div className="row">
              <div className="col-xs-12 col-md-5 my-auto text-justify">
                <p>{ ownContent.welcomeText[0] }</p>
                <p>{ ownContent.welcomeText[1] }</p>
                <p>{ ownContent.welcomeText[2] }</p>
              </div>
              <div className="col-xs-12 col-md-7">
                <img className="welcomePicture" src="/static/img/welcome_picture.png"></img>
              </div>
            </div>
          </div>
          <FeaturedSection categoryId="sales" categoryContent="Featured" contentId="featured" />
          <FeaturedSection categoryId="rent" categoryContent="Featured" contentId="featured" />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
