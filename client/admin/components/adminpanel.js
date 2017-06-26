import React from 'react'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Intro from 'admin/components/intro'
import Header from 'admin/components/header'
import Test from 'admin/components/test'
import Pictures from 'admin/components/pictures'

import { getContentReq } from 'admin/requests'

import { updatePictures } from 'admin/actions'

const buildRoutes = (store, token) => {
  //let buildRequestHandler = ({req, url, token, buildAction, parseRes}) => {
  let buildRequestHandler = ({req, url, token, buildAction}) => {
    return () => {
      req(url, token, res=> {
        store.dispatch(buildAction(res))})
      //req(url, token, res=>store.dispatch(buildAction(parseRes(res))))
    }
  }

    /*
  let pictureParser = (res) => {
    console.log("*****res*********")
    console.log(res)
    let pRes =  Object.keys(res).map(i=>res[i])
    console.log(pRes)
    return pRes
  }
  */

  let picturesHandler = buildRequestHandler({
    req: getContentReq,
    url: '/admin/api/picture',
    token: token,
    buildAction: updatePictures,
    //parseRes: pictureParser
    //parseRes: res=>Object.keys(res).map(i=>res[i])
  })

  return (
    <Switch>
      <Route exact path="/admin/" component={Intro} />
      <Route path="/admin/test" component={Test} />
      <Route path="/admin/imagens" render={ () => {
        picturesHandler()
        return (<Pictures />)
      } } />
      <Redirect to="/admin/" />
    </Switch>
  )
}

export default class AdminPanel extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Header />
        <div className="container">{ buildRoutes(this.props.store, this.props.token) }</div>
      </div>
    )
  }
}
