var express = require('express');
var router = express.Router();

var locals = {
  title: 'LOTR Node App',
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Legolas'}
  ]
}

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.render('index.html', locals)
});
// define the about route
router.get('/news', function(req, res) {
  res.send('News Page');
  console.log('Visiting the news page');});

module.exports = router;
