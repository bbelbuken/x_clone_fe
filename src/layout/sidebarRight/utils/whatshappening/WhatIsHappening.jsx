import React from 'react';
import { Trending } from './trending/Trending';
import { Link } from 'react-router-dom';
import ThreeDotSVG from 'components/icons/ThreeDotSVG';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import PanelSettings from './panelsettings/PanelSettings';

const WhatIsHappening = () => {
    return (
        <div className="block outline-none">
            <div className="flex max-w-full min-w-0 flex-col justify-between self-center px-4 py-3 text-xl leading-6 font-bold tracking-wide break-words outline-none">
                <h2 className="">What's happening</h2>
            </div>
            <div>
                {Trending.map((item, index) => (
                    <div key={index} className="relative">
                        <Link to={item.path} className="block">
                            {item.content}
                        </Link>

                        <Popover>
                            <PopoverButton className="absolute top-[6px] right-2 flex h-[34.75px] w-[34.75px] items-center justify-center rounded-full text-[#71767b] transition-colors hover:bg-[#1d9bf022] hover:text-[#1d9bf0]">
                                <div className="flex items-center justify-center">
                                    <ThreeDotSVG />
                                </div>
                            </PopoverButton>
                            <PopoverPanel>
                                <PanelSettings className={'relative'} />
                            </PopoverPanel>
                        </Popover>
                    </div>
                ))}

                <Link to={'explore'}>
                    <div className="block h-[52px] w-[348px] p-4 transition-colors hover:bg-[#ffffff09]">
                        <div className="min-w-0 text-[15px] leading-4 font-light break-words text-[#1d9bf0]">
                            <span>Show more</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default WhatIsHappening;
