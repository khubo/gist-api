const test = require('tape')
const gist = require('../lib/index')

// test('testing create method', (t) => {
//   t.plan(3)
  
//   let description = 'sample'
//   let files = [
//     {
//       name: 'first.txt',
//       content: 'hello world'
//     }
//   ]
//   let fileNames = files.map(file => file.name)

//   gist.create(description, files)
//     .then(result => {
//       let resultFiles = Object.keys(result.files)
//       t.equal(result.description, description)
//       t.ok(result.url)
//       t.equal(resultFiles.length, fileNames.length)
//     })

// })

test('invalid paramters to test should fail', (t) => {
  t.plan(2)

  let description = 'test'
  let files = [{
    name: 'testname',
  }]

  gist.create(description, files)
    .then()
    .catch(e => {
      t.ok(e, "should throw an error")
    })
  
  gist.create(description, {})
    .then() 
    .catch(e => {
      t.ok(e, "files should be an aary")
    })
})