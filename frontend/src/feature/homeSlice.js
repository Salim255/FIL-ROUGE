import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";
const initialState = {
  message: "",
  isLoading: true,
};

export const getMessage = createAsyncThunk("message/getmessag", async () => {
  try {
    const result = await customFetch.get("/comment");
    return result.data;
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
});
const testSlice = createSlice({
  name: "test",
  initialState,
  extraReducers: {
    [getMessage.pending]: (state) => {
      state.isLoading = true;
    },

    [getMessage.fulfilled]: (state, { payload }) => {
      console.log("====================================");
      console.log(payload);
      console.log("====================================");
      const { message } = payload;
      state.message = message;
      state.isLoading = false;
    },
    [getMessage.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default testSlice.reducer;
