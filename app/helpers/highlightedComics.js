const getRandomComics = (url) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  fetch(proxyUrl + url)
  .then(res => res.json())
  .then(data => cleanComics(data))
  .catch(err => console.log(err));
};

const cleanComics = (comicObj) => {
  if (comicObj.error === 'OK') {
    const comicBook = comicObj.results;
    const cbName = comicBook.name;
    const cbArray = comicBook.volume_credits

    console.log(comicBook);
    console.log(cbName);
    console.log(cbArray);
  } else {
    console.log(comicObj);
  }
}

const getCuratedComics = (url) => {
  
}

export default getRandomComics;
