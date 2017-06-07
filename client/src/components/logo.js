import React from 'react'

import { Link } from 'react-router-dom'

export default class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="row no-gutters align-items-center logo">
          <div className="col-3">
            <object data="/static/img/logo.svg" type="image/svg+xml" />
          </div>
          <div className="col-9 logoText">
            <p>Trancoso</p>
            <p>vendas e aluguel</p>
          </div>
        </div>
      </Link>
    )
  }
}
