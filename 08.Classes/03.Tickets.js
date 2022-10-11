function solve(ticketArgs,sortingCriteria){
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }
    let tickets=[];
    for (const ticket of ticketArgs) {
        let destinationName=ticket.split('|')[0];
        let price=ticket.split('|')[1];
        let status=ticket.split('|')[2];  
        tickets.push(new Ticket(destinationName,Number(price),status));
    }
    let sorted;
    console.log(sortingCriteria);
    if(sortingCriteria=='price'){
        sorted=tickets.sort((a,b)=>a[sortingCriteria]-b[sortingCriteria]);
        return sorted;
    }
    sorted=tickets.sort((a,b)=>
        a[sortingCriteria].localeCompare(b[sortingCriteria]));
           
    return sorted;
    
}
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));
