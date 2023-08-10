import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryArray: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    checkStatus: (store) => store.status,
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
