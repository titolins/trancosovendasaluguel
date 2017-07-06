import React from 'react'

import { connect } from 'react-redux'

import { mapStateToProps } from 'admin/containers/pictures'

import { UPLOAD_STATE } from 'admin/actions'

import Modal from 'admin/components/modal'

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
    this.updateData = this.updateData.bind(this)
  }

  updateData() {
    let state = this.state
    state.uploadFiles = ""
    this.setState(state)

    this.props.update()
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
    this.setState(state)
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
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a data-toggle="modal" data-target="#createFolderModal" className="nav-link" href="#">Criar pasta</a>
            </li>
          </ul>
        </div>
        <Modal id="createFolderModal" title="Criar pasta">
          <form id="createFolder" method="PUT" action="/admin/api/folder">
            <input type="text" name="name" id="name"></input>
            <input type="submit" className="btn btn-primary" value="Enviar"></input>
          </form>
        </Modal>
        <div className="card-block">
          <div className="row">
            <div className="col-6">
              <h3 className="card-title">Imagens</h3>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-success float-right" data-toggle="modal" data-target="#addModal">Adicionar</button>
            </div>
          </div>
          <div className="row">
            {this.props.pictures.map((p, i) => {
              return (
                <div key={i} className="col-xs-12 col-md-6">
                  <div className="card">
                    <a href="#" data-toggle="modal" data-target={`#pModal${i}`}>
                      <img className="card-img-top img-fluid" src={p.url} />
                    </a>
                    <div className="card-block">
                      <button type="button" onClick={this.props.handleDelete(p,this.updateData)} className="btn btn-danger">Deletar</button>
                    </div>
                  </div>
                  <Modal id={`pModal${i}`}>
                    <img className="img-fluid" src={p.url} />
                  </Modal>
                </div>
              )
            })}
          </div>
          <Modal id="addModal" title="Adicionar Imagens">
            <div>
              { this.props.uploadState.errors.length > 0 ?
                  (<div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Oops! Tivemos algum problema durante o envio dos arquivos</h4>
                    <ul>
                    {this.props.uploadState.errors.map((e,i)=>{
                      return (
                        <li key={i}>{e}</li>
                      )
                    })}
                  </ul></div>) :
                  null
              }
              <form name="uploadPictures" id="addModal" onSubmit={this.props.handleSubmit(this.getPostData(),this.updateData)}>
                <label className="custom-file">
                  <input type="file" id="file" className="custom-file-input"
                    name="pictures" multiple accept=".jpg,.png"
                    value={this.state.pictures} onChange={this.onChange}/>
                  <span className="custom-file-control"></span>
                </label>
                <div className="container-fluid">
                  <div className="row">{fs}</div>
                </div>
                { this.props.uploadState.state === UPLOAD_STATE.AVAILABLE ?
                    (<input type="submit" className="btn btn-primary" value="Subir imagens" />) :
                    (<div className="alert alert-info" role="alert">Subindo imagens. Por favor aguarde..</div>)
                }
              </form>
            </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Pictures)
