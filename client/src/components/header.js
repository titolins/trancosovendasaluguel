import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps } from 'client/containers/content'

import Logo from 'client/components/logo'
import CategoryDropdown from 'client/components/categorydropdown'
import LanguageSelector from 'client/containers/languageselector'

class Header extends React.Component {
  render() {
    let { ownContent } = this.props
    let { categories } = this.props.reqContent
    console.log(this.props)
    let salesItems = null,
        rentItems = null
    if (categories) {
      if (categories.sales) salesItems = categories.sales.Items
      if (categories.rent) rentItems = categories.rent.Items
    }

    return (
      <nav className="header navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4 pl-0 pr-0">
        <button className="navbar-toggler navbar-toggler-right align-self-center mt-3" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Logo />
        <div id="navbarCollapse" className="collapse navbar-collapse flex-column ml-auto ml-3">
          <ul className="navbar-nav ml-auto subOpts">
            <li className="nav-item"><Link className="nav-link" to="#">{ ownContent.about }</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">{ ownContent.contact }</Link></li>
            <li className="nav-item"><LanguageSelector lang="PT"/></li>
            <li className="nav-item"><LanguageSelector lang="EN"/></li>
          </ul>
          <ul className="navbar-nav ml-auto mainOpts">
            <CategoryDropdown title={ownContent.sales} items={salesItems} />
            <CategoryDropdown title={ownContent.rent} items={rentItems} />
            <li className="nav-item"><Link className="nav-link" to="#">{ ownContent.comercialRent }</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">{ ownContent.services }</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps)(Header)

