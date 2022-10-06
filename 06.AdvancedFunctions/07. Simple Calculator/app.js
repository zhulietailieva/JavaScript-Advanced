function calculator() {
let num1;
let num2;
let res;
function init(selector1, selector2, resultSelector){
    num1=document.querySelector(selector1);
   num2=document.querySelector(selector2);
   res=document.querySelector(resultSelector); 
}   
function add(){
    let n1=Number(num1.value);
    let n2=Number(num2.value);
    res.value=n1+n2;
}
function subtract(){
    let n1=Number(num1.value);
    let n2=Number(num2.value);
    res.value=n1-n2;
}
    let object={
        init,
        add,
        subtract
    };
    return object;
}
let calculate = calculator();
calculate.init('#num1', '#num2', '#result');

