const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
  res.json({message: "Hello from the server!"})
})

app.listen(port, () => {
  console.log(`seerver listening on port ${port}`)
})