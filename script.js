let searchbar=document.getElementById('search');
let button=document.getElementById('submit');
let result=document.getElementById('result');
let url="https://www.googleapis.com/books/v1/volumes?q="
const title=document.createElement('div');
const history= document.createElement('div');
let titleCont=document.getElementById('titleContainer');
const searchedItems=[];
button.addEventListener('click',

function(e){
    e.preventDefault();
    if(!searchbar.value==''){
        fetch(url+searchbar.value).then(res=>res.json()).then(data=>{
            console.log(result)        
            let books=data.items;
            console.log(books);  
            let date=new Date();      
          searchedItems.push({'value':searchbar.value,
        'date':date
        });        
            localStorage.setItem('value',JSON.stringify(searchedItems));       
            title.innerHTML=`<h1>Books results for ${searchbar.value}</h1>`
            titleCont.appendChild(title)
            history.innerHTML=`<button id='view'>View History</button>`
            titleCont.appendChild(history);            
            console.log(searchedItems)
            books.map(book=>{
                const textnode = document.createElement('div');
                textnode.id = "box";                
                textnode.innerHTML =`<div id='card'><img src="${book.volumeInfo.imageLinks.thumbnail}"><h2>Title:${book.volumeInfo.title}</h2><h2>Author : ${book.volumeInfo.authors}</h2></div>`;
                        result.appendChild(textnode)                     
                        console.log(data)
            })
              
    
            searchbar.addEventListener('keydown', (e)=>{
                result.innerHTML = ''
                title.innerHTML=`Please Search something interesting`
                titleCont.appendChild(title)
               

            })

            history.addEventListener('click', (e)=>{
console.log('hisoty')
window.location.href = 'history.html'

            })
            
        })
        
    
    }        
  
    }
       


)