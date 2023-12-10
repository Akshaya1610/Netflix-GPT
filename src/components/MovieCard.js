import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import VideoModal from "./VideoModal";

const MovieCard = ({ posterPath, movieId }) => {
  const [openModal, setModalOpen] = useState(false);
  if (!posterPath) return null;

  return (
    <>
      <div className="w-36 md:w-48 pr-4 movie-card">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          onClick={() => setModalOpen(true)}
        />
      </div>
      <div className="">
        {openModal && (
          <VideoModal setOpenModal={setModalOpen} movieId={movieId} />
        )}
      </div>
    </>
  );
};

export default MovieCard;
