function solve() {
let inpElement=document.querySelector('textarea');
let generateBtn=document.querySelectorAll('button')[0];
generateBtn.addEventListener('click',()=>{
  console.log(JSON.stringify(inpElement));
})
}