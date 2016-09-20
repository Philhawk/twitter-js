var express = require('express');
var morgan = require('morgan');
var app = express();
var nunjucks = require('nunjucks');
var twitter = require('./routes/index.js')

app.set('view engine', 'html');
app.use(morgan('dev'))
app.engine('html', nunjucks.render);

app.use('/', twitter);
app.use('/static', express.static('public'));

nunjucks.configure('views', { noCache: true });

app.listen(3000);
