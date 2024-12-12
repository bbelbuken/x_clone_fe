import React from 'react';
import { Trending } from './trending/Trending';
import { Link } from 'react-router-dom';
import ThreeDotSVG from 'components/svgs/ThreeDotSVG';

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

            <div className="absolute right-0 top-[6px] inline-flex h-[34.75px] w-[34.75px] rounded-full text-[#71767b] transition-colors hover:bg-[#1d9bf022] hover:text-[#1d9bf0]">
              <button className="flex items-center justify-center">
                <ThreeDotSVG />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIsHappening;
