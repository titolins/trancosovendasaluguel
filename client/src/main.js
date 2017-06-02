import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { module } from '@hot'

import reducers from 'client/reducers'

import Navbar from 'client/components/navbar'
import Home from 'client/components/home'
import Todos from 'client/components/todos'

export let component =  ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      <div>
        <div className="container">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/todos" component={Todos} />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('container')
)

if (module)
  component.setState(module.component.state)
