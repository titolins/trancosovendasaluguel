import React from 'react'

const buildIndicators = (items) => {
  return (
    <ol className="carousel-indicators">
      { items.map((item, i) => {
        let active = (i === 0) ? "active" : null
        return (
          <li key={i} data-target="#carousel" data-slide-to={i} className={active}></li>
        )
      }) }
    </ol>
  )
}

const buildPictures = (pictures) => {
  return (
    <div className="carousel-inner" role="listbox">
      { pictures.map((p, i) => {
        let active = (i === 0) ? "active" : null
        return (
          <div key={i} className={`carousel-item ${active}`}>
            <img className="d-block img-fluid" src={p.Url}></img>
          </div>
        )
      }) }
    </div>
  )
}

export default ({ pictures, controls }) => {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      { buildIndicators(pictures) }
      { buildPictures(pictures) }
      <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">{ controls.prev }</span>
      </a>
      <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">{ controls.next }</span>
      </a>
    </div>
  )
}
