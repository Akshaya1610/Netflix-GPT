import React from 'react'
import {  useSelector } from 'react-redux'

import useTrailer from '../hooks/useTrailer';

const VideoContainer = ({movieId}) => {
  const trailerVideo = useSelector((store)=> store.movie?.trailerVideo);
  useTrailer(movieId);
  return (
    <iframe className ='w-full  aspect-video'
      src = {"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
      title = "YouTube video player"
      allow ="accelerometer; autoplay; clipboard-write;
       encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    
  )
}

export default VideoContainer