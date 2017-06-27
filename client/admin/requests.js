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
  fetch(url, content).then(res=>res.json()).then(res=>callback(res))
}

export function postFilesReq(url, token, data, callback) {
  console.log(data)
  let content = {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${token}`,
      //'Content-Type': 'multipart/form-data; charset=utf-8; boundary=--'
    },
    body: data
  }
  fetch(url, content).then(res=>callback(res))
}
