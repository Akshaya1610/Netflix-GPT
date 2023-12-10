import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full  aspect-video absolute text-white  bg-gradient-to-r from-black pt-[20%] px-12'>
      <h1 className='title-class'>{title}</h1>
      <div className='row'>
      <p className='description'>{overview}</p>
      </div>
    
      <div className='mt-5'>
        <button className='play-btn hover:opacity-80'><span className='f18'>▶</span> Play</button>
        <button className='info-btn'><img className="info-icon" src= {require('../assets/info.png')}  alt="i"/><span className='btn-text-margin'>More info</span></button>
      </div>
    </div>
   
  )
}

export default VideoTitle