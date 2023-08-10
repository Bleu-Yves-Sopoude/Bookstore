import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: "Under construction",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories =
        action.payload === "Under construction"
          ? "Under construction"
          : state.categories;
    },
  },
});

export const { categoriesStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
