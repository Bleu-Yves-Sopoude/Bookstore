import BookForm from './BookForm';
import BookList from './BookList';
import BookProvider from './BookContext';

const Books = () => (
  <>
    <BookProvider>
      <h1>Books To Read</h1>
      <BookList />
      <BookForm />
    </BookProvider>
  </>
);
export default Books;
