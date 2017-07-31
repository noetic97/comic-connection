import { comics, isLoading } from './comicBookList-reducer';

describe('comicBookList reducer', () => {
  it('comics should return an initial state of an empty array', () => {
    expect(comics(undefined, {})).toEqual([]);
  });

  it('Should return an updated state if given an action', () => {
    const comicsArray = [
      {
        title: 'Spiderman',
        cover: 'http://someplace.com',
        description: 'blah, blah, blah',
        id: '1',
      },
      {
        title: 'Saga',
        cover: 'http://someplaceelse.com',
        description: 'yay, yay, yay',
        id: '2',
      },
    ];

    expect(comics(comicsArray, {
      type: 'ADD_COMICS_TO_STORE',
      comics: comicsArray,
    })).toEqual(comicsArray);
  });

  it('isLoading should return an initial state of false', () => {
    expect(isLoading(undefined, {})).toEqual(false);
  });

  it('isLoading should return an updated state when given an action', () => {
    expect(isLoading(true, {
      type: 'COMICS_LOADING',
      bool: true,
    })).toEqual(true);
    expect(isLoading(false, {
      type: 'COMICS_LOADING',
      bool: false,
    })).toEqual(false);
  });
});
