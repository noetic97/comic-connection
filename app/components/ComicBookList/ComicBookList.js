import React, { Component } from 'react';
import ComicBook from '../ComicBook/ComicBook';
import ComicSelectorContainer from '../../containers/ComicSelectorContainer';
import { array, object } from 'prop-types';

export default class ComicBookList extends Component {
  constructor() {
    super();
  }

  render() {
    const comicArray = this.props.comics.map((comic) => {
      return <ComicBook history={ this.props.history }
                        comic={ comic }
                        key={ comic.id } />;
    });
    return (
      <div>
        <ComicSelectorContainer />
        <div className="comic-display">
          {comicArray}
        </div>
      </div>
    );
  }
}

ComicBookList.propTypes = {
  comics: array,
  history: object,
};
