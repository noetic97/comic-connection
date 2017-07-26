import { connect } from 'react-redux';
import ComicBook from '../components/ComicBook/ComicBook';

const mapStateToProps = (state) => {
  return {
    selectedGenre: state.selectedGenre,
  };
};


export default connect(mapStateToProps, null)(ComicBook);
