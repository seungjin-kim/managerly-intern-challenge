
const VideoResults = (props) => {
  <div className="video-results">
    {props.videos.map(video =>
      <VideoEntry key={} video={video} />
      )}
  </div>
}