import React, { Component } from 'react';
import ComicBook from '../ComicBook/ComicBook';
import { RANDOM_COMIC_URL, SELECTED_COMIC_URL } from '../../helpers/constants';
import { getRandomComics, getCuratedComics, apiCall } from '../../helpers/fetch-calls';

export default class ComicBookList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    getRandomComics(RANDOM_COMIC_URL);
    console.log('apicall', apiCall);
    // getCuratedComics(SELECTED_COMIC_URL);
  }

  render() {
    return (
      <div>
        <select name="comic-genres">
          <option value="Random">Random</option>
          <option value="Science-Fiction">Science-Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Horror">Horror</option>
          <option value="History">History</option>
          <option value="Fantasy">Fantasy</option>
          <option value="War">War</option>
          <option value="Religion/Spirituality">Religion/Spirituality</option>
          <option value="Biography">Biography</option>
          <option value="Superhero">Superhero</option>
        </select>
        <button>Get New Comics</button>
        <ComicBook />
      </div>
    );
  }
}
