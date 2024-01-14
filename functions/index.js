const functions = require("firebase-functions");
const express = require("express");
const basicAuth = require("basic-auth-connect");

const app = express();

const basicAuthConfig = functions.config().basic_auth;
const envUser = basicAuthConfig.user;
const envPass = basicAuthConfig.password;

app.all("/*", basicAuth((user, password) => {
  return user === envUser && password === envPass;
}));

app.use(express.static(__dirname + "/static/"));

exports.app = functions.https.onRequest(app);
