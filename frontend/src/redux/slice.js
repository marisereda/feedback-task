import { createSlice } from "@reduxjs/toolkit";
import { sendFeedBack } from "./operations";

const initialState = {
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendFeedBack.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(sendFeedBack.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? action.error.message;
    });
    builder.addCase(sendFeedBack.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
  },
});

export default slice.reducer;
