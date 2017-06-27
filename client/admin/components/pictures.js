import React from 'react'

import { connect } from 'react-redux'

import { mapDispatchToProps } from 'admin/containers/requests'
import { mapStateToProps } from 'admin/containers/pictures'

import { UPLOAD_STATE } from 'admin/actions'

class Pictures extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pictures: "",
      uploadFiles: "",
    }

    this.onChange = this.onChange.bind(this)
    this.loadPreview = this.loadPreview.bind(this)
    this.getPostData = this.getPostData.bind(this)
  }

  getPostData() {
    /*
    let nFiles = this.state.uploadFiles.length,
        data = new FormData()
    data.append('name', 'uploadPictures')
    data.append('pictures', this.state.uploadFiles)
    */

    return new FormData(document.getElementById("addModal"))
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
                  { this.props.uploadState.errors.length > 0 ?
                      (<div className="alert alert-danger"><ul>
                        {this.props.uploadState.errors.map((e,i)=>{
                          return (
                            <li key={i}>{e}</li>
                          )
                        })}
                      </ul></div>) :
                      null
                  }
                  <form name="uploadPictures" id="addModal" onSubmit={this.props.handleSubmit(this.getPostData())}>
                    <input label="Subir imagens" type="file"
                      name="pictures" multiple accept=".jpg,.png"
                      value={this.state.pictures} onChange={this.onChange}/>
                    { this.props.uploadState.state === UPLOAD_STATE.AVAILABLE ?
                        (<input type="submit" className="btn btn-primary" value="Subir imagens" />) :
                        (<div className="alert alert-info" role="alert">Subindo imagens. Por favor aguarde..</div>)
                    }
                  </form>
                  <div className="container-fluid">
                    <div className="row">{fs}</div>
                  </div>
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
