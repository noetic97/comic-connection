import { connect } from 'react-redux';
import { fetchComics, isLoading } from '../actions';
import ComicBookList from '../components/ComicBookList/ComicBookList';

const mapStateToProps = (state) => {
  return {
    comics: state.comics,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLoading: (bool) => {
      dispatch(isLoading(bool));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicBookList);
