// import express from 'express';
const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');

const options = {
    key: fs.readFileSync('keys/client-key.pem'),
    cert: fs.readFileSync('keys/client-cert.pem'),
};

const app = express();

const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routes = require('./routes/routes.tsx')(app, fs);

https.createServer(options, app).listen(port);
// const server = app.listen(port, () => {
//     console.log(`Express is listening at http://localhost:${port}`);
// });
