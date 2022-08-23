function calcculatePrice(fruit,grams,pricePerKg){
let totalPrice=(grams/1000)*pricePerKg;
console.log(`I need $${totalPrice.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`);
}
calcculatePrice('orange', 2500, 1.80);
calcculatePrice('apple', 1563, 2.35);