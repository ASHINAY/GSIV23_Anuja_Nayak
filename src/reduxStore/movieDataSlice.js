import { createSlice } from "@reduxjs/toolkit";

export const movieDataSlice = createSlice({
  name: "movieData",
  initialState: {
    searchInput: "",
  },
  reducers: {
    changeSearchInput: (state, action) => {
        state.searchInput = action.payload;
      }
  }
});

export const { changeSearchInput } = movieDataSlice.actions;

export const CurrentSearchInput = (state) => state.movieData.searchInput;

export default movieDataSlice.reducer;
