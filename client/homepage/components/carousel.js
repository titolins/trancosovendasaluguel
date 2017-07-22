import React from 'react'

import './styles/carousel.less'

const buildIndicator = (item, i) => {
  let active = (i === 0) ? true : false
  return (<li key={i} className={`list-inline-item${active ? " active" : ""}`}>
      <a id={`selector-${i}`} className={active ? "selected" : "" } data-slide-to={i} data-target="#carousel">
        <img className="img-fluid" src={item.url} />
      </a>
    </li>)
}

const buildPicture = (p, i) => {
  let active = (i === 0) ? "active" : null
  return (
    <div key={i} className={`carousel-item ${active}`}>
      <img className="d-block img-fluid maxHeight" src={p.url}></img>
    </div>
  )
}

export default ({ pictures, controls }) => {
  let ps = [],
      is = []

  pictures.map((p, i) => {
    ps.push(buildPicture(p, i))
    is.push(buildIndicator(p, i))
  })
  return (
    <div id="carousel" className="carousel slide">
      <div className="carousel-inner" role="listbox">{ps}</div>
      <ul className="carousel-indicators list-inline">{is}</ul>
    </div>
  )
}
