function solve() {
  var typeInput=document.getElementById('naming-convention').value;
  var input=document.getElementById('text').value;
  let toPascalCase=(input)=>{
  return input
  .toLowerCase()
  .split(' ')
  .map(x=>x.toUpperCase()[0]+x.substring(1,x.length))
  .join('');
  }
  let toCamelCase=(input)=>{
    return input
    .toLowerCase()
    .split(' ')
    .map((x,pos)=>pos==0?x:x.toUpperCase()[0]+x.substring(1,x.length))
    .join('');
  }
  var res='';
if(typeInput=='Camel Case'){
res=toCamelCase(input);
}
else if(typeInput=='Pascal Case'){
res=toPascalCase(input);
}
else{
res='Error!';
}
console.log(res);
document.getElementById('result').textContent=res;
}