function solve(input){
let res=[];
for (const iterator of input) {
    let[name,level,items]=iterator.split(' / ');
    level=Number(level);
    items =items?items.split(', '):[];
res.push({name,level,items});
}
console.log(JSON.stringify(res));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);