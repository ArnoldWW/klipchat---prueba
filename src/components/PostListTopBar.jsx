import React from "react";

export default function TopBarPostList() {
  return (
    <ul className="flex justify-start gap-8 font-bold items-center mb-3">
      <li className="bg-neutral-700 py-2 px-5 rounded-3xl cursor-pointer">
        Trending
      </li>
      <li className="hover:bg-neutral-700 py-2 px-5 rounded-3xl cursor-pointer">
        Friends
      </li>
      <li className="hover:bg-neutral-700 py-2 px-5 rounded-3xl cursor-pointer">
        Private Channel
      </li>
    </ul>
  );
}
