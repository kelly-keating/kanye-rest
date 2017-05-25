var request = require('superagent')

export default function getKanye (callback) {
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
