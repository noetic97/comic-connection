export const fetchSelectedGenre = (obj) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const selectedKeys = Object.keys(obj);
  const arrayOfPromises = selectedKeys.map((comic) => {
    return fetch(proxyUrl + `https://comicvine.gamespot.com/api/${obj[comic]}/?api_key=580e163d8ac98b1ffac84a2d62f73ecda71a448e&format=json`)
    .then(res => res.json());
  });
  return Promise.all(arrayOfPromises)
  .then(comicArray => {
    // console.log(comicArray, 'in promise.all');
    return comicArray.map((comic) => {
      const name = comic.results.name;
      const description = comic.results.description;
      const comicBooks = new ComicBook(name, description);
      console.log(comicBooks, 'cb');
      return comicBooks;
    });
  });
};

export const loginUser = (loginCreds) => {
  return {
    type: 'LOGIN_USER',
    loginCreds,
  };
};

export const logOutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
};

export const signupUser = (signupCreds) => {
  return {
    type: 'SIGNUP_USER',
    signupCreds,
  };
};

export const getSelectedComics = (selectedGenre) => {
  return {
    type: 'GET_COMICS',
    selectedGenre,
  };
};
