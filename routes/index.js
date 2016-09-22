var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser')

module.exports = function (io) {
  router.get('/', function (req, res) {
    var tweets = tweetBank.list();
    res.render( 'index.html', { tweets: tweets, showForm: true } );
  });

  router.get('/users/:name', function(req, res) {
    name = req.params.name;
    nameList = tweetBank.list();

    personBehindTweet = nameList.filter(function(tweetObject){
       return tweetObject['name'] === name;
    })

    res.render( 'usertweets.html', { personBehindTweet: personBehindTweet } );
  });

  router.get('/tweets/:id', function(req, res){
    var id = Number(req.params.id);
    var tweetList = tweetBank.list();
    var theTweet = Array(tweetList[id]);

    res.render( 'tweet.html', { theTweet : theTweet } );
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;

    var randomID = Math.floor(Math.random() * 10000);
    tweetBank.add(name, randomID, text);
    res.redirect('/');
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

  return router;
};
