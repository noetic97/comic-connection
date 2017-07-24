import { fetchSelectedGenre, findGenre, curatedGenres } from '../helpers/genreSelector';

export const comicBookArray = (state = [], action) => {
  switch (action.type) {
  case 'GET_COMICS':
  console.log(state, 'state');
      const genreObj = findGenre(action.selectedGenre, curatedGenres);
      const comicArray = fetchSelectedGenre(genreObj[0])
      .then(comicBooks => console.log(state.push(comicBooks), 'state push'))
      console.log(comicArray, 'ca');
      return comicArray

  default:
    return state;
  }
};
