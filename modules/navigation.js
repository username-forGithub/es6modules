export default function navigation() {
  const getList = document.querySelector('.list');
  const getAddNew = document.querySelector('.add_new');
  const getContact = document.querySelector('.contact');
  getList.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.add-block').style.visibility = 'hidden';
    document.querySelector('.add-block').style.position = 'absolute';
    document.querySelector('.contactsection').style.visibility = 'hidden';
    document.querySelector('.contactsection').style.position = 'absolute';
    document.querySelector('.list-block').style.position = 'relative';
    document.querySelector('.list-block').style.visibility = 'visible';
    document.querySelectorAll('header a').forEach((item) => {
      item.classList.remove('active');
    });
    e.target.classList.toggle('active');
  });
  getAddNew.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.list-block').style.visibility = 'hidden';
    document.querySelector('.list-block').style.position = 'absolute';
    document.querySelector('.contactsection').style.visibility = 'hidden';
    document.querySelector('.contactsection').style.position = 'absolute';
    document.querySelector('.add-block').style.position = 'relative';
    document.querySelector('.add-block').style.visibility = 'visible';
    document.querySelectorAll('header a').forEach((item) => {
      item.classList.remove('active');
    });
    e.target.classList.toggle('active');
  });
  getContact.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.list-block').style.visibility = 'hidden';
    document.querySelector('.list-block').style.position = 'absolute';
    document.querySelector('.add-block').style.visibility = 'hidden';
    document.querySelector('.add-block').style.position = 'absolute';
    document.querySelector('.contactsection').style.position = 'relative';
    document.querySelector('.contactsection').style.visibility = 'visible';
    document.querySelectorAll('header a').forEach((item) => {
      item.classList.remove('active');
    });
    e.target.classList.toggle('active');
  });
}