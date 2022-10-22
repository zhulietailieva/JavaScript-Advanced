window.addEventListener('load', solve);

function solve() {
let recievedOrdersSectionEl=document.getElementById('received-orders');
let sendBtnEl=document.getElementsByTagName('button')[0]
.addEventListener('click',(e)=>{
    e.preventDefault();
    let productTypeEl=document.getElementById('type-product');
    let descriptionEl=document.getElementById('description');
    let clientNameEl=document.getElementById('client-name');
    let clientPhone=document.getElementById('client-phone')

    let divElement=document.createElement('div');
    divElement.classList.add('container');
    let h2El=document.createElement('h2');
    h2El.textContent='Product type for repair: '+productTypeEl.value;
    let h3El=document.createElement('h3');
    h3El.textContent='Client information: '+clientNameEl.value+', '+clientPhone.value;
    let h4El=document.createElement('h4');
    h4El.textContent='Description of the problem: '+descriptionEl.value;

    let startBtnEl=document.createElement('button');
    startBtnEl.textContent='Start repair';
    startBtnEl.classList.add('start-btn');
    startBtnEl.addEventListener('click',(e)=>{
        //strat repair functionallity
        e.preventDefault();
        startBtnEl.setAttribute('disabled','');
        finishBtnEl.removeAttribute('disabled');
    })

    let finishBtnEl=document.createElement('button');
    finishBtnEl.textContent='Finish repair';
    finishBtnEl.classList.add('finish-btn');
    finishBtnEl.setAttribute('disabled','');
    finishBtnEl.addEventListener('click',(e)=>{
        //finish repair functionallity
        e.preventDefault();        
        divElement.removeChild(startBtnEl);
        divElement.removeChild(finishBtnEl);
        let completedOrdersSectionEl=document.getElementById('completed-orders');
        completedOrdersSectionEl.appendChild(divElement);
    })

    divElement.appendChild(h2El);
    divElement.appendChild(h3El);
    divElement.appendChild(h4El);
    divElement.appendChild(startBtnEl);
    divElement.appendChild(finishBtnEl);
   
    recievedOrdersSectionEl.appendChild(divElement);

    productTypeEl.value='';
    descriptionEl.value='';
    clientNameEl.value='';
    clientPhone.value='';  
});
 //clear button
 let clearBtnEl=document.getElementsByClassName('clear-btn')[0].addEventListener('click',(e)=>{
    // e.preventDefault();
    let containerElements=document.getElementsByClassName('container');
    let completedOrdersSectionEl=document.getElementById('completed-orders');
    while (containerElements[0]) {
        completedOrdersSectionEl.removeChild(containerElements[0]);
    }
 });
}