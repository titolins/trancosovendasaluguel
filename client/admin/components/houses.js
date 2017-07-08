import React from 'react'

import { connect } from 'react-redux'

import { mapStateToProps } from 'admin/containers/houses'

import Modal from 'admin/components/modal'
import Folder from 'admin/components/folder'

class Houses extends React.Component {
  constructor(props) {
    super(props)

    this.selectFolder = this.selectFolder.bind(this)
    this.showTranslatableContent = this.showTranslatableContent.bind(this)
    this.getData = this.getData.bind(this)
    this.updateData = this.updateData.bind(this)
    this.selectImg = this.selectImg.bind(this)
    this.removeImg = this.removeImg.bind(this)
    this.setCoverImg = this.setCoverImg.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.initialState = {
      name: "",
      category: { name: "rent" },
      type: "0",
      featured: false,
      capacity: {
        min: "1",
        max: "1",
      },
      pictureFolder: {},
      content: {
        'pt_br': {
          description: "",
          features: "",
        },
        'en_us': {
          description: "",
          features: "",
        }
      }
    }
    this.state = JSON.parse(JSON.stringify(this.initialState))

    window.houses = this
  }

  selectFolder(folder) {
    return (e) => {
      e.preventDefault()
      let state = this.state
      console.log(state)
      state.pictureFolder = folder
      this.setState(state)
    }
  }

  showTranslatableContent(e) {
    let activeBtn = document.getElementsByClassName('triggerCollapse active')[0],
        target = e.target
    if (target === activeBtn) return
    // remove active from active btn and hide it's target
    $(activeBtn.dataset.trigger).collapse('hide')
    activeBtn.classList.remove("active")

    // add active to target and show it's target
    $(target.dataset.trigger).collapse('show')
    target.classList.add("active")
  }

  getData() {
    let data = JSON.parse(JSON.stringify(this.state))
    data.content['pt_br'].features = this.state.content['pt_br'].features.split(';')
    data.content['en_us'].features = this.state.content['en_us'].features.split(';')
    if(this.state.category.name !== "sales") delete data.type
    return data
  }

  updateData() {
    this.setState(JSON.parse(JSON.stringify(this.initialState)))
    this.props.update()
    $("#addHouse").collapse("hide")
  }

  handleChange(e) {
    let field = e.target.name,
        state = this.state
    switch(field) {
      case 'category':
        state[field].name = e.target.value
        break
      case 'featured':
        state[field] = e.target.checked
        break
      case 'minCapacity':
        if (e.target.value > state.capacity.max) return
        state.capacity.min = e.target.value
        break
      case 'maxCapacity':
        if (e.target.value < state.capacity.min) return
        state.capacity.max = e.target.value
        break
      case 'features_pt':
        state.content['pt_br'].features = e.target.value
        break
      case 'features_en':
        state.content['en_us'].features = e.target.value
        break
      case 'description_pt':
        state.content['pt_br'].description = e.target.value
        break
      case 'description_en':
        state.content['en_us'].description = e.target.value
        break
      default:
        state[field] = e.target.value
    }
    this.setState(state)
  }

  selectImg(p) {
    return () => {
      let state = this.state
      if (state.pictures.indexOf(p) === -1) {
        state.pictures.push(p)
        this.setState(state)
      }
    }
  }

  removeImg(p) {
    return (e) => {
      e.preventDefault()
      let state = this.state
      state.pictures.splice(state.pictures.indexOf(p),1)
      this.setState(state)
    }
  }

  setCoverImg(p) {
    return () => {
      let state = this.state
      state.cover = p
      this.setState(state)
    }
  }

  render() {
    /*
    let buildImagesModal = (cover) => {
      let id = `select${cover ? 'Cover' : 'Images'}Modal`

      return (
        <Modal id={id} title={`Selecionar ${cover ? "imagem de capa" : "imagens"}`}>
          <div className="row">
            { this.props.pictures.map((p,i) => {
                let selected = (this.state.pictures.indexOf(p) !== -1)
                let key = cover ? `cover-${i}` : `imgs-${i}`
                return (
                  <div className="col-xs-12 col-md-6" key={key}>
                    <div className={`card${(this.state.cover.id === p.id || selected) ? ' selected' : ''}`} onClick={cover ? this.setCoverImg(p) : (this.state.cover.id === p.id) ? '' : this.selectImg(p)}>
                      <img className="card-img-top img-fluid" src={p.url} />
                    </div>
                    { selected ? <button className="close" onClick={this.removeImg(p)} aria-label="Remover"><span aria-hidden="true">&times;</span></button> : '' }
                  </div>
                )
              })
            }
          </div>
        </Modal>
      )
    }
    */
    return (
      <div>
        <Modal title="Pastas de imagens" id="foldersModal">
          <div className="row">
          {this.props.folders.map((f,i) => {
            return (
              <div key={i} className="col-sm-6 col-md-4">
                <Folder folderName={f.name} handleClick={this.selectFolder(f)} />
              </div>)
          })}
          </div>
        </Modal>
        <div className="collapse" id="addHouse">
          <div className="card card-block">
            <h3 className="card-title">Adicionar casa</h3>
            <form name="createHouse" onSubmit={this.props.handleCreate(this.getData(), this.updateData)}>
              <div className={`form-group row${this.props.postState.errors.name? " has-danger" : "" }`}>
                <label className="col-sm-2 col-form-label" htmlFor="name">Nome</label>
                <div className="col-sm-10">
                  <input className="form-control" type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}></input>
                  {this.props.postState.errors.name? (
                    <div className="form-control-feedback">{this.props.postState.errors.name}</div>
                  ) : ''}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-4">
                  <label className="col-form-label" htmlFor="category">Categoria</label>
                  <div>
                    <select id="category" name="category" className="custom-select" value={this.state.category.name} onChange={this.handleChange}>
                      <option value="rent">Aluguel</option>
                      <option value="sales">Vendas</option>
                    </select>
                  </div>
                </div>
                { this.state.category.name === "sales" ?
                  (<div className="form-group col-4">
                    <label className="col-form-label" htmlFor="type">Tipo de imóvel</label>
                    <div>
                      <select name="type" id="type" className="custom-select" value={this.state.type} onChange={this.handleChange}>
                        <option value="0">Casa</option>
                        <option value="1">Terreno</option>
                        <option value="2">Fazenda</option>
                        <option value="3">Terreno</option>
                        <option value="4">Pousada</option>
                      </select>
                    </div>
                  </div>) : '' }
                <div className="form-group col-2">
                  <label className="col-form-label" htmlFor="minCapacity">Capacidade mínima</label>
                  <input className="form-control" type="number" step="1" min="1" id="minCapacity" name="minCapacity" value={this.state.capacity.min} onChange={this.handleChange}></input>
                </div>
                <div className="form-group col-2">
                  <label className="col-form-label" htmlFor="maxCapacity">Capacidade máxima</label>
                  <input className="form-control" type="number" step="1" min="1" id="maxCapacity" name="maxCapacity" value={this.state.capacity.max} onChange={this.handleChange}></input>
                </div>
              </div>
              <div className="form-group">
                <label className="form-check-label">
                  <input value={this.state.featured} onChange={this.handleChange} type="checkbox" className="form-check-input" name="featured"></input> Destaque
                </label>
                <p className="form-text text-muted">
                  Se marcada essa opção, essa casa irá aparecer na página principal, na área de destaque da sua respectiva categoria. Caso contrário, para o usuário visualizá-la ele precisará entrar na página da categoria, através do link na barra de navegação.
                </p>
              </div>
              <div className="form-group row">
                <div className="col-sm-4">
                  <label className="col-form-label">Pasta de imagens</label>
                  <div>
                    <a href="#" className="btn btn-info" data-toggle="modal" data-target="#foldersModal">Selecionar pasta</a>
                  </div>
                </div>
                <div className="col-sm-8">
                  { this.state.pictureFolder.name ?
                      (<Folder folderName={this.state.pictureFolder.name} />) :
                      ''
                  }
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Conteúdo</label>
                <div className="btn-group col-sm-4" role="group">
                  <button onClick={this.showTranslatableContent} data-trigger="#ptContent" type="button" className="btn btn-secondary active triggerCollapse">PT</button>
                  <button onClick={this.showTranslatableContent} data-trigger="#enContent" type="button" className="btn btn-secondary triggerCollapse">EN</button>
                </div>
              </div>
              <div id="ptContent" className="collapse show">
                <div className={`form-group row${this.props.postState.errors.description? " has-danger" : "" }`}>
                  <label className="col-sm-2 col-form-label" htmlFor="description_pt">Descrição</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="description_pt" name="description_pt" value={this.state.content['pt_br'].description} onChange={this.handleChange}></textarea>
                    {this.props.postState.errors.description? (
                      <div className="form-control-feedback">{this.props.postState.errors.description}</div>
                    ) : ''}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-2">
                    <label className="col-form-label">Mais informações</label>
                  </div>
                  <div className="col-sm-10">
                    <input className="form-control" type="text" name="features_pt" value={this.state.content['pt_br'].features} onChange={this.handleChange}></input>
                  </div>
                </div>
              </div>
              <div id="enContent" className="collapse">
                <div className={`form-group row${this.props.postState.errors.description? " has-danger" : "" }`}>
                  <label className="col-sm-2 col-form-label" htmlFor="description_en">Descrição</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="description_en" name="description_en" value={this.state.content['en_us'].description} onChange={this.handleChange}></textarea>
                    {this.props.postState.errors.description? (
                      <div className="form-control-feedback">{this.props.postState.errors.description}</div>
                    ) : ''}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-2">
                    <label className="col-form-label">Mais informações</label>
                  </div>
                  <div className="col-sm-10">
                    <input className="form-control" type="text" name="features_en" value={this.state.content['en_us'].features} onChange={this.handleChange}></input>
                  </div>
                </div>
              </div>
              <div>
                <input type="submit" className="btn btn-success" value="Enviar"></input>
              </div>
            </form>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#addHouse">Adicionar casa</button>
              </li>
            </ul>
          </div>
          <div className="card-block">
            <h3 className="card-title">Casas</h3>
            <div className="row">
              {this.props.houses.map((h, i) => {
                return (
                  <div key={i} className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <div className="card">
                      <a href="#" data-toggle="modal" data-target={`#pModal${i}`}>
                        <img className="card-img-top img-fluid" src={''/*h.cover.url*/} />
                      </a>
                      <div className="card-block">
                        <h5 className="card-title">{h.name}</h5>
                        <button type="button" onClick={this.props.handleDelete(h,this.updateData)} className="btn btn-danger">Deletar</button>
                      </div>
                    </div>
                    <Modal id={`pModal${i}`}>
                      <img className="img-fluid" src={''/*h.cover.url*/} />
                    </Modal>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Houses)
