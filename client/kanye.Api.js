var request = require('superagent')

const getKanye = (callback) => {
  request
    .get('/kanye-rest/api/kanye')
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

module.exports = {
  getKanye
}
