const { MongoClient } = require("mongodb"); //this uses object destructuring

// Replace the url string with your MongoDB deployment's connection string.

const url =     'mongodb://localhost:27017'; //this is the connection url

const client = new MongoClient(url); //create new client


//using the async & await function
async function run() { //makes function return a promise
  try {
    await client.connect();//makes a function wait for a promise

    const database = client.db("fruits"); //set database name

    const foods = database.collection("foods");

    // create an array of documents to insert
    const docs = [

      { name: "cake", 
        healthy: false
      },

      { name: "lettuce", 
        healthy: true 
      },

      { name: "donut", 
        healthy: false 
      }
    ];


    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    const result = foods.find(docs, options);

    console.log(`${result.inserted} documents were inserted`);
  } finally {
    await client.close();
  }

}
run().catch(console.dir); //find out why this is here
