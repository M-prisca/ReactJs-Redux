import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { name: "", age: 0, email: "" },
  },
  reducers: {
    Login: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { Login: loginUser } = userSlice.actions;
export default userSlice.reducer;
