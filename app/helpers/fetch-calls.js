import ComicBook from './comicBook';
import { curatedGenres, PROXY_URL, BASE_URL, API, randomGenreList } from './constants';

const findGenre = (string, obj) => {
  const genreMatch = Object.keys(obj).filter((word) => {
    return word === string;
  });
  const genreObj = genreMatch.map((el) => obj[el]);
  return genreObj;
};

const randomizeGenre = (obj) => {
  const genreArray = Object.keys(obj);
  const randomNumber = Math.floor(Math.random() * genreArray.length);
  return genreArray[randomNumber];
};

export const fetchSelectedGenre = (genre) => {
  const randomGenre = randomizeGenre(curatedGenres);
  const selectedComic = (genre !== 'Random')
                      ? findGenre(genre, curatedGenres)
                      : findGenre(randomGenre, curatedGenres);
  const selectedKeys = Object.keys(selectedComic[0]);
  const arrayOfPromises = selectedKeys.map((comic) => {
    return fetch(PROXY_URL + BASE_URL + selectedComic[0][comic] + API)
    .then(res => res.json());
  });
  return Promise.all(arrayOfPromises)
  .then(comicArray => returnComics(comicArray));
};


const returnComics = (array) => {
  return array.map((comic) => {
    const firstComic = comic.results.issues[0].api_detail_url;
    return fetch(PROXY_URL + firstComic + API)
    .then(res => res.json())
    .then(data => createComics(data));
  });
};


const createComics = (comic) => {
  const name = comic.results.volume.name;
  const description = comic.results.description
                    ? comic.results.description.replace(/<[^>]+>/g, '')
                    : '';
  const id = comic.results.volume.id;
  const cover = comic.results.image.super_url;
  const comicBooks = new ComicBook(name, description, cover, id);
  return comicBooks;
};

// comicArray.map((comic) => {
//   const firstComic = comic.results.issues[0].api_detail_url;
//   const firstIssueArray = fetch(proxyUrl + firstComic + '?api_key=580e163d8ac98b1ffac84a2d62f73ecda71a448e&format=json')
//   .then(res => res.json())
//   console.log(firstIssueArray, 'fi array');
//   // .then(data = console.log(data))
//   return Promise.all(firstIssueArray)
//   .then(issue => console.log(issue.results.image.super_url))
// })

// export const getAdditionalRandomComics = (url) => {
//   debugger;
//   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//   fetch(proxyUrl + url)
//   .then(res => res.json())
//   .then(data => cleanComics(data))
//   .catch(err => console.log(err));
// };
//
// const randomizeGenre = (obj) => {
//   debugger;
//   const genreArray = Object.keys(obj);
//   const randomNumber = Math.floor(Math.random() * genreArray.length);
//   return genreArray[randomNumber];
// };
//
// const genreReturn = (obj) => {
//   debugger;
//   const key = randomizeGenre(obj);
//   return obj[key] ? obj[key] : null;
// };
//
// export const randomGenre = genreReturn(randomGenreList);
//
// const cleanComics = (comicObj) => {
//   if (comicObj.error === 'OK') {
//     const comicBook = comicObj.results;
//     console.log(comicBook);
//   } else {
//     console.log('I am broken');
//   }
// };
