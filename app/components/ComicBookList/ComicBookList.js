import React, { Component } from 'react';
import ComicBook from '../ComicBook/ComicBook';
import { COMIC_URL } from '../../helpers/constants';

export default class ComicBookList extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <ComicBook />
      </div>
    )
  }
}
