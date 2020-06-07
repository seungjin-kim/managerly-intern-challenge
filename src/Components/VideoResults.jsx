import React from 'react';
import VideoEntry from './VideoEntry.jsx';

const VideoResults = (props) => (
  <div className="video-results">
    {props.videos.map(video =>
      <VideoEntry key={video.id} video={video} handleVideoEntryClick={props.handleVideoEntryClick} />
      )}
  </div>
);

export default VideoResults;