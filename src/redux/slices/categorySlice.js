import { createSlice } from "@reduxjs/toolkit";

const cetegorySlice = createSlice({
  name: "category",
  initialState: {
    query: "",
  },
  reducers: {
    setQuaryFromCategory: (state, action) => {
      state.query = action.payload;
    },
  },
});
export const { setQuaryFromCategory } = cetegorySlice.actions;
export default cetegorySlice.reducer;
