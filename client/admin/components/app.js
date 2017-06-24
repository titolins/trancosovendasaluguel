import React from 'react'

import LoginForm from 'admin/components/loginform'

export default class App extends React.Component {
  render() {
   return (
      <div style={{width: "100%", height: "100%"}} className="container">
        <div style={{height: "100%"}} className="row">
          <LoginForm />
        </div>
      </div>
   )
  }
}

