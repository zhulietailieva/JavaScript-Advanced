const flowerShop=require('../flowerShop');
let{assert}=require('chai');
describe("Tests …", function() {

    describe("calcPriceOfFlowers", ()=>{
        it("should throw Error with invalid input", ()=> {
            assert.throws(()=>flowerShop.calcPriceOfFlowers(undefined,'',false),
            "Invalid input!");    
        });
        it("should work correctly with valid data", ()=> {
            assert.equal(flowerShop.calcPriceOfFlowers('test',2,2),
            "You need $4.00 to buy test!")
        });      
     });

     describe("checkFlowersAvailable", ()=>{
        it("should work correctly with available flowers", ()=> {
            assert.equal(flowerShop.checkFlowersAvailable(
                'Lilly',['Lilly','Rose']
            ),"The Lilly are available!");
        });
        it("should work correctly with not-available flowers", ()=> {
            assert.equal(flowerShop.checkFlowersAvailable(
                'Daisy',['Lilly','Rose']
            ),"The Daisy are sold! You need to purchase more!");
        });
     });
     
     describe("sellFlowers", ()=>{
        it("should throw Error with invalid input", ()=> {
            assert.throws(()=>
            flowerShop.sellFlowers(undefined,false),
            "Invalid input!");
        });
        // it("should remove the element at the space parameter", ()=> {
        //     let flowers=['Daisy','Lilly','Poppy'];
        // flowerShop.sellFlowers(flowers,1);
        // assert.equal(flowers,['Daisy','Poppy']);
        // });
        it("should print remaining flowers correctly", ()=> {
            assert.equal(flowerShop.sellFlowers(['Daisy','Lilly','Poppy'],1),
            "Daisy / Poppy");
        });
        it(" ", ()=> {

        });
     });
});