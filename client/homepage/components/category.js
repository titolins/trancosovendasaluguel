import React from 'react'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'homepage/containers/category'

import { buildItemsPanels } from 'homepage/components/featuredsection'

class Category extends React.Component {
  componentWillMount() {
    let { categoryId } = this.props.match.params
    this.props.fetchContent(`/api/categorias/${categoryId}`)
  }

  componentWillReceiveProps(nextProps) {
    let { categoryId } = nextProps.match.params
    if (nextProps.match.params.categoryId !== categoryId) {
      this.props.fetchContent(`/api/categorias/${categoryId}`)
    }
  }

  render() {
    let items = this.props.items ? buildItemsPanels(this.props.items, this.props.ownContent.detailsBtn) : null
    return (
      <div className="mainContent">
        <h1 className="sectionTitle halfWidth pb-2">{ this.props.categoryTypes.title }</h1>
        <div className="row">
          { items ?
              items :
              (<div className="container">
                <p className="houseDescription">Não há nenhum imóvel cadastrado para essa categoria ainda.</p>
              </div>)
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
