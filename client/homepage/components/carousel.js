import React from 'react'

import './styles/carousel.less'

const buildIndicators = (items) => {
  return (
    <ul className="carousel-indicators list-inline">
      { items.map((item, i) => {
        let active = (i === 0) ? true : false
        return (
          <li key={i} className={`list-inline-item${active ? " active" : ""}`}>
            <a id={`selector-${i}`} className={active ? "selected" : "" } data-slide-to={i} data-target="#carousel">
              <img className="img-fluid" src={item.url} />
            </a>
          </li>
        )
      }) }
    </ul>
  )
}

const buildPictures = (pictures) => {
  return (
    <div className="carousel-inner" role="listbox">
      { pictures.map((p, i) => {
        let active = (i === 0) ? "active" : null
        return (
          <div key={i} className={`carousel-item ${active}`}>
            <img className="d-block img-fluid maxHeight" src={p.url}></img>
          </div>
        )
      }) }
    </div>
  )
}

export default ({ pictures, controls }) => {
  return (
    <div id="carousel" className="carousel slide">
      { buildPictures(pictures) }
      { buildIndicators(pictures) }
    </div>
  )
}
