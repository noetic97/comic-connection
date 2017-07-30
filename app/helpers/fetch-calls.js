import ComicBook from './comicBook';
import { curatedGenres, PROXY_URL, BASE_URL, API } from './constants';

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
  .then(comicVolumeArray => {
    const comicVolumes = returnComics(randomGenre, comicVolumeArray);
    console.log(comicVolumes, 'cv');
    return comicVolumes;
  })
};


const returnComics = (genre, array) => {
  console.log(array, 'in fetch');
  return array.map((comic) => {
    const firstComic = comic.results.issues[0].api_detail_url;
    return fetch(PROXY_URL + firstComic + API)
    .then(res => res.json())
    .then(data => createComics(genre, data));
  });
};


const createComics = (genre, comic) => {
  const comicGenre = genre;
  const name = comic.results.volume.name;
  const description = comic.results.description
                    ? comic.results.description.replace(/<[^>]+>/g, '')
                    : '';
  const id = comic.results.volume.id;
  const cover = comic.results.image.super_url;
  const comicBooks = new ComicBook(name, description, cover, id, comicGenre);
  return comicBooks;
};
