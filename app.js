'use strict';

const express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser');

const config = require('./config');

const app = express();

require('./db');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

http.createServer(app).listen(config.port, function () {
    console.log('Express server listening on port ' + config.port);
});

app.use((req, res, next) => {
    const err = new Error(`Not Found ${req.path}`);
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    if (error) {
        return res.status(400).json({error: error.message || ""});
    }
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ err: err.message || "" });
});
