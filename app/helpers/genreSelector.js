import ComicBook from './comicBook'
import {curatedGenres} from './constants'
const genreList = {
  'Science-Fiction': 'concept/4015-56103',
  'Romance': 'concept/4015-56132',
  'Mystery': 'concept/4015-55842',
  'Horror': 'concept/4015-55939',
  'History': 'concept/4015-55924',
  'Fantasy': 'concept/4015-56043',
  'Fantasy -2': 'concept/4015-55884',
  'Drama': 'concept/4015-56132',
  'Religion/Spirituality': 'concept/4015-56101',
  'Biography': 'concept/4015-57184',
  'Superhero': 'concept/4015-49870',
  'Dark-Comedy': 'concept/4015-56054',
  'Parody': 'concept/4015-55693',
  'Adult': 'concept/4015-56064',
};

const randomizeGenre = (obj) => {
  const genreArray = Object.keys(obj);
  const randomNumber = Math.floor(Math.random() * genreArray.length);
  return genreArray[randomNumber];
};

const genreReturn = (obj) => {
  const key = randomizeGenre(obj);
  return obj[key] ? obj[key] : null;
};

export const randomGenre = genreReturn(genreList);

export const findGenre = (string, obj) => {
  const genreMatch = Object.keys(obj).filter((word) => {
    return word === string;
  });
  const genreObj = genreMatch.map((el) => obj[el]);
  return genreObj;
};


export const fetchSelectedGenre = (genre) => {
  const selectedComic = findGenre(genre, curatedGenres)
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const selectedKeys = Object.keys(selectedComic[0]);
  const arrayOfPromises = selectedKeys.map((comic) => {
    return fetch(proxyUrl + `https://comicvine.gamespot.com/api/${selectedComic[0][comic]}/?api_key=580e163d8ac98b1ffac84a2d62f73ecda71a448e&format=json`)
    .then(res => res.json());
  });
  return Promise.all(arrayOfPromises)
  .then(comicArray => {
    // console.log(comicArray, 'in promise.all');
    return comicArray.map((comic) => {
      const name = comic.results.name;
      const description = comic.results.description ? comic.results.description.replace(/<[^>]+>/g, '') : '';
      const comicBooks = new ComicBook(name, description);
      return comicBooks;
    });
  });
};


// comicArray.map((comic) => {
//   const firstComic = comic.results.issues[0].api_detail_url;
//   const firstIssueArray =  fetch(proxyUrl + firstComic + '?api_key=580e163d8ac98b1ffac84a2d62f73ecda71a448e&format=json')
//   .then(res => res.json())
//   console.log(firstIssueArray, 'fi array');
//   // .then(data = console.log(data))
//   return Promise.all(firstIssueArray)
//   .then(issue => console.log(issue.results.image.super_url))
// })
