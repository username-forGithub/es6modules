import AwesomeBooks from './modules/add_remove_display.js';
import datejs from './modules/date.js';
import navigation from './modules/navigation.js';

const getAppended = document.getElementById('book-container');
document.addEventListener('DOMContentLoaded', AwesomeBooks.displayBooks());
document.getElementById('form').addEventListener('submit', (e) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = Math.floor(Math.random() * 1000) + 1;
  id.toString();
  e.preventDefault();
  const newBook = new AwesomeBooks(title, author, id);
  AwesomeBooks.addBookToList(newBook);
  AwesomeBooks.clearFields();
  AwesomeBooks.addition(newBook);
});
getAppended.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
  const tity = parseInt(e.target.parentElement.children[2].innerText, 10);
  AwesomeBooks.remove(tity);
});

navigation();
datejs();
