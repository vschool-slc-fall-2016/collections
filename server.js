var express = require('express');
var app = express();
var expressJwt = require('express-jwt');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');

var path = require('path');
var port = process.env.PORT || 8000;
var config = require('./config');

mongoose.connect(config.database);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', expressJwt({secret: config.secret}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/item', require('./src/routes/item-routes'));
app.use('/api/owner', require('./src/routes/owner-routes'));
app.use('/shared', require('./src/routes/shared-routes'));

app.use('/auth', require('./src/routes/auth-routes'));



app.listen(port, function() {
    console.log("port " + port);
});