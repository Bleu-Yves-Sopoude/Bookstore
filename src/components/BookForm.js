import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const newBook = {
    item_id: uuidv4(),
    title,
    author,
    category: 'book',
  };

  // wVuhDZngzRqOjmOnw2vm

  return (
    <section id="bookForm" className="Text-Style-12 column">
      <span>ADD NEW BOOK</span>
      <form id="form" className="row">
        <input
          type="text"
          name="title"
          id="titleInput"
          className="Text-Style-13"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="author"
          id="authorInput"
          className="Text-Style-13"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          type="submit"
          id="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addBook(newBook));
            setTitle('');
            setAuthor('');
          }}
        >
          Add Book
        </button>
      </form>
    </section>
  );
};
export default BookForm;
