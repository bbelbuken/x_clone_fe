import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
const Messages = () => {
    return (
        <div className="h-full w-full">
            <Popover>
                <PopoverButton>
                    <div className="h-5 w-5 bg-amber-600"></div>
                </PopoverButton>
                <PopoverPanel>
                    <div className="mr-4 h-5 w-5 bg-blue-700"></div>
                </PopoverPanel>
            </Popover>
        </div>
    );
};

export default Messages;
