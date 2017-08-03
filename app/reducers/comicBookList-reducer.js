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
  const savedComicsArray = [...state];
  switch (action.type) {
  case 'ADD_SAVED_COMIC':
    savedComicsArray.push(Object.assign({}, { [action.id]: action.comic }));
    return savedComicsArray;
  case 'REMOVE_SAVED_COMIC':
    const filteredArray = savedComicsArray.filter(comic => {
      if (!comic[action.id]) {
        return comic[action.id] !== action.id;
      }
    });
    return filteredArray;
  default:
    return state;
  }
};

export const isSaved = (state = false, action) => {
  switch (action.type) {
  case 'COMIC_SAVED_BOOL':
    return action.bool;
  default:
    return state;
  }
};
