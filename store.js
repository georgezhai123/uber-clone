import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

//data layer
export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
