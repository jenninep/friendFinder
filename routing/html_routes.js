var path = require('path');
var express = require('express');
// app.use(express.static('app'));

module.exports = function (app){

	app.get('/', function(req, res) {
		console.log("root route")
		res.sendFile(path.join(__dirname, '../public/home.html'))
		
	});

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

}