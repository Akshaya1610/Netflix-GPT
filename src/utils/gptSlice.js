import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieNames: null,
    tmdbMovieResults: null,
  },
  reducers: {
    toggleGptView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { gptMovieNames, tmdbMovieResults } = action.payload;
      state.gptMovieNames = gptMovieNames;
      state.tmdbMovieResults = tmdbMovieResults;
    },
    clearGptMovies: (state) => {
      state.gptMovieNames = null;
      state.tmdbMovieResults = null;
    }
  },
});
export const { toggleGptView, addGptMovies, clearGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
