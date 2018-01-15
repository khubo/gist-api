const https = require('https')
const axios = require('axios')

const _baseUrl = 'https://api.github.com/'

// create gist 
function create(description, filesArray, public=true) {
  return new Promise((resolve, reject) => {
    let url = _baseUrl + 'gists'
    if(Array.isArray(description)) {
      [description, files] = ['', description]
    }
    if(typeof(public) !== 'boolean') {
      reject(new Error("invalid type for public"))
    }
    if(!Array.isArray(filesArray)) {
      reject(new Error('files should be an array'))
    }

    let files = {}
    filesArray.forEach(file => {
      let filename = file.name || ""
      if(!file.content)reject(new Error("File without content is not permitted"))
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

    axios.post(url, body)
      .then(result => resolve(result.data))
      .catch(e => reject(e))
    })
 }

module.exports = {
  create
}