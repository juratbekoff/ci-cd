const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! jaloliddinoff')
})

app.get('/ok', (req, res) => {
  res.send({
    message: 'Ok bolajonim amallading! sujji gandon om kalla ybanov oxir'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

