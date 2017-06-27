import React from 'react'

import { Link } from 'react-router-dom'

import 'admin/components/styles/header.less'

export default class Header extends React.Component {
  render() {
    return (
      <nav id="nav" className="navbar navbar-toggleable-md navbar-light">
        <Link className="navbar-brand" to="/admin">Painel</Link>
        <button className="navbar-toggler navbar-toggler-right align-self-center mt-3" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/admin/imagens">Ver Imagens</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Adicionar Imagens</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Ver Casas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Cadastrar Casas</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

