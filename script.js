const addBook = document.querySelector('#add-book')
const bookTitle = document.querySelector('#book-title');
const author = document.querySelector('#author-name')
const pageNumbers = document.querySelector('#number')
const read = document.querySelector('#read')
const unread = document.querySelector('#unread')
let tbody = document.querySelector('#table-body')

let newRow;
let newBookTitle;
let newAuthor;
let newBookPages;
let statusTd;
let deleteTd;
let statusBtn;
let deleteBtn;
let statusText;
addBook.addEventListener('click', createNewTable)

statusText = document.querySelectorAll('.status')
statusText.forEach((e) => {
    e.addEventListener('click', function changeStatus(e) {
        if (e.target.textContent == read.value) {
            e.target.textContent == unread.value;
        } else if (e.target.textContent == unread.value) {
            e.target.textContent == read.value;
        }
        console.log(e.target)

    }
    )
})

function createNewTable() {

    newRow = document.createElement('tr')
    newBookTitle = document.createElement('td')
    newAuthor = document.createElement('td')
    newBookPages = document.createElement('td')
    statusTd = document.createElement('td')
    deleteTd = document.createElement('td')
    statusBtn = document.createElement('button')
    deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')

    newBookTitle.textContent += bookTitle.value;
    newAuthor.textContent += author.value;
    newBookPages.textContent += pageNumbers.value;
    deleteBtn.textContent += 'X';
    checkRadioValue()

    newRow.appendChild(newBookTitle);
    newRow.appendChild(newAuthor);
    newRow.appendChild(newBookPages);
    newRow.appendChild(statusTd);
    statusTd.appendChild(statusBtn)
    newRow.appendChild(deleteTd);
    deleteTd.appendChild(deleteBtn);
    tbody.appendChild(newRow);
    resetForm()
}


function checkRadioValue() {
    if (read.checked === true) {
        statusBtn.classList.add('green-bg')
        statusBtn.classList.add('status');
        return statusBtn.textContent += read.value;
    } else {
        statusBtn.classList.add('status');
        return statusBtn.textContent += unread.value;
    }
}



function resetForm() {
    bookTitle.value = '';
    author.value = '';
    pageNumbers.value = '';

}