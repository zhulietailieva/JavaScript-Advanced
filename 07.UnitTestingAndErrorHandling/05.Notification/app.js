function notify(message) {
 let notificationElement=document.getElementById('notification');
 //let buttonElement=document.getElementsByTagName('button')[0];
  notificationElement.style.display="block";
 notificationElement.textContent=message;
 notificationElement.addEventListener('click',(e)=>{
    e.currentTarget.style.display="none";
  })
}