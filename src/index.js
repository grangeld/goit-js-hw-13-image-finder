import getImg from './api/apiService.js';
import addList from './js/template.js';
import './css/main.css';

const ul = document.querySelector('.gallery');
const form = document.querySelector('#search-form');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');

form.addEventListener('submit', addNewImg);
btn.addEventListener('click', addNextImg);

let inputValut;
function addNewImg(event) {
  btn.removeAttribute('hidden');
  ul.innerHTML = '';
  event.preventDefault();
  const promise = getImg(input.value);
  promise.then(obj => addList(obj.hits));
  inputValut = input.value;
}

function addNextImg() {
  document.addEventListener('DOMContentLoaded', ready);
  const promise = getImg(inputValut);
  promise
    .then(obj => addList(obj.hits))
    .then(() => {
      setTimeout(() => {
        window.scrollBy({
          top: 800,
          behavior: 'smooth',
        });
      }, 200);
    });
}

function ready() {
  console.log('redy');
}
