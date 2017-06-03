import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps } from 'client/containers/content'

import Logo from 'client/components/logo'
import LanguageSelector from 'client/containers/languageselector'

class Header extends React.Component {
  render() {
    let { content } = this.props;

    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4">
        <Logo />
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><ChooseLanguage lang="EN" /></li>
            <li className="nav-item"><ChooseLanguage lang="PT" /></li>
            <li className="nav-item">
              <Link className="nav-link" to="/todos">todos</Link>
            </li>
          </ul>
          <ul>
            <li><Link to="#">{ content.sales.title }</Link></li>
            <li><Link to="#">{ content.rent.title }</Link></li>
            <li><Link to="#">{ content.comercialRent }</Link></li>
            <li><Link to="#">{ content.services }</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps)(Header)

