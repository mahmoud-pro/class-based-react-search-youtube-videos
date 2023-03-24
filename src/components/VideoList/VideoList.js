import React from 'react';

import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos, selectedVideoList, id }) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map((video) => {
        return (
          <VideoItem
            key={id}
            selectedVideoItem={selectedVideoList}
            videoItem={video}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
