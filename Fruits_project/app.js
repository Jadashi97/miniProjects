
const { MongoClient } = require("mongodb"); //this uses object destructuring

const assert = require('assert');

// connnection url
const url =     'mongodb://localhost:27017';

//Database Name
const dbName = "fruitsDb";

//Create new client
const client = new MongoClient(url);

//use connect method to connect to the client

client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected successfully to the server");

    const db = client.db(dbName);

    insertDocuments(db, function(){
        client.close();
    })

});

const insertDocuments = function(db, callback){
    //get the documents selection
    const collection = db.collection("fruits");

    //insert some documents
    collection.insertMany([
        {   name:"Banana",
            rate: 7,
            review: "lovely"
        },

        // {   name:"Grapes",
        //     rate: 6,
        //     review: "too sweet"
        // },

        {   name:"Orange",
            rate: 10,
            review: "Now that is the good stuff!!"
        },
        //these are dedicated to validation 
    ], function(err,result){
        assert.equal(err, null); //this validates that there are no errors when document is entered
        // the following validate that we have 3 results that are inserted in the document
        assert.equal(3, result.result);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};