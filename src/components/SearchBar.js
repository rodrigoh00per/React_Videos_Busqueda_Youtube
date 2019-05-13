import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = e => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.term);
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Youtube Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
