var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var PORT = 3000;

var app = express();
var htmlRoutes = require('./routing/html_routes.js')(app);
var apiRoutes = require('./routing/api_routes.js')(app);
// htmlRoutes.getRoot(app);
// htmlRoutes.getSurvey(app);
// apiRoutes.getFriends(app);
// apiRoutes.postFriends(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log("App is listening on port:" + PORT);
});
