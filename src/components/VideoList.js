import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onselectVideo }) => {
  const listvideos_show = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onselectVideo={onselectVideo}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{listvideos_show}</div>;
};
export default VideoList;
