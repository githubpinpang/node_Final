const express = require('express');
const router = express.Router();
const Users = require('../models/call');


router.get('/calls', function (req, res) {
    const users = new Users();
    
    res.send('reading data');
  });

  router.post('/calls', function (req, res) {
    const users = new Users(req.body);
    
    users.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
    
    
  });

  router.put('/calls/:id', function (req, res) {
    const users = new Users();
    
    res.send('updating data');
  });

  router.delete('/calls/:id', function (req, res) {
    const users = new Users();
    
    res.send('deleting data');
  });

  module.exports = router;


