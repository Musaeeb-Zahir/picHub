import { createSlice } from "@reduxjs/toolkit";

const registerFormSlice = createSlice({
  name: "registerFormSlice",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      // return [...state, action.payload];
      state.push(action.payload);
    },
  },
});
export const { setUser } = registerFormSlice.actions;
export default registerFormSlice.reducer;
