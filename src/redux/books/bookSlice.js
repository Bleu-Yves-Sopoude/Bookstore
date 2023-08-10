import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bookArray: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'Signature In The Cell',
      author: 'Stephen C. Meyer',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    addBook: (store, { payload }) => {
      const newBook = {
        title: payload.title,
        author: payload.author,
        id: uuidv4(),
      };
      store.bookArray.push(newBook);
    },
    removeBook: (store, action) => {
      const bookId = action.payload;
      const newBookArray = store.bookArray.filter((book) => book.id !== bookId);
      store.bookArray = newBookArray;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
