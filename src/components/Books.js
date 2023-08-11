import BookForm from './BookForm';
import BookList from './BookList';
import BookProvider from './BookContext';

const Books = () => (
  <>
    <section className="content">
    <BookProvider>
      <BookList />
      <BookForm />
    </BookProvider>
  </section>
  </>
);
export default Books;
