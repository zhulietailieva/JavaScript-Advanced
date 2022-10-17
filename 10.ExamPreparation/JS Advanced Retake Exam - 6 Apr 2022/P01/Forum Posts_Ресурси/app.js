window.addEventListener("load", solve);

function solve() {
let titleInputElement=document.getElementById('post-title');
let categoryInputELement=document.getElementById('post-category');
let contecntInputElement=document.getElementById('post-content');
let publishBtnElement=document.getElementById('publish-btn');
let clearBtnElement=document.getElementById('clear-btn');

publishBtnElement.addEventListener('click',appendLi);
clearBtnElement.addEventListener('click',clearLists);
  function clearLists(){
    let reviewListUlEement=document.getElementById('review-list');
    let publishedUlElement=document.getElementById('published-list');
    //console.log(reviewListUlEement);
    //console.log(publishedUlElement);
    removeAllChildNodes(reviewListUlEement);
    removeAllChildNodes(publishedUlElement);
  }
  function removeAllChildNodes(parent){
    while(parent.firstChild){
      parent.removeChild(parent.firstChild);
    }
  }
  function appendLi(){
    if(titleInputElement.value==''||categoryInputELement.value==''||contecntInputElement.value==''){
      return;
    }
    let ulElement=document.getElementById('review-list');
    let liElement=document.createElement('li');
    liElement.classList.add('rpost');
    let articleElement=createArticle();

    let editBtn=document.createElement('button');
    editBtn.textContent="Edit";
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.addEventListener('click',(e)=>{
        //edit post function
        titleInputElement.value=e.target.parentElement.children[0].children[0].textContent;
        categoryInputELement.value=e.target.parentElement.children[0].children[1].textContent.substring(10);
        contecntInputElement.value=e.target.parentElement.children[0].children[2].textContent.substring(9);
      
        ulElement.removeChild(liElement);
    });

    let approveBtn=document.createElement('button');
    approveBtn.textContent="Approve";
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.addEventListener('click',(e)=>{
      //approve post function
      let publishedUlElement=document.getElementById('published-list');
      ulElement.removeChild(liElement);
      publishedUlElement.appendChild(liElement);
      //remove the edit and approvev buttons
      liElement.removeChild(editBtn);
      liElement.removeChild(approveBtn);
    })
    liElement.appendChild(articleElement);
    liElement.appendChild(editBtn);
    liElement.appendChild(approveBtn);

    ulElement.appendChild(liElement);

    titleInputElement.value='';
    categoryInputELement.value='';
    contecntInputElement.value='';
  }
  function createArticle(){
    let article=document.createElement('article');
    let titleP=document.createElement('h4');
    titleP.textContent=titleInputElement.value;
    let categoryP=document.createElement('p');
    categoryP.textContent="Category: "+categoryInputELement.value;
    let contentP=document.createElement('p');
    contentP.textContent="Content: "+contecntInputElement.value;

    article.appendChild(titleP);
    article.appendChild(categoryP);
    article.appendChild(contentP);
    return article;
  } 
}

