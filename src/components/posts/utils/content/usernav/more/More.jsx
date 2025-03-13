import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import ThreeDotSVG from 'components/icons/ThreeDotSVG';
import PostPanelSettings from './postpanelsettings/PostPanelSettings';

const More = ({ account, post, currentAccount, currentAccountReposted }) => {
    return (
        <Popover>
            <PopoverButton className="absolute top-[5px] right-2 flex h-[34.75px] w-[34.75px] cursor-pointer items-center justify-center rounded-full text-[#71767b] transition-colors hover:bg-[#1d9bf022] hover:text-[#1d9bf0]">
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
                    currentAccountReposted={currentAccountReposted}
                />
            </PopoverPanel>
        </Popover>
    );
};

export default More;
