function getArticleGenerator(articles) {
    console.log(articles.length);
let elementToDisplayOn=document.getElementById('content');
function showNext(){
    if(articles.length>0){
       let currentArticle=articles.shift();
       let article=document.createElement('article');
       article.textContent=currentArticle;
        elementToDisplayOn.appendChild(article);
    }
}
return showNext;
}
