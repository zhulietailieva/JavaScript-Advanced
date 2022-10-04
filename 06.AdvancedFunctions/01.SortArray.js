function solve(array,order){
    if(order=='asc'){
        console.log('here');
    return array.sort((a,b)=>a-b);     
    }
    else if(order=='desc'){
    return array.sort((a,b)=>b-a);
    }  
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));