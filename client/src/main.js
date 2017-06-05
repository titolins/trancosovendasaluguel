import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { module } from '@hot'

import reducers from 'client/reducers'

import App from 'client/containers/app'

let store = createStore(reducers, applyMiddleware(thunk))

export let component =  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)

if (module)
  component.setState(module.component.state)
