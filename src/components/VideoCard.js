import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 pt-6 m-0.5 hover:cursor-pointer w-96">
      <img
        className="rounded-lg h-60 hover:rounded-none"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold pt-3 max-h-10 max-w-72 overflow-hidden">
          {title}
        </li>
        <li>{channelTitle}</li>
        <li>
          {statistics.viewCount > 1000000
            ? (statistics.viewCount / 1000000).toFixed(1) + "M"
            : (statistics.viewCount / 1000).toFixed(0) + "K"}{" "}
          Views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
