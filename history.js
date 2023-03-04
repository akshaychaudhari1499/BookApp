let searchedContent=document.getElementById('searches')
let clear=document.getElementById('clear');
console.log(clear)
let booksSearched=JSON.parse(localStorage.getItem('value'))
console.log(typeof(booksSearched));

let home=document.createElement('button');
   
clear.addEventListener('click',(e)=>{
    console.log('clear clicked')
    e.preventDefault();
    localStorage.clear();
    searchedContent.innerHTML=`<h1>All previous searches Deleted</h1>`
home.innerText='Go to home';
searchedContent.appendChild(home);
home.addEventListener('click',(e)=>{
    console.log('Home clicked')
    window.location.href= 'index.html';

})
    
})
for(let i=0;i<= booksSearched.length ;i++){

let book=document.createElement('div');
book.innerHTML=`<div class="searchedContent" id="box-seach">
<h3>${i+1}.</h3> <h3>${booksSearched[i].value}</h3> <h3>Searched on : ${booksSearched[i].date}</h3>

</div>`
searchedContent.appendChild(book)
console.log(booksSearched[i])



} 

