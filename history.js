let searchedContent=document.getElementById('searches')
let clear=document.getElementById('clear');
console.log(clear)
let booksSearched=JSON.parse(localStorage.getItem('value'))
console.log(typeof(booksSearched));
let images=document.getElementById('box-search')
let home=document.createElement('button');
home.classList.add('btn');
home.classList.add('homebtn');
clear.addEventListener('click',(e)=>{
    console.log('clear clicked')
    e.preventDefault();
    localStorage.clear();
    searchedContent.innerHTML=`<h1 class='heading'>All previous searches Deleted</h1>`
    images.innerHTML='';
home.innerText='Go to home';
searchedContent.appendChild(home);
home.addEventListener('click',(e)=>{
    console.log('Home clicked')
    window.location.href= 'index.html';

})
console.log(images)
})
for(let i=0;i<= booksSearched.length ;i++){

let book=document.createElement('div');
book.innerHTML=`<div class='rectangle'>
<h3>${i+1}.</h3> <h3>${booksSearched[i].value}</h3> <h3>Searched on : ${booksSearched[i].date}</h3></div>`
searchedContent.appendChild(book)
console.log(booksSearched[i])
book.addEventListener('click',(e)=>{
console.log(e.target);

let historybooks=booksSearched[i].info;

historybooks.map(book=> {    
    const card1 = document.createElement('div');
    card1.id = "history-box";                
    card1.innerHTML =`<div id='card'><img src="${book.volumeInfo.imageLinks.thumbnail}"><h2>Title:${book.volumeInfo.title}</h2><h2>Author : ${book.volumeInfo.authors}</h2></div>`;
    images.appendChild(card1)                     
          
}
    
)
   
}
)}
