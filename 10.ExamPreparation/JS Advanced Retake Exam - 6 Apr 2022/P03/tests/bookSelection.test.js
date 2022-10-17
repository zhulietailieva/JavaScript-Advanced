let bookSelection=require('../bookSelection');
const { assert,expect } = require('chai');

describe("Tests …", ()=> {
    describe("isGenreSuitable", ()=> {
        it('should return correct message if age is <= 12 and genre is "Thriller"', () =>{
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age')
        });
        it("should return correct output with Horror and age under 12", function() {
             res=bookSelection.isGenreSuitable("Horror",10);
            assert.equal(res,`Books with Horror genre are not suitable for kids at 10 age`);
        });
        it("should return correct output with Horror and age over 12", function() {
             res=bookSelection.isGenreSuitable("Horror",13);
            assert.equal(res,`Those books are suitable`);
        });
        it("should return correct output with Thriller and age over 12", function() {
             res=bookSelection.isGenreSuitable("Thriller",15);
            assert.equal(res,`Those books are suitable`);
        });
     });

     describe("isItAffordable", function() {

        it("should throw exception with arguments that are not numbers", function() {
            assert.throws(()=>bookSelection.isItAffordable(null,"test"),"Invalid input");
            assert.throws(()=>bookSelection.isItAffordable(5,"test"),"Invalid input");
            assert.throws(()=>bookSelection.isItAffordable(undefined,5),"Invalid input");
        });
     });

     describe("suitableTitles ", function() {

        it("TODO …", function() {

        });
     });

     
});