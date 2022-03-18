// const express = require('express');





/// ExpressJS Docs 'Hello World!' Example:
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/// I've added /cats and /dogs routes.
app.get('/cats', (req, res) => {
    res.send('Meoww!!!')
})

app.get('/dogs', (req, res) => {
    res.send('Woof Woof!!')
})


app.listen(port, () => {
  console.log(`Express Basic App listening on port ${port}`)
})