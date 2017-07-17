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
          <div className="row mx-auto pt-5 mb-5 footer-bottom-row">
            <div className="col-6 py-3 footer-border-right text-center my-auto">
              <div>
                <span className="fa fa-whatsapp fa-lg footerLink"></span>
                <span className="text-blue"> +55 73 98129-0825</span>
              </div>
              <div>
                <Link to="#"><span className="fa fa-facebook-square fa-lg footerLink mr-1"></span></Link>
                <Link to="#"><span className="fa fa-instagram fa-lg footerLink ml-1"></span></Link>
              </div>
            </div>
            <div className="col-6 py-3 text-center my-auto">
              <div>
                <span className="text-blue">TEL. +55 73 3668-1095</span>
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
