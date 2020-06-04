const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://admin:betp2@cluster0-3bm3a.azure.mongodb.net/test?retryWrites=true&w=majority";

const uri = process.env.MONGODB;

const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser: true});

async function getConnection(){
 //   console.log("URi recuperada de .env:" + uri);
    return await client.connect().catch(err => console.error(err));
}

module.exports = {getConnection};