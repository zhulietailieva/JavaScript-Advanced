function solve(array){
array.sort((a,b)=>{
    if(a.length==b.length){
        return a.localeCompare(b);
    }
    return a.length-b.length;
})
console.log(array.join('\n'));
}
solve(['alpha', 
'beta', 
'gamma']);
solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);