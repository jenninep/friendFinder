var friends = require('../data/friends').friendsArray;
var path = require('path');
module.exports = function(app){

// };

app.get('/api/friends', function(req, res){
	console.log("hi")
	res.json(friends);
});


app.post('/api/friends', function(req, res){
	console.log('hello');
	friends.push(req.body);
	var newScore = req.body.scores;

	var scoreArray = [];

for(i=0;i<friends.length-1;i++){
             var scoreDifference=0;
            var compatabilityScore=0;



  for(j=0;j<newScore.length;j++){
      scoreDifference=Math.abs(newScore[j]-friends[i].scores[j]);
      console.log("scoreDifference", scoreDifference);
      //console.log("newScoreJJJJ", newScore[j]);
      //console.log("newscoreIIII", allFriends[i].scores[j]);
      compatabilityScore += scoreDifference;
      //console.log(compatabilityScore);
    }

scoreArray.push(compatabilityScore);
             console.log(scoreArray);

};

})
}
// module.exports.getFriends = getFriends;
// module.exports.postFriends = postFriends;