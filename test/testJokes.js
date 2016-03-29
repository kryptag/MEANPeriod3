var expect = require("chai").expect;
var jokes = require("../model/jokeFacade");
var connection = require("../db/db");

var testJokes = [
    {"joke": "Why was six afraid of seven? Because seven was a well known six offender",
    "type": [
    "short",
    "joke",
    "riddle"],
    "reference": {
    "author": "Unknown",
        "link": "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
"lastEdited": new Date()
}];
describe("the jokes factory", function(){

    before(function(done){
        connection.connect("mongodb://localhost:27017/test", function(){
            done();
        });
    });

    beforeEach(function(done){
        var db = connection.get();
        db.collection("jokes").deleteMany({},function(err, data){
            if(err) throw new Error(err);
            db.collection("jokes").insertMany(testJokes, function(err,data){
                if(err) throw new Error(err);
                done();

            });

        });
    });

    it("should find one joke", function(done){
        jokes.allJokes(function(err,data){
            expect(data.length).to.be.equal(1);
        })
    });

});