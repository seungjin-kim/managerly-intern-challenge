import React from 'react';
import axios from 'axios';


export default class SearchMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidMount() {
    this.getPopularVideos();
  }

  getPopularVideos() {

  }

  render () {

    return (
      <div>
        Hi
      </div>
    );
  }
}