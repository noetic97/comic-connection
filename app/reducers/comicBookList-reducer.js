import { fetchSelectedGenre, findGenre, curatedGenres } from '../helpers/genreSelector';

export const comicBookArray = (state = [], action) => {
  switch (action.type) {
  case 'GET_COMICS':
    const genreObj = findGenre(action.selectedGenre, curatedGenres);
    const comicArray = fetchSelectedGenre(genreObj[0]);

    return comicArray;
  default:
    return state;
  }
};
