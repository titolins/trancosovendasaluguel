import React from 'react'

import { Link } from 'react-router-dom'

export default ({category}) => {
  let linkId = category.title + "MenuLink"
  return (
    <li className="nav-item dropdown">
      <Link id={linkId} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle" to="#">{ category.title }</Link>
      <div className="dropdown-menu" aria-labelledby={linkId}>
        <Link className="dropdown-item" to="#">Item 1</Link>
        <Link className="dropdown-item" to="#">Item 2</Link>
        <Link className="dropdown-item" to="#">Item 3</Link>
        <Link className="dropdown-item" to="#">Item 4</Link>
      </div>
    </li>
  )
}

