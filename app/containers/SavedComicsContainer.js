import { connect } from 'react-redux';
import { removeSavedComic } from '../actions';
import SavedComics from '../components/SavedComics/SavedComics';

const mapStateToProps = (state) => {
  return {
    savedComics: state.savedComics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeSavedComic: (id) => {
      dispatch(removeSavedComic(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedComics);
