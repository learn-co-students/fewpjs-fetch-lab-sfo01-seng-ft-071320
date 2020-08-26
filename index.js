document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();

})
console.log("after")

// function fetchBooks() {
//   const promise = fetch('https://anapioficeandfire.com/api/books');

//   const pr2 = promise.then(function processResult(response) {
//     return response.json();
//   });
  
//   pr2.then(function processJson(json) {
//     renderBooks(json);
//   })
// }

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      renderBooks(json);
    });
}

//lambda function
// function fetchBooks() {
//   return fetch('https://anapioficeandfire.com/api/books')
//         .then(response => response.json())
//         .then(json => renderBooks(json))
// }

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}



