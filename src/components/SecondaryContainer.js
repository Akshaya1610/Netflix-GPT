import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20 mobile-view-sec">
        {movies.nowPlayingMovies && (
          <div>
          <MovieList title={"Trending"} movies={movies?.trendingMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
      </div>
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
