// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routes = require('./routes/routes.tsx')(app, fs);

const server = app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
});
