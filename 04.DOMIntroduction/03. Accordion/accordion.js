function toggle() {   
    console.log('here') ; 
    var buttonEl=document.getElementsByClassName('button')[0];
    
    if(buttonEl.textContent=='More'){
        document.getElementsByClassName('button')[0].textContent='Less';
        document.getElementById('extra').style.display='block';
    }
   else if(buttonEl.textContent=='Less'){
    document.getElementsByClassName('button')[0].textContent='More';
        document.getElementById('extra').style.display='none';
    }
}
