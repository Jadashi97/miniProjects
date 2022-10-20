const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors'); //just for the colors in the terminal
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});

connectDB();

const contacts = require('./routes/contacts');

const app = express();

app.use(express.json()); //is an express middleware in express. parses incoming JSON requests, puts parsed in req.body


// app.get('/', (req, res) => {
//   res.send({message: "Hello from the server!"})
// })
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use('/api/v1/contacts', contacts); //this sets up our route

const PORT = process.env.PORT || 4000

app.listen(PORT,  console.log(`server listening in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold)
)