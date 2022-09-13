function solve(array){
var list={};
for(let i=0;i<array.length;i+=2){
var product=array[i];
var calories=Number(array[i+1]);
list[product]=calories;
}
console.log(list);
return list;
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);