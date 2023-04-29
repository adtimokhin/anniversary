import React from 'react';
import './VideoYoutubePlayer.css';

const VideoYoutubePlayer = ({ videoId }) => {
  return (
    <div className="video-player-container">
      <iframe
        id="videoPlayerIframe"
        className="video-player"
        src={`https://www.youtube.com/embed/${videoId}?autohide=1&showinfo=0&rel=0`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoYoutubePlayer;
