const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mysql = require('mysql');
const path = require('path');
const  ejs = require('ejs');


const connectionString = "mongodb+srv://admin:smayl00@cluster0.trdtm.mongodb.net/<dbname>?retryWrites=true&w=majority";

const MongoClient = require('mongodb').MongoClient

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    router.get('/', function(req, res, next) {
      res.render('index');
    });
  })
  .catch(error => console.error(error))



