import { connect } from 'react-redux';
import { returnGenre, fetchComics } from '../actions';
import ComicBookList from '../components/ComicBookList/ComicBookList';

const mapStateToProps = (state) => {
  return {
    genreTitle: 'Random',
    comicBookArray: [],
    selectedGenre: state.selectedGenre
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComicBooks: (obj) => {
      dispatch(fetchComics(obj));
    },
    getGenre: (string) => {
      dispatch(returnGenre(string));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicBookList);
