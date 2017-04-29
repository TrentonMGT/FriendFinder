var userData = require('../data/friends.js');

//app represents express which was named in the server.js file
module.exports = function(app) {

    //get and diplay the table data in json format 
    app.get('/api/friends', function(req, res) {
        res.json(userData);
    });

        //get and diplay the table data in json format 
    app.post('/api/friends', function(req, res) {
            userData.push(req.body);
        
    });

  // app.post('/api/friend', function(req, res) {

  //     var greatMatch = {
  //         name: "",
  //         image: "",
  //         matchDifference: 1000
  //     };
  //     var usrData = req.body;
  //     var usrName = usrData.name;
  //     var usrImage = usrData.image;
  //     var usrScores = usrData.scores;

  //     var totalDifference = 0;

  //     //loop through the userData data array of objects to get each userData scores
  //     for (var i = 0; i < [userData].length - 1; i++) {
  //         console.log(userData[i].name);
  //         totalDifference = 0;

  //         //loop through that userData score and the users score and calculate the 
  //         // absolute difference between the two and push that to the total difference variable set above
  //         for (var j = 0; j < 10; j++) {
  //             // We calculate the difference between the scores and sum them into the totalDifference
  //             totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(userData[i].scores[j]));
  //             // If the sum of differences is less then the differences of the current "best match"
  //             if (totalDifference <= greatMatch.friendDifference) {

  //                 // Reset the bestMatch to be the new friend. 
  //                 greatMatch.name = userData[i].name;
  //                 greatMatch.photo = userData[i].photo;
  //                 greatMatch.matchDifference = totalDifference;
  //             }
  //         }
  //     }

  //     userData.push(req.body);

  //     res.json(greatMatch);
  // });


}
