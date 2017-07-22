import React from 'react'

import { connect } from 'react-redux'

import { mapStateToProps } from 'admin/containers/houses'

import Modal from 'admin/components/modal'
import HouseForm from 'admin/components/houseform'

class Houses extends React.Component {
  constructor(props) {
    super(props)

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu(e) {
    let openMenu = document.getElementsByClassName('triggerCollapse active')[0],
        target = e.target

    if (openMenu) {
      $(openMenu.dataset.trigger).collapse('hide')
      openMenu.classList.remove("active")
    }

    $(target.dataset.trigger).collapse('show')
    target.classList.add("active")
  }

  render() {
    let ps = [],
        cs = []

    this.props.houses.map((h, i) => {
      ps.push(<div key={i} className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
        <div className="card">
          <a href="#" data-toggle="modal" data-target={`#pModal${i}`}>
            <img className="card-img-top img-fluid" src={h.pictureFolder.cover.url} />
          </a>
          <div className="card-block">
            <h5 className="card-title">{h.name}</h5>
            <button type="button" onClick={this.props.handleDelete(h,this.props.update)} className="btn btn-danger">Deletar</button>
            <a href="#editMenu" onClick={this.openMenu} data-trigger={`#editHouse${i}`} className="btn btn-warning triggerCollapse">Editar</a>
          </div>
        </div>
      </div>)
      cs.push(<div key={i} className="collapse" id={`editHouse${i}`}>
          <div className="card card-block">
            <h3 className="card-title">Editar imóvel</h3>
            <HouseForm triggerClass={i} folders={this.props.folders} house={h} handleSubmit={this.props.handleEdit} postState={this.props.postState} update={this.props.update} />
          </div>
        </div>)
    })

    return (
      <div>
        <a name="editMenu" />
        { cs }
        <div className="collapse" id="addHouse">
          <div className="card card-block">
            <h3 className="card-title">Adicionar imóvel</h3>
            <HouseForm triggerClass="Add" folders={this.props.folders} handleSubmit={this.props.handleCreate} postState={this.props.postState} update={this.props.update} />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <a href="#editMenu" onClick={this.openMenu} className="triggerCollapse btn btn-primary" data-trigger="#addHouse">Adicionar imóvel</a>
              </li>
            </ul>
          </div>
          <div className="card-block">
            <h3 className="card-title">Imóveis</h3>
            <div className="row">
              { ps }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Houses)
