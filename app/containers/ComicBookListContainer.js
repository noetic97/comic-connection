import { connect } from 'react-redux';
import { getSelectedComics } from '../actions';
import ComicBookList from '../components/ComicBookList/ComicBookList';

const mapStateToProps = (state) => {
  return {
    genreTitle: 'Random',
    comicBookArray: [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComicBooks: (string) => {
      dispatch(getSelectedComics(string));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicBookList);
