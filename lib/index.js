const https = require('https')
const axios = require('axios')

const _baseUrl = 'https://api.github.com/'

// create gist 
function create(description, filesArray, public=true) {

  let url = _baseUrl + 'gists'
  if(Array.isArray(description)) {
    [description, files] = ['', description]
  }
  if(typeof(public) !== 'boolean') {
    throw(new Error("invalid type for public"))
  }

  let files = {}
  filesArray.forEach(file => {
    let filename = file.name || ""
    if(!file.content) throw(new Error("File without content is not permitted"))
    let content = file.content
    files[filename] = {
      content: content
    } 
  })

  let body = {
    description,
    public,
    files
  }

  return axios.post(url, body).then(result => result.data)
}

module.exports = {
  create
}