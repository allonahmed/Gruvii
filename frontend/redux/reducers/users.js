import { createSlice } from "@reduxjs/toolkit";

const savedInitialState = {
  uid: null
};

export const userStore = createSlice({
  name: "userStore",
  initialState: savedInitialState,
  reducers: {
    updateUID: (state, action) => {
      state.uid = action.payload;
    }
  }
});

export const { updateUID } = userStore.actions;

export default userStore.reducer;
