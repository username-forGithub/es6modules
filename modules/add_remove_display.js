const getAppended1 = document.getElementById('book-container');
export default class AwesomeBooks {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static getData() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addition(book) {
    const books = AwesomeBooks.getData();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static remove(id) {
    const books = AwesomeBooks.getData();
    books.forEach((book, index) => {
      if (book.id === id) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks() {
    const books = AwesomeBooks.getData();
    const myBooks = books;
    myBooks.forEach((book) => {
      AwesomeBooks.addBookToList(book);
    });
  }

  static addBookToList(book) {
    const beAppended = document.createElement('div');
    beAppended.className = 'kitab';
    beAppended.innerHTML = `
       <h4>${book.title}</h4> <span class = 'creator'>${book.author}</span>
       <p class="identity-book">${book.id}</p>
       <button class = 'delete'>Delete</button>
       `;
    getAppended1.appendChild(beAppended);
  }

  static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}
