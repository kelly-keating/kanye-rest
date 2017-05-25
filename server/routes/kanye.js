let express = require('express')
let request = require('superagent')


var router = express.Router()

 router.get('/', (req, res) => {
   request
   .get('http://www.kanyerest.xyz/api/counter')
   .end ((err, result) => {
     res.send(result.body)

   })

 })

module.exports = router
