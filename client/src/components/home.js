import React from 'react'

import './styles/home.less'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <img className="mainPicture" src="/static/img/main_photo.png"></img>
      </div>
    )
  }
}

