import React from 'react'

import { connect } from 'react-redux'

import { mapDispatchToProps } from 'homepage/containers/message'

class Message extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      houseName: props.houseName,
      email: "",
      message: "",
    }

    window.message = this
  }

  handleChange(e) {
    let state = this.state,
        field = e.target.name

    switch(field) {
      default:
        state[field] = e.target.value
    }
    this.setState(state)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.state)}>
        <div className="row form-group">
          <label className="col-sm-2 col-form-label" htmlFor="email">E-mail</label>
          <div className="col-sm-10">
            <input required name="email" className="form-control" type="email" value={this.state.email} onChange={this.handleChange}></input>
          </div>
        </div>
        <div className="row form-group">
          <label className="col-sm-2 col-form-label" htmlFor="message">Mensagem</label>
          <div className="col-sm-10">
            <textarea required minLength="10" name="message" className="form-control" type="text" value={this.state.message} onChange={this.handleChange}></textarea>
          </div>
        </div>
        <input type="submit" className="btn btnMore" value="Enviar mensagem"></input>
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(Message)
