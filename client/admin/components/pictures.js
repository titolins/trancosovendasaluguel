import React from 'react'

import { connect } from 'react-redux'

import { mapDispatchToProps } from 'admin/containers/requests'
import { mapStateToProps } from 'admin/containers/pictures'

class Pictures extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pictures: "",
      uploadFiles: ""
    }

    window.pictures = this

    this.onChange = this.onChange.bind(this)
    this.loadPreview = this.loadPreview.bind(this)
  }

  loadPreview() {
    for(var i = 0; i < this.state.uploadFiles.length; i++) {
      let id = `up-img-${i}`,
          file = this.state.uploadFiles[i],
          reader = new FileReader(),
          url = reader.readAsDataURL(file)

        window.reader = reader
        reader.onload = e=>document.getElementById(id).setAttribute('src', [reader.result])
    }
  }

  onChange(e) {
    let field = e.target.name,
        state = this.state
    switch(field) {
      case 'pictures':
        state[field] = e.target.value
        state.uploadFiles = e.target.files
        this.loadPreview()
        break
      default:
        state[field] = e.target.value
    }
    return this.setState(state)
  }

  render() {
    let fs = []
    for(var i = 0; i < this.state.uploadFiles.length; i++) {
      let id = `up-img-${i}`,
          file = this.state.uploadFiles[i]
      fs.push(<div className="col-xs-12 col-md-6" key={i}>
                <div className="card">
                  <img id={id} className="card-img-top img-fluid" src="" />
                  <div className="card-block">
                  </div>
                </div>
              </div>)
    }

    return (
      <div className="card">
        <div className="card-block">
          <h3 className="card-title">Imagens</h3>
          <button type="button" className="btn btn-success" data-toggle="modal" data-target="#add-modal">Adicionar</button>
          <div className="row">
            {this.props.pictures.map((p, i) => {
              return (
                <div key={i} className="col-xs-12 col-md-6">
                  <div className="card">
                    <a href="#" data-toggle="modal" data-target={`#p-modal-${i}`}>
                      <img className="card-img-top img-fluid" src={p.url} />
                    </a>
                    <div className="card-block">
                      <button type="button" className="btn btn-danger">Deletar</button>
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
                          <img className="img-fluid" src={p.url} />
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
                  <div className="container-fluid">
                    <div className="row">{fs}</div>
                  </div>
                  <form id="addModal">
                    <input label="Subir imagens" type="file"
                      name="pictures" multiple 
                      value={this.state.pictures} onChange={this.onChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Pictures)
