var request = require('superagent')

// const grabWord = (word, callback) => {
//   request
//     .get('/api/kanye')
//     .query({word})
//     .end((err, res) => {
//       if (!err) callback(null, res.body)
//       else callback()
//     })
// }
// grabWord(console.log)




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
