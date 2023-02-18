import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendFeedBack = createAsyncThunk(
  "feedback/send",
  async (feedback, thunkApi) => {
    const response = await fetch(import.meta.env.VITE_SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback),
    });

    const body = await response.json();
    if (!response.ok) {
      return thunkApi.rejectWithValue(body.message);
    }
  }
);
