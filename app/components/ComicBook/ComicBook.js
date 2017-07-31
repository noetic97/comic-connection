import React from 'react';
import { object, func } from 'prop-types';

const ComicBook = (props) => {
  return (
    <div className="comic-book-card">
      <h3 className="comic-title">{props.comic.title}</h3>
      <img src={props.comic.cover}
           onLoad={props.loadImages}
           alt="comic book cover"
           className="comic-cover"/>
      <button className="save-button"
              onClick={props.saveComic.bind(this)}>Save Me!</button>
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
};
