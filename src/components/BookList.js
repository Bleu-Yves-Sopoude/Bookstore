import Book from './Book';
import { useTheme } from './BookContext';

const BookList = () => {
  const { bookCollection, setBookCollection } = useTheme();

  const handleRemove = (id) => {
    const newCollection = bookCollection.filter((book) => book.id !== id);
    setBookCollection(newCollection);
  };

  return (
    <div>
      {bookCollection.map((item) => (
        <Book
          key={item.id}
          id={item.id}
          author={item.author}
          title={item.title}
          remove={handleRemove}
        />
      ))}
    </div>
  );
};

export default BookList;
