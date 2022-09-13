function rectangle(width,height,color){
var rect={
    width:width,
    height:height,
    color:color.toUpperCase()[0]+color.substring(1),
    calcArea(){return this.width*this.height}
}
return rect;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
