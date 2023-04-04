import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg ">
      <div className="flex col-span-1 mx-2">
        <img
          className="h-10"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
        />
        <img
          className="h-10"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="youtube_logo"
        />
      </div>

      <div className="col-span-10 text-center ">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-400">🔍</button>
      </div>

      <div className="col-span-1">
        <img
          className="h-10"
          src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
