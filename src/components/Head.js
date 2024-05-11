import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { API_KEY, YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    console.log(console.error());
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-1 m-1 sticky top-0 bg-white">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-16 mx-5 w-11 cursor-pointer"
          alt="Menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <a href="/">
          <img
            className="h-16 mx-2"
            alt="Youtube"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAU2yxqohBBHpdoffMcFVW1nli76kvaWR34UfDYN_S9g&s"
          />
        </a>
      </div>
      <div className="p-4 col-span-10 px-10  pl-40">
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            type="text"
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            className="w-7/12 border border-gray-400 p-1 rounded-l-full pl-4"
          />
          <button className="border border-gray-400 p-1 rounded-r-full px-4 bg-gray-200">
            🔍
          </button>
        </div>
        <div className="fixed bg-white pl-4 w-[33.3rem] shadow-md rounded-lg border border-gray-100">
          {showSuggestion && (
            <ul>
              {suggestion.map((s) => (
                <li className="pl-2 hover:bg-gray-100 hover:cursor-default pt-2">
                  🔍 {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="p-4 col-span-1 flex justify-end">
        <img
          className="h-8"
          alt="User"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
