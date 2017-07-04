import React from 'react'

import { connect } from 'react-redux'

import { mapStateToProps } from 'admin/containers/houses'

class Houses extends React.Component {
  constructor(props) {
    super(props)
    window.houses = this

    this.updateData = this.updateData.bind(this)
    this.addFeature = this.addFeature.bind(this)
    this.removeFeature = this.removeFeature.bind(this)
    this.selectImg = this.selectImg.bind(this)
    this.removeImg = this.removeImg.bind(this)
    this.setCoverImg = this.setCoverImg.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.initialState = {
      category: { name: "rent" },
      type: "0",
      featured: false,
      capacity: "1",
      cover: {
        id: "",
        url: ""
      },
      pictures: [],
      content: {
        'pt_br': {
          name: "",
          description: "",
          features: []
        },
        'en_us': {
          name: "",
          description: "",
          features: []
        }
      }
    }
    this.state = this.initialState
  }

  updateData() {
    this.setState(this.initialState)
    this.props.update()
  }

  addFeature() {
    let state = this.state
    state.content['pt_br'].features.push('')
    state.content['en_us'].features.push('')

    this.setState(state)
  }

  removeFeature(i) {
    return () => {
      let state = this.state
      state.content['pt_br'].features.splice(i,1)
      state.content['en_us'].features.splice(i,1)

      this.setState(state)
    }
  }

  handleChange(e) {
    let field = e.target.name,
        state = this.state
    console.log(e.target)
    switch(field) {
      case 'category':
        state[field].name = e.target.value
        break
      case 'featured':
        state[field] = e.target.checked
        break
      case 'features_pt':
        state.content['pt_br'].features[e.target.id.split('_')[1]] = e.target.value
        break
      case 'features_en':
        state.content['en_us'].features[e.target.id.split('_')[1]] = e.target.value
        break
      case 'name_pt':
        state.content['pt_br'].name = e.target.value
        break
      case 'name_en':
        state.content['en_us'].name = e.target.value
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
      console.log(state)
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
    let buildImagesModal = (cover) => {
      let id = `select${cover ? 'Cover' : 'Images'}Modal`,
          title = `${id}Title`

      return (
        <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby={title} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-header">
              <h5 className="modal-title" id={title}>Selecionar {cover ? "imagem de capa" : "imagens"}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="collapse" id="addHouse">
          <div className="card card-block">
            <h3 className="card-title">Adicionar casa</h3>
            <form name="createHouse" onSubmit={this.props.handleCreate(this.state, this.updateData)}>
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
                <div className="form-group col-4">
                  <label className="col-form-label" htmlFor="capacity">Capacidade</label>
                  <input className="form-control" type="number" step="1" min="1" id="capacity" name="capacity" value={this.state.capacity} onChange={this.handleChange}></input>
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
                <div className="col-sm-2">
                  <label className="col-form-label">Foto de capa</label>
                  <div>
                    <button type="button" data-toggle="modal" data-target="#selectCoverModal" className="btn btn-info">Selecionar</button>
                  </div>
                </div>
                <div className="col-sm-10">
                  <img className="img-fluid" src={this.state.cover.url}></img>
                </div>
                { buildImagesModal(true) }
              </div>
              <div className="form-group row">
                <div className="col-sm-2">
                  <label className="col-form-label">Fotos</label>
                  <div>
                    <button type="button" data-toggle="modal" data-target="#selectImagesModal" className="btn btn-info">Selecionar</button>
                  </div>
                </div>
                <div className="col-sm-10">
                  <div className="row">
                    { this.state.pictures.map((p,i) => {
                      return (
                        <div className="col-xs-12 col-md-6" key={i}>
                          <img className="img-fluid" src={p.url}></img>
                        </div>
                      )
                      })
                    }
                  </div>
                </div>
                { buildImagesModal(false) }
              </div>
              <div className="btn-group" role="group">
                <button data-toggle="collapse" data-target="#ptContent" type="button" className="btn btn-secondary">PT</button>
                <button data-toggle="collapse" data-target="#enContent" type="button" className="btn btn-secondary">EN</button>
              </div>
              <div id="ptContent" className="collapse">
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label" htmlFor="name_pt">Nome</label>
                  <div className="col-sm-10">
                    <input className="form-control" type="text" id="name_pt" name="name_pt" value={this.state.content['pt_br'].name} onChange={this.handleChange}></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label" htmlFor="description_pt">Descrição</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="description_pt" name="description_pt" value={this.state.content['pt_br'].description} onChange={this.handleChange}></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-2">
                    <label className="col-form-label">Mais informações</label>
                    <div>
                      <button type="button" className="btn btn-info" onClick={this.addFeature}>Adicionar</button>
                    </div>
                  </div>
                  <div className="col-sm-10">
                    { this.state.content['pt_br'].features.map((f,i) => {
                        return (
                          <div className="form-group" key={i}>
                            <input className="form-control" type="text" id={`f_${i}`} name="features_pt" value={this.state.content['pt_br'].features[i]} onChange={this.handleChange}></input>
                            <button type="button" className="btn btn-danger" onClick={this.removeFeature(i)}>Remover</button>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div id="enContent" className="collapse">
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label" htmlFor="name_en">Nome</label>
                  <div className="col-sm-10">
                    <input className="form-control" type="text" id="name_en" name="name_en" value={this.state.content['en_us'].name} onChange={this.handleChange}></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label" htmlFor="description_en">Descrição</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="description_en" name="description_en" value={this.state.content['en_us'].description} onChange={this.handleChange}></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-2">
                    <label className="col-form-label">Mais informações</label>
                    <div>
                      <button type="button" className="btn btn-info" onClick={this.addFeature}>Adicionar</button>
                    </div>
                  </div>
                  <div className="col-sm-10">
                    { this.state.content['en_us'].features.map((f,i) => {
                        return (
                          <div className="form-group" key={i}>
                            <input className="form-control" type="text" id={`f_${i}`} name="features_en" value={this.state.content['en_us'].features[i]} onChange={this.handleChange}></input>
                            <button type="button" className="btn btn-danger" onClick={this.removeFeature(i)}>Remover</button>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div>
                <input type="submit" className="btn btn-success" value="Enviar"></input>
              </div>
            </form>
          </div>
        </div>
        <div className="card card-block">
          <h3 className="card-title">Casas</h3>
          <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#addHouse">Adicionar casa</button>
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
                      <button type="button" onClick={this.props.handleDelete(h,this.updateData)} className="btn btn-danger">Deletar</button>
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
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Houses)
