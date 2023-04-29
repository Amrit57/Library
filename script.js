let myLibrary = [];

//Accesing values From Form.
const tbody = document.querySelector('#table-body')
const bookTitle = document.querySelector('#book-title')
const bookAuthor = document.querySelector('#author-name')
const bookPages = document.querySelector('#number')
const selectOption = document.querySelector('#select')
const addBookBtn = document.querySelector('#add-book')

//eventListener to change status in existing items in libary
let statusBtns = document.querySelectorAll('.status')
statusBtns.forEach((btn) => {
    btn.addEventListener('click', function (item) {
        let text = item.target;
        if (text.textContent === 'Unread') {
            text.classList.add('status')
            text.textContent = 'Read';
        } else if (text.textContent === 'Read') {
            text.textContent = 'Unread';
        }
    })
})

//eventListener to delete rows in existing items in libary
let deleteBtns = document.querySelectorAll('.delete')
deleteBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        btn.parentElement.parentElement.remove();
    })
})

//event to add books to the table
addBookBtn.addEventListener('click', addToLibrary)

//values to create new row,books data
let newRow;
let newTitle;
let newAuthor;
let newBookPages;
let newBookStatus;
let newDeleteBtn;
let deleteBtn;

//constructor to add books
function Book(title, author, pages, status) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.status = status;
}

//function that adds books to library
function addToLibrary() {
    let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, selectOption.value);
    newRow = document.createElement('tr')
    newTitle = document.createElement('td')
    newAuthor = document.createElement('td')
    newBookPages = document.createElement('td')

    newBookStatus = document.createElement('td')
    newStatusBTn = document.createElement('button')
    newBtnTd = document.createElement('td')
    newDeleteBtn = document.createElement('button')

    newTitle.classList.add('tdata')
    newAuthor.classList.add('tdata')
    newBookPages.classList.add('tdata')

    newBookStatus.classList.add('tdata')
    newBtnTd.classList.add('tdata')
    newStatusBTn.classList.add('status')
    newDeleteBtn.classList.add('remove')

    newRow.appendChild(newTitle)
    newRow.appendChild(newAuthor)
    newRow.appendChild(newBookPages)

    newBookStatus.appendChild(newStatusBTn)
    newRow.appendChild(newBookStatus)
    newBtnTd.appendChild(newDeleteBtn)
    newRow.appendChild(newBtnTd)

    tbody.appendChild(newRow)
    myLibrary.push(book); //pushing new books to myLibrary Array

    displayBooks()
    resetForm()
    deleteRow()
    newStatusBTn.addEventListener('click', changeStatus) // event to change status in newly created books
}

function changeStatus(item) {
    let text = item.target;
    if (text.textContent === 'Unread') {
        return text.textContent = 'Read';
    } else if (text.textContent === 'Read') {
        return text.textContent = 'Unread';
    }
}
//adding event and function to delete rows in newly created books
function deleteRow() {
    deleteBtn = document.querySelectorAll('.remove')
    deleteBtn.forEach((item) => {

        item.addEventListener('click', function () {
            item.parentElement.parentElement.remove();

        })
    })
}

//function to display books in table
function displayBooks() {

    for (i = 0; i < myLibrary.length; i++) {
        newTitle.textContent = myLibrary[i].title;
        newAuthor.textContent = myLibrary[i].author;
        newBookPages.textContent = myLibrary[i].pages;
        newStatusBTn.textContent = myLibrary[i].status;
        newDeleteBtn.textContent = 'X';
    }
}

//function which resets form input values.
function resetForm() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
}