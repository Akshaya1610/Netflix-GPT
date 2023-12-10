import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants'
import "./VideoModal.css";

const VideoModal = ({setOpenModal, movieId }) => {
    const [trailerKey, setTrailerKey] = useState(null)
    const getCurrentMovieTrailer = async ()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId +"/videos?language=en-US", API_OPTIONS)
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      setTrailerKey(trailer)
    }

useEffect(()=>{
    getCurrentMovieTrailer();
},[])
if(!trailerKey) return
  return (
  
   <div id="myModal" className="modal">
   <div className="modal-content">

     <div className="px-2">
       <span className="close"  onClick={() => {
            setOpenModal(false);
          }}>&times;</span>
     </div>
    
     <div className="modal-body">
     <iframe className ='w-full aspect-video'
      src = {"https://www.youtube.com/embed/"+ trailerKey?.key  + "?autoplay=1"}
      title = "YouTube video player"
      allow ="accelerometer; autoplay; clipboard-write;
       encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
     </div>
    

   </div>
 </div>
  );
};

export default VideoModal;
