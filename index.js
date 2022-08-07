const express = require('express');
const port = process.env.PORT||8001;
const app = express();
const db = require('./config/mongoose');

app.use(express.urlencoded());

// parse incoming requests with JSON
app.use(express.json())

app.use('/', require('./routes/index'))


app.listen(port, function(err){
    if(err){
        console.log(`Error! connecting Port : ${err}`);
    }
    console.log(`Connected on Port : ${port}`);
})