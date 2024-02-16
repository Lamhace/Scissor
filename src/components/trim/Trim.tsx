import React from "react";
import axios from "axios";
import { GiBoxCutter } from "react-icons/gi";

// const res = await https://api.shrtco.de/v2/shorten?url=${input}
// setResult(res.data.result.full_short_link)

export default function Trim() {
  const [url, setURL] = React.useState("");
  const [shortenedURL, setShortenedURL] = React.useState("");

  function userURL(event: any) {
    setURL(event.target.value);
  }

  function newUserURL() {
    setShortenedURL(url.substring(0, Math.floor(Math.random() * url.length)));
  }

  // const newUserURL = async () => {
  //     try {
  //         const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`)
  //         setShortenedURL(res.data.result.full_short_link2)
  //     }
  //     catch (err) {
  //         console.log('Error messgae:', err)
  //     }
  // }

  return (
    <div
      id="trim"
      className=" xl:mt-32 lg:mt-28 md:mt-24 sm:mt-20 xs:mt-16 xl:py-24 lg:py-20 md:py-16 sm:py-14 xs:py-12 sm:px-0 xs:px-6 bg-deepblue flex flex-col gap-10 items-center justify-center mb-8"
    >
      <div className="flex bg-tertiary xl:px-8 lg:px-4 md:px-2 xs:px-1 xl:pt-16 lg:pt-12 md:pt-11 sm:pt-10 xs:pt-9 xl:pb-20 lg:pb-14 md:pb-12 sm:pb-11 xs:pb-10 flex-col items-center justify-center rounded-2xl">
        <div className="text-primary ">
          <input
            className=" border-2 lg:py-4 md:py-3 sm:py-2 xs:py-1 lg:pl-4 md:pl-3 pl-2 sm:w-96 ls:w-80 xs:w-72 rounded-2xl border-secondary"
            type="text"
            value={url}
            onChange={userURL}
            placeholder="Place URL here..."
          />
        </div>
        <div className="flex sm:flex-row xs:flex-col sm:items-start xs:items-center lg:gap-1 md:gap-1 sm:gap-1 xs:gap-3  mt-6">
          <div className="">
            <select
              className=" border-2 lg:py-4 md:py-3 sm:py-2 xs:py-1 lg:pl-2 md:pl-3 xs:pl-2 lg:w-48 md:w-48 sm:w-48 ls:w-80 xs:w-72  rounded-2xl border-secondary"
              name="Domain"
              id="1"
            >
              <option value="1">Choose Domain</option>
              <option value="2">Scissor.com</option>
              <option value="3">Add Domain</option>
            </select>
          </div>
          <div>
            <input
              className=" border-2 lg:py-4 md:py-3 sm:py-2 xs:py-1 lg:pl-4 md:pl-3 xs:pl-2 lg:w-48 md:w-48 sm:w-48 ls:w-80 xs:w-72 rounded-2xl border-secondary"
              type="text"
              placeholder="Type Alias here"
            />
          </div>
        </div>
        <button
          className="flex items-center md:gap-7 sm:gap-6 xs:gap-5 justify-center text-tertiary bg-secondary pl-2 sm:w-96 ls:w-80 xs:w-72 lg:py-4 md:py-3 sm:py-2 xs:py-1 sm:rounded-3xl xs:rounded-2xl md:mt-6 sm:mt-5 xs:mt-4 sm:mb-8 xs:mb-7"
          onClick={newUserURL}
        >
          <span className="">Trim URL</span>
          <span className="">
            <GiBoxCutter />
          </span>
        </button>
        <div className=" text-secondary xl:w-full lg:w-2/4 xs:w-2/3 xs sm:px-0 xs:px-2 sm:text-base xs:text-sm ">
          By clicking TrimURL, I agree to the
          <span className="md:font-semibold sm:font-medium">
            Terms of Service
          </span>
          <span className="md:font-semibold sm:font-medium">
            Privacy Policy
          </span>
          and Use of Cookies.
        </div>
      </div>
      {shortenedURL && (
        <div className="flex flex-col gap-4 justify-center items-center bg-tertiary lg:px-10 md:px-8 sm:px-6 xs:px-5 lg:py-5 md:py-4 sm:py-5 xs:py-4 ">
          <div className=" text-secondary md:text-2xl sm:text-xl xs:text-lg">
            Generated Shortened URL:
          </div>
          <div className="text-deepblue md:text-xl sm:text-lg xs:text-base">{shortenedURL}</div>
        </div>
      )}
    </div>
  );
}
