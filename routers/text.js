const express = require('express');
const router = express.Router();
const Users = require('../models/text');


router.get('/texts', function (req, res) {
    const users = new Users();
    
    res.send('reading data');
  });

  router.post('/texts', function (req, res) {
    const users = new Users(req.body);
    
    users.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
    
    
  });

  router.put('/texts/:id', function (req, res) {
    const users = new Users();
    
    res.send('updating data');
  });

  router.delete('/texts/:id', function (req, res) {
    const users = new Users();
    
    res.send('deleting data');
  });

  module.exports = router;


