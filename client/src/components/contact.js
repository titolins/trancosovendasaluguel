import React from 'react'

import { connect } from 'react-redux'
import { mapStateToProps } from 'client/containers/staticcontent'

class Contact extends React.Component {
  render() {
    let { ownContent } = this.props
    return (
      <div className="row mainContent">
        <div className="col-xs-12 col-md-4">
          <h1 className="sectionTitle">tamara flier</h1>
          <h2 className="sectionTitle">creci-ba 12.950</h2>
          <ul>
            <h3 className="sectionTitle">{ ownContent.phone }</h3>
            <li>+55 73 3668-1095</li>
            <li>+55 73 98129-0825</li>
          </ul>
          <ul>
            <h3 className="sectionTitle">e-mail</h3>
            <li>contact@trancosovendasaluguel.com</li>
            <li>tamitrancoso@hotmail.com</li>
            <li>tamitrancoso@gmail.com</li>
          </ul>
          <ul>
            <h3 className="sectionTitle">skype</h3>
            <li>tamara.flier</li>
          </ul>
          <ul>
            <h3 className="sectionTitle">{ ownContent.address }</h3>
            <p>
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
