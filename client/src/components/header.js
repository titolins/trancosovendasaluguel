import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps } from 'client/containers/content'

import Logo from 'client/components/logo'
import CategoryDropdown from 'client/components/categorydropdown'
import LanguageSelector from 'client/containers/languageselector'

class Header extends React.Component {
  render() {
    let { content } = this.props;

    return (
      <nav className="header navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4 pl-0 pr-0">
        <button className="navbar-toggler navbar-toggler-right align-self-center mt-3" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Logo />
        <div id="navbarCollapse" className="collapse navbar-collapse flex-column ml-auto ml-3">
          <ul className="navbar-nav ml-auto subOpts">
            <li className="nav-item"><Link className="nav-link" to="#">{ content.about }</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">{ content.contact }</Link></li>
            <li className="nav-item"><LanguageSelector lang="PT"/></li>
            <li className="nav-item"><LanguageSelector lang="EN"/></li>
          </ul>
          <ul className="navbar-nav ml-auto mainOpts">
            <CategoryDropdown category={ content.sales } />
            <CategoryDropdown category={ content.rent } />
            <li className="nav-item"><Link className="nav-link" to="#">{ content.comercialRent }</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">{ content.services }</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps)(Header)

