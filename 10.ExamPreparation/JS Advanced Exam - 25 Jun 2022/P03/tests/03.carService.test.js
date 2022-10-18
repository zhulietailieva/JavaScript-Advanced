let carService=require('../03. Car Service_Resources');
let {assert}=require('chai');

describe("Tests …", function() {
    describe("isItExpensive", function() {

        it("should return correct output with Engine and Transmission", ()=> {
            assert.equal(carService.isItExpensive("Engine"),`The issue with the car is more severe and it will cost more money`);
            assert.equal(carService.isItExpensive("Transmission"),`The issue with the car is more severe and it will cost more money`);
        });
     });

     describe("isItExpensive", function() {

        it("should return correct output with other data", ()=> {
            assert.equal(carService.isItExpensive("Tire"),`The overall price will be a bit cheaper`);
        });
     });

     describe("discount", function() {

        it("invalid input should throw Error", ()=> {
            assert.throws(()=>carService.discount(undefined,"test"),"Invalid input");
        });
        it("should work correctly with 15% discount", ()=> {
            assert.equal(carService.discount(5,100),"Discount applied! You saved 15$");
        });
        it("should work correctly with 30% discount", ()=> {
            assert.equal(carService.discount(10,100),"Discount applied! You saved 30$"); 
        });
        it("should not apply discount if parts are 2 or less", ()=> {
            assert.equal(carService.discount(1,100),"You cannot apply a discount"); 
        });
     });
     describe("partsToBuy", function() {

        it("should throw Error with invalid input", ()=> {
            assert.throws(()=>carService.partsToBuy(undefined,5)
            ,"Invalid input");
        });
        it("should return 0 if partsCatalog is epmty", ()=> {
            assert.equal(carService.partsToBuy([],['part1','part2']),0);
        });
        it("should work correctly with valid data", ()=> {
            let partsCatalog=[{ part: "blowoff valve", price: 145 }, 
            { part: "coil springs", price: 230 }];
            let neededParts=["blowoff valve", "injectors"];
            assert.equal(carService.partsToBuy(partsCatalog,neededParts),145);

        });
     });

});