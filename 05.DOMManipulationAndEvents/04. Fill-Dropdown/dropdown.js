function addItem() {
let newItemText=document.getElementById("newItemText").value;
let newItemValue=document.getElementById("newItemValue").value;
let menuElement=document.getElementById('menu');
let optionElement =document.createElement('option');
optionElement.textContent=newItemText;
optionElement.value=newItemValue;
menuElement.appendChild(optionElement);
document.getElementById("newItemText").value='';
document.getElementById("newItemValue").value='';
}