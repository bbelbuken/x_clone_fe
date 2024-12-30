import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import ThreeDotSVG from 'components/svgs/ThreeDotSVG';
import PostPanelSettings from './postpanelsettings/PostPanelSettings';

const More = ({ account }) => {
  return (
    <Popover>
      <PopoverButton className="absolute -right-2 -top-[6px] flex h-[34.75px] w-[34.75px] items-center justify-center rounded-full text-[#71767b] transition-colors hover:bg-[#1d9bf022] hover:text-[#1d9bf0]">
        <div className="flex items-center justify-center">
          <ThreeDotSVG />
        </div>
      </PopoverButton>
      <PopoverPanel>
        <PostPanelSettings className={'relative'} account={account} />
      </PopoverPanel>
    </Popover>
  );
};

export default More;
