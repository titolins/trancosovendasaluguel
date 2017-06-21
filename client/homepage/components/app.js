import React from 'react'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'
import { mapDispatchToProps } from 'homepage/containers/fetchcontent'

import { PropsRoute } from 'homepage/propsroute'
import Scroll from 'homepage/scroll'

import Header from 'homepage/components/header'
import Home from 'homepage/components/home'
import House from 'homepage/components/house'
import Footer from 'homepage/components/footer'

import Contact from 'homepage/components/contact'
import Services from 'homepage/components/services'
import ComercialRent from 'homepage/components/comercialrent'
import About from 'homepage/components/about'

import CategoryByType from 'homepage/components/categorybytype'

class App extends React.Component {
  constructor(props) {
    super(props)
    props.fetchContent("/api/categories")
  }

  render() {
    return (
      <Scroll>
        <div id="headerFiller"></div>
        <div className="container">
          <Header contentId="navbar" />
          <Switch>
            <PropsRoute exact path="/" component={Home} contentId="home" />
            <PropsRoute path="/categorias/:categoryId/casas/:houseId" component={House} contentId="house" />
            <PropsRoute path="/categorias/:categoryId/:typeId" component={CategoryByType} contentId="featured" />
            <PropsRoute path="/contato" component={Contact} contentId="contact"/>
            <PropsRoute path="/servicos" component={Services} contentId="services"/>
            <PropsRoute path="/aluguelcomercial" component={ComercialRent} contentId="comercialRent"/>
            <PropsRoute path="/sobre" component={About} contentId="about"/>
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer contentId="navbar"/>
      </Scroll>
    )
  }

}

export default connect(null, mapDispatchToProps)(App)
