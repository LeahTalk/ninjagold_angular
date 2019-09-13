const User = require("../models/models.js");

module.exports = {
    index: function(req, res) {
        User.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    add_user: function(req, res) {
        const user = new User();
        user.name = req.params.name;
        user.save()
            .then(newUserData => {
                res.json(newUserData);
            })
            .catch(err => {
                res.json(err);
            })
    },

    get_user: function(req, res) {
        User.findOne({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    save_game : function(req, res) {
        console.log(req.params.moves);
        console.log(req.params.gold);
        User.findOneAndUpdate({"_id": req.params.userid}, {$set: {
            gold: parseInt(req.params.gold, 10),
            remaining_moves: parseInt(req.params.moves, 10)}}, 
            function (err, data) {
                if(err) {
                    res.json(err);
                }
                else {
                    res.json(data);
                }
            });
    }
}