import React from 'react'

import Modal from 'admin/components/modal'
import Folder from 'admin/components/folder'

export default class HouseForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.updateData = this.updateData.bind(this)
    this.selectFolder = this.selectFolder.bind(this)
    this.removeCategory = this.removeCategory.bind(this)
    this.addCategory = this.addCategory.bind(this)
    this.getData = this.getData.bind(this)
    this.showTranslatableContent = this.showTranslatableContent.bind(this)
    if (this.props.house) {
      let h  = JSON.parse(JSON.stringify(this.props.house)),
          fs = ["features", "salesFeatures", "rentFeatures"],
          ls = ["en_us", "pt_br"]
      fs.map((feature) => {
        ls.map((lang) => {
          h.content[lang][feature] = h.content[lang][feature] || []
          h.content[lang][feature] = h.content[lang][feature].join(';')
        })
      })
      this.state = Object.assign({}, h)
    } else {
      this.state = {
        name: "",
        categories: [],
        type: "0",
        featured: {
          sales: false,
          rent: false },
        capacity: {
          min: "1",
          max: "2",
        },
        pictureFolder: {},
        content: {
          'pt_br': {
            description: "",
            features: "",
            salesFeatures: "",
            rentFeatures: "",
          },
          'en_us': {
            description: "",
            features: "",
            salesFeatures: "",
            rentFeatures: "",
            } } }
    }
    this.initialState = JSON.parse(JSON.stringify(this.state))
    this.categories = {
      sales: "Vendas",
      rent: "Aluguel",
    }
    this.selectedCategory = ''
  }

  handleChange(e) {
    let field = e.target.name,
        state = this.state
    switch(field) {
      case 'featured_sales':
        state.featured.sales = e.target.checked
        break
      case 'featured_rent':
        state.featured.rent = e.target.checked
        break
      case 'minCapacity':
        if (e.target.value < state.capacity.max) state.capacity.min = e.target.value
        break
      case 'maxCapacity':
        if (e.target.value > state.capacity.min) state.capacity.max = e.target.value
        break
      case 'features_pt':
        state.content['pt_br'].features = e.target.value
        break
      case 'features_en':
        state.content['en_us'].features = e.target.value
        break
      case 'salesFeatures_pt':
        state.content['pt_br'].salesFeatures = e.target.value
        break
      case 'salesFeatures_en':
        state.content['en_us'].salesFeatures = e.target.value
        break
      case 'rentFeatures_pt':
        state.content['pt_br'].rentFeatures = e.target.value
        break
      case 'rentFeatures_en':
        state.content['en_us'].rentFeatures = e.target.value
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

  updateData() {
    if (!this.props.house) this.setState(JSON.parse(JSON.stringify(this.initialState)))
    this.props.update()

    let openMenu = document.getElementsByClassName('triggerCollapse active')[0]
    $(openMenu.dataset.trigger).collapse('hide')
    openMenu.classList.remove("active")
  }

  showTranslatableContent(e) {
    let activeBtn = document.getElementsByClassName(`triggerCollapse${this.props.triggerClass} active`)[0],
        target = e.target
    if (target === activeBtn) return
    // remove active from active btn and hide it's target
    $(activeBtn.dataset.trigger).collapse('hide')
    activeBtn.classList.remove("active")

    // add active to target and show it's target
    $(target.dataset.trigger).collapse('show')
    target.classList.add("active")
  }

  removeCategory(i) {
    return () => {
      let state = this.state
      state.categories.splice(i,1)
      this.setState(state)
    }
  }

  addCategory() {
    let state = this.state
    state.categories.push(this.selectedCategory.value)
    this.setState(state)
  }

  selectFolder(folder) {
    return (e) => {
      e.preventDefault()
      let state = this.state
      state.pictureFolder = folder
      this.setState(state)
    }
  }

  getData() {
    let data = this.state !== null ? JSON.parse(JSON.stringify(this.state)) : JSON.parse(JSON.stringify(this.initialState))
    if(data.content['pt_br'].features) data.content['pt_br'].features = this.state.content['pt_br'].features.split(';')
    if(data.content['en_us'].features) data.content['en_us'].features = this.state.content['en_us'].features.split(';')
    if(data.content['pt_br'].salesFeatures) data.content['pt_br'].salesFeatures = this.state.content['pt_br'].salesFeatures.split(';')
    if(data.content['en_us'].salesFeatures) data.content['en_us'].salesFeatures = this.state.content['en_us'].salesFeatures.split(';')
    if(data.content['pt_br'].rentFeatures) data.content['pt_br'].rentFeatures = this.state.content['pt_br'].rentFeatures.split(';')
    if(data.content['en_us'].rentFeatures) data.content['en_us'].rentFeatures = this.state.content['en_us'].rentFeatures.split(';')
    return data
  }

  render() {
    let h = this.props.house ? this.props.house : undefined

    let rent
    this.state.categories.map((c) => {
      if(c === 'rent') rent = true
    })

    let capacity = rent ? (<div className="row form-group">
        <div className="col-2">
          <label className="col-form-label">Capacidade</label>
        </div>
        <div className="col-2">
          <label className="col-form-label" htmlFor="minCapacity">Mínima</label>
          <input className="form-control" type="number" step="1" min="1" id="minCapacity" name="minCapacity" value={this.state.capacity.min} onChange={this.handleChange}></input>
        </div>
        <div className="col-2">
          <label className="col-form-label" htmlFor="maxCapacity">Máxima</label>
          <input className="form-control" type="number" step="1" min="1" id="maxCapacity" name="maxCapacity" value={this.state.capacity.max} onChange={this.handleChange}></input>
        </div>
      </div>) : null

    return (
      <div>
        <Modal title="Pastas de imagens" id={`foldersModal${this.props.triggerClass}`}>
          <div className="row">
          {this.props.folders.map((f,i) => {
            return (
              <div key={i} className="col-sm-6 col-md-4">
                <Folder folderName={f.name} handleClick={this.selectFolder(f)} />
              </div>)
          })}
          </div>
        </Modal>
        <form onSubmit={this.props.handleSubmit(this.getData(), this.updateData)}>
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
            <div className={`form-group col-4${this.props.postState.errors.categories? " has-danger" : "" }`}>
              <label className="col-form-label" htmlFor="categories">Categorias</label>
              <div>
                <select id="category" name="category" className="custom-select" ref={(input)=>this.selectedCategory = input}>
                  { Object.keys(this.categories).map((c,i)=>{
                    if (this.state.categories && this.state.categories.indexOf(c) === -1) return (<option key={i} value={c}>{this.categories[c]}</option>)
                  })}
                </select>
              </div>
              <a href="#" className="btn btn-info" onClick={this.addCategory}>Adicionar</a>
            </div>
            <div className="col-8">
              { this.state.categories !== null ?
                  this.state.categories.length < 1 ?
                    "Você ainda não selecionou nenhuma categoria" :
                    this.state.categories.map((c, i) => {
                      return (
                        <div key={i} className="row">
                          <div className="col-10">
                            <input value={this.categories[c]} disabled className="form-control" />
                          </div>
                          <div className="col-2">
                            <a href="#" onClick={this.removeCategory(i)} className="btn btn-danger">
                              <span aria-hidden="true">&times;</span>
                            </a>
                          </div>
                          <div className="col-12">
                            <label className="form-check-label">
                              <input value={this.state.featured[c]} checked={this.state.featured[c]} onChange={this.handleChange} type="checkbox" className="form-check-input" name={`featured_${c}`}></input> Destaque
                            </label>
                          </div>
                        </div>
                      )
                    }) :
                  ''
              }
              { this.props.postState.errors.categories ?
                  (<div className="alert alert-danger" role="alert">{this.props.postState.errors.categories}</div>) :
                  ''
              }
            </div>
          </div>
          <div className="row">
            <div className="form-group col-4">
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
            </div>
          </div>
          { capacity }
          <div className="form-group row">
            <div className="col-sm-4">
              <label className="col-form-label">Pasta de imagens</label>
              <div>
                <a href="#" className="btn btn-info" data-toggle="modal" data-target={`#foldersModal${this.props.triggerClass}`}>Selecionar pasta</a>
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
              <button onClick={this.showTranslatableContent} data-trigger={`#ptContent${this.props.triggerClass}`} type="button" className={`btn btn-secondary active triggerCollapse${this.props.triggerClass}`}>PT</button>
              <button onClick={this.showTranslatableContent} data-trigger={`#enContent${this.props.triggerClass}`} type="button" className={`btn btn-secondary triggerCollapse${this.props.triggerClass}`}>EN</button>
            </div>
          </div>
          <div id={`ptContent${this.props.triggerClass}`} className="collapse show">
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
                <label className="col-form-label">Informações genéricas</label>
              </div>
              <div className="col-sm-10">
                <input className="form-control" type="text" name="features_pt" value={this.state.content['pt_br'].features} onChange={this.handleChange}></input>
              </div>
            </div>
            { (this.state.categories.indexOf("sales") !== -1) ? (<div className="form-group row">
              <div className="col-sm-2">
                <label className="col-form-label">Informações de venda</label>
              </div>
              <div className="col-sm-10">
                <input className="form-control" type="text" name="salesFeatures_pt" value={this.state.content['pt_br'].salesFeatures} onChange={this.handleChange}></input>
              </div>
            </div>) : '' }
            { (this.state.categories.indexOf("rent") !== -1) ? (<div className="form-group row">
              <div className="col-sm-2">
                <label className="col-form-label">Informações de aluguel</label>
              </div>
              <div className="col-sm-10">
                <input className="form-control" type="text" name="rentFeatures_pt" value={this.state.content['pt_br'].rentFeatures} onChange={this.handleChange}></input>
              </div>
            </div>) : '' }
          </div>
          <div id={`enContent${this.props.triggerClass}`} className="collapse">
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
                <label className="col-form-label">Informações genéricas</label>
              </div>
              <div className="col-sm-10">
                <input className="form-control" type="text" name="features_en" value={this.state.content['en_us'].features} onChange={this.handleChange}></input>
              </div>
            </div>
            { (this.state.categories.indexOf("sales") !== -1) ? (<div className="form-group row">
              <div className="col-sm-2">
                <label className="col-form-label">Informações de venda</label>
              </div>
              <div className="col-sm-10">
                <input className="form-control" type="text" name="salesFeatures_en" value={this.state.content['en_us'].salesFeatures} onChange={this.handleChange}></input>
              </div>
            </div>) : '' }
            { (this.state.categories.indexOf("rent") !== -1) ? (<div className="form-group row">
              <div className="col-sm-2">
                <label className="col-form-label">Informações de aluguel</label>
              </div>
              <div className="col-sm-10">
                <input className="form-control" type="text" name="rentFeatures_en" value={this.state.content['en_us'].rentFeatures} onChange={this.handleChange}></input>
              </div>
            </div>) : '' }
          </div>
          <div>
            <input type="submit" className="btn btn-success" value="Enviar"></input>
          </div>
        </form>
      </div>
    )
  }
}

