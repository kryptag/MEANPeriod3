var connect = require("../db/db");

exports.allJokes = function (callback) {
    var db = connect.get();
    db.collection("jokes").find({}).toArray(function (err, data) {
        if (err)  callback(err);
        callback(null, data);
    });
};
exports.findJoke = function (id, callback) {

};
exports.editJoke = function (jokeToEdit, callback) {

};
exports.deleteJoke = function (id, callback) {

};
exports.randomJoke = function (callback) {

};