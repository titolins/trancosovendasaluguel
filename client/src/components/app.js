import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Header from 'client/components/header'
import Home from 'client/components/home'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header contentId="header" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    )
  }

}

