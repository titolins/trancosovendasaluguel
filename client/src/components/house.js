import React from 'react'

import { connect } from 'react-redux'

import { mapDispatchToProps } from 'client/containers/fetchcontent'

class House extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    let { categoryId, houseId } = props.match.params
    let url = `/api/categories/${categoryId}/houses/${houseId}`
    props.fetchContent(url)
  }

  render() {
    return (
      <div>
        <h1>Teste</h1>
      </div>
    )
  }

}

export default connect(null, mapDispatchToProps)(House)
