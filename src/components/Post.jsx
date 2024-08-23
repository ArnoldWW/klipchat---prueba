import { useState } from "react";
import Avatar from "./Avatar";
import {
  GlobeAmericasIcon,
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
  ChatBubbleLeftEllipsisIcon,
  ShareIcon
} from "@heroicons/react/24/solid";

export default function Post({
  avartar = "/user.jpg",
  userName,
  minutes,
  likes = 0,
  comments = 0,
  shares = 0,
  postText
}) {
  const [like, setLike] = useState(false);
  const [counterLikes, setCounterLikes] = useState(Number(likes));

  const handleClick = () => {
    setLike(!like);

    if (!like) {
      setCounterLikes((c) => c + 1);
    } else {
      setCounterLikes((c) => c - 1);
    }
  };

  return (
    <article className="rounded-3xl p-5 bg-[#292927] space-y-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <Avatar image={avartar} />
          <p>
            {userName}
            <span className="mx-2 text-sm text-neutral-400">•</span>
            <span className="text-sm text-neutral-400">{minutes} min</span>
          </p>
          <span>
            <GlobeAmericasIcon className="size-5 text-neutral-500 block" />
          </span>
        </div>

        <div className="block p-1 hover:bg-neutral-700 rounded-full cursor-pointer">
          <EllipsisHorizontalIcon className="size-6 text-white block" />
        </div>
      </div>

      <div className="flex overflow-x-auto">
        <p>{postText}</p>
      </div>

      <div className="border-t-2 border-[#383835] pt-2 grid grid-cols-3">
        <button
          className={`flex justify-center gap-2 items-center px-5 p-2 hover:bg-neutral-700 rounded-3xl ${
            like ? "text-green-500" : "text-white"
          }`}
          onClick={handleClick}
        >
          <HandThumbUpIcon className="size-5 text-current block" />
          <span>{counterLikes > 0 ? `${counterLikes} likes` : "likes"}</span>
        </button>

        <button className="flex justify-center gap-2 items-center px-5 p-2 hover:bg-neutral-700 rounded-3xl">
          <ChatBubbleLeftEllipsisIcon className="size-5 text-current block" />
          <span>{comments > 0 ? `${comments}k comments` : "comments"}</span>
        </button>

        <button className="flex justify-center gap-2 items-center px-5 p-2 hover:bg-neutral-700 rounded-3xl">
          <ShareIcon className="size-5 text-current block" />
          <span>{shares > 0 ? `${shares}k shares` : "shares"}</span>
        </button>
      </div>
    </article>
  );
}
