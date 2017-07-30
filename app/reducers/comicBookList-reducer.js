export const comics = (state = [], action) => {
  switch (action.type) {
  case 'ADD_COMICS_TO_STORE':
    return action.comics;
  default:
    return state;
  }
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
  case 'COMICS_LOADING':
    return action.bool;
  default:
    return state;
  }
};
