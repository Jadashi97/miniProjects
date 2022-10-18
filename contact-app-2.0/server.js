// download dependecies
// create the db
// connect to mongodb
// use postman to test backend


const express = require('express');
const dotenv = require('dotenv');

const app = express()
const PORT = process.env.PORT || 6000

app.get('/api', (req, res) => {
  res.json({message: "Hello from the server!"})
})

app.listen(PORT,  console.log(`seerver listening in ${process.env.NODE_ENV} port ${PORT}`)
)