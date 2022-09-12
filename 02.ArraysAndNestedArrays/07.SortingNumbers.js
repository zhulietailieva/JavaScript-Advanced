function solve(array){
let sorted=array.sort((a,b)=>a-b);
let res=[];
while(sorted.length>0){
    res.push(sorted.shift());
    res.push(sorted.pop());
}
return res;
}
solve([1,
    65,
    3,
    52,
    48,
    63,
    31,
    -3,
    18,
    56]);
