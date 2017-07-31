import { connect } from 'react-redux';
import { handleImages, saveComic } from '../actions';
import ComicBookList from '../components/ComicBookList/ComicBookList';

const mapStateToProps = (state) => {
  return {
    comics: state.comics,
    isLoading: state.isLoading,
    imagesLoading: state.imagesLoading,
    savedComics: state.savedComics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadImages: () => {
      dispatch(handleImages());
    },
    saveComic: (comic) => {
      dispatch(saveComic(comic));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicBookList);
