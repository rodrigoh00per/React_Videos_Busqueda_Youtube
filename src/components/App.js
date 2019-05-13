import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("Gatitos"); //este es para la primera vez que se llamar por default
  }

  onTermSubmit = async term => {
    let result = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    console.log(result.data.items);
    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0] //para que por defecto el primer video sea el que muestre al user
    });
  };
  onselectVideo = video => {
    //cuando da click dentro del  div del functional component videoItem
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onselectVideo={this.onselectVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
