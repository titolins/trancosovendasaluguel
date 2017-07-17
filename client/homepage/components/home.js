import React from 'react'

import { connect } from 'react-redux'
import { mapStateToProps } from 'homepage/containers/staticcontent'

import FeaturedSection from 'homepage/components/featuredsection'

import './styles/home.less'

class Home extends React.Component {
  render() {
    let { ownContent } = this.props
    return (
      <div className="mainContent">
        <div className="welcome">
          <div className="row">
            <div className="col-xs-12">
              <div id="carousel" className="carousel slide mainCarousel" data-wrap="true" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="mainPicture" src="/static/img/main4.jpeg"></img>
                  </div>
                  <div className="carousel-item">
                    <img className="mainPicture" src="/static/img/main5.jpg"></img>
                  </div>
                  <div className="carousel-item">
                    <img className="mainPicture" src="/static/img/main6.jpg"></img>
                  </div>
                  <div className="carousel-item">
                    <img className="mainPicture" src="/static/img/main3.jpg"></img>
                  </div>
                </div>
              </div>
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
                <img className="welcomePicture img-fluid" src="/static/img/welcome_picture.png"></img>
              </div>
            </div>
          </div>
          <FeaturedSection categoryId="sales" categoryContent="featured" contentId="featured" />
          <FeaturedSection categoryId="rent" categoryContent="featured" contentId="featured" />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
