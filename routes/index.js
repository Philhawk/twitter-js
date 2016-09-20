var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  name = req.params.name;
  nameList = tweetBank.list();

  personBehindTweet = nameList.filter(function(tweetObject){
     return tweetObject['name'] === name;
  })

  console.log('THIS IS THE PERSON BEHIND THE MAGIC', personBehindTweet)

  res.render( 'usertweets', { personBehindTweet: personBehindTweet } );
});

router.get('/tweets/:id', function(req, res){
  var id = Number(req.params.id);
  var tweetList = tweetBank.list();
  var theTweet = Array(tweetList[id]);

  res.render( 'tweet', { theTweet : theTweet } );
});

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
