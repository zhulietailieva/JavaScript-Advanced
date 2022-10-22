const chooseYourCar=require('../chooseYourCar');
let {assert}= require('chai')
describe("Tests …", function() {
   describe("choosingTyoe", ()=> {
       it("should throw Error with Invalid year", ()=> {
          assert.throws(()=>chooseYourCar.choosingType('test','test',1888),
          "Invalid Year!");        
       });
       it("should throw Error with Invalid year", ()=> {         
           assert.throws(()=>chooseYourCar.choosingType('test','test',2023),
           "Invalid Year!");
        });
        it("should throw Error with different than Sedan", ()=> {         
           assert.throws(()=>chooseYourCar.choosingType('test','test',2015),
           "This type of car is not what you are looking for.");
        });
        it("should work correcty with year bigger than 2010", ()=> {         
          assert.equal(chooseYourCar.choosingType('Sedan','blue',2015),
          "This blue Sedan meets the requirements, that you have.")
        });
        it("should work correcty with year equal to 2010", ()=> {         
           assert.equal(chooseYourCar.choosingType('Sedan','blue',2010),
           "This blue Sedan meets the requirements, that you have.")
         });
        it("should work correcty with year less than 2010", ()=> {         
           assert.equal(chooseYourCar.choosingType('Sedan','blue',2005),
           "This Sedan is too old for you, especially with that blue color.")
         });
    });

   describe("brandName", ()=> {
       it("should throw Error with invalid input data", ()=> {
           let brands=["BMW","Opel","Toyota"];
          assert.throws(()=>chooseYourCar.brandName(undefined,false),
          "Invalid Information!"); 
       });
       it("should throw Error with invalid input data", ()=> {
           let brands=["BMW","Opel","Toyota"];
          assert.throws(()=>chooseYourCar.brandName('test',1),
          "Invalid Information!"); 
       });
       it("should throw Error with invalid input data", ()=> {
           let brands=["BMW","Opel","Toyota"];
          assert.throws(()=>chooseYourCar.brandName(brands,-1),
          "Invalid Information!");     
       });
       it("should throw Error with invalid input data", ()=> {
           let brands=["BMW","Opel","Toyota"];
          assert.throws(()=>chooseYourCar.brandName(brands,6),
          "Invalid Information!");     
       });
       it("should throw Error with invalid input data", ()=> {
           let brands=["BMW","Opel","Toyota"];
          assert.throws(()=>chooseYourCar.brandName(brands,6),
          "Invalid Information!");     
       });
       it("should work correctly with valid input data", ()=> {
           let brands=["BMW","Opel","Toyota"];
          assert.equal(chooseYourCar.brandName(brands,1),
          'BMW, Toyota');  
       }); 
    });

   describe("CarFuelConsumption", function() {
       it("should throw error with invaid input data", function() {
          assert.throws(()=>chooseYourCar.carFuelConsumption('test',undefined),
          "Invalid Information!" );
       });
       it("should throw error with invaid input data", function() {
           assert.throws(()=>chooseYourCar.carFuelConsumption(0,-4),
           "Invalid Information!" );
        });
        it("should work correctly with < 7", function() {
          assert.equal(chooseYourCar.carFuelConsumption(100,1),
          "The car is efficient enough, it burns 1.00 liters/100 km.")
        });
        it("should work correctly with equal to 7", function() {
           assert.equal(chooseYourCar.carFuelConsumption(100,7),
           "The car is efficient enough, it burns 7.00 liters/100 km.")
         });
         it("should work correctly with > 7", function() {
           assert.equal(chooseYourCar.carFuelConsumption(100,10),
           "The car burns too much fuel - 10.00 liters!")
         });
    });
   
});