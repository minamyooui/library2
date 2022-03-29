const library = [];

const addBook = document.querySelector('#addBook');
addBook.addEventListener('click', openBookForm);

for(let i = 0; i < 2; i++) {
  const book = new Book('JoJo', 'JoJo', 447, true);
  addBookToLibrary(book);
}

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  library.push(book)
}

function displayBooks() {
  const cards =  document.querySelector('.cards');
  library.forEach(book => {
    const card = createCard(book);
    cards.appendChild(card);
  });
}

const createCard(book) {
  const card = document.createElement('div');
  card.classList.add('card');
  const title = document.createElement('p');
  title.textContent = 'Title: ' + book.title;
  const author = document.createElement('p');
  author.textContent = 'Author ' + book.author;
  const pages = document.createElement('p');
  pages.textContent = 'Pages: '+ book.pages;
  const read = document.createElement('p');
  read.textContent = book.read ? 'Read' : 'Not Read';
  card.appendChild
}

function openBookForm() {
  const form = document.querySelector('.form');
  form.classList.toggle('hideform');
}