export const comics = (state = [], action) => {
  switch (action.type) {
  case 'ADD_COMICS_TO_STORE':
    return action.comics;
  default:
    return state;
  }
};
