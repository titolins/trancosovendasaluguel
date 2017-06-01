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

import Navbar from 'client/navbar'
import Home from 'client/home'
import Todos from 'client/todos'

export default ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      <div>
        <Navbar />
        <div className="container">
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
