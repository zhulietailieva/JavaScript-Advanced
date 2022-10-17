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
        it("should should work correctly with result below 0", function() {
           assert.equal(bookSelection.isItAffordable(1,0),"You don't have enough money");
        });
        it("should should work correctly with a positive result", function() {
            assert.equal(bookSelection.isItAffordable(1,2),"Book bought. You have 1$ left");
         });
     });

     describe("suitableTitles ", function() {
        it("ivalid input should throw an error", function() {
            assert.throws(()=>bookSelection.suitableTitles(1,"test"), "Invalid input");
            assert.throws(()=>bookSelection.suitableTitles(Array,5),"Invalid input");
            assert.throws(()=>bookSelection.suitableTitles(6,5),"Invalid input");
        });
        it("should work correctly with correct parameters", function() {
            let book1={
                title:"Book1",
                genre:"Horror"
            };
            let book2={
                title:"Book2",
                genre:"Horror"
            };
            let book3={
                title:"Book3",
                genre:"Comedy"
            };
            let books=[book1,book2,book3];
           let res=bookSelection.suitableTitles(books,"Horror");
           expect(res).to.deep.equal([ 'Book1', 'Book2' ]);
          // assert.equal(res, [ 'Book1', 'Book2' ]);
        });
     });  
});