require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const port = 3000;
const ctr = require ('./products_controller')

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive(process.env.CONNECTION_STRING).then((db) => {app.set('db', db);})

app.get('/api/products', ctr.getAll)
app.get('/api/product/:id', ctr.getOne)
app.put('/api/product/:id', ctr.update)
app.post('/api/product', ctr.create)
app.delete('/api/product/:id',ctr.delete)





app.listen(port, ()=> {
    console.log(`I'm listening...on ${port}!`)
})