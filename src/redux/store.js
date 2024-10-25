import { configureStore } from "@reduxjs/toolkit";
import registerFormSlice from "./slices/registerFormSlice";
import loginFormSlice from "./slices/loginFormSlice";
import searchSlice from "./slices/searchSlice";
import categorySlice from "./slices/categorySlice";
import FavouriteSlice from "./slices/FavouriteSlice";
import {
  getStateFromLocalStorage,
  saveStateToLocalStorage,
} from "./LocalStorage";
const preLoadState = getStateFromLocalStorage();
const appStore = configureStore({
  reducer: {
    registerFormState: registerFormSlice,
    loginFormState: loginFormSlice,
    searchSlice: searchSlice,
    category: categorySlice,
    favourites: FavouriteSlice,
  },
  preloadedState: {
    registerFormState: preLoadState, // Yeh ensure karega ke localStorage se jo state mili wo set ho jaye
  },
});
appStore.subscribe(() => {
  const state = appStore.getState();
  saveStateToLocalStorage(state.registerFormState); // User state ko localStorage mein save karna
});
export default appStore;
