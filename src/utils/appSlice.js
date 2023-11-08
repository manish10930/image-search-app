import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState:{  
    userInput: "",
  },
  reducers: {
   
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
  },
});

export const { setUserInput } = appSlice.actions;
export default appSlice.reducer;
