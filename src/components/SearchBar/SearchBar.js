import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputHandler = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              name="search"
              value={this.state.term}
              placeholder="Search any video..."
              onChange={this.onInputHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
