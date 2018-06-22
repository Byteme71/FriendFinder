var friendsList = require("../data/friends.js");


module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });


    app.post("/api/friends", function (req, res) {
        friendsList.push(req.body);
        res.json(true);

        var newScore = frindsList.score;

        var newArray = [];

        for (var i =0; i < friendsList.length -1; i++){
            var difference = 0;
            for (var j = 0; j < newScore.length; j++){
                difference += Math.abs(newScore[j] - friendsList[i].score[j]);
            }
            newArray.push(difference);
        }

        var lowestScore = newArray[0];

        for(x = 0; x < newArray.length; x++){
            if (newArray[x] < lowestScore){
                lowestScore = newArray[x]
            }
        }

        var newFriendMatch = newArray.indexOf(lowestScore);
        var newFriendMatchName = friendsList[newFriendMatch].name;
        var newFriendPhoto = friendsList[newFriendMatch].photo;



        res.send("<h1>" + newFriendMatchName + "</h1>")
        res.send("<img>" + newFriendPhoto + "</img>")

    });

};