import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList/VideoList';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    try {
      const response = await youtube.get('/search', {
        params: { q: term },
      });

      console.log(response);
      this.setState({ videos: response.data.items });
    } catch (error) {
      console.log(error);
    }
  };

  onVideoSelected = (video) => {
    console.log(video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          selectedVideoList={this.onVideoSelected}
        />
      </div>
    );
  }
}

export default App;
