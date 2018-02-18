import React from 'react'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.addPhone = this.pushToState("phones").bind(this)
    this.addEmail = this.pushToState("emails").bind(this)
    this.removePhone = this.removeFromState("phones").bind(this)
    this.removeEmail = this.removeFromState("emails").bind(this)

    this.state = {
      phones: [],
      emails: [],
      address: null,
    }

    window.contact = this
  }

  handleChange(e) {
    let field = e.target.name,
        state = this.state
    switch(field) {
      case 'emails':
        // fallthrough
      case 'phones':
        let i = e.target.dataset.it
        state[field][i] = e.target.value
        break
      default:
        state[field] = e.target.value
        break
    }
    this.setState(state)
  }

  pushToState(prop) {
    return () => {
      let state = this.state
      state[prop].push("")
      this.setState(state)
    }
  }

  removeFromState(prop) {
    return (i) => {
      return () => {
        let state = this.state
        state[prop].splice(i,1)
        this.setState(state)
      }
    }
  }

  render() {
    let buildItInputs = (name, removeFunction) => {
      return (this.state[name].length < 1) ?
          "Você ainda não adicionou nada neste item" :
          this.state[name].map((p,i) => {
            return (
              <div key={i} className="row">
                <div className="col-10">
                  <input className="form-control" name={name} data-it={i} value={this.state[name][i]} onChange={this.handleChange} />
                </div>
                <div className="col-2">
                  <a href="#" className="btn btn-danger" onClick={removeFunction(i)}>&times;</a>
                </div>
              </div>
            )
        })
    }

    return (
      <div className="card card-block">
        <h3 className="card-title">Contato</h3>
        <form id="contactForm">
          <div className="row form-group">
            <div className="col-sm-4">
              <label className="col-form-label" htmlFor="phones">Telefones</label>
              <div>
                <a href="#" className="btn btn-primary" onClick={this.addPhone}>Adicionar</a>
              </div>
            </div>
            <div className="col-sm-8">
              { buildItInputs("phones", this.removePhone) }
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-4">
              <label className="col-form-label" htmlFor="phones">Emails</label>
              <div>
                <a href="#" className="btn btn-primary" onClick={this.addEmail}>Adicionar</a>
              </div>
            </div>
            <div className="col-sm-8">
              { buildItInputs("emails", this.removeEmail) }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

