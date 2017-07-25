import { fetchSelectedGenre, findGenre } from '../helpers/genreSelector';
import { curatedGenres } from '../helpers/constants';

// export const selectedGenre = (state = {}, action) => {
//   console.log('IN SELECTED GENRE', action.type);
//   switch (action.type) {
//   case 'GET_GENRE':
//     const genreObj = findGenre(action.selectedGenre, curatedGenres);
//     return genreObj;
//   default:
//     return state;
//   }
// };

export const comics = (state = [], action) => {
  switch (action.type) {
  case 'ADD_COMICS_TO_STORE':
    return action.comics;
  default:
    return state;
  }
};
