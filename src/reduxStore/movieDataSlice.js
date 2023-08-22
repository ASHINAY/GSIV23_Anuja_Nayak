import { createSlice } from "@reduxjs/toolkit";

export const movieDataSlice = createSlice({
  name: "movieData",
  initialState: {
    searchInput: "",
      movieList: [],       
      // yaha state ki current value update krtey hai
  },
  reducers: {
    changeSearchInput: (state, action) => {
        state.searchInput = action.payload;
      },
      changeMovieList: (state, action) =>{
        state.movieList = action.payload;
      }
  }
});

export const { changeSearchInput,changeMovieList } = movieDataSlice.actions;

export const CurrentSearchInput = (state) => state.movieData.searchInput;
export const CurrentMovieList = (state) => state.movieData.movieList;

export default movieDataSlice.reducer;
