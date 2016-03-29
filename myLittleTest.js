var jokes = require("./model/jokeFacade");
var connection = require("./db/db");
var testId = "56fa8123a76f70f2bb07943b";
var testDelId = "56fa8123a76f70f2bb07943b";
connection.connect("mongodb://localhost:27017/test", function(){
    // finds all the jokes in the DB
    jokes.allJokes(function(err, data){
        if(err) console.error(err);
        console.log(data);

    });
    // to test this make sure that the variable testId is a real id that is in the DB
    jokes.findJoke(testId ,function(err, data){
        if(err) console.error(err);
        console.log(data);

    });
    // to test this make sure that the variable testDelId is a real id that is in the DB
    //jokes.deleteJoke(testDelId, function(err, data){
    //    if(err) console.error(err);
    //    console.log(data);
    //})

});

