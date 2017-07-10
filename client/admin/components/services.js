import React from 'react'

export default class Services extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      sections: []
    }

  }

  render() {
    return (
      <div>
        <div className="collapse" id="editServices">
          <div className="card card-block">
            <form>
            </form>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <button type="button" className="btn btn-primary" data-trigger="#editServices">Editar serviços</button>
              </li>
            </ul>
          </div>
          <h3 className="card-title">Serviços</h3>
        </div>
      </div>
    )
  }
}

