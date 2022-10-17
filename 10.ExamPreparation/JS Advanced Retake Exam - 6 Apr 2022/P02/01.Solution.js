// class Plant{
//     constructor(plantName,spaceRequired){
//         this.plantName=plantName;
//         this.spaceRequired=spaceRequired;
//         this.ripe=false;
//         this.quantity=0;
//     }
// }
class Garden{
    
    constructor(spaceAvailable){
        this.spaceAvailable=Number(spaceAvailable);
        this.plants=[];
        this.storage=[];
    }
    addPlant(plantName,spaceRequired){
        spaceRequired=Number(spaceRequired);
        if(this.spaceAvailable-spaceRequired<0){
            throw new Error("Not enough space in the garden.");
        }
        let plant={
            plantName:plantName,
            spaceRequired:spaceRequired,
            ripe:false,
            quantity:0
        };
        //let plant=new Plant(plantName,spaceRequired);
        this.spaceAvailable-=spaceRequired;
        this.plants.push(plant);
        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName,quantity){
        quantity=Number(quantity);
        if(!this.plants.some(x=>(x.plantName)==plantName)){
            //no plants with that name
            console.log(this.plants);
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if(this.plants.find(x=>x.plantName==plantName).ripe){
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if(quantity<=0){
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        let plant=this.plants.find(x=>x.plantName==plantName);
        plant.ripe=true;
        plant.quantity+=quantity;
        if(quantity==1){
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        else{
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }
    harvestPlant(plantName){
        if(!this.plants.some(x=>x.plantName==plantName)){
            //no plants with that name
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        let plant=this.plants.find(x=>x.plantName==plantName);
        if(!plant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.plants=this.plants.filter(x=>x.plantName!=plantName);
        this.storage.push(plant);
        this.spaceAvailable+=plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport(){
        let result='';
        result+=`The garden has ${ this.spaceAvailable } free space left.\n`;
        let sorted=this.plants.sort((a,b)=>(a.plantName).localeCompare(b.plantName)).map(x=>x.plantName);
        result+=`Plants in the garden: ${sorted.join(', ')}\n`;
        if(this.storage.length==0){
            result+="Plants in storage: The storage is empty.";
        }
        else{
           let plantsRes=this.storage.map(x=>`${x.plantName} (${x.quantity})`);
           result+="Plants in storage: "+ plantsRes.join(", "); 
        }
        return result;
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
