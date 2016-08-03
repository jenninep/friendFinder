module.exports = function(app){

// };

app.get('/api/friends', function(req, res){
	console.log("hi")
	res.send("hi friends")
});


app.post('/api/friends', function(req, res){
	console.log("hello")
});

}

// module.exports.getFriends = getFriends;
// module.exports.postFriends = postFriends;