const express = require("express");
const post = require("./posts/postRouter.js");
const user = require("./users/userRouter.js");
const mid = require('./middle/middle.js')
const server = express();
server.use(express.json());
server.use('/api/posts', post);
server.use('/api/users', user);
server.get("/", mid.logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});
// server.get("/", logger, (req, res) => {
//   res.send(`<h2>Let's write some middleware!</h2>`);
// });
// server.get("/", logger, (req, res) => {
//   res.send(`<h2>Let's write some middleware!</h2>`);
// });
module.exports = server;