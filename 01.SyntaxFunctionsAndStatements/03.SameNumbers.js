function areSameNumbers(n){
    let input=n.toFixed();
    let firstDigit=input[0];
    let areSame=true;
    let totalSum=0;
    for(let i=0;i<input.length;i++){
        let currDigit=input[i];
        if(currDigit!=firstDigit){
            areSame=false;
            }
totalSum+=Number(currDigit);
    }
    console.log(areSame);
    console.log(totalSum);
}
areSameNumbers(2222222);
areSameNumbers(1234);