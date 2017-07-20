import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps } from 'homepage/containers/staticcontent'

class Footer extends React.Component {
  render() {
    let { ownContent } = this.props

    return (
      <footer id="footer" className="navbar">
        <div className="flex-column">
          <div className="row pt-5 mb-5">
            <div className="col-xs-12 col-lg-6 py-3 footer-border-right text-center my-auto">
              <div className="logoText mb-1">
                <p>Trancoso</p>
                <p>vendas aluguel</p>
              </div>
              <div>
                <Link to="#"><span className="fa fa-facebook-square fa-lg footerLink mr-1"></span></Link>
                <Link to="#"><span className="fa fa-instagram fa-lg footerLink ml-1"></span></Link>
              </div>
            </div>
            <div className="col-xs-12 col-lg-6 py-3 text-center my-auto">
              <div>
                <span className="fa fa-envelope-o fa-lg footerLink"></span>
                <span className="footerText"> contato@trancosovendasaluguel.com</span>
              </div>
              <div>
                <span className="fa fa-envelope-o fa-lg footerLink"></span>
                <span className="footerText"> tamitrancoso@hotmail.com</span>
              </div>
              <div>
                <span className="fa fa-whatsapp fa-lg footerLink"></span>
                <span className="footerText"> +55 73 98129-0825</span>
              </div>
              <div>
                <span className="fa fa-phone fa-lg footerLink"></span>
                <span className="footerText"> +55 73 3668-1095</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

}

export default connect(mapStateToProps)(Footer)
