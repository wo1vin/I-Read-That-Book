document.querySelector('button').addEventListener('click', getFetch)
//document.querySelector('h2').innerText = localStorage.getItem('books');

function getFetch(){
  const book = document.querySelector('input').value
  
  fetch(`https://www.googleapis.com/books/v1/volumes?key=AIzaSyAfl0o4jdW9dsw1iVjT0vZmOPTaElBnP-E&q=intitle:${book}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let titleInfo = data.items[0].volumeInfo;
        console.log(titleInfo)
        //logs all book data
        document.querySelector('h2').innerText = titleInfo.title
        if(!titleInfo.averageRating){
            document.querySelector('h3').innerText = ''
        } else {
            document.querySelector('h3').innerText += `: ${titleInfo.averageRating}/5`
        }
        document.querySelector('h4').innerText += `:\n${titleInfo.description}`
        //.accessInfo.volumeInfo.title
        //document.querySelector('h2').innerText += ``;
        //puts book titles from local storage into the DOM
        //document.querySelector('img').src = data[`ISBN:${isbn}`].cover.medium;
        //puts image of book cover into the DOM
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}