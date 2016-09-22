var express = require('express');
var morgan = require('morgan');
var app = express();
var nunjucks = require('nunjucks');
var routes = require('./routes/routes.js')
var socketio = require('socket.io');
var server = app.listen(3000);
var io = socketio.listen(server);
var bodyParser = require('body-parser')

app.set('view engine', 'html');
app.use(morgan('dev')) // logging middleware
app.use(bodyParser.urlencoded({extended: true}));
app.engine('html', nunjucks.render);
app.use('/', routes(io));
app.use('/static', express.static('public'));

nunjucks.configure('views', { noCache: true });
