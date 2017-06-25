import React from 'react'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Intro from 'admin/components/intro'
import Header from 'admin/components/header'
import Test from 'admin/components/test'

export default class AdminPanel extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/admin/" component={Intro} />
            <Route path="/admin/test" component={Test} />
            <Redirect to="/admin/" />
          </Switch>
        </div>
      </div>
    )
  }
}
