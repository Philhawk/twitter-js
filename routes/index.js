var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// console.log(req)
router.get('/stylesheets/style.css', function(req, res) {
    var options = {
    root: './public/'
  };

  res.sendFile('stylesheets/style.css', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', options, 'stylesheets/style.css');
    }
  });
});

module.exports = router;

