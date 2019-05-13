import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onselectVideo }) => {
  return (
    <div
      onClick={() => {
        onselectVideo(video);
      }}
      className="item video-item"
    >
      <img
        className="ui image image-video-item"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
