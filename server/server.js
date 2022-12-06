const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

// !! Environment variables: HIDING API KEY
require('dotenv').config();
const PORT = process.env.PORT || 5000;
// TODO: config vars on heroku to deploy app


/** ---------- EXPRESS ROUTES ---------- **/

// GIFFY request response
app.get('/api/giphy', (req, res) => {
    // TODO: make axios request
    // TODO: include API key: api.giphy.com/v1/gifs/trending?api_key=cSbGEPhTitY9wzRAYeVlKMimJD6rTsvI
    axios.get(
        `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&rating=g&limit=1`
    )
    .then((response) => {
        // TODO: console.log response
        console.log('Got giffy: ', response);
        res.send(response.data);
    })
    .catch((error) => {
        // TODO: console.log error
        console.log('Error on Giffy Trend GET: ',error);
        res.sendStatus(500);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});