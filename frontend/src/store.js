import { configureStore } from "@reduxjs/toolkit";
import salim from "./feature/test/testSlice";
export const store = configureStore({
  reducer: {
    test: salim,
  },
});
