import React from 'react';
import VideoEntry from './Components/VideoEntry.jsx';

const VideoResults = (props) => (
  <div className="video-results">
    {props.videos.map(video =>
      <VideoEntry key={video.id.videoId} video={video} />
      )}
  </div>
);

export default VideoResults;