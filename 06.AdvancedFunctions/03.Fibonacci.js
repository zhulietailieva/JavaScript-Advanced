function getFibonator(){
    let a = 0;
    let b = 1;
    let res = 0;
    return solve;
    function solve(){
        res = a + b;
        a = b;
        b = res;
        return a;
    }  
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());