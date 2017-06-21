import React from 'react'

import { connect } from 'react-redux'

import { mapStateToProps } from 'homepage/containers/category'

import { Link } from 'react-router-dom'

const buildItemsMenu = (linkId, items) => {
  return items.map((item,i) => {
    return (<Link key={i} className="dropdown-item" to={item.url}>{ item.content.Name }</Link>)
  })
}

const CategoryDropdown = ({title, items}) => {
  if (!items) return null
  let linkId = `${title}MenuLink`
  let menu = buildItemsMenu(linkId, items)

  return (
    <li className="nav-item dropdown">
      <Link id={linkId} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle text-green px-4" to="#">{ title }</Link>
      <div className="dropdown-menu py-0" aria-labelledby={linkId}>
        { menu }
      </div>
    </li>
  )
}

export default connect(
  mapStateToProps
)(CategoryDropdown)
