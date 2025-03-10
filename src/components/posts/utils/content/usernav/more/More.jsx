import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import ThreeDotSVG from 'components/icons/ThreeDotSVG';
import PostPanelSettings from './postpanelsettings/PostPanelSettings';

const More = ({ account, post, currentAccount }) => {
    return (
        <Popover>
            <PopoverButton className="absolute -top-[6px] -right-2 flex h-[34.75px] w-[34.75px] items-center justify-center rounded-full text-[#71767b] transition-colors hover:bg-[#1d9bf022] hover:text-[#1d9bf0]">
                <div className="flex items-center justify-center">
                    <ThreeDotSVG />
                </div>
            </PopoverButton>
            <PopoverPanel>
                <PostPanelSettings
                    className={'relative'}
                    account={account}
                    post={post}
                    currentAccount={currentAccount}
                />
            </PopoverPanel>
        </Popover>
    );
};

export default More;
