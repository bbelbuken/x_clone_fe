import React from 'react';
import { FooterData } from './footerdata/FooterData';
import { Link } from 'react-router-dom';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { MoreButtonData } from './morebuttondata/MoreButtonData';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <nav className="relative flex flex-wrap items-center justify-start px-4">
      {FooterData.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="my-0.5 min-w-0 cursor-pointer break-words pr-3 text-[13px] font-normal leading-4 tracking-[0.015em] text-[#71767b] hover:underline"
        >
          {item.title}
        </Link>
      ))}
      <Popover className={'absolute right-[83px] top-[17px]'}>
        <PopoverButton>
          <div className="flex items-center justify-center">
            <span className="text-[13px] leading-4 tracking-[0.015em] text-[#71767b] hover:underline">
              More
            </span>
            <svg viewBox="0 0 24 24" fill="#71767b" width={17} height={13}>
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </svg>
          </div>
        </PopoverButton>
        <PopoverPanel>
          <div className="max-h-[calc(-347.2px + 100vh)] absolute -right-3 top-[5px] flex max-w-[calc(384px)] flex-col overflow-y-auto rounded-xl bg-black shadow-morebox">
            {MoreButtonData.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="z-10 flex w-full min-w-0 flex-1 cursor-pointer whitespace-nowrap break-words px-4 py-[14px] text-[15px] font-bold leading-4 tracking-[0.010em] text-[#e7e9ea] transition-all hover:bg-[#16181c]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </PopoverPanel>
      </Popover>
      <div className="absolute left-4 top-11 z-0 flex items-center justify-center text-[13px] leading-3 tracking-[0.025em] text-[#71767b]">
        <span>&copy; {year} X Corp</span>
      </div>
    </nav>
  );
};
