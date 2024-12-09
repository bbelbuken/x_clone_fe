import React from 'react';
import { Link } from 'react-router-dom';

const PostButton = () => {
  return (
    <div className="my-[22px] w-[90%]">
      <Link className="transition-colors-custom flex min-h-[52px] min-w-[52px] items-center justify-center rounded-full bg-[#eff3f4] px-[32px] text-[#0f1419] hover:bg-[#d7dbdc]">
        <div className="flex min-w-0 flex-1 items-center justify-center text-sm font-bold leading-5">
          <span className="min-w-0 max-w-full overflow-hidden whitespace-nowrap text-center text-[17px] leading-5">
            Post
          </span>
        </div>
      </Link>
    </div>
  );
};

export default PostButton;
