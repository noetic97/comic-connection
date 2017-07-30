import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ComicBook from '../ComicBook/ComicBook';
import Loader from '../Loader/Loader';
import ComicSelectorContainer from '../../containers/ComicSelectorContainer';
import { array, object, bool } from 'prop-types';

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
    const view = this.props.isLoading
               ? <Loader key={Math.random()}/>
               : comicArray;
    const genreTitle = (comicArray.length)
                     ? comicArray[0].props.comic.comicGenre
                     : null;
    return (
      <div>
        <ComicSelectorContainer />
        <h2 className="genre-title">{genreTitle}</h2>
        <div className="comic-display">
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={3000}>
            {view}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

ComicBookList.propTypes = {
  comics: array,
  history: object,
  isLoading: bool,
};
