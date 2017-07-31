import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ComicBook from '../ComicBook/ComicBook';
import Loader from '../Loader/Loader';
import ComicSelectorContainer from '../../containers/ComicSelectorContainer';
import { array, object, bool, func } from 'prop-types';

export default class ComicBookList extends Component {
  constructor() {
    super();
  }

  render() {
    const comicArray = this.props.comics.map((comic) => {
      return <ComicBook history={ this.props.history }
                        comic={ comic }
                        loadImages={ this.props.loadImages }
                        key={ comic.id } />;
    });
    const view = this.props.isLoading
               ? <Loader key={Math.random()}/>
               : comicArray;
    const genreTitle = (comicArray.length && !this.props.isLoading)
                     ? `Check out these amazing ${comicArray[0].props.comic.comicGenre} comics!!`
                     : null;
    return (
      <div>
        <ComicSelectorContainer />
        <h2 className="genre-title">{genreTitle}</h2>
          <div className="display-container">
            <CSSTransitionGroup
              className="comic-display"
              transitionName="example"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={0}>
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
  loadImages: func,
  imagesLoading: bool,
};
