import React from 'react'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Intro from 'admin/components/intro'
import Header from 'admin/components/header'
import Pictures from 'admin/components/pictures'
import Houses from 'admin/components/houses'

import { getContentReq, postFilesReq, deleteContentReq, putContentReq } from 'admin/requests'

import {
  updatePictures,
  setUploadState,
  UPLOAD_STATE,
  setUploadErrors,
  updateHouses,
  setPostErrors,
} from 'admin/actions'

const reload = () => window.location = window.location

const buildPicturesHandler = (store, token) => {
  let url = '/admin/api/picture'
  return {
    get: () => {
      getContentReq(url, token, res=> {
        store.dispatch(updatePictures(res))})
    },
    post: (data, callback) => {
      return (e) => {
        e.preventDefault()
        store.dispatch(setUploadState({state:UPLOAD_STATE.BUSY}))
        postFilesReq(url, token, data, (res) => {
          store.dispatch(setUploadState({state:UPLOAD_STATE.AVAILABLE}))
          res.json().then((json)=>{
            if(json.errors.length > 0) store.dispatch(setUploadErrors({errors:json.errors}))
            else callback()
          })
        })
      }
    },
    del: (data, callback) => {
      return () => {
        deleteContentReq(url, token, data, (res)=> {
          callback()
        })
      }
    }
  }
}

const buildHousesHandler = (store, token) => {
  let url = '/admin/api/house'
  return {
    get: () => {
      getContentReq(url, token, res=> {
        store.dispatch(updateHouses(res))})
    },
    create: (data, callback) => {
      return (e) => {
        e.preventDefault()
        //store.dispatch(setUploadState({state:UPLOAD_STATE.BUSY}))
        putContentReq(url, token, data, (res) => {
          //store.dispatch(setUploadState({state:UPLOAD_STATE.AVAILABLE}))
          res.json().then((json)=>{
            if(json.errors.length > 0) store.dispatch(setPostErrors({errors:json.errors}))
            else callback()
          })
        })
      }
    },
    del: (data, callback) => {
      return () => {
        deleteContentReq(url, token, data, (res) => {
          callback()
        })
      }
    }
  }
}

const buildRoutes = (store, token) => {
  let picturesHandler = buildPicturesHandler(store, token)
  let housesHandler = buildHousesHandler(store, token)

   return (
    <Switch>
      <Route exact path="/admin/" component={Intro} />
      <Route path="/admin/imagens" render={ () => {
        picturesHandler.get()
        return (<Pictures update={picturesHandler.get} handleDelete={picturesHandler.del} handleSubmit={picturesHandler.post}/>)
      } } />
      <Route path="/admin/casas" render={ () => {
        housesHandler.get()
        picturesHandler.get()
        return (<Houses update={housesHandler.get} handleDelete={housesHandler.del} handleCreate={housesHandler.create}/>)
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
