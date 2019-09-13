const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ninja_gold', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 1},
    gold: Number,
    remaining_moves: Number
    }, {timestamps: true})

const User = mongoose.model("User", UserSchema);

module.exports = User;
