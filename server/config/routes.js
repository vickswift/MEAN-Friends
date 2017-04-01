let path = require('path');
let friends = require('./../controllers/friends.js');

module.exports = function(app){
    app.get('/friends', friends.index);

    app.post('/friends', friends.create);

    app.put('/friends/:id', friends.update);

    app.delete('/friends/:id', friends.delete);

    app.get('/friends/:id', friends.show);
};
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.