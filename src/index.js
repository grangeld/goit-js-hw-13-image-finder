import getImg from './api/apiService.js';
import addList from './js/template.js';
import './css/main.css';

const ul = document.querySelector('.gallery');
const form = document.querySelector('#search-form');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');

form.addEventListener('submit', addNewImg);
// btn.addEventListener('click', addNextImg);

let inputValut;
function addNewImg(event) {
  // btn.removeAttribute('hidden');
  ul.innerHTML = '';
  event.preventDefault();
  const promise = getImg(input.value);
  promise.then(obj => addList(obj.hits));
  inputValut = input.value;
}

function addNextImg() {
  const promise = getImg(inputValut);
  promise.then(obj => addList(obj.hits)).then(() => {});
}

window.addEventListener('scroll', function () {
  const block = document.querySelector('.gallery');
  let counter = 1;

  let contentHeight = block.offsetHeight; // 1) высота блока контента вместе с границами
  let yOffset = window.pageYOffset; // 2) текущее положение скролбара
  let window_height = window.innerHeight; // 3) высота внутренней области окна документа
  let y = yOffset + window_height;
  console.log(
    'contentHeight = ' +
      contentHeight +
      '  yOffset = ' +
      yOffset +
      '  window_height = ' +
      window_height,
  );
  // если пользователь достиг конца
  if (y >= contentHeight) {
    //загружаем новое содержимое в элемент
    addNextImg();
  }
});
