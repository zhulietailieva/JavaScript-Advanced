window.addEventListener("load", solve);

function solve() {
let firstNameEl=document.getElementById('first-name');
let lastNameEl=document.getElementById('last-name');
let ageEl=document.getElementById('age');
let storyTitleEl=document.getElementById('story-title');
let genreEl=document.getElementById('genre');
let storyEl=document.getElementById('story');

let publishBtnEl=document.getElementById('form-btn');
publishBtnEl.addEventListener('click',(e)=>{
e.preventDefault();
if(firstNameEl.value==''||lastNameEl.value==''||
ageEl.value==''||storyTitleEl.value==''||
genreEl.value==''||storyEl.value==''){
  return;
}
//fields are not empty
  //not sure if it will work
  let currValuesElements=[firstNameEl.value,lastNameEl.value,
  ageEl.value,storyTitleEl.value,genreEl.value,storyEl.value];
  let ulEl=document.getElementById('preview-list');

  let liEl=document.createElement('li');
  liEl.classList.add('story-info');

  let articleEl=document.createElement('article');
  
  let h4El=document.createElement('h4');
  h4El.textContent="Name: "+firstNameEl.value+" "+lastNameEl.value;

  let agePEl=document.createElement('p');
  agePEl.textContent="Age: "+ageEl.value;

  let titlePEl=document.createElement('p');
  titlePEl.textContent="Title: "+storyTitleEl.value;

  let genrePEl=document.createElement('p');
  genrePEl.textContent="Genre: "+genreEl.value;

  let storyPEl=document.createElement('p');
  storyPEl.textContent=storyEl.value;

  articleEl.appendChild(h4El);
  articleEl.appendChild(agePEl);
  articleEl.appendChild(titlePEl);
  articleEl.appendChild(genrePEl);
  articleEl.appendChild(storyPEl);

  //buttons
  let btnSaveEl=document.createElement('button');
  btnSaveEl.textContent='Save Story';
  btnSaveEl.classList.add('save-btn');
  btnSaveEl.addEventListener('click',(e)=>{
    //Save btn functionality
    e.preventDefault();
    let mainDivEl=document.getElementById('main');
    letMainDivElChildren=mainDivEl.children;
    while(letMainDivElChildren[0]){
      mainDivEl.removeChild(letMainDivElChildren[0]);
    }
    let h1El=document.createElement('h1');
    h1El.textContent="Your scary story is saved!";
    mainDivEl.appendChild(h1El);
  })

  let btnEditEl=document.createElement('button');
  btnEditEl.textContent="Edit Story";
  btnEditEl.classList.add('edit-btn');
  btnEditEl.addEventListener('click',(e)=>{
    //Edit btn functionality
    e.preventDefault();
    publishBtnEl.disabled=false;
   firstNameEl.value=currValuesElements[0];
   lastNameEl.value=currValuesElements[1];
   ageEl.value=currValuesElements[2];
   storyTitleEl.value=currValuesElements[3];
   genreEl.value=currValuesElements[4];
   storyEl.value=currValuesElements[5];
   //remove li
   ulEl.removeChild(liEl);
  })

  let btnDeleteEl=document.createElement('button');
  btnDeleteEl.textContent="Delete Story";
  btnDeleteEl.classList.add('delete-btn');
  btnDeleteEl.addEventListener('click',(e)=>{
    //Delete btn bunctionality
    e.preventDefault();
    publishBtnEl.disabled=false;
    ulEl.removeChild(liEl);
  })

  liEl.appendChild(articleEl);
  liEl.appendChild(btnSaveEl);
  liEl.appendChild(btnEditEl);
  liEl.appendChild(btnDeleteEl);
  ulEl.appendChild(liEl);
  //disable publish el
  publishBtnEl.disabled=true;
  //clear inp fields
  firstNameEl.value='';
  lastNameEl.value='';
  ageEl.value='';
  genreEl.value='';
  storyTitleEl.value='';
  storyEl.value='';
})
}
