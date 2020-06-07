import React from 'react';

const VideoEntry = (props) => (
  <div>
    <div>
      <img src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div>
      <div onClick={ () => props.handleVideoEntryClick(props.video) }>{props.video.snippet.title}</div>
    </div>
  </div>
)

export default VideoEntry;