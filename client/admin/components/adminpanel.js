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
import Contact from 'admin/components/contact'

import { getContentReq, postFilesReq, deleteContentReq, putContentReq, patchContentReq } from 'admin/requests'

import {
  updatePictures,
  setUploadState,
  UPLOAD_STATE,
  setUploadErrors,
  updateHouses,
  setPostErrors,
  setPostSuccess,
  updateFolders,
  revokeJWTToken,
} from 'admin/actions'

const reload = () => window.location = window.location

const buildFoldersHandler = (store, token) => {
  let url = '/admin/api/folder'
  return {
    get: () => {
      getContentReq(url, token, res=> {
        if(res && res.message && res.message === "Unauthorized") store.dispatch(revokeJWTToken())
        else {
          store.dispatch(updateFolders(res))
        }
      })
    },
    create: (data, callback) => {
      return (e) => {
        e.preventDefault()
        putContentReq(url, token, data, (res) => {
          if(res.error) store.dispatch(setPostErrors(res.errors))
          else {
            store.dispatch(setPostSuccess())
            //store.dispatch(updateHouses(res))
            callback()
          }
        })
      }
    },
    selectCover: (picture, folder, callback) => {
      return (e) => {
        e.preventDefault()
        putContentReq(`${url}/cover`, token, {picture, folder}, (res) => {
          if(!res.error) callback()
        })
      }
    },
    delete: (data, callback) => {
      return (e) => {
        e.preventDefault()
        deleteContentReq(url, token, data, (res)=> {
          callback()
        })
      }
    }
  }
}

const buildPicturesHandler = (store, token) => {
  let url = '/admin/api/picture'
  return {
    post: (data, callback) => {
      return (e) => {
        e.preventDefault()
        store.dispatch(setUploadState({state:UPLOAD_STATE.BUSY}))
        postFilesReq(url, token, data, (res) => {
          res.json().then((json)=>{
            if(json.error) {
              // 2 dispatches isn't cool... we should merge upload state and
              // errors (it does make sense afterall.. - similar to how we did
              // with post status)
              store.dispatch(setUploadState({state:UPLOAD_STATE.AVAILABLE}))
              store.dispatch(setUploadErrors({errors:json.errors}))
            } else {
              store.dispatch(setUploadState({state:UPLOAD_STATE.SUCCESS}))
              store.dispatch(setUploadErrors({errors:[]}))
              callback()
            }
          })
        })
      }
    },
    del: (picture, folder, callback) => {
      return () => {
        deleteContentReq(url, token, {picture, folder}, (res)=> {
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
        if(res && res.message && res.message === "Unauthorized") store.dispatch(revokeJWTToken())
        else {
          store.dispatch(updateHouses(res))
        }
      })
    },
    create: (data, callback) => {
      return (e) => {
        e.preventDefault()
        putContentReq(url, token, data, (res) => {
          if(res.error) store.dispatch(setPostErrors(res.errors))
          else {
            store.dispatch(setPostSuccess())
            callback()
          }
        })
      }
    },
    edit: (data, callback) => {
      return (e) => {
        e.preventDefault()
        patchContentReq(url, token, data, (res) => {
          if(res.error) store.dispatch(setPostErrors(res.errors))
          else {
            store.dispatch(setPostSuccess())
            callback()
          }
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
  let foldersHandler = buildFoldersHandler(store, token)

   return (
    <Switch>
      <Route exact path="/admin/" component={Intro} />
      <Route path="/admin/imagens" render={ () => {
        foldersHandler.get()
        return (<Pictures selectCover={foldersHandler.selectCover} deleteFolder={foldersHandler.delete} handleCreateFolder={foldersHandler.create} update={foldersHandler.get} handleDelete={picturesHandler.del} handleSubmit={picturesHandler.post}/>)
      } } />
      <Route path="/admin/casas" render={ () => {
        housesHandler.get()
        foldersHandler.get()
        return (<Houses handleEdit={housesHandler.edit} update={housesHandler.get} handleDelete={housesHandler.del} handleCreate={housesHandler.create}/>)
      } } />
      <Route path="/admin/contato" render={ () => {
        return (<Contact />)
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
        <div style={{"marginTop": "2em" }}className="container">{ buildRoutes(this.props.store, this.props.token) }</div>
      </div>
    )
  }
}
