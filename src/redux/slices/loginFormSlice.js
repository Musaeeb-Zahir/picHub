import { createSlice } from "@reduxjs/toolkit";

const loginFormSlice = createSlice({
  name: "loginFormSlice",
  initialState: [
    // {
    //   email: "musaeebzahir@gmail.com",
    //   password: "musaeeb",
    // },
  ],
  reducers: {
    setLoginUser: (state, action) => {
      state.push(action.payload);
    },
    removeLoginUser: (state, action) => {
      state = [];
      return state;
    },
  },
});
export const { setLoginUser, removeLoginUser } = loginFormSlice.actions;
export default loginFormSlice.reducer;
