import React from 'react'

import { connect } from 'react-redux'
import { mapStateToProps } from 'admin/containers/auth'

import LoginForm from 'admin/components/loginform'
import AdminPanel from 'admin/components/adminpanel'

class App extends React.Component {
  render() {
    let page = (this.props.token !== "") ?
      ( <AdminPanel token={this.props.token} store={this.props.store} /> ) :
      ( <LoginForm /> )
    return (
      <div style={{width: "100%", height: "100%"}} className="container">
        <div style={{height: "100%"}} className="row">{ page }</div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
