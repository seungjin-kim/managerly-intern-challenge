import React from 'react';
import axios from 'axios';
import YOUTUBE_API_KEY from '../config/youtube.js'
import VideoResults from './VideoResults.jsx'


export default class SearchMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    console.log("Component did mount successful")
    this.getPopularVideos()
  }

  getPopularVideos() {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${YOUTUBE_API_KEY}`)
      .then(res => {
        this.setState({
          videos: res.items,
        })
      })
  }



  render () {

    return (
      <div>
        <nav className="navbar">
          Navbar
        </nav>
        <div className="row">
          <div classNAme="col-md-7">

          </div>
          <div className="col-md-5">
            <div><h5>List of Videos</h5></div>
            <VideoResults
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}