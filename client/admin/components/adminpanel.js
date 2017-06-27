import React from 'react'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Intro from 'admin/components/intro'
import Header from 'admin/components/header'
import Pictures from 'admin/components/pictures'

import { getContentReq, postFilesReq } from 'admin/requests'

import { updatePictures, setUploadState, UPLOAD_STATE } from 'admin/actions'

const buildRoutes = (store, token) => {
  const url = '/admin/api/picture'
  //let buildRequestHandler = ({req, url, token, buildAction, parseRes}) => {
  let buildRequestHandler = ({req, token, buildAction}) => {
    return () => {
      req(url, token, res=> {
        store.dispatch(buildAction(res))})
      //req(url, token, res=>store.dispatch(buildAction(parseRes(res))))
    }
  }

  let buildPostRequestHandler = ({req, token}) => {
    return (data) => {
      return (e) => {
        e.preventDefault()
        store.dispatch(setUploadState({state:UPLOAD_STATE.BUSY}))
        req(url, token, data, (res) => {
          store.dispatch(setUploadState({state:UPLOAD_STATE.AVAILABLE}))
        })
      }
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

  let getPicturesHandler = buildRequestHandler({
    req: getContentReq,
    token: token,
    buildAction: updatePictures,
    //parseRes: pictureParser
    //parseRes: res=>Object.keys(res).map(i=>res[i])
  })

  let postPicturesHandler = buildPostRequestHandler({
    req: postFilesReq,
    token
  })

  return (
    <Switch>
      <Route exact path="/admin/" component={Intro} />
      <Route path="/admin/imagens" render={ () => {
        getPicturesHandler()
        return (<Pictures handleSubmit={postPicturesHandler}/>)
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
