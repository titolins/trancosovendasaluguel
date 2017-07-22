import React from 'react'

import './styles/carousel.less'

const buildIndicator = (item, i) => {
  let active = (i === 0) ? true : false
  return (
    <li key={i} className={`list-inline-item${active ? " active" : ""}`}>
      <a id={`selector-${i}`} className={active ? "selected" : "" } data-slide-to={i} data-target="#carousel">
        <img className="img-fluid" src={item.url} />
      </a>
    </li>
  )
}

const buildPicture = (p, i) => {
  let active = (i === 0) ? "active" : null
  return (
    <div key={i} className={`carousel-item ${active}`}>
      <a href="#" data-toggle="modal" data-target={`#imageModal${i}`}>
        <img className="d-block img-fluid maxHeight" src={p.url}></img>
      </a>
    </div>
  )
}

const buildModal = (p, i) => {
  return (
    <div key={i} className="modal fade" id={`imageModal${i}`} aria-hidden="true" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img className="img-fluid" src={p.url}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ({ pictures, controls }) => {
  let ps = [],
      is = [],
      ms = []

  pictures.map((p, i) => {
    ps.push(buildPicture(p, i))
    is.push(buildIndicator(p, i))
    ms.push(buildModal(p, i))
  })
  return (
    <div id="carousel" className="carousel slide">
      <div className="carousel-inner" role="listbox">{ps}</div>
      <ul className="carousel-indicators list-inline">{is}</ul>
      {ms}
    </div>
  )
}
