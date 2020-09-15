require('dotenv').config();
var fs = require('fs');
var https = require('https');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json()) 
app.use(cors());


const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => res.status(200).json({message: 'woke up!'}))

app.get('/:relatedto/:rhymeswith/',(req, res) => {
    res.send('Ping!')
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));