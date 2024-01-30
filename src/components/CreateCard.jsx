import React, { useRef } from "react";
import moment from "moment";
import { toast } from "react-toastify";

function validate(title, content) {
  if (title.length < 1) {
    return false;
  }
  if (content.length < 1) {
    return false;
  }
  return true;
}

function CreateCard({ CreatePost }) {
  const title = useRef("");
  const content = useRef("");

  const submit = () => {
    if (validate(title.current.value, content.current.value)) {
      const time = moment.now();

      const data = {
        title: title.current.value,
        content: content.current.value,
        time: time,
      };

      CreatePost(JSON.stringify(data));

      title.current.value = "";
      content.current.value = "";
    } else {
      title.current.value = "";
      content.current.value = "";
      toast.error("Enter Post Deatils");
    }
  };

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

          <div className="py-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Post Title:
            </label>
            <input
              ref={title}
              //   onChange={(e) => (title.current = e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="new post"
              required
            />
          </div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Post Content:
          </label>
          <textarea
            ref={content}
            // onChange={(e) => (content.current = e.target.value)}
            rows={5}
            placeholder="Something...."
            className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            onClick={() => submit()}
            type="button"
            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateCard;
