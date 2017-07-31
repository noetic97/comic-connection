import { connect } from 'react-redux';
import { handleImages } from '../actions';
import ComicBookList from '../components/ComicBookList/ComicBookList';

const mapStateToProps = (state) => {
  return {
    comics: state.comics,
    isLoading: state.isLoading,
    imagesLoading: state.imagesLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadImages: () => {
      dispatch(handleImages());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicBookList);
