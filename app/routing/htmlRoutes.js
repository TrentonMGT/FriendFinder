var path = require('path');

module.exports = function(app) {

    //When the user hit the url reserve show them reserve.html
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

   //When the user hit any url on my page other then reserve or table 
   //sent them to the home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}