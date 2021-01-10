import Handlebars from '../templates/card.hbs';

const ul = document.querySelector('.gallery');

function addPicture(obj) {
  ul.insertAdjacentHTML('beforeend', Handlebars(obj));
}

export default addPicture;
