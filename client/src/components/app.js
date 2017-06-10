import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'

import { PropsRoute } from 'client/propsroute'
import { mapDispatchToProps } from 'client/containers/fetchcontent'

import Header from 'client/components/header'
import Home from 'client/components/home'
import House from 'client/components/house'
import Footer from 'client/components/footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    props.fetchContent("/api/categories")
  }

  render() {
    return (
      <Router>
        <div>
          <div id="headerFiller"></div>
          <div className="container">
            <Header contentId="navbar" />
            <Switch>
              <PropsRoute exact path="/" component={Home} contentId="home" />
              <PropsRoute path="/categorias/:categoryId/casas/:houseId" component={House} contentId="house" />
              <Redirect to="/" />
            </Switch>
          </div>
          <Footer contentId="navbar"/>
        </div>
      </Router>
    )
  }

}

export default connect(null, mapDispatchToProps)(App)
