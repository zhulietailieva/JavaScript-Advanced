let usernamePattern=new RegExp('^[A-Za-z0-9]{3,20}$');
    let passwordPattern=new RegExp('^[A-Za-z0-9_]{5,15}$');
    let emailPattern=new RegExp('[a-z]+@{1}[a-z]+.{1}[a-z]+');
    
//get the elements
let usernameElement=document.getElementById('username');
let emailElement=document.getElementById('email');
let passwordElement=document.getElementById('password');
let confirmPasswordElement=document.getElementById('confirm-password');
let companyElement=document.getElementById('company');
let companyElementField=document.getElementById('companyInfo');
let companyNumberElement=document.getElementById('companyNumber');
let buttonElement=document.getElementById('submit');
function validate() {
//username validation
if(!usernamePattern.test(usernameElement.value)){
    usernameElement.style.borderColor='red';
    console.log('not valid');
}
else{
    usernameElement.style.borderColor='none';
    console.log('valid');
}
//email validation


companyElement.addEventListener('change',(e)=>{
    console.log('here');
    if(e.target.checked){
        console.log('changed to true')
        companyElementField.style.display='block';
    } 
    else{
        console.log('changed to false')
        companyElementField.style.display='none';
    }
})
    
}
