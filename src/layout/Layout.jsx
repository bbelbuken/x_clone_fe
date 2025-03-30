import { Outlet } from 'react-router-dom';
import SideBarLeft from './sidebarLeft/SidebarLeft';
import SideBarRight from './sidebarRight/SideBarRight';
import ModalManager from 'features/modals/ModalManager';
import useCurrentAccount from 'hooks/useCurrentAccount';
import LoadingSpinner from 'components/loading/LoadingSpinner';
import Lottie from 'lottie-react';
import Warning from '../assets/animations/Warning.json';

const Layout = () => {
    const currentAccountData = useCurrentAccount();
    const {
        account: currentAccount,
        error,
        isLoading,
        refetch,
    } = currentAccountData;
    const grok = location.pathname === '/i/grok';

    if (isLoading) {
        return <div>Loading...</div>; // Show a loading spinner or placeholder
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

            <div className="mx-auto flex w-[1265px]">
                <div className="sticky top-0 z-10 self-start">
                    <SideBarLeft currentAccount={currentAccount} />
                </div>
                <main className="mx-auto flex flex-1 gap-[30px]">
                    <div
                        className={`${grok ? 'border-l border-l-[#2f3336]' : 'max-w-[600px] border-x border-x-[#2f3336]'} relative flex flex-1 gap-[30px]`}
                    >
                        <Outlet />
                    </div>

                    {!grok && (
                        <div className="sticky top-0 self-start">
                            <SideBarRight
                                currentAccount={currentAccount}
                                refetch={refetch}
                            />
                        </div>
                    )}
                </main>
            </div>
        </>
    );
};

export default Layout;
