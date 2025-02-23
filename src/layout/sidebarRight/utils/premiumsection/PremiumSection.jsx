import Button from 'components/buttons/Button';
import React from 'react';

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

      <Button
        className={'mt-[1px] bg-[#f91880] hover:bg-[#e01673]'}
        to={'i/premium_sign_up'}
      >
        Subscribe
      </Button>
    </aside>
  );
};

export default PremiumSection;
