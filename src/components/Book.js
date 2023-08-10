import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({
  author, title, id,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{title}</h3>
      <h5>{author}</h5>
      <button type="button" id={id} onClick={() => dispatch(removeBook(id))}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Book;
