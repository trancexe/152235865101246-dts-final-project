import { createSlice } from "@reduxjs/toolkit";

const inputSearchSlice = createSlice({
  name: "searchInput",
  initialState: {
    searchValue: "",
    dataFetch: {},
  },
  reducers: {
    submitSearch: (state, action) => {
      state.searchValue = action.payload;
      // console.log(action.payload);
    },
    dataFetch: (state, action) => {
      state.dataFetch = action.payload;
    },
  },
});

export const { submitSearch, dataFetch } = inputSearchSlice.actions;

export const searchValueData = (state) => state.searchInput.searchValue;
export const dataFetchData = (state) => state.searchInput.dataFetch;

export default inputSearchSlice.reducer;
