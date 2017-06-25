const req = (url, content, callback) => fetch(url, content).then(res=>res.json()).then(res=>callback(res))

export function getContentReq(url, token, callback){
  let content = {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    method: 'get'
  }
  req(url, content, callback)
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
  req(url,content, callback)
}

