'use strict';

var express = require('express'); // app server
var bodyParser = require('body-parser'); // parser for post requests

var app = express();
const api = require("./api.js");

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json());

app.post("/login", (req, res) => api.login(req, res));

module.exports = app;

EN: This is the initial commit, it only brings to the table an example of how to setup an express server, it also has a POST route ``/login``, the login function doesn't have anything fancy just yet, it just returns true of false depending if the user's password matches or not.PT: Primeiro commit. Nada de muito especial, apenas o exemplo de server utilizando express, alem de uma rota para login: ``/login``, ela nao faz nada de muito avancado, apenas retorna true ou false depedendo de se a senha do usuario estiver correta.

[00:31]
Heduardo:
	PT: Primeiro commit. Nada de muito especial, apenas o exemplo de server utilizando express, alem de uma rota para login: ``/login``, ela não faz nada de muito avançado, apenas retorna true ou false dependendo de se a senha do usuário estiver correta.
