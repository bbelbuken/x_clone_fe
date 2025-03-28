import { Outlet } from 'react-router-dom';
import SideBarLeft from './sidebarLeft/SidebarLeft';
import SideBarRight from './sidebarRight/SideBarRight';
import ModalManager from 'features/modals/ModalManager';
import useCurrentAccount from 'hooks/useCurrentAccount';
import LoadingSpinner from 'components/loading/LoadingSpinner';
const Layout = () => {
    const currentAccountData = useCurrentAccount();
    const {
        account: currentAccount,
        error,
        isLoading,
        refetch,
    } = currentAccountData;
    const grok = location.pathname === '/i/grok';

    if (error) {
        return <div>Error: {error.message || 'Failed to fetch account'}</div>; // Show an error message
    }

    if (!currentAccount) {
        return <div>No account data found.</div>; // Handle case where account is undefined
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
                        className={`${grok ? 'border-l border-l-[#2f3336]' : 'border-x border-x-[#2f3336]'} relative flex max-w-[600px] flex-1 gap-[30px]`}
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
