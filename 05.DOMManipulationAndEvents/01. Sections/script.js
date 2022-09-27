function create(words) {
   let contentElement = document.getElementById('content');
   for (const word of words) {
      let divElement=document.createElement('div');
      let paragraphElement=document.createElement('p');

      paragraphElement.textContent=word;
      divElement.appendChild(paragraphElement);
      contentElement.appendChild(divElement);
      paragraphElement.style.display='none';
   }
   contentElement.addEventListener('click',display);
   function display(element){
    element.target.firstChild.style.display='block';
   }
}
