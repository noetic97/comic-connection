import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ComicBook from '../ComicBook/ComicBook';
import Loader from '../Loader/Loader';
import ComicSelectorContainer from '../../containers/ComicSelectorContainer';
import { array, object, bool, func } from 'prop-types';

export default class ComicBookList extends Component {
  constructor(props) {
    super(props);
  }

  toggleComic(comic, id) {
    if (this.props.savedComics.length) {
      const savedKeys = this.props.savedComics.map(elem => Object.keys(elem)[0]);
      if (savedKeys.includes(id.toString())) {
        this.props.removeSavedComic(id);
        !this.props.isSaved;
        return;
      }
    }
    this.props.saveComic(comic, id);
    !this.props.isSaved;
  }

  render() {
    const comicArray = this.props.comics.map((comic) => {
      return <ComicBook history={ this.props.history }
                        comic={ comic }
                        isSaved={ this.props.isSaved }
                        saveComic={ () => this.toggleComic(comic, comic.id) }
                        savedComics={ this.props.savedComics }
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
  saveComic: func,
  isSaved: bool,
  savedComics: array,
  removeSavedComic: func,
};
