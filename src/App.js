import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import youtube from './apis/youtube';

class App extends Component {
  state = { videos: [] };

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
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
