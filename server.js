const express = require("express");
const post = require("./posts/postDb.js");
const user = require("./users/userDb.js");
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
  if (id === valid) {
    return function (req, res, next) {
      req.user = id;

      next();
    };
  } else {
    return function (req, res, next) {
      res
        .status(400)
        .json({
          message: "invalid user id"
        });
    }
  }
}

function validateUser(user) {
  if (!body) {
    return function (req, res, next) {
      res
        .status(400)
        .json({
          message: "missing user data"
        });
    };
  }
  if (!body.name) {
    return function (req, res, next) {
      res
        .status(400)
        .json({
          message: "missing required text field"
        });
    };
  }
}

function validatePost(post) {
  if (!post.body) {
    return function (req, res, next) {
      res
        .status(400)
        .json({
          message: "missing post data"
        });
    };
  }
  if (!post.body.text) {
    return function (req, res, next) {
      res
        .status(400)
        .json({
          message: "missing required text field"
        });
    };
  }
}

module.exports = server;