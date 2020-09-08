window.addEventListener('DOMContentLoaded', () => {
  function req() {
    fetch('some url')
    .then(data => data.json())
    .then(data => console.log(data));
  }
  req();
})

let pageLinks = [pageLinkFilms, pageLinkTv] = document.querySelectorAll('.page-link');
let pages = [pageFilms, pageTv] = document.querySelectorAll('.page');

pageLinkFilms.addEventListener('click', function() {
  pageFilms.classList.add('active');
  pageTv.classList.remove('active');
  pageLinkFilms.classList.add('active');
  pageLinkTv.classList.remove('active');
})
pageLinkTv.addEventListener('click', function () {
  pageFilms.classList.remove('active');
  pageTv.classList.add('active');
  pageLinkFilms.classList.remove('active');
  pageLinkTv.classList.add('active');
})

function signInForm() {
  let this.container = document.createElement('div'),
      this.title = documen.createElement('h2'),
      this.form = document.createElement('form'),
      this.input

}