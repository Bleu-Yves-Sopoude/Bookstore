import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { bookArray } = useSelector((store) => store.book);

  return (
    <div>
      {bookArray.map((item) => (
        <Book
          key={item.id}
          id={item.id}
          author={item.author}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default BookList;
