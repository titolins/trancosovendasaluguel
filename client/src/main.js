import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { module } from '@hot'

import reducers from 'client/reducers'

import App from 'client/containers/app'

export let component =  ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('container')
)

if (module)
  component.setState(module.component.state)
