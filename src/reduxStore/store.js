import { configureStore } from "@reduxjs/toolkit";
import movieDataReducer from "./movieDataSlice";

export default configureStore({
  reducer: {
    movieData: movieDataReducer
  }
});
