

export const getRandomComics = (url) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  fetch(proxyUrl + url)
  .then(res => res.json())
  .then(data => cleanComics(data))
  .catch(err => console.log(err));
};

export const getCuratedComics = (url) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  fetch(proxyUrl + url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
};

const cleanComics = (comicObj) => {
  if (comicObj.error === 'OK') {
    const comicBook = comicObj.results;
    console.log(comicBook);
  } else {
    console.log('I am broken');
  }
};
