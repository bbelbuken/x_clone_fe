import Button from 'components/buttons/Button';
import React from 'react';

const PremiumSection = () => {
    return (
        <aside className="text=[#e7e9ea] relative flex w-full flex-col items-start gap-[10px] px-4 py-3 tracking-tight">
            <div className="min-w-0 text-[21px] leading-[22px] font-bold break-words">
                <h2>Subscribe to Premium</h2>
            </div>
            <div className="mt-[1px] min-w-0 text-[15px] leading-5 font-normal tracking-[0.010em] break-words text-[#e7e9ea]">
                <p className="break-words">
                    Subscribe to unlock new features and if eligible, receive a
                    share of revenue.
                </p>
            </div>

            <Button
                className={'mt-[1px] bg-[#1d9bf0] hover:bg-[#1a8cd8]'}
                to={'i/premium_sign_up'}
                size="subscribe"
            >
                Subscribe
            </Button>
        </aside>
    );
};

export default PremiumSection;
