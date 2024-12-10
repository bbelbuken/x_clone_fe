import React from 'react';
import { Trending } from './trending/Trending';
import { Link } from 'react-router-dom';

const WhatIsHappening = () => {
  return (
    <div className="block outline-none">
      <div className="flex min-w-0 max-w-full flex-col justify-between self-center overflow-hidden break-words px-4 py-3 text-xl font-bold leading-6 tracking-wide outline-none">
        <h2 className="">What's happening</h2>
      </div>
      <div>
        {Trending.map((item, index) => (
          <div key={index} className="relative">
            <Link to={item.path} className="block">
              {item.content}
            </Link>

            <div className="absolute right-2 top-[6px] inline-flex h-[34.75px] w-[34.75px] rounded-full text-[#71767b] transition-colors hover:bg-[#1d9bf022] hover:text-[#1d9bf0]">
              <button className="flex h-full w-full items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={18.75}
                  height={18.75}
                  className="hover:fill-[#1d9bf0]"
                >
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 2 2z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIsHappening;
