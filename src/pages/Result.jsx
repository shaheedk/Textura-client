import React, { useState } from "react";
import { assets } from "../assets/assets";

function Result() {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <form className="flex flex-col min-h-[90vh] justify-center items-center">
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-w-sm rounded-sm" />
          <span className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]" />
        </div>
        {loading && <p className="text-lg  mt-2 animate-pulse">Loading...</p>}
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 rounded-full mt-4">
          <input
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-gray-300"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-2 justify-center flex-wrap text-white text-sm p-0.5 mt-10 rounded-full">
          <p className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer" onClick={()=>setIsImageLoaded(false)}>
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
}

export default Result;
