import React from 'react'
import ReactDOM from 'react-dom'

import fetch from "whatwg-fetch"
import promise from "promise-polyfill"

import $ from 'npm:jquery@2.2.4'
import 'twbs/bootstrap'
import 'twbs/bootstrap/css/bootstrap.css!'

import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import { persistStore, autoRehydrate } from 'redux-persist'

import { module } from '@hot'

import { lang, content, message } from 'homepage/reducers'
import { auth, upload, post, data } from 'admin/reducers'

import App from 'homepage/components/app'
import Admin from 'admin/components/app'

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import { PropsRoute } from 'homepage/propsroute'

let store = createStore(
  combineReducers({lang,content,auth,upload,post,data,message}),
  undefined,
  compose(applyMiddleware(thunk),autoRehydrate()))

persistStore(store, {blacklist: ['lang', 'content', 'upload', 'post', 'data', 'message']})

export let component =  ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <PropsRoute path="/admin" component={Admin} store={store}/>
        <PropsRoute path="/" component={App} contentId="categories" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('container')
)

if (module)
  component.setState(module.component.state)
