import React from 'react'

import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <nav id="adminNav" className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <Link className="navbar-brand" to="/admin">Painel</Link>
        <button className="navbar-toggler navbar-toggler-right align-self-center mt-3" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/admin/imagens">Imagens</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin/casas">Imóveis</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin/contato">Contato</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

