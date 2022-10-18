let rentCar=require('../rentCar');
let {assert}=require('chai');

describe("Tests …", ()=> {
    describe("searchCar", ()=> {
        it("should throw Error with invalid paramenters", ()=> {
            assert.throws(()=>rentCar.searchCar(undefined,5),
            "Invalid input!");
        });
        it("no matching elements should throw Error", ()=> {
            assert.throws(()=>rentCar.searchCar(["Audi","BMW"],"Honda"),
            'There are no such models in the catalog!');
        });
        it("should work correctly with valid parameters", ()=> {
            assert.equal(rentCar.searchCar(["Audi","BMW"],"BMW"),
            "There is 1 car of model BMW in the catalog!");
        });
     });
    
     describe("calculatePriceOfCar", ()=> {
        it("should throw Error with invalid input", ()=> {
            assert.throws(()=>rentCar.calculatePriceOfCar(null,false),
            "Invalid input!");
        });
        it("should throw Error with no matching elements", ()=> {
            assert.throws(()=>rentCar.calculatePriceOfCar('Honda',1),
            'No such model in the catalog!');
        });
        it("should work correctly with valid data", ()=> {
            assert.equal(rentCar.calculatePriceOfCar('BMW',2),
            `You choose BMW and it will cost $90!`)
        });
     });

     describe("checkBudget", ()=> {
        it("should throw Error with invalid input", ()=> {
            assert.throws(()=>rentCar.checkBudget(undefined,true,'test'),
            'Invalid input!');
        });
        it("shuold be able to rent a car with a budget bigger or equal to the price", ()=> {
            assert.equal(rentCar.checkBudget(20,2,40),
            "You rent a car!");
            assert.equal(rentCar.checkBudget(20,2,50),
            "You rent a car!");
        });
        it("shuold not be able to rent a car with a budget smaller the price", ()=> {
            assert.equal(rentCar.checkBudget(20,2,10),
            'You need a bigger budget!');
        });
     });
});