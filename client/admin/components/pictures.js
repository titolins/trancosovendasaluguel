import React from 'react'

import { connect } from 'react-redux'

import { mapDispatchToProps } from 'admin/containers/requests'
import { mapStateToProps } from 'admin/containers/pictures'

class Pictures extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h3 className="card-title">Imagens</h3>
          <button type="button" className="btn btn-success">Adicionar</button>
          <div className="row">
            {this.props.pictures.map((p, i) => {
              return (
                <div key={i} className="col-xs-12 col-md-6">
                  <div className="card">
                    <img className="card-img-top" src={p.Url} />
                    <div className="card-block">
                      <button type="button" className="btn btn-danger">Deletar</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pictures)
