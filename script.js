const bookTitle = document.querySelector('#book-title');
const author = document.querySelector('#author-name')
const pageNumbers = document.querySelector('#number')
const addBook = document.querySelector('#add-book')
const read = document.querySelector('#read')
const unread = document.querySelector('#unread')


addBook.addEventListener('click', function () {
    console.log(bookTitle.value);
    console.log(author.value);
    console.log(pageNumbers.value);
    console.log(read.value);
    console.log(unread.value);
})