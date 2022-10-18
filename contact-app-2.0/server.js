// download dependecies
// create the db
// connect to mongodb
// use postman to test backend

const express = require('express');
const dotenv = require('dotenv');

const contacts = require('./routes/contacts');

const app = express();

app.use(express.json()); //is an express middleware in express. parses incoming JSON requests, puts parsed in req.body


// app.get('/', (req, res) => {
//   res.send({message: "Hello from the server!"})
// })

app.use('/api/v1/contacts', contacts); //this sets up our route

const PORT = process.env.PORT || 4000

app.listen(PORT,  console.log(`server listening in ${process.env.NODE_ENV} port ${PORT}`)
)