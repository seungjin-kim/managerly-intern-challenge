import React from 'react';


const VideoEntry = (props) => (
  
  <div>
    <div>
      <br></br>
      <img src={props.video.snippet.thumbnails.medium.url} alt="" />
    </div>
    <div>
      <div>Title: {props.video.snippet.title}</div>
      <div>Channel: {props.video.snippet.channelTitle}</div>
      {/* <div>Views: {props.video.statistics.viewCount}</div> */}
      {/* <div>Likes: {props.video.statistics.likeCount}</div> */}
    </div>
  </div>
)

export default VideoEntry;