import React from "react";
import axios from "axios";
import { useState } from "react";
export default function SchoolUpdates() {
  const [title, setTitle] = useState("");
  const [news, setNews] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://localhost:9000/school/updates", { title, news })
      .then((result) => console.log("result:" + result))
      .catch((err) => {
        console.log("Error: " + err);
      });
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          Write Today's News{" "}
        </h1>
        <form onSubmit={handleSubmit} className="mt-6" method="post">
          <div className="mb-2">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-800"
            >
              title
            </label>
            <input
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="news"
              className="block text-sm font-semibold text-gray-800"
            >
              news
            </label>
            <input
              type="text"
              id="news"
              onChange={(e) => setNews(e.target.value)}
              //   rows={10}
              //   cols={20}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
