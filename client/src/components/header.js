import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Logo from 'client/components/logo'
import ChooseLanguage from 'client/containers/ChooseLanguage'

export default class Header extends React.Component {
  render() {
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
        </div>
      </nav>
    )
  }
}
