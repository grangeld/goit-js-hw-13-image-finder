const APIKEY = '19837689-b4668a99c8160a282132f247e';
let PAGE = 1;
let URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12`;

async function getNewImg(search) {
  const response = await fetch(URL + `&q=${search}&key=${APIKEY}&page=${PAGE}`);
  const img = response.json();
  PAGE++;
  return img;
}

export default getNewImg;
