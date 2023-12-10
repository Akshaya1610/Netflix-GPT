import React from 'react'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoContainer'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  const movies = useSelector((store) =>  store.movie);
  const movieList = movies?.nowPlayingMovies;
  if(!movieList) return;

  const mainMovie = movieList[0]; 
  const {title, overview, id} = mainMovie;
  return (
    <div className='mobile-bg'> 
        <VideoTitle title={title} overview={overview} />
        <VideoContainer movieId={id} />
        
    </div>
  )
}

export default MainContainer;