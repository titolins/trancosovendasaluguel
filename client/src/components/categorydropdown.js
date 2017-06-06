import React from 'react'

import { Link } from 'react-router-dom'

const buildItemsMenu = (linkId, items) => {
  return items.map((item,i) => {
    return (<Link key={i} className="dropdown-item" to="#">{ item.Name }</Link>)
  })
    /*itemsList.unshift((<div className="dropdown-menu" aria-labelledby={linkId}>))
  itemsList.push((</div>))
  return itemsList
  */
}

export default ({title, items}) => {
  if (!items) return null
  let linkId = title + "MenuLink"
  let menu = buildItemsMenu(linkId, items)

  return (
    <li className="nav-item dropdown">
      <Link id={linkId} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle" to="#">{ title }</Link>
      <div className="dropdown-menu" aria-labelledby={linkId}>
        { menu }
      </div>
    </li>
  )
}

