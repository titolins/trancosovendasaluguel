import React from 'react'

import { Link } from 'react-router-dom'

export default class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="logo">
          <div className="logoCol">
            <object data="/static/img/logo.svg" type="image/svg+xml" />
          </div>
          <div className="logoCol logoText">
            <p>Trancoso</p>
            <p>vendas e aluguel</p>
          </div>
        </div>
      </Link>
    )
  }
}
