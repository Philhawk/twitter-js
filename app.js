var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
  console.log('Listening and no problems');
});

app.listen(3000);
