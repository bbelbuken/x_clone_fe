import React from 'react';
import { Link } from 'react-router-dom';

const PremiumSection = () => {
  return (
    <aside className="text=[#e7e9ea] relative flex w-full flex-col items-start gap-[10px] px-4 py-3 tracking-tight">
      <div className="min-w-0 break-words text-[21px] font-bold leading-[22px]">
        <h2>Subscribe to Premium</h2>
      </div>
      <div className="mt-[1px] min-w-0 break-words text-[15px] font-normal leading-5 tracking-[0.025em] text-[#e7e9ea]">
        <p className="break-words">
          Subscribe to unlock new features and if eligible, receive a share of
          revenue.
        </p>
      </div>
      <Link className="transition-colors-custom mt-[1px] flex min-h-9 min-w-9 items-center justify-center rounded-full bg-[#f91880] px-4 outline-none hover:bg-[#e01673]">
        <div className="flex min-w-0 grow items-center justify-center break-words text-center text-[15px] font-bold leading-5">
          <p className="break-word mb-0.5 min-w-0 max-w-full overflow-hidden whitespace-nowrap text-center text-[15px] leading-8 tracking-[0.010em]">
            Subscribe
          </p>
        </div>
      </Link>
    </aside>
  );
};

export default PremiumSection;
