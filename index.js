'use strict';

var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    app = express(),
    handler = require('./handler/index.js'),
    routes = new handler();
require('colors');

routes.getRoutes(app);

app.use(cors());
app.use(bodyParser.json());

var PORT = 3000 || process.env.PORT;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(PORT, function () {
    console.log('[ SYSTEM ]: '.brightGreen + ('Server started on port ' + PORT).brightWhite);
});