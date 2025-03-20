import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CurrentAccountItems from '../buttonitems/ButtonItems';
import OtherAccountLists from './otheraccountlists/OtherAccountLists';
import { useLoggedInAccounts } from 'hooks/useLoggedInAccounts';

const PanelItems = ({ currentAccount, setIsOpen }) => {
    const navigate = useNavigate();
    const loggedInAccounts = useLoggedInAccounts();

    const otherLoggedInAccounts = loggedInAccounts.filter(
        (account) => currentAccount._id !== account._id,
    );

    const openLogOutModal = (e) => {
        e.preventDefault();
        const previousRouteLogOut = location.pathname;
        localStorage.setItem('previousRouteLogOut', previousRouteLogOut);
        setIsOpen(false);
        navigate('/logout', { state: { background: location.pathname } });
    };

    const openSignInModal = (e) => {
        e.preventDefault();
        localStorage.setItem('previousRouteSignIn', location.pathname);
        localStorage.removeItem('previousRouteWelcomePage');
        setIsOpen(false);
        navigate('i/flow/login', { state: { background: location.pathname } });
    };
    return (
        <div className="flex flex-1 flex-col justify-center self-stretch overflow-visible py-3 text-sm font-bold">
            {loggedInAccounts.length > 0 && (
                <>
                    <ol
                        className={`px-4 pt-0.5 ${otherLoggedInAccounts.length > 0 ? '' : 'my-2'}`}
                    >
                        <li className="relative">
                            <CurrentAccountItems
                                gap={1}
                                currentAccount={currentAccount}
                            />
                            <svg
                                viewBox="0 0 24 24"
                                className="absolute top-3 right-2"
                                width={18.75}
                                height={18.75}
                                fill="#00ba7c"
                            >
                                <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"></path>
                            </svg>
                        </li>
                    </ol>
                    {otherLoggedInAccounts.length > 0 && (
                        <OtherAccountLists
                            currentAccount={currentAccount}
                            otherLoggedInAccounts={otherLoggedInAccounts}
                        />
                    )}

                    <div className="my-3 h-[1px] bg-[#2f3336]"></div>
                </>
            )}
            <Link
                onClick={openSignInModal}
                className="w-full px-4 py-3 hover:bg-[#e7e9ea1a]"
            >
                Add an existing account
            </Link>
            {loggedInAccounts.length > 1 && (
                <Link className="w-full px-4 py-3 hover:bg-[#e7e9ea1a]">
                    Manage accounts
                </Link>
            )}

            <Link
                className="w-full px-4 py-3 hover:bg-[#e7e9ea1a]"
                onClick={openLogOutModal}
            >{`Log out @${currentAccount.username}`}</Link>

            <svg
                viewBox="0 0 24 24"
                width={24}
                height={15}
                className="drop-shadow-morebox absolute -bottom-[10px] left-28 rotate-180"
            >
                <path d="M22 17H2L12 6l10 11z" fill="black"></path>
            </svg>
        </div>
    );
};

export default PanelItems;
