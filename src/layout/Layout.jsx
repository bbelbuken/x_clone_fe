import { Outlet } from 'react-router-dom';
import SideBarLeft from './sidebarLeft/SidebarLeft';
import SideBarRight from './sidebarRight/SideBarRight';
import ModalManager from 'features/modals/ModalManager';
import useCurrentAccount from 'hooks/useCurrentAccount';
import LoadingSpinner from 'components/loading/LoadingSpinner';
import Lottie from 'lottie-react';
import Warning from '../assets/animations/Warning.json';
import { useState } from 'react';

const Layout = () => {
    const currentAccountData = useCurrentAccount();
    const {
        account: currentAccount,
        error,
        isLoading,
        refetch,
    } = currentAccountData;
    const grok = location.pathname === '/i/grok';
    const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message || 'Failed to fetch account'}</div>;
    }

    if (!currentAccount) {
        return (
            <div className="flex h-screen items-center justify-center text-gray-300">
                <Lottie autoplay loop animationData={Warning} />
                <div className="text-2xl font-bold">
                    Sorry, you need to be logged in to access this page.
                </div>
            </div>
        );
    }

    return (
        <>
            {isLoading && <LoadingSpinner />}
            <ModalManager />

            {/* Mobile Header */}
            <div className="fixed top-0 right-0 left-0 z-50 flex h-14 items-center justify-between border-b border-[#2f3336] bg-black px-4 md:hidden">
                <button
                    onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-[#181818]"
                >
                    <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <div className="flex h-10 w-10 items-center justify-center">
                    <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                    >
                        <g>
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </g>
                    </svg>
                </div>
                <div className="h-10 w-10"></div>
            </div>

            <div className="mx-auto flex w-full max-w-[1265px] flex-col pt-14 md:flex-row md:pt-0">
                {/* Left Sidebar */}
                <div
                    className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out max-sm:bg-black md:relative md:translate-x-0 ${
                        isLeftSidebarOpen
                            ? 'translate-x-0'
                            : '-translate-x-full'
                    }`}
                >
                    <div className="sticky top-0 z-10 self-start">
                        <SideBarLeft currentAccount={currentAccount} />
                    </div>
                </div>

                {/* Main Content */}
                <main className="flex flex-1 flex-col md:flex-row md:gap-[30px] md:pl-[19px]">
                    <div
                        className={`${
                            grok
                                ? 'border-l border-l-[#2f3336]'
                                : 'max-w-[600px] border-x border-x-[#2f3336]'
                        } relative flex w-full flex-1 flex-col gap-[30px] overflow-hidden`}
                    >
                        <Outlet />
                    </div>

                    {/* Right Sidebar */}
                    {!grok && (
                        <div
                            className={`fixed inset-y-0 right-0 w-64 lg:relative lg:translate-x-0 ${
                                isRightSidebarOpen
                                    ? 'translate-x-0'
                                    : 'translate-x-full'
                            }`}
                        >
                            <div className="sticky top-0 self-start">
                                <SideBarRight
                                    currentAccount={currentAccount}
                                    refetch={refetch}
                                />
                            </div>
                        </div>
                    )}
                </main>
            </div>

            {/* Overlay for mobile sidebars */}
            {(isLeftSidebarOpen || isRightSidebarOpen) && (
                <div
                    className="bg-opacity-50 fixed inset-0 mr-40 bg-black md:hidden"
                    onClick={() => {
                        setIsLeftSidebarOpen(false);
                        setIsRightSidebarOpen(false);
                    }}
                />
            )}
        </>
    );
};

export default Layout;
