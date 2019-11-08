'use strict';

var express = require('express'); // app server
var bodyParser = require('body-parser'); // parser for post requests

var app = express();
const api = require("./api.js");

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json());

app.get("/user", (req, res) => api.getUser(req. res));
app.post("/login", (req, res) => api.login(req, res));
app.put("/user", (req, res) => api.setUser(req, res));

app.post("/checkin", (req, res) => api.checkin(req, res));

app.delete("/locais", (req, res) => api.deleteLocais(req, res));
app.get("/locais", (req, res) => api.getLocais(req, res));
app.get("/locais/available", (req, res) => api.getAvailableLocais(req, res));
app.get("/locais/new", (req, res) => api.getNewLocais(req, res));
app.post("/locais", (req, res) => api.updateLocais(req, res));
app.put("/locais", (req, res) => api.setLocais(req, res));

module.exports = app;
