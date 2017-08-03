import React from 'react';
import PropTypes, { object, func, array, bool } from 'prop-types';

const ComicBook = (props) => {
  const saveButtonClass = () => {
    if (props.savedComics.length) {
      const savedKeys = props.savedComics.map(comic => Object.keys(comic)[0]);
      if (savedKeys.includes(props.comic.id.toString())) {
        return <button className="save-button active"
                       onClick={props.saveComic}>Saved!</button>;
      }
    } else if (props.isSaved === undefined) {
      return <button className="save-button active"
                     onClick={props.saveComic}>Saved!</button>;
    }
    return <button className="save-button"
                   onClick={props.saveComic}>Save Me!</button>;
  };

  return (
    <div className="comic-book-card">
      <h3 className="comic-title">{props.comic.title}</h3>
      <img src={props.comic.cover}
           onLoad={props.loadImages}
           alt="comic book cover"
           className="comic-cover"/>
      {saveButtonClass()}
      <p className="comic-description">
        {props.comic.description}
      </p>
    </div>
  );
};

export default ComicBook;

ComicBook.propTypes = {
  comic: object,
  loadImages: func,
  saveComic: func,
  isSaved: bool,
  comics: array,
  savedComics: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};
