import React from 'react'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'homepage/containers/categorybytype'

import { buildItemsPanels } from 'homepage/components/featuredsection'

class CategoryByType extends React.Component {
  componentWillMount() {
    let { categoryId, typeId } = this.props.match.params
    this.props.fetchContent(`/api/categorias/${categoryId}/portipo/${typeId}`)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.typeId !== this.props.match.params.typeId) {
      let { categoryId, typeId } = nextProps.match.params
      this.props.fetchContent(`/api/categorias/${categoryId}/portipo/${typeId}`)
    }
  }

  render() {
    let items = this.props.items ? buildItemsPanels(this.props.items, this.props.ownContent.detailsBtn) : null
    return (
      <div className="mainContent">
        <h1 className="sectionTitle halfWidth pb-2">{ this.props.title }</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryByType)
