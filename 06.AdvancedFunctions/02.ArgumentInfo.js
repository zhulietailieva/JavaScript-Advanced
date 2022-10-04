function solve(...args){
    let tally={};
for (const element of args) {
    console.log(`${typeof(element)}: ${element}`);
    if((tally[typeof(element)])==undefined){
        tally[typeof(element)]=1;
    }
    else{
        tally[typeof(element)]+=1;
    }
}
let sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
for (const [type, count] of sorted) {
    console.log(`${type} = ${count}`);
}
}
solve('cat', 42, function () { console.log('Hello world!'); });