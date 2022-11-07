const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // uses mongoose to connect to the Mongo database

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology: true 
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
       console.log(`Error: ${error.message}`.red);
       process.exit(1);
    }
}

// using the module system in nodejs to export this file
module.exports = connectDB