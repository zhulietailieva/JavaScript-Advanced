function solve() {
    let sum=0;
    let tableEl=document.getElementsByTagName('table')[0];
    let hireWorkerBtn=document.getElementById('add-worker').addEventListener('click',(e)=>{
        e.preventDefault();
        let firstNameEl=document.getElementById('fname');
        let lastNameEl=document.getElementById('lname');
        let emailEl=document.getElementById('email');
        let dateOfBirthEl=document.getElementById('birth')
        let positionEl=document.getElementById('position');
        let salaryEl=document.getElementById('salary');
    if(firstNameEl.value!=''&&lastNameEl.value!=''
    &&emailEl.value!=''&&dateOfBirthEl.value!=''
    &&positionEl.value!=''&&salaryEl.value!=''){
        let tbody=document.getElementById('tbody');
        let tr=document.createElement('tr');

       let DOMelements=[firstNameEl,lastNameEl,emailEl,
        dateOfBirthEl,positionEl,salaryEl];
        for (const element of DOMelements) {
            let tableData=document.createElement('td');
            tableData.textContent=element.value;
            tr.appendChild(tableData);
        }
        let firedBtnEl=document.createElement('button');
        firedBtnEl.textContent="Fired";
        firedBtnEl.classList.add('fired');
        firedBtnEl.addEventListener('click',(e)=>{
            //fired btn functionality
            e.preventDefault();
            let salary=Number(e.target.parentElement
                .parentElement.children[5].textContent);
            tbody.removeChild(tr);
            sum-=Number(salary);
            let sumSpanEl=document.getElementById('sum');
            sumSpanEl.textContent=sum.toFixed(2);
        })

        let editBtnEl=document.createElement('button');
        editBtnEl.textContent="Edit";
        editBtnEl.classList.add('edit');
        editBtnEl.addEventListener('click',(e)=>{
            //edit btn functionality
            e.preventDefault();
            for(let i=0;i<DOMelements.length;i++){
                //the info goes back to the inp fileds
                DOMelements[i].value=e.target.parentElement
                .parentElement.children[i].textContent;
            }
            //remove the row
            tbody.removeChild(tr);
            sum-=Number(salaryEl.value);
            let sumSpanEl=document.getElementById('sum');
            sumSpanEl.textContent=sum.toFixed(2);

        })
        let btnElementsTd=document.createElement('td');
        btnElementsTd.appendChild(firedBtnEl);
        btnElementsTd.append(editBtnEl);

        tr.appendChild(btnElementsTd);
        tbody.appendChild(tr);
         //salary
        sum+=Number(salaryEl.value);
        let sumSpanEl=document.getElementById('sum');
         sumSpanEl.textContent=sum.toFixed(2);
         //clear inp fields
        for (const element of DOMelements) {
            element.value='';
        }
    }

    })
}
solve()