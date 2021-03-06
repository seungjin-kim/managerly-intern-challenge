import React from 'react';
import axios from 'axios';
import YOUTUBE_API_KEY from '../config/youtube.js';
import VideoResults from './VideoResults.jsx';
// import VideoMain from './VideoMain.jsx';
import Search from './Search.jsx';


export default class SearchMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      // mainVideo: {},
      // searchTerm: '',
    };
  }

  componentDidMount() {
    this.getPopularVideos();
  }

  getPopularVideos() {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&type=video&key=${YOUTUBE_API_KEY}`)
      .then(res => {
        console.log("getPopularVideos results", res);
        this.setState({
          videos: res.data.items,
          // mainVideo: res.data.items[0],
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

  // handleVideoEntryClick(video) {
  //   this.setState({
  //     mainVideo: video
  //   });
  // }

  searchVideos(query) {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${YOUTUBE_API_KEY}`)
      .then(res => {
        const id = []
        console.log("hello", res.data.items);
        res.data.items.forEach(element => id.push(element.id.videoId));
        console.log("IDDDDD", id);
        return axios.get('https://www.googleapis.com/youtube/v3/videos/', {
          params: {
            id: id.slice(1, 25).join(),
            part: 'snippet',
            key: YOUTUBE_API_KEY
          }
        })
      })
      .then(res => {
        console.log("new res", res)
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
        <nav>
          <br></br>
          Search
          <br />
          <Search handleSearchInputChange={this.searchVideos.bind(this)} />
        </nav>
        <div className="row">
          {/* <div className="col-one">
            <h5>Main Video</h5>
            <VideoMain 
              vid={this.state.mainVideo}
            />
          </div> */}
          <div className="col-two">
            <div><h5>Videos</h5></div>
            <VideoResults
              videos={this.state.videos}
              // handleVideoEntryClick={(e) => this.handleVideoEntryClick(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}