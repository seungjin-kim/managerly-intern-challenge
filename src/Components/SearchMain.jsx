import React from 'react';
import axios from 'axios';
import YOUTUBE_API_KEY from '../config/youtube.js';
import VideoResults from './VideoResults.jsx';
import VideoMain from './VideoMain.jsx';


export default class SearchMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      mainVideo: {},
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.getPopularVideos();
  }

  getPopularVideos() {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&type=video&key=${YOUTUBE_API_KEY}`)
      .then(res => {
        console.log("getPopularVideos results", res);
        console.log(res.data.items[0])
        this.setState({
          videos: res.data.items,
          mainVideo: res.data.items[0],
        })
      })
      .catch(err => {
        if (err) {
          this.setState({
            videos: []
          })
        }
      });
  }

  handleVideoEntryClick(video) {
    this.setState({
      mainVideo: video
    });
  }

  searchVideos(query) {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.searchTerm}&key=${YOUTUBE_API_KEY}`)
    .then(res => {
      this.setState({
        videos: res.data.items,
      })
    })
    .catch(err => {
      if (err) {
        this.setState({videos: []})
      }
    });
  }



  render () {
    return (
      <div>
        <nav className="navbar">
          Navbar
        </nav>
        <div className="row">
          <div className="col-md-7">
            <h5>Main Video</h5>
            <VideoMain 
              vid={this.state.mainVideo}
            />
          </div>
          <div className="col-md-5">
            <div><h5>Related Videos</h5></div>
            <VideoResults
              videos={this.state.videos}
              handleVideoEntryClick={(e) => this.handleVideoEntryClick(e)}
            />
            
          </div>
        </div>
      </div>
    );
  }
}