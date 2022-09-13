function solve(input){
    var res=[];
for (const iterator of input) {
    let[town,product,price]=iterator.split(' | ');
    price=Number(price);
    let object=res.find(x=>x.product===product);
    if(object){
        if(price<object.price){
            object.price=price;
            object.town=town;
        }
    }
    else{
        object={product,town,price};
        res.push(object);
    }
}
for (const item of res) {
    console.log(`${item.product} -> ${item.price} (${item.town})`);
}
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);