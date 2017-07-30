import React from 'react';
import { object } from 'prop-types';

const ComicBook = (props) => {
  return (
    <div className="comic-book-card">
      <h3 className="comic-title">{props.comic.title}</h3>
      <img src={props.comic.cover}
           alt="comic book cover"
           className="comic-cover"/>
      <p className="comic-description">
        {props.comic.description}
      </p>
    </div>
  );
};

export default ComicBook;

ComicBook.propTypes = {
  comic: object,
};
