const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(8080, () => {
  console.log('listening on 8080')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})
app.get('/contact.html', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
})

// stina / newworld1
/*
To connect using the mongo shell:
mongo ds163738.mlab.com:63738/stina -u <dbuser> -p <dbpassword>
To connect using a driver via the standard MongoDB URI (what's this?):
mongodb://<stina>:<newworld1>@ds163738.mlab.com:63738/stina
mongod version: 3.2.11 (MMAPv1)
*/
//const MongoClient = require('mongodb').MongoClient
var MongoClient = require('mongodb').MongoClient;
//var Db = require('mongodb').Db;
//var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://<tomahawk>:<stina>@ds163738.mlab.com:63738/stina';




