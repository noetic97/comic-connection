const getRandomComics = (url) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  fetch(proxyUrl + url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
};

export default getRandomComics;
