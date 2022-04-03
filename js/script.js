document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').innerText = localStorage.getItem('books');

function getFetch(){
  const isbn = document.querySelector('input').value
  
  fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        //logs all book data
        if(!localStorage.getItem('books')){
          localStorage.setItem('books', data[`ISBN:${isbn}`].title);
          //if local storage is falsy/null, put something in there. every other time the else will run
        } else {
          let books = localStorage.getItem('books') + '\n' + data[`ISBN:${isbn}`].title;
          localStorage.setItem('books', books);
          //adds current title to books variable in local storage
        }
        
        document.querySelector('h2').innerText = localStorage.getItem('books');
        //puts book titles from local storage into the DOM
        //document.querySelector('img').src = data[`ISBN:${isbn}`].cover.medium;
        //puts image of book cover into the DOM
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}