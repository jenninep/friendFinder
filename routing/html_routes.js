var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));



// Router gives server a map of how to respond when users visit or request data from different URL'S
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, 'survey.htm'));
})

//Listener starts server
app.listen(PORT, function(){
	console.log("App is listening on port:" + PORT);
});