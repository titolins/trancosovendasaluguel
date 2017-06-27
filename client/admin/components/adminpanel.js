import React from 'react'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Intro from 'admin/components/intro'
import Header from 'admin/components/header'
import Pictures from 'admin/components/pictures'

import { getContentReq, postFilesReq, deleteFilesReq } from 'admin/requests'

import { updatePictures, setUploadState, UPLOAD_STATE, setUploadErrors } from 'admin/actions'

const buildRoutes = (store, token) => {
  const url = '/admin/api/picture'

  let reload = ()=>window.location = window.location

  let getPicturesHandler = () => {
    getContentReq(url, token, res=> {
      store.dispatch(updatePictures(res))})
    //req(url, token, res=>store.dispatch(buildAction(parseRes(res))))
  }

  let postPicturesHandler = (data) => {
    return (e) => {
      e.preventDefault()
      store.dispatch(setUploadState({state:UPLOAD_STATE.BUSY}))
      postFilesReq(url, token, data, (res) => {
        store.dispatch(setUploadState({state:UPLOAD_STATE.AVAILABLE}))
        res.json().then((json)=>{
          if(json.errors.length === 0) reload()
          store.dispatch(setUploadErrors({errors:json.errors}))
        })
      })
    }
  }

  let deletePictureHandler = (data) => {
    return () => {
      deleteFilesReq(url, token, data, (res)=> {
        console.log(res)
        reload()
      })
    }
  }

  return (
    <Switch>
      <Route exact path="/admin/" component={Intro} />
      <Route path="/admin/imagens" render={ () => {
        getPicturesHandler()
        return (<Pictures handleDelete={deletePictureHandler} handleSubmit={postPicturesHandler}/>)
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
