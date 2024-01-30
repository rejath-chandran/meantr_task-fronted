import React from "react";
import moment from "moment";
import { FaTrash } from "react-icons/fa";
function PostCard({ id, title, content, time, itemdelete }) {
  const t = moment(time).format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div className="text-white  p-12">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1 h-[50%]">
          <img
            src={"https://placekitten.com/g/300/300"}
            className="rounded-full"
            alt="Logo"
            // height={100}
            // width={100}
          />
        </div>
        <div className="col-span-10">
          <h2 className="font-bold text-[1.5rem]">
            rejath chandran
            <span className="font-light text-gray-600">@rejath_chandran</span>
          </h2>
          <span className="text-gray-500">{t}</span>
          <h1 className="font-bold text-2xl py-4">{title}</h1>
          <p className="font-thin mt-2">{content}</p>
        </div>
        <div className="mt-4 col-span-1 text-red-700 hover:text-red-500 cursor-pointer">
          <FaTrash onClick={() => itemdelete(id)} />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
