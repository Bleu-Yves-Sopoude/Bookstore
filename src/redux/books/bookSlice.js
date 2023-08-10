import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

export const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
        state.books = [
          ...state.books,
          {
            id: Math.floor(Math.random() * 100),
            title: action.payload.title,
            author: action.payload.author,
          },
        ]
      },
      removeBook: (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.id)
      },
    },
});

export const { addBook, removeBook } = BookSlice.actions;

export default BookSlice.reducer;
