import React from 'react'

import Modal from 'client/admin/components/modal'

export default class Picture extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-2">
        <div className="card">
          <a href="#" data-toggle="modal" data-target={`#${this.props.pictureId}Modal`}>
            <img className="card-img-top img-fluid" src={this.props.url} />
          </a>
          <div className="card-block">
            <button type="button" onClick={this.props.handleDelete} className="btn btn-danger">Deletar</button>
          </div>
          <Modal id={`${this.props.pictureId}Modal`}>
            <img className="img-fluid" src={this.props.url} />
          </Modal>
        </div>
      </div>
    )
  }
}

