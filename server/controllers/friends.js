const mongoose = require('mongoose');
let Friend = mongoose.model('Friend');
module.exports = {
    index: function(req, res){
        Friend.find({}, function (err, friends) {
           if (err) {
               console.log(err);
           }
           else {
               res.json(friends);
           }
        });
    },
    create: function(req, res){
        console.log('stuff', req.body);
        Friend.create(req.body, function (err, friend) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(friend)
            }
        })
    },
    update: function(req, res){
        console.log(req.params.id);
       Friend.findOne({_id: req.params.id}, function (err, friend) {
           if (err) {
               console.log('it broke');
           }
           else {
               friend.first_name = req.body.first_name;
               friend.last_name = req.body.last_name;
                friend.birthday = req.body.birthday;
                friend.save( function (err, updatedFriend) {
                    if (err) {
                        console.log('it broke on save')
                    }
                    else {
                        res.json(updatedFriend);
                    }
                });
           }
       });
    },
    delete: function(req, res){
        Friend.remove({_id:req.params.id}, function (err) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({message:'Deleted Friend'});
            }
        });
    },
    show: function(req, res){
        Friend.findOne({_id: req.params.id}, function (err, friend) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(friend);
            }
        })
    }
};