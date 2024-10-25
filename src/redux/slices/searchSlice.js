import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: [],
  reducers: {
    setSearchImg: (state, action) => {
      return [action.payload];
    },
  },
});
export const { setSearchImg } = searchSlice.actions;
export default searchSlice.reducer;
