import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { module } from '@hot'

import reducers from 'homepage/reducers'

import App from 'homepage/components/app'
import Admin from 'admin/components/app'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { PropsRoute } from 'homepage/propsroute'

let store = createStore(reducers, applyMiddleware(thunk))

export let component =  ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        <PropsRoute path="/" component={App} contentId="categories" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('container')
)

if (module)
  component.setState(module.component.state)
