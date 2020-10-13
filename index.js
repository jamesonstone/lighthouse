const express = require('express')
const bodyParser = require('body-parser');

const server = express()

server.use(bodyParser.json());

server.post('/', function (req, res) {
    console.log(req.headers);
    console.log(req.body)
    res.send('Received')
})

server.listen(3000, function () {
    console.log('Listening on port 3000.')
})
