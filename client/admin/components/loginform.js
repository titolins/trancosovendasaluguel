import React from 'react'

import { connect } from 'react-redux'
import { mapDispatchToProps } from 'admin/containers/auth'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      pass: ''
    }

    this.onChange = this.onChange.bind(this)

    this.login = props.login.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange(e) {
    let field = e.target.name,
        state = this.state
    state[field] = e.target.value
    return this.setState(state)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.login(this.state)
  }

  render() {
    return (
      <div className="offset-xs-2 offset-sm-4 col-xs-8 col-sm-4 my-auto">
        <div className="jumbotron">
          <form id="loginForm" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Usuário</label>
              <input value={this.state.user} onChange={this.onChange} type="text" id="user" name="user" className="form-control"></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input value={this.state.pass} onChange={this.onChange} type="password" id="pass" name="pass" className="form-control"></input>
            </div>
            <input type="submit" className="btn btn-primary" value="Entrar"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
