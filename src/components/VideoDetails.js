import React from "react";

const VideoDetails = ({ info }) => {
  const { snippet, statistics } = info;
  return (
    <div>
      <h1 className="font-bold text-xl pl-20 pt-5">
        {snippet === undefined ? "Loading...." : snippet.title}
      </h1>
      <div className="flex">
        <h2 className="font-bold text-l pl-20 pt-5">
          {snippet === undefined ? "Loading...." : snippet.channelTitle}
        </h2>
        <button className="ml-20 p-1 mt-4 bg-black text-white rounded-r-2xl rounded-l-2xl pl-3 pr-3 border border-gray">
          Subscribe
        </button>
        <button className="ml-20 mt-4 pl-2 pr-3 pt-1 border border-gray flex rounded-l-3xl">
          <img
            className="h-6"
            src="https://t4.ftcdn.net/jpg/05/54/76/53/360_F_554765365_GV87lL7ynZSvGDQt26BBsJ89hfrYfDzU.jpg"
            alt="like"
          />
          <p className="ml-2">
            {statistics === undefined
              ? "Loading..."
              : (statistics.likeCount / 1000).toFixed(1)}
            K
          </p>
        </button>
        <button className="mt-4 pl-2 pr-3 pt-1 border border-gray flex rounded-r-3xl">
          <img
            className="h-8"
            src="https://thumbs.dreamstime.com/b/dislike-icon-vector-line-thumb-down-symbol-dislike-icon-vector-line-thumb-down-symbol-web-icon-113716357.jpg"
            alt="dislike"
          />
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;
