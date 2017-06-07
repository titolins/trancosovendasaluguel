import React from 'react'

import './styles/home.less'

export default class Home extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <div className="welcome">
          <div className="row">
            <div className="col-xs-12">
              <img className="mainPicture" src="/static/img/main_photo.png"></img>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-5">
                <p className="">
                </p>
              </div>
              <div className="col-xs-12 col-md-7">
                <img className="welcomePicture" src="/static/img/welcome_picture.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

