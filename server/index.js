const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

massive(process.env.CONNECTION).then(database=>{
    app.set('db', database);
}).catch(error=>{
    console.log('error w connection to database', error);
})

const app = express();
app.use(bodyParser.json());

app.listen(4000, ()=>{
    console.log('Listening on port 4000✨');
})

app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.addHouse);