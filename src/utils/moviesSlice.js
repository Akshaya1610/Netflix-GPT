import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies : null,
    trailerVideo :null,
    popularMovies: null,
    topRatedMovies:null,
    upcomingMovies:null,
    trendingMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies= action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies, addUpcomingMovies, addTopRatedMovies,addTrendingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;