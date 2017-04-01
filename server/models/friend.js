const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let FriendSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    birthday: Date,
    created_at:{
        type: Date, default: Date.now,
    },
});
let Friend = mongoose.model('Friend', FriendSchema);