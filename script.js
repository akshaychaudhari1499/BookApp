let searchbar=document.getElementById('search');
let button=document.getElementById('submit');
let result=document.getElementById('result');
let url="https://www.googleapis.com/books/v1/volumes?q="
const title=document.createElement('div');
title.id='interesting'
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
           let currentDate = new Date();
           let date;
           if(currentDate.getHours()>12){
           date =currentDate.getDate()+ "/" + currentDate.getMonth() + 1 + "/" + currentDate.getFullYear()+ ' at ' +Number(currentDate.getHours()-12) + ":" + currentDate.getMinutes() + " PM";
           }else{
            date=currentDate.getDate()+ "/" + currentDate.getMonth() + 1 + "/" + currentDate.getFullYear()+ ' at ' +currentDate.getHours() + " : " + currentDate.getMinutes() + " AM";
           }
          searchedItems.push({'value':searchbar.value,
        'date':date,
        'info':books
        });        
            localStorage.setItem('value',JSON.stringify(searchedItems));       
            title.innerHTML=`<h1 class='heading' >Books results for ${searchbar.value}</h1>`
            titleCont.appendChild(title)
            history.innerHTML=`<button class=' btn' id='view'>View History</button>`
            titleCont.appendChild(history);            
            console.log(searchedItems)
            books.map(book=>{
                const textnode = document.createElement('div');
                textnode.id = "box";                
                textnode.innerHTML =`<div id='card'><div id='img'><img src="${book.volumeInfo.imageLinks.thumbnail}"></div><h2>Title:${book.volumeInfo.title}</h2><h2>Author : ${book.volumeInfo.authors}</h2>
                <h2>Page Count : ${book.volumeInfo.pageCount}</h2><h2>Publisher:${book.volumeInfo.publisher}</h2>
                </div>`;
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