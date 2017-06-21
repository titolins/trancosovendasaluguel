import React from 'react'

import { connect } from 'react-redux'
import { mapStateToProps } from 'homepage/containers/staticcontent'

import './styles/contact.less'

class Contact extends React.Component {
  render() {
    let { ownContent } = this.props
    return (
      <div className="row mainContent py-4">
        <div className="col-xs-12 col-md-4">
          <h1 className="contactName">tamara flier</h1>
          <h2 className="creciTitle">creci-ba 12.950</h2>
          <ul>
            <h3 className="contactTitle">{ ownContent.phone }</h3>
            <li className="ml-5 contactText">+55 73 3668-1095</li>
            <li className="ml-5 contactText">+55 73 98129-0825</li>
          </ul>
          <ul>
            <h3 className="contactTitle">e-mail</h3>
            <li className="ml-5 contactText">contact@trancosovendasaluguel.com</li>
            <li className="ml-5 contactText">tamitrancoso@hotmail.com</li>
            <li className="ml-5 contactText">tamitrancoso@gmail.com</li>
          </ul>
          <ul>
            <h3 className="contactTitle">skype</h3>
            <li className="ml-5 contactText">tamara.flier</li>
          </ul>
          <ul>
            <h3 className="contactTitle">{ ownContent.address }</h3>
            <p className="ml-4 contactText">
              Rua do Porto, n<sup>o</sup> 229, bairro João Vieira<br/>
              Trancoso/Bahia - CEP 22418-000<br/>
              Brasil
            </p>
          </ul>
        </div>
        <div className="col-xs-12 col-md-8">
          <img className="contactImg img-fluid" src="/static/img/contato.jpg"></img>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps)(Contact)
