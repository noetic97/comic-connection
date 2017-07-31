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


export const imagesLoading = (state = false, action) => {
  switch (action.type) {
  case 'IMAGES_LOADED':
    return true;
  default:
    return state;
  }
};

export const savedComics = (state = [], action) => {
  switch (action.type) {
  case 'ADD_SAVED_COMIC':
  console.log(action.comic, 'action');
    return action.comic;
  default:
    return state;
  }
};
