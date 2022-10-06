function add(n){
let sum=0;
function addM(m){
sum+=m;
return addM;
}
addM.toString=()=>sum;
return addM(n);
}
console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
