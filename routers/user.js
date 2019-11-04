const express = require('express');
const router = express.Router();
const Users = require('../models/user');


router.get('/users', function (req, res) {
    const users = new Users();
    
    res.send('reading data');
  });

  router.post('/users', function (req, res) {
    const users = new Users(req.body);
    users.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
    
    
  });

  router.put('/users/:id', function (req, res) {
    const users = new Users();
    
    res.send('updating data');
  });

  router.delete('/users/:id', function (req, res) {
    const users = new Users();
    
    res.send('deleting data');
  });

  module.exports = router;


