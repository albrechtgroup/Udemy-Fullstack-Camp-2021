/// ExpressJS Docs 'Hello World!' Example:
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Express Basic App listening on port ${port}`)
})