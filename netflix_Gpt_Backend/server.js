const express = require('express')
const cors = require('cors')
const app = express()
// var bodyParser = require('body-parser') 
const port = 3000

app.use(cors())
// app.use(bodyParser.json())

app.post('/Signin', (req, res) => {
    console.log(req);
  res.send('Hello World!')
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})