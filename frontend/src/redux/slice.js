import { createSlice } from "@reduxjs/toolkit";
import { sendFeedBack } from "./operations";

const initialState = {
  status: null,
  error: null,
};

export const slice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendFeedBack.fulfilled, (state) => {
      state.status = "fulfilled";
      state.error = null;
    });
    builder.addCase(sendFeedBack.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload ?? action.error.message;
    });
    builder.addCase(sendFeedBack.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
  },
});

export default slice.reducer;
