import React from 'react'

import { connect } from 'react-redux'

import { mapStateToProps } from 'admin/containers/houses'

class Houses extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      house: {
        category: {
          name: "",
          id: "" }
      }
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h3 className="card-title">Casas</h3>
          <button type="button" className="btn btn-success" data-toggle="modal" data-target="#add-modal">Adicionar</button>
          <div className="row">
            {this.props.houses.map((h, i) => {
              return (
                <div key={i} className="col-xs-12 col-md-6">
                  <div className="card">
                    <a href="#" data-toggle="modal" data-target={`#p-modal-${i}`}>
                      <img className="card-img-top img-fluid" src={h.cover.url} />
                    </a>
                    <div className="card-block">
                      <h3 className="card-title">{h.content['pt_br'].name}</h3>
                      <p className="card-text">{h.content['pt_br'].description}</p>
                      <button type="button" onClick={this.props.handleDelete(h)} className="btn btn-danger">Deletar</button>
                    </div>
                  </div>
                  <div className="modal fade" id={`p-modal-${i}`} tabIndex="-1" role="dialog" aria-labelledby={`p-modal-${i}-title`} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <img className="img-fluid" src="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="modal fade" id="add-modal" tabIndex="-1" role="dialog" aria-labelledby="add-modal-title">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="add-modal-title">Adicionar imagens</h5>
                </div>
                <div className="modal-body">
                  <form name="createHouse" id="addModal">
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Houses)
