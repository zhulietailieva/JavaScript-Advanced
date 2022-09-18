function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      function SalariesData(workersAndSalariesDataArray){
         let averageSalary=0;
         let workerWithHighestSalary=0;
         let  workerWithHighestSalaryName='';
         for (const worker of workersAndSalariesDataArray) {
            averageSalary+=Number(worker.split(' ')[1]);
            if(Number(worker.split(' ')[1])>workerWithHighestSalary){
                  workerWithHighestSalary=Number(worker.split(' ')[1]);
                  workerWithHighestSalaryName=worker.split(' ')[0];
            }
         }
         averageSalary/=(workersAndSalariesArr.length);  
         return [averageSalary,workerWithHighestSalaryName,workerWithHighestSalary];      
      }
      //get the input data
      let inputElement=JSON.parse(document.getElementsByTagName('textarea')[0].value) ;
      //initialize an array for all the restaurants
      let restaurants=[];
      for (const restaurant of inputElement) {
         //get the restaurant name and workers
         let workersAndSalariesArray=(restaurant.split(' - ')[1])
         .split(', ');
         //create a cuurent restauranat as an object
            const currentRestaurnt={
            restaurantName: restaurant.split(' - ')[0],
            workers:workersAndSalariesArray,
            highestPaidWorkerName: SalariesData(workersAndSalariesArray[1]),
            highestPaidWorkerSalary: SalariesData(workersAndSalariesArray[2]),
            averageSalaryForTheRestaurant:SalariesData(workersAndSalariesArray[0])
         }
         /*
         //find out if a restaurant with that name already exists
         let alreadyExists=false;
         for (const item of restaurants) {
            if(item.restaurantName==currentRestaurnt.restaurantName){
               //the two resstaurants have the same name so i should combine them
               alreadyExists=true;
               
            }
         }
         if(!alreadyExists){
            restaurants.push(restaurant)
         }
        */
       restaurants.push(restaurant);
      }    
      for (const item of restaurants) {
         console.log(item);
      }
   }
}