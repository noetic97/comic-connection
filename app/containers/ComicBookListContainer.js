import { connect } from 'react-redux';
import { handleImages, saveComic, removeSavedComic, isSaved } from '../actions';
import ComicBookList from '../components/ComicBookList/ComicBookList';

const mapStateToProps = (state) => {
  return {
    comics: state.comics,
    isLoading: state.isLoading,
    imagesLoading: state.imagesLoading,
    savedComics: state.savedComics,
    isSaved: state.isSaved,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadImages: () => {
      dispatch(handleImages());
    },
    saveComic: (comic, id) => {
      dispatch(saveComic(comic, id));
    },
    removeSavedComic: (id) => {
      dispatch(removeSavedComic(id));
    },
    isSavedToggle: (bool) => {
      dispatch(isSaved(bool));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicBookList);
