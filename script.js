const library = [];

const openBookForm = document.querySelector('#openBookForm');
openBookForm.addEventListener('click', openForm);
const form = document.querySelector('form');
form.addEventListener('submit', addBook);
for(let i = 0; i < 3; i++) {
  const book = new Book('JoJo', 'JoJo', 447, true);
  addBookToLibrary(book);
}

displayBooks();

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  library.push(book)
}

function addBook(e) {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = getReadValue();
  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  displayBooks();
  e.preventDefault();
}

function getReadValue() {
  let radios = document.getElementsByName('read');
  for (let i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // do whatever you want with the checked radio
      return radios[i].id == 'yes' ? true : false;
      // only one radio can be logically checked, don't check the rest
    }
  }
}

function displayBooks() {
  clearDisplay();
  const cards =  document.querySelector('.cards');
  library.forEach(book => {
    const card = createCard(book);
    cards.appendChild(card);
  });
}

function  clearDisplay() {
  const cards =  document.querySelector('.cards');
  while(cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
}

function createCard(book) {
  const card = document.createElement('div');
  card.classList.add('card');
  const title = document.createElement('p');
  title.textContent = 'Title: ' + book.title;
  const author = document.createElement('p');
  author.textContent = 'Author: ' + book.author;
  const pages = document.createElement('p');
  pages.textContent = 'Pages: '+ book.pages;
  const read = document.createElement('p');
  read.textContent = book.read ? 'Read' : 'Not Read';
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  return card;
}

function openForm() {
  const form = document.querySelector('.form');
  form.classList.toggle('hideform');
}