import { createSlice } from "@reduxjs/toolkit";

const inputSearchSlice = createSlice({
  name: "searchInput",
  initialState: {
    searchValue: "ini default value",
  },
  reducers: {
    submitSearch: (state, action) => {
      // state.inputeSearch = action.payload;
      console.log(action.payload);
    },
  },
});

export const { submitSearch } = inputSearchSlice.actions;

export const searchValueData = (state) => state.searchInput.searchValue;

export default inputSearchSlice.reducer;
