const express = requiere("express");
const bodyParser = requiere("body-parser");

const app = express(;)
const {API_VERSION} = requiere ('./config.js')


app.use(bodyParser.urlencoded ({ extended: false})) ;
app.user(bodyParser.json());


module.exports = app;

