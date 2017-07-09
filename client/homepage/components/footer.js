import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps } from 'homepage/containers/staticcontent'

class Footer extends React.Component {
  render() {
    let { ownContent } = this.props

    return (
      <footer id="footer" className="navbar navbar-toggleable">
        <div id="navbarCollapse" className="collapse navbar-collapse flex-column">
          <ul className="navbar-nav px-5 mx-auto mt-5 pb-5 footer-border-bottom">
            <li className="nav-item"><Link className="nav-link footerLink px-0 mx-5" to="/#sales">{ ownContent.sales }</Link></li>
            <li className="nav-item"><Link className="nav-link footerLink px-4 mx-5" to="/#rent">{ ownContent.rent }</Link></li>
            <li className="nav-item"><Link className="nav-link footerLink px-0 mx-5" to="/aluguelcomercial">{ ownContent.comercialRent }</Link></li>
            <li className="nav-item"><Link className="nav-link footerLink px-0 ml-5" to="/servicos">{ ownContent.services }</Link></li>
          </ul>
          <ul className="navbar-nav px-5 mx-auto py-5 footer-border-bottom">
            <li className="nav-item"><Link className="nav-link footerLink px-0 mx-5" to="/sobre">{ ownContent.about }</Link></li>
            <li className="nav-item"><Link className="nav-link footerLink px-0 mx-5" to="/contato">{ ownContent.contact }</Link></li>
          </ul>
          <div className="row mx-auto pt-5 mb-5 footer-bottom-row">
            <div className="col-6 py-3 footer-border-right text-center my-auto">
              <Link to="#"><span className="fa fa-facebook-square fa-lg footerLink mr-1"></span></Link>
              <Link to="#"><span className="fa fa-instagram fa-lg footerLink ml-1"></span></Link>
            </div>
            <div className="col-6 py-3 text-center my-auto">
              <div>
                <span className="text-blue">TEL. +55 73 3668-1095</span>
                <span className="text-blue"> | </span>
                <Link to="#"><span className="fa fa-skype fa-lg footerLink"></span></Link>
              </div>
              <div>
                <span className="text-blue">CRECI-BA 12.950</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

}

export default connect(mapStateToProps)(Footer)
