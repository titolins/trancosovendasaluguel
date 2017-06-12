import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps } from 'client/containers/staticcontent'

import Logo from 'client/components/logo'
import CategoryDropdown from 'client/components/categorydropdown'
import LanguageSelector from 'client/components/languageselector'

class Header extends React.Component {
  render() {
    let { ownContent } = this.props

    return (
      <nav id="nav" className="navbar navbar-toggleable-md fixed-top px-0 mx-auto">
        <button className="navbar-toggler navbar-toggler-right align-self-center mt-3" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Logo />
        <div id="navbarCollapse" className="collapse navbar-collapse flex-column mt-auto">
          <ul className="navbar-nav ml-auto subOpts">
            <li className="nav-item"><Link className="nav-link text-grey px-0 mx-4" to="#">{ ownContent.about }</Link></li>
            <li className="nav-item"><Link className="nav-link text-grey px-0 mx-4" to="/contato">{ ownContent.contact }</Link></li>
            <li className="nav-item"><LanguageSelector margins={[5,1]} lang="PT"/></li>
            <li className="nav-item"><LanguageSelector margins={[1,0]} lang="EN"/></li>
          </ul>
          <ul className="navbar-nav ml-auto mainOpts">
            <CategoryDropdown categoryId="sales" categoryContent="Items" />
            <CategoryDropdown categoryId="rent" categoryContent="Items" />
            <li className="nav-item"><Link className="nav-link text-green px-0 mx-4" to="/aluguelcomercial">{ ownContent.comercialRent }</Link></li>
            <li className="nav-item"><Link className="nav-link text-green px-0 ml-4" to="/servicos">{ ownContent.services }</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps)(Header)

