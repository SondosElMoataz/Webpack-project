const dotenv = require('dotenv');
dotenv.config();

const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');


var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(cors())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const KEY = process.env.KEY
const API = "https://api.meaningcloud.com/sentiment-2.1?"

app.post('/analyze', async function (req, res) {
    const url = req.body.url
    const response = await fetch(`${API}key=${KEY}&url=${url}&lang=en`);
    const data = await response.json()
    // console.log(data)
    res.send(data)
})