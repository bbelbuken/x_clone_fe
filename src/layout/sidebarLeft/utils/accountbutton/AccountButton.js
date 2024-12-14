import React from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import ThreeDotSVG from 'components/svgs/ThreeDotSVG';
import PanelItems from './panelitems/PanelItems';
import ButtonItems from './buttonitems/ButtonItems';

const AccountButton = () => {
  return (
    <Popover className={'relative'}>
      <PopoverButton className={'relative w-full'}>
        <div
          className={
            'mb-3 flex min-h-[65px] w-full min-w-[52px] items-center justify-center overflow-hidden break-words rounded-full bg-transparent px-3 text-[17px] font-bold leading-5 outline-none transition-colors hover:bg-[#e7e9ea1a] active:bg-white'
          }
        >
          <ButtonItems gap={2} />
        </div>

        <div className="absolute -right-1 top-[15px] inline-flex h-[34.75px] w-[34.75px] rounded-full transition-colors">
          <div className="flex items-center justify-center">
            <ThreeDotSVG />
          </div>
          <div className="absolute right-[13px] top-[5px] h-[7px] w-[7px] rounded-full border-0 bg-[#f91880]"></div>
        </div>
      </PopoverButton>
      <PopoverPanel
        className={
          'absolute bottom-[88px] left-0 box-border flex h-auto w-[300px] flex-col items-center justify-center rounded-2xl bg-black shadow-morebox transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0'
        }
        transition
      >
        <PanelItems />
      </PopoverPanel>
    </Popover>
  );
};

export default AccountButton;
