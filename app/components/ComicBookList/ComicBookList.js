import React, { Component } from 'react';
import ComicBook from '../ComicBook/ComicBook';
import { func } from 'prop-types';

export default class ComicBookList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getComicBooks('Random');
  }

  handleChange(e) {
    const genreTitle = e.target.value;
    this.props.getComicBooks(genreTitle);
  }

  render() {
    const comicArray = this.props.comics.map((comic) => {
      return <ComicBook history={ this.props.history }
                        comic={ comic }
                        key={ comic.id }/>;
    });
    return (
      <div>
        <select name="comic-genres"
                onChange={(e) => this.handleChange(e)}>
          <option value="Random"
                  name="Random">Random</option>
          <option value="Science-Fiction"
                  name="Science-Fiction">Science-Fiction</option>
          <option value="Romance"
                  name="Romance">Romance</option>
          <option value="Mystery"
                  name="Mystery">Mystery</option>
          <option value="Horror"
                  name="Horror">Horror</option>
          <option value="Historical"
                  name="Historical">Historical</option>
          <option value="Fantasy"
                  name="Fantasy">Fantasy</option>
          <option value="Drama"
                  name="Drama">Drama</option>
          <option value="Religion/Spirituality"
                  name="Religion/Spirituality">Religion/Spirituality</option>
          <option value="Auto/Biography"
                  name="Auto/Biography">Auto/Biography</option>
          <option value="Comedy"
                  name="Comedy">Comedy</option>
          <option value="Children"
                  name="Children">Children</option>
          <option value="Superhero"
                  name="Superhero">Superhero</option>
        </select>
        <button>Get New Comics</button>
        <div className="comic-display">
          {comicArray}
        </div>
      </div>
    );
  }
}

ComicBookList.propTypes = {
  getComicBooks: func,
};
