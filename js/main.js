// get in put element
let filterInput=document.getElementById('filterInput');
//add event listrnrt
filterInput.addEventListener('keyup',filterNames);
function filterNames(){
//get the value of filterInput
let filterValue=document.getElementById('filterInput').value.toUpperCase();
//get names ul
let ul =document.getElementById('names');
//get li from ul
let li=ul.querySelectorAll('li.collection-item');
//loop through the collection item lis
for(let i=0; i<li.length;i++){
let a=li[i].getElementsByTagName('a')[0];
//if matched

if (a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
  li[i].style.display='';
}else{
  li[i].style.display='none';
}

}

}
