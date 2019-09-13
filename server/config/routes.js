const controller = require('../controllers/controller.js');

module.exports = function(app) {
    app.get('/users', (req, res) => {
        controller.index(req, res);
    });

    app.get('/new/:name', (req, res) => {
        controller.add_user(req, res);
    });

    app.get('/save/:gold/:moves/:userid', (req, res) => {
        console.log("I am also here!!")
        controller.save_game(req, res);
    });   

    app.get('/get/user/:id', (req, res) => {
        controller.get_user(req, res);
    });
}