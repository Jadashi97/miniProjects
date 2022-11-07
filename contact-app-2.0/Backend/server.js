const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors'); //just for the colors in the terminal
const connectDB = require('./config/db');
const morgan = require('morgan');

// const cors = require('cors');

dotenv.config({ path: './config/config.env'});

connectDB();

const contacts = require('./routes/contacts');
const app = express();

// app.use(cors());

app.use(express.json()); //is an express middleware. parses incoming JSON requests, puts parsed in req.body

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/contacts', contacts); //this sets up my api route

const PORT = process.env.PORT || 4000

app.listen(PORT,  console.log(`server listening in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold)
)