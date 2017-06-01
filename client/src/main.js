import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from 'client/reducers'
import Home from 'client/home'

import { module } from '@hot'

let store = createStore(reducers)

export default ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('container')
)

if (module)
  component.setState(module.component.state)
