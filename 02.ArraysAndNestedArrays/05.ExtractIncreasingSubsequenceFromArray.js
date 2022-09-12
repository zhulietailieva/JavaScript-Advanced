function solve(array){
    let biggestNumber=array[0];
    let res=[biggestNumber];
    for(let i=1;i<array.length;i++){
if(array[i]>=biggestNumber){
    biggestNumber=array[i];
    res.push(array[i]);
}
    }
    //console.log(res.join('\n'));
   return res;
}
solve([1, 
    2, 
    3,
    4]);