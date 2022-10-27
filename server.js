const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! juratbek na gap jaloliddinoff')
})

app.get('/ok', (req, res) => {
  res.send('it works! okeeeeeyyy! juraaaaaaatttbek')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
