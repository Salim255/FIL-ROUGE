import { configureStore } from "@reduxjs/toolkit";
import salim from "./feature/homeSlice";
export const store = configureStore({
  reducer: {
    test: salim,
  },
});
