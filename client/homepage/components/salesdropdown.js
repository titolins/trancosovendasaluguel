import React from 'react'

import { connect } from 'react-redux'
import { mapStateToProps } from 'homepage/containers/staticcontent'

import { Link } from 'react-router-dom'

const SalesDropdown = ({ownContent}) => {

  return (
    <li className="nav-item dropdown">
      <Link id="salesMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle text-green px-4" to="#">{ ownContent.title }</Link>
      <div className="dropdown-menu py-0" aria-labelledby="salesMenuLink">
        <Link className="dropdown-item" to="/categorias/vendas/casas">{ ownContent.casas }</Link>
        <Link className="dropdown-item" to="/categorias/vendas/terrenos">{ ownContent.terrenos }</Link>
        <Link className="dropdown-item" to="/categorias/vendas/fazendas">{ ownContent.fazendas }</Link>
        <Link className="dropdown-item" to="/categorias/vendas/pontoscomerciais">{ ownContent.pontoscomerciais }</Link>
        <Link className="dropdown-item" to="/categorias/vendas/pousadas">{ ownContent.pousadas }</Link>
      </div>
    </li>
  )
}

export default connect(
  mapStateToProps
)(SalesDropdown)
