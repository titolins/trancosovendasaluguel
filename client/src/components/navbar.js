import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ChooseLanguage from 'client/containers/ChooseLanguage'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4">
        <Link to="/" className="navbar-brand">GoReact Starter</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
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
