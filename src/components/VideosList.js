import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({videos,onVideoSelect}) => {
  const myVideosList = videos.map((video) => {
    return <VideoItem key={ video.id.videoId} video={video} onVideoSelect={onVideoSelect} />;
  });

  return <div className="ui relaxed divided list ">{myVideosList}</div>;
};

export default VideosList;
