import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="min-w-64 p-4 h-screen sticky top-20 bg-white">
      <ul>
        <li className="flex pl-1 hover:bg-gray-200 hover:rounded-md">
          <Link to={"/"} className="flex">
            <img
              className="h-7 mr-5"
              alt="Home"
              src="https://static.vecteezy.com/system/resources/previews/014/910/291/non_2x/house-outline-icon-apartment-symbol-residence-icon-design-suitable-for-mobile-app-website-and-designer-needs-isolated-illustration-on-white-background-free-vector.jpg"
            />
            Home
          </Link>
        </li>
        <li className="flex pt-1 hover:bg-gray-200 hover:rounded-md">
          <img
            className="h-6 mr-5"
            alt="Shorts"
            src="https://logowik.com/content/uploads/images/youtube-shorts5863.jpg"
          />
          Shorts
        </li>
        <li className="flex pt-1 hover:bg-gray-200 hover:rounded-md">
          <img
            className="h-6 mr-6 ml-1"
            alt="Live"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7mdj7ep9DT2GI-LDLs1jC1sFOJBpQv9VBdElJvZSfQ&s"
          />
          Live
        </li>
        <li className="flex pt-1 hover:bg-gray-200 hover:rounded-md">
          <img
            className="h-6 mr-5"
            alt="Video"
            src="https://thumb.ac-illust.com/6f/6f432ac950d821a2b080caf538aa0f6e_t.jpeg"
          />
          Video
        </li>
      </ul>
      <h1 className="font-bold pt-5 ml-2">Subscriptions</h1>
      <ul className="ml-2">
        <li>Gaming</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold pt-5 ml-2">Watch Later</h1>
      <ul className="ml-2">
        <li>Gaming</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
