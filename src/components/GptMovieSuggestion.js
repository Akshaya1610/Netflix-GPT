import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const {gptMovieNames, tmdbMovieResults} = useSelector((store) => store.gpt);
  if (!gptMovieNames) return null;


  return (
    <div className="p-4 mt-4 bg-black text-white bg-opacity-90">
      <div>
        {gptMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={tmdbMovieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestion