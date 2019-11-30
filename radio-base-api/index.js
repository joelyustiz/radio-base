const express = require('express');

const app = express()

const { config } = require('./config/index');
const dataApi = require('./routes/routes');

dataApi(app);
app.use(express.static('build'))
app.listen((config.port), function () {
    console.log('Listening: ',  config.port);
})

