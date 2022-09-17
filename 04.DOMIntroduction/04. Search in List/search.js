function search() {
   var townsElements=Array.from(document.getElementById('towns').children);
   var textToSearch=document.getElementById('searchText').value;
   console.log(textToSearch);
   var matches=0;
   for (const town of townsElements) {
      if(town.textContent.includes(textToSearch)){
         town.style.fontWeight='bold';
         town.style.textDecoration='underline';
         matches++;
      }
      else{
         town.style.fontWeight='normal';
         town.style.textDecoration='none';
      }
   }
   document.getElementById('result').textContent=`${matches} matches found`;  
}
