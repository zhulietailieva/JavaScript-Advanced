function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      var textToSearch=document.getElementById('searchField').value;
     var tableRowsElements=Array.from(document.getElementsByTagName('tr')).slice(2);
     
   console.log(tableRowsElements);
for (const rowElement of tableRowsElements) {
   var rowElementArray=rowElement.textContent.split('\n');
   console.log(rowElementArray);
   if(rowElement.textContent.includes(textToSearch)){
      rowElement.className='select';
   }
   else{
      rowElement.classList.remove('select');
   }
}
document.getElementById('searchField').value='';
   }
}