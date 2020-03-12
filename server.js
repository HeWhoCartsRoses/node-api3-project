const express = require("express");

const server = express();
server.use(express.json());
server.get("/", logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

function logger(req, res, next) {
  res.send(`${Date.now()}, ${req.method}, ${req.originalUrl}`);
  next();
}

function validateUserId(id) {
  return function (req, res, next) {};
}

function validateUser(user) {
  return function (req, res, next) {};
}

function validatePost(post) {
  return function (req, res, next) {};
}

module.exports = server;