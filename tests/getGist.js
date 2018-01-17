const test = require('tape')
const gist = require('../lib/index')

test('testing get gist method', (t) => {
  t.plan(4)
  
  let gistId = '1cd82e5f6f00937e50779cd496f4a327'
  let invalidId = '1cd131230asdff'
  gist.getGist(gistId)
    .then(data => {
      let files = Object.keys(data.files)
      t.equal(files.length, 1)
      t.equal(files[0], 'hello.txt')
      t.equal(data.owner.login, "khubo")
    })

  gist.getGist(invalidId)
    .then()
    .catch(e => {
      t.ok(e, "invalid gist id should throw an error")
    })
  
})