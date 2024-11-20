import React, { useRef } from 'react';
import video from '@/assets/college-video.mp4';
import '@/assets/VideoPlayer.css';

const VideoPlayer = ({ playState, setPlystate }) => {

  const player=useRef(null);

  const closePlayer=(e)=>{
    if(e.target === player.current){
      setPlystate(false);
    }
  }


  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} controls />
      {/* Close Button */}
      <button 
        onClick={() => setPlystate(false)} 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'red',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        Close
      </button>
    </div>
  );
};

export default VideoPlayer;
