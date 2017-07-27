import React, { Component } from 'react';
import { func } from 'prop-types';

export default class ComicSelector extends Component {
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

  handleClick() {
    this.props.getComicBooks('Random');
  }

  render() {
    return (
      <div className="genre-selector">
        <select className="comic-genres"
                onChange={(e) => this.handleChange(e)}>
          <option value="Select a genre"
                  disabled
                  selected>Select a genre!</option>
          <option value="Science-Fiction">Science-Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Horror">Horror</option>
          <option value="Historical">Historical</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Drama">Drama</option>
          <option value="Religion/Spirituality">Religion/Spirituality</option>
          <option value="Auto/Biography">Auto/Biography</option>
          <option value="Comedy">Comedy</option>
          <option value="Children">Children</option>
          <option value="Superhero">Superhero</option>
        </select>
        <button className="get-comics-button"
                onClick={this.handleClick.bind(this)}>Get Random Comics</button>
      </div>
    );
  }
}

ComicSelector.propTypes = {
  getComicBooks: func,
};
