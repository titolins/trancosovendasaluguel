import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'
import { mapDispatchToProps } from 'client/containers/fetchcontent'

import { PropsRoute } from 'client/propsroute'
import ScrollToTop from 'client/scrolltotop'

import Header from 'client/components/header'
import Home from 'client/components/home'
import House from 'client/components/house'
import Footer from 'client/components/footer'

import Contact from 'client/components/contact'
import Services from 'client/components/services'
import ComercialRent from 'client/components/comercialrent'
import About from 'client/components/about'

class App extends React.Component {
  constructor(props) {
    super(props)
    props.fetchContent("/api/categories")
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div id="headerFiller"></div>
          <div className="container">
            <Header contentId="navbar" />
            <Switch>
              <PropsRoute exact path="/" component={Home} contentId="home" />
              <PropsRoute path="/categorias/:categoryId/casas/:houseId" component={House} contentId="house" />
              <PropsRoute path="/contato" component={Contact} contentId="contact"/>
              <PropsRoute path="/servicos" component={Services} contentId="services"/>
              <PropsRoute path="/aluguelcomercial" component={ComercialRent} contentId="comercialRent"/>
              <PropsRoute path="/sobre" component={About} contentId="about"/>
              <Redirect to="/" />
            </Switch>
          </div>
          <Footer contentId="navbar"/>
        </ScrollToTop>
      </Router>
    )
  }

}

export default connect(null, mapDispatchToProps)(App)
