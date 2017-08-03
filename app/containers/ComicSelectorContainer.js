import { connect } from 'react-redux';
import { fetchComics } from '../actions';
import ComicSelector from '../components/ComicSelector/ComicSelector';

const mapStateToProps = (state) => {
  return {
    imagesLoading: state.imagesLoading,
    comics: state.comics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComicBooks: (genre) => {
      dispatch(fetchComics(genre));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicSelector);
