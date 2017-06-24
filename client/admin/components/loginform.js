import React from 'react'

import { connect } from 'react-redux'
import { mapDispatchToProps } from 'admin/containers/loginform'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.login = props.login.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    let data = {
      user: this.username.value,
      pass: this.password.value
    }
    this.login(data)
  }

  render() {
    return (
      <div className="offset-xs-2 offset-sm-4 col-xs-8 col-sm-4 my-auto">
        <div className="jumbotron">
          <form id="loginForm" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Usuário</label>
              <input ref={ (input) => this.username = input } type="text" id="username" name="username" className="form-control"></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input ref={ (input) => this.password = input } type="password" id="password" name="password" className="form-control"></input>
            </div>
            <input type="submit" className="btn btn-primary" value="Entrar"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
