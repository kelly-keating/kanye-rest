var ava = require('ava')
var request = require('superagent')

var KA = require('../../client/components/kanye.Api.js')
var app = require('../../client/components/App.jsx')

test('grabs word ID from object', t => {
  var expected = '#badbitchalert'
  var actual = KA.grabWord('#badbitchalert')
  t.is(expected, actual)
  t.end()
})
