function validate() {
    let validEmailPattern=new RegExp('[a-z]+@{1}[a-z]+.{1}[a-z]+');
    let inputElement=document.getElementById('id');
    document.addEventListener('change',(e)=>{
        if(!validEmailPattern.test(e.target.value)){
            e.target.classList.add('error');
        }
        else{
            e.target.classList.remove('error');
        }
    })
}