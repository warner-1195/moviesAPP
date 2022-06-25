const express = require('express');
const cors = require('cors');
const { dbConection } = require('./db/config');
require('dotenv').config();

//create server/express app
const app = express();

//DB conection
dbConection();

//directory public

app.use(express.static('public'));

// CORS 

app.use(cors() );

//reading and parse of the body

app.use( express.json() );


//routes

app.use( '/api/auth', require('./routes/auth') );


app.listen( process.env.PORT , () => {
    console.log(`Server online in the port ${process.env.PORT}`)
});