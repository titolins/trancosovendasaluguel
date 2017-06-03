import React from 'react'

import { Link } from 'react-router-dom'

export default class Logo extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <object data="/static/img/logo.svg" type="image/svg+xml" />
        </Link>
      </div>
    )
  }
}
