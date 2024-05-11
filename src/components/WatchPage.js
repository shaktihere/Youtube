import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { API_KEY, VIDEO_ID } from "../utils/constant";
import CommentsContainer from "./CommentsContainer";
import VideoDetails from "./VideoDetails";

const WatchPage = () => {
  const [videoDetail, setVideoDetail] = useState({});

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const dispatch = useDispatch();
  const video = VIDEO_ID + id + "&key=" + API_KEY;

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetail();
  }, []);

  const getVideoDetail = async () => {
    const data = await fetch(video);
    const json = await data.json();
    setVideoDetail(json.items[0]);
  };

  console.log(videoDetail);

  return (
    <div className="flex flex-col">
      <div className="pl-20 pt-3">
        <iframe
          width="850"
          height="500"
          src={"https://www.youtube.com/embed/" + id}
          title={"Random"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
      <VideoDetails info={videoDetail} />
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
