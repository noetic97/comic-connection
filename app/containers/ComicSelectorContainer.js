import { connect } from 'react-redux';
import { fetchComics } from '../actions';
import ComicSelector from '../components/ComicSelector/ComicSelector';

const mapDispatchToProps = (dispatch) => {
  return {
    getComicBooks: (genre) => {
      dispatch(fetchComics(genre));
    },
  };
};

export default connect(null, mapDispatchToProps)(ComicSelector);
