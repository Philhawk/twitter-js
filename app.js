var express = require('express');
var morgan = require('morgan');
var app = express();
var nunjucks = require('nunjucks');

var locals = {
  title: 'LOTR Node App',
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Legolas'}
  ]
}

app.set('view engine', 'html');
app.use(morgan('dev'))

nunjucks.configure('views', { noCache: true });
app.engine('html', nunjucks.render);



app.get('/', function(req, res){
  res.render('index.html', locals)
});


app.get('/news', function(req, res){
  res.send('News Page');
  console.log('Visiting the news page');
})

app.listen(3000);
