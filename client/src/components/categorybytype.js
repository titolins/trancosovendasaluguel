import React from 'react'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'client/containers/categorybytype'

import { buildItemsPanels } from 'client/components/featuredsection'

class CategoryByType extends React.Component {
  constructor(props) {
    super(props)
    let { categoryId, typeId } = props.match.params
    props.fetchContent(`/api/categories/${categoryId}/houses/bytype/${typeId}`)
  }

  render() {
    let items = this.props.items ? buildItemsPanels(this.props.items, this.props.ownContent.detailsBtn) : null
    console.log("props")
    console.log(this.props)
    console.log("items")
    console.log(items)
    return (
      <div className="mainContent">
        <h1 className="sectionTitle halfWidth pb-2">{ this.props.title }</h1>
        <div className="row">{ items }</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryByType)
