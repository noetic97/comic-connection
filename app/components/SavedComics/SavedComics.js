import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ComicBook from '../ComicBook/ComicBook';
import { array, func, bool } from 'prop-types';

const SavedComics = (props) => {
  const comicArray = props.savedComics.map((comic) => {
    const key = Object.keys(comic)[0];
    return <ComicBook comic={ comic[key] }
                      saveComic={ () => props.removeSavedComic(comic[key].id) }
                      isSaved={ props.isSaved }
                      savedComics={ comic[key] }
                      key={ comic[key].id } />;
  });
  return (
    <div>
      <h2 className="genre-title">Your Saved Comics!</h2>
        <div className="display-container">
          <CSSTransitionGroup
            className="comic-display"
            transitionName="example"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={0}>
            {comicArray}
          </CSSTransitionGroup>
        </div>
    </div>
  );
};

export default SavedComics;

SavedComics.propTypes = {
  comics: array,
  savedComics: array,
  removeSavedComic: func,
  isSaved: bool,
};
