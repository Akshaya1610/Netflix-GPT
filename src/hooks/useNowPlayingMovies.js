import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies , addTrendingMovies} from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=> store.movie?.nowPlayingMovies);
    const getPlayingMovies = async()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2", API_OPTIONS)
      const data2 = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=3", API_OPTIONS)
      const json = await data.json();
      const json2 = await data2.json();
      dispatch(addNowPlayingMovies(json.results));
      dispatch(addTrendingMovies(json2.results));
      
    }
    useEffect(()=>{
      !nowPlayingMovies && getPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;