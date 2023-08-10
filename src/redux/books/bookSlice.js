import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const appId = 9aaWCD6PToeD6wXGBluj
const url =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9aaWCD6PToeD6wXGBluj/books";
export const getBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, thunkAPI) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      const errorMsg = `${error.code}: ${error.message}`;
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (newBook, thunkAPI) => {
    try {
      const response = await axios.post(url, newBook);
      thunkAPI.dispatch(getBooks());
      return response.data;
    } catch (error) {
      const errorMsg = `${error.code}: ${error.message}`;
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

export const removeBook = createAsyncThunk(
  "books/removeBook",
  async (endPoint, thunkAPI) => {
    console.log(endPoint);
    const removeURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9aaWCD6PToeD6wXGBluj/books/${endPoint}`;
    try {
      const response = await axios.delete(removeURL);
      thunkAPI.dispatch(getBooks());
      return response.data;
    } catch (error) {
      const errorMsg = `${error.code}: ${error.message}`;
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

const initialState = {
  bookArray: [],
  isLoading: false,
  error: null,
  added: null,
  removed: null,
};

const bookSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookArray = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.added = "sending...";
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.added = action.payload.data;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.added = action.payload.data;
      })
      .addCase(removeBook.pending, (state) => {
        state.removed = "sending...";
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.removed = action.payload.data;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.removed = action.payload.data;
      });
  },
});

export default bookSlice.reducer;
