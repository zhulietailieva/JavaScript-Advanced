function subtract() {
    var num1=Number(document.getElementById('firstNumber').value);
    var num2=Number(document.getElementById('secondNumber').value); 
    var res=num1-num2;
    document.getElementById('result').textContent=res;
   
}