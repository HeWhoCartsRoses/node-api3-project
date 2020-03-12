const express = require('express');
const user = require('./userDb')
const posts = require('../posts/postDb')
const mid = require('../middle/middle')
const router = express.Router();
router.post('/', mid.validateUser, (req, res) => {
  user
    .insert(req.body)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Could not create user'
      });
    });
});
router.post('/:id/posts', mid.validateUserId, (req, res) => {
  const newPost = {
    user_id: req.params.id,
    text: req.body.text
  };
  posts
    .insert(newPost)
    .then(change => {
      res.status(201).json({
        change
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Could not update user post'
      });
    });
});
router.get('/', (req, res) => {
  user
    .get()
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Could not get user'
      });
    });
});
router.get('/:id', mid.validateUserId, (req, res) => {
  user
    .getById(req.params.id)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Could not find user'
      });
    });
});
router.get('/:id/posts', mid.validateUserId, (req, res) => {
  user
    .getUserPosts(req.params)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Cannot get posts'
      });
    });
});
router.delete('/:id', (req, res) => {
  user
    .remove(req.params.id)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Cannot delete user'
      });
    });
});
router.put('/:id', (req, res) => {
  user
    .update(req.params, req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Cannot edit user'
      });
    });
});
module.exports = router;