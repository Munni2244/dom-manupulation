const inputName=document.getElementById('title');
const author=document.getElementById('author');
const year=document.getElementById('year');
const table=document.getElementById('tableId');
const button=document.getElementById('btn');
const errorMsg=document.getElementById('error');


button.addEventListener('click', () =>{
  
if(inputName.value=='' || author.value=='' || year.value==''){
    errorMsg.innerText='Please enter your value';

}

else{
    const tr= document.createElement('tr');
//book name//
const name= document.createElement('th');
name.innerHTML=inputName.value;
tr.appendChild(name);

//author name
const authorName= document.createElement('th');
authorName.innerHTML=author.value;
tr.appendChild(authorName);

//year
const newYear= document.createElement('th');
newYear.innerHTML=year.value;
tr.appendChild(newYear);

table.appendChild(tr);

// clear input///
inputName.value='';
author.value='';
year.value='';
errorMsg.innerText='';
}

})