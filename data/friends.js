$(#submitButton).on('click', function(){
	var newFriend = {
		name: $('#name').val().trim(),
		profileLink: $('#profileImage').val().trim(),
		question1: $('#q1').val().trim(),
		question2: $('#q2').val().trim(),
		question3: $('#q3').val().trim(),
		question4: $('#q4').val().trim(),
		question5: $('#q5').val().trim(),
		question6: $('#q6').val().trim(),
		question7: $('#q7').val().trim(),
		question8: $('#q8').val().trim(),
		question9: $('#q9').val().trim(),
		question10: $('#q10').val().trim(),
	};
	console.log(newFriend);
});




function Friend(name, photo, scores) {
	this.name = name;
	this.photo_path = photo;
	this.scores = scores;
};

var friendsArray = [];



function addFriend(friend){
friendsArray.push(friend);
};

module.exports.friendsArray = friendsArray;
module.exports.Friend = Friend;
module.exports.addFriend = addFriend;