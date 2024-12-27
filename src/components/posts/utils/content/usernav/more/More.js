import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import ThreeDotSVG from 'components/svgs/ThreeDotSVG';
import PanelSettings from 'layout/sidebarRight/utils/whatshappening/panelsettings/PanelSettings';

import React from 'react';

const More = () => {
  return (
    <Popover>
      <PopoverButton className="absolute -right-2 -top-[6px] flex h-[34.75px] w-[34.75px] items-center justify-center rounded-full text-[#71767b] transition-colors hover:bg-[#1d9bf022] hover:text-[#1d9bf0]">
        <div className="flex items-center justify-center">
          <ThreeDotSVG />
        </div>
      </PopoverButton>
      <PopoverPanel>
        <PanelSettings className={'relative'} />
      </PopoverPanel>
    </Popover>
  );
};

export default More;
