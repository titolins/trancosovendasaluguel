import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { PropsRoute } from 'client/propsroute'

import Header from 'client/components/header'
import Home from 'client/components/home'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    props.fetchCategories()
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header contentId="header" />
          <Switch>
            <PropsRoute exact path="/" component={Home} contentId="home" />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    )
  }

}

