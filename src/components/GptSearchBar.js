import React, { useRef, useState } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addGptMovies}  from "../utils/gptSlice";
import Loader from "./loader/Loader";
const GptSearchBar = () => {
  const [loading, setLoading] = useState(false);
  const searchText = useRef(null);
  const dispatch = useDispatch(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const getMovieSuggestion = async () => {
    setLoading(true);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Leo, Kaithi, Jigarthanda, Irudhi Suttru, Remo";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // if (gptResults?.choices[0]) {
    //   console.log("message not found");
    // }
    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    setLoading(false);
    dispatch(addGptMovies({gptMovieNames :gptMovies, tmdbMovieResults :tmdbResults }))
  };

  return (
    <div>
    {loading ? (
      <Loader />
    ) : (
      <div className="pt-[10%] flex justify-center search-bar-pt">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder="What would you like to watch?"
          ref={searchText}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={getMovieSuggestion}
        >
          Search
        </button>
      </form>
    </div>
    )}
  </div>
    
  );
};
export default GptSearchBar;
