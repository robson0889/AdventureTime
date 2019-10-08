'use strict';

var express = require('express'); // app server
var bodyParser = require('body-parser'); // parser for post requests

var app = express();
const api = require("./api.js");

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json());

app.put("/user", (req, res) => api.setUser(req, res));
app.post("/login", (req, res) => api.login(req, res));

app.delete("/locais", (req, res) => api.deleteLocais(req, res));
app.get("/locais", (req, res) => api.getLocais(req, res));
app.put("/locais", (req, res) => api.setLocais(req, res));
app.post("/locais", (req, res) => api.updateLocais(req, res));

module.exports = app;
