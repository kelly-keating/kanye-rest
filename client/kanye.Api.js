var request = require('superagent')

const getKanye = (callback) => {
  request
    .get('/api/kanye')
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
