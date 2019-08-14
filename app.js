const express = require('express');
const mysql = require('mysql');
const { Pool } = require('pg');

// init app/////////////////////////////////////////////////
const app = express();

const port = process.env.PORT || 3030;
app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
});
////////////////////////////////////////////////////////////

// create connection to local MySQL DB//////////////////////
const mysqlConnect = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'pwctest',
  password : '@Dvantechp275',
  database : 'pwctest'
});
////////////////////////////////////////////////////////////

// create connection to local PostgreSQL DB/////////////////
const pool = new Pool({
  user: 'f990c75b-5f1c-46f0-aef9-af74fb6be27b',
  host: '40.83.78.58',
  database: '22b36567-9ad3-4d0e-8dc0-14bc00f1cae1',
  password: '2imnjlt7vf75dr6qnq90vpims0',
  port: 5432,
})
////////////////////////////////////////////////////////////

// Connect to databases/////////////////////////////////////
mysqlConnect.connect(function(err) {
    if (!err) { console.log('Connected to MySQL...');}
});
pool.connect( function(err) {
    if (!err) { console.log('Connected to PostgreSQL...'); }
})
////////////////////////////////////////////////////////////

// SQL commands for creating table//////////////////////////
const createSchema = `
CREATE SCHEMA IF NOT EXISTS "test";
CREATE TABLE IF NOT EXISTS "test"."remote"(
  id serial,
  hbtData JSON,
  PRIMARY KEY (id)
);
`;
// Execute the SQL commands for startup/////////////////////
pool.query(createSchema, function(err){
    if(err){console.log(err);}
    else {console.log('Schema & table created!')}
})
////////////////////////////////////////////////////////////

const mySQLQueryString = 'select * from `heartbeat`';

mysqlConnect.query(mySQLQueryString, function(err,results){
    if(err){throw err;}
    console.log('Query Done!');
    const propCount = Object.keys(results).length;
    const insertData = 'INSERT INTO test.remote(hbtData) VALUES($1)';
    for(var i=0;i<propCount;i++){
        pool.query(insertData, [results[i]], function(err) {
            if (err) { console.log(err);}
        });
    };
    console.log('Data Transfered!');
})

