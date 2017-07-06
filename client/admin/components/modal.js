import React from 'react'


export default class Modal extends React.Component {

  render() {
    return (
      <div className="modal fade" id={this.props.id} aria-hidden="true" aria-labelledby={`${this.props.id}Title`} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              { this.props.title ? (
                <h5 className="modal-title" id={`${this.props.id}Title`}>{this.props.title}</h5>
              ) : '' }
              <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{this.props.children}</div>
          </div>
        </div>
      </div>
    )
  }

}

