class CarDealership {
    constructor(name){
        this.name=name;
        this.availvableCars=[];
        this.soldCars=[];
        this.totalIncome=0;
    }
    addCar (model, horsepower, price, mileage){
        if(typeof(model)!='string'||model==''){
            throw new Error("Invalid input!");
        }
        if(typeof(horsepower)!='number'||horsepower<=0||!Number.isInteger(horsepower)){
            throw new Error("Invalid input!");
        }
        if(typeof(price)!='number'||price<0){
            throw new Error("Invalid input!");
        }
        if(typeof(mileage)!='number'||mileage<0){
            throw new Error("Invalid input!");
        }
        //valid input data
        let car={
            model,
            horsepower,
            price,
            mileage
        };
        this.availvableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    sellCar (model, desiredMileage){
        let carForSale=this.availvableCars.find(car=>car.model==model);
        if(carForSale==undefined){
            throw new Error(`${model} was not found!`);
        }
        //there is such car
        if(carForSale.mileage<=desiredMileage){

        }
        else if(Number(carForSale.mileage)-Number(desiredMileage)<=40000){
            carForSale.price-=carForSale.price*0.05;
        }
        else {
            carForSale.price-=carForSale.price*0.1;
        }
        let carForSaleHP=carForSale.horsepower;
        let carForSalePrice=Math.round(carForSale.price,2);

        let soldCar={
           model,
           carForSaleHP,
           carForSalePrice
        };
        //it could remove more than one car?
        this.availvableCars=this.availvableCars.filter(car=>car.model!=model);
        this.soldCars.push(soldCar);

        this.totalIncome+=carForSalePrice;
        return `${model} was sold for ${carForSalePrice.toFixed(2)}$`;
    }
    currentCar (){
        if(this.availvableCars.length==0){
            return "There are no available cars";
        }
        let res='-Available cars:\n';
        for (const car of this.availvableCars) {
            res+=`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`
        }
        return res.trim();
    }
    salesReport (criteria){
        if(criteria!="horsepower"&&criteria!="model"){
            throw new Error("Invalid criteria!");
        }
        //valid criteria
        let sorted;
        if(criteria=="horsepower"){
             sorted=this.soldCars.sort((a,b)=>Number(b.carForSaleHP)-Number(a.carForSaleHP));
        }
        else {
            //criteria="model"
            //localeCompare???
            
            sorted=this.soldCars.sort((a,b)=>a.model.localeCompare(b.model));
        }
        let res=`-${this.name} has a total income of ${Math.round(this.totalIncome,2).toFixed(2)}$\n`;
        res+=`-${this.soldCars.length} cars sold:\n`
        for (const car of sorted) {
            res+=`---${car.model} - ${car.carForSaleHP} HP - ${Math.round(Number(car.carForSalePrice),2).toFixed(2)}$\n`;
        }
        return res.trim();
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));