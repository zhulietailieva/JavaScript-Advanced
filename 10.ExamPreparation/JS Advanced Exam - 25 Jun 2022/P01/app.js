window.addEventListener("load", solve);

function solve() {    
    let tableBodyElement=document.getElementById('table-body');   
    let publishBtnElement=document.getElementById('publish');
    publishBtnElement.addEventListener('click',(e)=>{
      //add functionality
      e.preventDefault();
    let trElement=document.createElement('tr');
    trElement.classList.add('row');

    let makeInpValue=document.getElementById('make');
    let modelInpValue=document.getElementById('model');
    let productionYearValue=document.getElementById('year');
    let fuelTypeValue=document.getElementById('fuel');
    let originalCostPriceValue=document.getElementById('original-cost');
    let sellingPriceValue=document.getElementById('selling-price');

    let DOMelements=[makeInpValue,modelInpValue,productionYearValue,
      fuelTypeValue,originalCostPriceValue,sellingPriceValue];
      //validation
      if((DOMelements.some(x=>x.value==''))
      ||(Number(originalCostPriceValue.value)>Number(sellingPriceValue.value))){
          return;
      }
      for (const item of DOMelements) {
        let tdElement=document.createElement('td');
        tdElement.textContent=item.value;
        trElement.appendChild(tdElement);
      }
    
      let tdButtonsElement=document.createElement('td');
      
      let editBtnElement=document.createElement('button');
      editBtnElement.textContent="Edit";
      editBtnElement.classList.add('action-btn');
      editBtnElement.classList.add('edit');

      editBtnElement.addEventListener('click',(e)=>{
        //Edit button element
        let rowData=e.target.parentElement
        .parentElement.getElementsByTagName('td');
        //Add the info to the input fields
        for(let i=0;i<DOMelements.length;i++){
          DOMelements[i].value=rowData[i].textContent;
        }
        //Remove the row
        e.target.parentElement
        .parentElement.parentElement.remove(e.target
          .parentElement
          .parentElement);    
      })

      let sellBtnElement=document.createElement('button');
      sellBtnElement.textContent="Sell";
      sellBtnElement.classList.add('action-btn');
      sellBtnElement.classList.add('sell');

      sellBtnElement.addEventListener('click',(e)=>{
        //Sell button element
        let ulElement=document.getElementById('cars-list');
        let liElement=document.createElement('li');
        liElement.classList.add('each-list');
               //trElement.childNodes[i].textContent
        let makeAndModelSpan=document.createElement('span');
        makeAndModelSpan.textContent=trElement.childNodes[0].textContent
        +" "+trElement.childNodes[1].textContent;

        let yearSpan=document.createElement('span');
        yearSpan.textContent=trElement.childNodes[2].textContent;

        let diff=Number(trElement.childNodes[5].textContent)
        -Number(trElement.childNodes[4].textContent);
        let diffSpan=document.createElement('span');
        diffSpan.textContent=diff;
        //add it to the profit field
        let profitP=document.getElementById('profit');
       // console.log(Number(profitP.textContent.substring(-1)));

        let sum=Number(profitP.textContent.substring(-1));
        console.log("sum: "+sum);
        console.log("diff: "+diff);

        sum+=diff;
        profitP.textContent=sum.toFixed(2);
        
        liElement.appendChild(makeAndModelSpan);
        liElement.appendChild(yearSpan);
        liElement.appendChild(diffSpan);

        ulElement.appendChild(liElement);
         //Remove the row
         e.target.parentElement
          .parentElement.parentElement
            .remove(e.target
            .parentElement
           .parentElement); 
      })
    
      tdButtonsElement.appendChild(editBtnElement);
      tdButtonsElement.appendChild(sellBtnElement);
    
      trElement.appendChild(tdButtonsElement);
      tableBodyElement.appendChild(trElement);
      //clear input fields  
      for (const item of DOMelements) {
        item.value='';
      }     
    });
}

