import React from 'react'
import ReactDOM from 'react-dom'

import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import { persistStore, autoRehydrate } from 'redux-persist'

import { module } from '@hot'

import { lang, content } from 'homepage/reducers'
import { auth } from 'admin/reducers'

import App from 'homepage/components/app'
import Admin from 'admin/components/app'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { PropsRoute } from 'homepage/propsroute'

let store = createStore(
  combineReducers({lang,content,auth}),
  undefined,
  compose(applyMiddleware(thunk),autoRehydrate()))

persistStore(store, {blacklist: ['lang', 'content']})

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
