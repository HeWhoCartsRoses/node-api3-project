const express = require('express');

const server = express();

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now())
};

function validateUserId(id) {
  return function (req, res, next) {

  }
};

function validateUser(user) {
  return function (req, res, next) {

  }
};

function validatePost(post) {
  return function (req, res, next) {

  }
};

module.exports = server;