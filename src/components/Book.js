import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/bookSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  author, title, id,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="bookCard row">
      <div className="details">
        <div className="bookDetails column">
          <span className="Text-Style-9 category">Book</span>
          <span className="Text-Style-5">{title}</span>
          <span className="Text-Style-8">{author}</span>
        </div>
        <div className="buttons">
          <button type="button" className="Text-Style-8">Comments</button>
          <button type="button" id={id} onClick={() => dispatch(removeBook(id))} className="Text-Style-8">
            Remove
          </button>
          <button type="button" className="Text-Style-8">Edit</button>
        </div>
      </div>
      <div className="stats row">
        <div className="progres">
          <CircularProgressbar
            value={68}
            styles={buildStyles({
              pathColor: '#307bbe',
              trailColor: '#e8e8e8',
            })}
          />
        </div>
        <div className="numbers column">
          <span className="Text-Style-10">68%</span>
          <span className="Text-Style-2 pale">Completed</span>
        </div>
        <div className="overview column">
          <span className="Text-Style-7 pale">CURRENT CHAPTER</span>
          <span className="Text-Style-4">Chapter 19</span>
          <button type="button" className="Text-Style-11">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
