var connect = require("../db/db");
var ObjectID = require("mongodb").ObjectID;

// work in progress :D
//exports.insertJoke = function(callback){
//    var obj_id = new ObjectID("testId123123");
//    var db = connect.get();
//    db.collection("jokes").insert({_id: obj_id,
//        joke: "TestJoke for the InsertJoke",
//        type: "strong",
//        lastEdited: "13-13-13"},
//        function(err, data){
//        if(err) callback(err);
//        callback(null, data);
//    });
//};

exports.allJokes = function (callback) {
    var db = connect.get();
    db.collection("jokes").find({}).toArray(function (err, data) {
        if (err)  callback(err);
        callback(null, data);
    });
};
exports.findJoke = function (id, callback) {
    var obj_id = new ObjectID(id);
    var db = connect.get();
    db.collection("jokes").findOne({_id : obj_id}, function(err,data){
        if(err) callback(err);
        callback(null,data);
    })
};
exports.editJoke = function (jokeToEdit, callback) {
    var db = connect.get();

};
exports.deleteJoke = function (id, callback) {
    var obj_id = new ObjectID(id);
    var db = connect.get();
    db.collection("jokes").deleteOne({_id : obj_id}, function(err, data){
        if(err) callback(err)
        callback(null, data);
    })
};
exports.randomJoke = function (callback) {

};

