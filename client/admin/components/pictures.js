import React from 'react'

import { connect } from 'react-redux'

import { mapStateToProps } from 'admin/containers/pictures'

import { UPLOAD_STATE } from 'admin/actions'

import Modal from 'admin/components/modal'

import Folder from 'admin/components/folder'
import Picture from 'admin/components/picture'


class Pictures extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openFolder: {},
      pictures: "",
      uploadFiles: "",
      folder: {
        name: "",
      },
      cover: {}
    }

    this.selectCover = this.selectCover.bind(this)
    this.openFolder = this.openFolder.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onChange = this.onChange.bind(this)
    this.loadPreview = this.loadPreview.bind(this)
    this.getPostData = this.getPostData.bind(this)
    this.updateData = this.updateData.bind(this)
  }

  selectCover(p) {
    return (e) => {
      e.preventDefault()

      let selImg = document.getElementsByClassName("card selected")[0],
          target = e.target
      while (!target.classList.contains("card")) target = target.parentNode

      if (selImg) selImg.classList.remove("selected")
      target.classList.add("selected")

      let state = this.state
      state.cover = p
      this.setState(state)
    }
  }

  openFolder(f) {
    return (e) => {
      let openFolder = document.getElementsByClassName('triggerCollapse active')[0],
          target = e.target,
          state = this.state
      while(!target.classList.contains('triggerCollapse')) target = target.parentNode

      // remove active from active btn and hide it's target
      if (openFolder) {
        $(openFolder.dataset.trigger).collapse('hide')
        openFolder.classList.remove("active")
        state.openFolder = {}
      }

      if (target === openFolder) {
        this.setState(state)
        return
      }

      // add active to target and show it's target
      $(target.dataset.trigger).collapse('show')
      target.classList.add("active")
      state.openFolder = f
      this.setState(state)
    }
  }

  handleChange(e) {
    let state = this.state
    state.folder[e.target.name] = e.target.value
    this.setState(state)
  }

  updateData() {
    let state = this.state
    state.uploadFiles = ""
    this.setState(state)

    this.props.update()
  }

  getPostData() {
    return new FormData(document.getElementById("uploadForm"))
  }

  loadPreview() {
    for(var i = 0; i < this.state.uploadFiles.length; i++) {
      let id = `up-img-${i}`,
          file = this.state.uploadFiles[i],
          reader = new FileReader(),
          url = reader.readAsDataURL(file)

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
    let fs = [],
        ps = [],
        cs = []
    for(let i = 0; i < this.state.uploadFiles.length; i++) {
      let id = `up-img-${i}`,
          file = this.state.uploadFiles[i]
      fs.push(<div className="col-xs-12 col-md-6" key={i}>
                <div className="card">
                  <img id={id} className="card-img-top img-fluid" src="" />
                </div>
              </div>)
    }

    this.props.folders.map((folder,i) => {
      let id = `folderPanel${i}`

      ps.push(<div className="collapse folderPanel" key={i} id={id}>
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <button type="button" data-toggle="modal" data-target="#uploadModal" className="btn btn-primary">Subir imagens</button>
              </li>
            </ul>
          </div>
          <div className="card-block">
            <h3 className="card-title">{folder.name}</h3>
            <div className="row">
              <div className="col-sm-4">
                <h5>Imagem de capa</h5>
                <button type="button" data-toggle="modal" data-target={`#coverModal${i}`} className="btn btn-primary">Selecionar capa</button>
                <Modal id={`coverModal${i}`}>
                  <div className="row">
                    { folder.pictures.map((p,i) => {
                      return (
                        <div key={i} className="col-sm-6 col-md-4">
                          <div className="card">
                            <a href="#" onClick={this.selectCover(p)}>
                              <img className="card-img-top img-fluid" src={p.url} />
                            </a>
                          </div>
                        </div>
                      )})
                    }
                  </div>
                  <button className="btn btn-primary" onClick={this.props.selectCover(this.state.cover, folder, this.props.update) }>Selecionar</button>
                </Modal>
              </div>
              { folder.cover.url ?
                  (<div className="col-sm-6 col-md-4">
                    <div className="card">
                      <img className="card-img-top img-fluid" src={folder.cover.url} />
                    </div>
                  </div>) :
                  'Você não selecionou uma imagem de capa para esta pasta ainda.'
              }
            </div>
            <div className="row">
              <div className="col-12">
                <h5>Imagens</h5>
              </div>
              { folder.pictures.map((p,i) => {
                return (
                  <Picture key={i} url={p.url} pictureId={`${id}_Picture${i}`} handleDelete={this.props.handleDelete(p, folder, this.updateData)} />
                )})
              }
            </div>
          </div>
        </div>
      </div>)

      cs.push(<Folder key={i} handleDelete={this.props.deleteFolder(folder, this.props.update)} handleClick={this.openFolder(folder)} folderName={folder.name} target={`#${id}`} />)
    })

    return (
      <div>
        <a name="folderMenu" />
        { ps }
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#createFolderModal">Criar pasta</button>
              </li>
            </ul>
          </div>
          <div className="card-block">
            <h3 className="card-title">Pastas de Imagens</h3>
            <div className="row">
              { cs }
            </div>
          </div>
          <Modal id="createFolderModal" title="Criar pasta">
            <form id="createFolder" onSubmit={this.props.handleCreateFolder(this.state.folder, this.props.update)}>
              { this.props.postState.success ? (
                <div className="alert alert-success" role="alert">
                  Pasta criada com sucesso!
                </div>
              ) : '' }
              { this.props.postState.errors.create ? (
                <div className="alert alert-danger" role="alert">
                  { this.props.postState.errors.create }
                </div>
              ) : "" }
              <div className={`form-group row${this.props.postState.errors.name ? " has-danger" : "" }`}>
                <div className="col-sm-2">
                  <label htmlFor="name" className="col-form-label">Nome</label>
                </div>
                <div className="col-sm-10">
                  <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange} value={this.state.folder.name}></input>
                  {this.props.postState.errors.name? (
                    <div className="form-control-feedback">{this.props.postState.errors.name}</div>
                  ) : ''}
                </div>
              </div>
              <input type="submit" className="btn btn-primary" value="Criar"></input>
            </form>
          </Modal>
          <Modal id="uploadModal" title="Subir Imagens">
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
              { this.props.uploadState.state === UPLOAD_STATE.SUCCESS ? 
                  (<div className="alert alert-success" role="alert">
                    Imagens adicionadas com sucesso!
                  </div>) :
                  '' }
              <form name="uploadPictures" id="uploadForm" onSubmit={this.props.handleSubmit(this.getPostData(),this.updateData)}>
                <input type="hidden" name="folderId" id="folderId" value={this.state.openFolder.id} />
                <label className="custom-file">
                  <input type="file" id="file" className="custom-file-input"
                    name="pictures" multiple accept=".jpg,.png"
                    value={this.state.pictures} onChange={this.onChange}/>
                  <span className="custom-file-control"></span>
                </label>
                <div className="container-fluid">
                  <div className="row">{fs}</div>
                </div>
                { this.props.uploadState.state === UPLOAD_STATE.BUSY ?
                    (<div className="alert alert-info" role="alert">Subindo imagens. Por favor aguarde..</div>) :
                    (<input type="submit" className="btn btn-primary" value="Subir imagens" />)
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
