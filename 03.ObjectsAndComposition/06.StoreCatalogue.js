function solve(input){
    var res=[];
for (const item of input.sort((a,b)=>a.localeCompare(b))) {
    let [name,price]=item.split(' : ');
    price=Number(price);
    let firstLetter=name[0];
   
    let product={name,price};
    if(!res[firstLetter]){
    res[firstLetter]=[];
    }
    res[firstLetter].push(product);
}
for (const letter of Object.keys(res)) {
console.log(letter);
for (const iterator of res[letter]) {
    console.log(`  ${iterator.name}: ${iterator.price}`);
}
}
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']

);