import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getBooks } from '../redux/books/bookSlice';

const BookList = () => {
  const { bookArray, isLoading, error } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  const keys = Object.keys(bookArray);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return bookArray ? (
    <div>
      {keys.map((key) => (
        <Book
          key={key}
          id={key}
          author={bookArray[key][0].author}
          title={bookArray[key][0].title}
        />
      ))}
    </div>
  ) : (
    <h2>Bookstore is empty.</h2>
  );
};

export default BookList;