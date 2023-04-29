let myLibrary = [];

const tbody = document.querySelector('#table-body')
const bookTitle = document.querySelector('#book-title')
const bookAuthor = document.querySelector('#author-name')
const bookPages = document.querySelector('#number')
const selectOption = document.querySelector('#select')
const addBookBtn = document.querySelector('#add-book')

let statusBtns = document.querySelectorAll('.status')
statusBtns.forEach((btn) => {
    btn.addEventListener('click', function changeStatus(item) {
        let text = item.target;
        if (text.textContent === 'Unread') {
            text.classList.add('green-bg')
            text.classList.add('status')
            text.textContent = 'Read';
        } else if (text.textContent === 'Read') {
            text.textContent = 'Unread';
            text.classList.remove('green-bg')
        }
        console.log(item.target.textContent)
    })
})

addBookBtn.addEventListener('click', addToLibrary)


let newRow;
let newTitle;
let newAuthor;
let newBookPages;
let newBookStatus;
let newDeleteBtn;

function Book(title, author, pages, status) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.status = status;
}

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
    newStatusBTn.classList.add('status')
    if (newStatusBTn.textContent === 'Read') {
        newStatusBTn.classList.add('green-bg')
    } else {
        return
    }
    newDeleteBtn.classList.add('delete')
    newBtnTd.classList.add('tdata')
    newStatusBTn.addEventListener('click', function changeStatus(item) {
        let text = item.target;
        if (text.textContent === 'Unread') {
            text.classList.add('green-bg')
            text.classList.add('status')
            text.textContent = 'Read';
        } else if (text.textContent === 'Read') {
            text.textContent = 'Unread';
            text.classList.remove('green-bg')
        }
        console.log(item.target.textContent)
    })

    newRow.appendChild(newTitle)
    newRow.appendChild(newAuthor)
    newRow.appendChild(newBookPages)

    newBookStatus.appendChild(newStatusBTn)
    newRow.appendChild(newBookStatus)
    newBtnTd.appendChild(newDeleteBtn)
    newRow.appendChild(newBtnTd)

    tbody.appendChild(newRow)
    myLibrary.push(book);

    displayBooks()
    resetForm()

}


function displayBooks() {

    for (i = 0; i < myLibrary.length; i++) {
        newTitle.textContent = myLibrary[i].title;
        newAuthor.textContent = myLibrary[i].author;
        newBookPages.textContent = myLibrary[i].pages;
        newStatusBTn.textContent = myLibrary[i].status;
        newDeleteBtn.textContent = 'X';
    }

}
function resetForm() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
}