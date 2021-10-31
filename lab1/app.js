const express = require('express')
const path = require('path')
const fs = require('fs').promises
var crypto = require("crypto")

const app = express()

app.set('view engine', 'ejs')

const port = process.env.PORT ?? 3000

app.get('/', async (req, res) => {
  var fileData = crypto.randomBytes(512).toString('hex');
  var textName = crypto.randomBytes(3).toString('hex');
  fs.writeFile(`./serverdata/${textName}`, fileData, function (err, data) {
      if (err) {
          return console.log(err)
      }
      console.log(data)
  })
  res.render('index')
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
