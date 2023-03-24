import React from 'react';

import './VideoItem.css';

const VideoItem = ({ videoItem, selectedVideoItem}) => {
  return (
    <div onClick={() => selectedVideoItem(videoItem)} className="video-item item">
      <img
        className="ui image"
        src={videoItem.snippet.thumbnails.high.url}
        alt={videoItem.snippet.title}
      />
      <div className="content">
        <div className="header">{videoItem.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
