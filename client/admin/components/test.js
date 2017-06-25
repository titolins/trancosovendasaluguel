import React from 'react'

import { connect } from 'react-redux'

import { mapStateToProps } from 'admin/containers/requests'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.request = this.request.bind(this)
  }

  request() {
    fetch("/admin/api/test", {
      method: 'post',
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(res=>console.log(res))
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.request}>request</button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Test)
