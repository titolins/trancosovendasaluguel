export function getContentReq(url, token, callback){
  let content = {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    method: 'get'
  }
  fetch(url, content).then(res=>res.json()).then(res=>callback(res))
}

export function postContentReq(url, token, data, callback) {
  let content = {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(url, content).then(res=>res.json()).then(callback)
}

export function postFilesReq(url, token, data, callback) {
  let content = {
    method: 'put',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: data
  }
  fetch(url, content).then(callback)
}

export function deleteContentReq(url, token, data, callback) {
  let content = {
    method: 'delete',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(url, content).then(callback)
}
