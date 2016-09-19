var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'))

app.get('/', function(req, res){
  res.send('Hello World');
  console.log('Listening and no problems');
});

app.get('/news', function(req, res){
  res.send('News Page');
  console.log('Visiting the news page');
})

app.listen(3000);
