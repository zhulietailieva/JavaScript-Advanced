function solve() {
        let recipientInpEl=document.getElementById('recipientName');
        let titleInpEl=document.getElementById('title');
        let messageInpEl=document.getElementById('message');
    let addBtnEl=document.getElementById('add').addEventListener('click',(e)=>{
       e.preventDefault();
       if(recipientInpEl.value!=''&&titleInpEl.value!=''&&messageInpEl.value!=''){

        let ulElement=document.getElementById('list');
        let liEleemnt=document.createElement('li');
        let headingTitle=document.createElement('h4');
        headingTitle.textContent="Title: "+titleInpEl.value;
        let headingRecipient=document.createElement('h4');
        headingRecipient.textContent="Recipient Name: "+recipientInpEl.value;
        let messageSpan=document.createElement('span');
        messageSpan.textContent=messageInpEl.value;

        liEleemnt.appendChild(headingTitle);
        liEleemnt.appendChild(headingRecipient);
        liEleemnt.appendChild(messageSpan);
        ulElement.appendChild(liEleemnt);
        recipientInpEl.value='';
        titleInpEl.value='';
        messageInpEl.value='';
       }       
    });
    
    
}
solve()