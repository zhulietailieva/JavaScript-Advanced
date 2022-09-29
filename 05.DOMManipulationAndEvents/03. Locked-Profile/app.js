function lockedProfile() {
    let buttonsElements=document.getElementsByTagName('button');
    for(let i=0;i<buttonsElements.length;i++){
        let button=buttonsElements[i];
        let profileElement=button.parentElement;
        let hiddenElement=document.getElementById(`user${i+1}HiddenFields`);
        let isLockedElement=profileElement.querySelector('input[value="lock"]');

        button.addEventListener('click',()=>{
            if(!isLockedElement.checked&&buttonsElements[i].textContent=="Show more"){
                hiddenElement.style.display='block';
                button.textContent="Hide it";
            }
            else if(!isLockedElement.checked&&buttonsElements[i].textContent=="Hide it"){
                hiddenElement.style.display='';
                button.textContent="Show more";
            }
        

            
        })
    }
    

    function unlcok(){

        
    }
}