import React from 'react';

import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos, selectedVideoList }) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            selectedVideoItem={selectedVideoList}
            videoItem={video}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
