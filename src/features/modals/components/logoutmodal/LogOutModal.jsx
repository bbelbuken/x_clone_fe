import { useRef, useEffect } from 'react';
import Button from 'components/buttons/Button';
import { useNavigate } from 'react-router-dom';
import { TwitterSVG } from 'components/icons/TwitterSVG';
import { useSendLogOutMutation } from 'features/auth/authApiSlice';
import { useLoggedInAccounts } from 'hooks/useLoggedInAccounts';
import { setCurrentAccount } from 'features/accounts/accountSlice';
import { useDispatch, useSelector } from 'react-redux';
import { removeLoggedInAccount } from 'features/accounts/accountSlice';
import { setCredentials } from 'features/auth/authSlice';
import LoadingSpinner from 'components/loading/LoadingSpinner';

const LogOutModal = () => {
    const modalRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedInAccounts = useLoggedInAccounts();
    const currentAccount = useSelector(
        (state) => state.accounts.currentAccount,
    );

    const [sendLogOut, { isLoading, error }] = useSendLogOutMutation();

    const handleClose = () => {
        const previousRouteLogOut = localStorage.getItem('previousRouteLogOut');
        setTimeout(() => {
            navigate(previousRouteLogOut, {
                replace: true,
                state: { reload: true },
            });
        }, 30);
    };

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const clearRoutesUponLogOut = () => {
        Object.keys(localStorage).forEach((key) => {
            if (key.startsWith('previous')) {
                localStorage.removeItem(key);
            }
        });
        // Do not remove persist:root as it breaks persistence
    };

    const handleLogOut = async () => {
        try {
            await sendLogOut().unwrap();
            dispatch(removeLoggedInAccount(currentAccount._id));
            clearRoutesUponLogOut();

            // Set the currentAccount to the next available account or null
            const remainingAccounts = loggedInAccounts.filter(
                (account) => account._id !== currentAccount._id,
            );

            if (remainingAccounts.length > 0) {
                const nextAccount = remainingAccounts[0];
                dispatch(setCurrentAccount(nextAccount));

                // Update credentials for the next account
                dispatch(
                    setCredentials({
                        accessToken: nextAccount.accessToken, // Ensure this field exists
                    }),
                );

                navigate('/home');
            } else {
                dispatch(setCurrentAccount(null));

                // Clear credentials if no accounts are left
                dispatch(setCredentials({ accessToken: null }));

                navigate('/');
            }
        } catch (error) {
            console.error('Logout Failed', error);
        }
    };

    useEffect(() => {
        if (!currentAccount) {
            navigate('/');
        }
    }, [currentAccount, navigate]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div
            onClick={handleClickOutside}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#242e33]"
        >
            {isLoading && <LoadingSpinner />}
            <div
                ref={modalRef}
                className="mx-auto flex min-h-[calc(192px)] w-[320px] max-w-[80vh] flex-col rounded-2xl bg-black p-8"
            >
                <div className="flex w-full items-center justify-center">
                    <TwitterSVG className={'h-10 w-10'} />
                </div>
                <h1 className="mt-3 mb-2 min-w-0 text-left text-xl font-bold break-words">
                    Log out of X?
                </h1>

                <p className="w-full min-w-0 text-left text-[15px] leading-5 font-normal break-words text-[#71767b]">
                    You can always log back in at any time. If you just want to
                    switch accounts, you can do that by adding an existing
                    account.
                </p>

                <div className="mt-6 mb-[calc(-12px)] flex flex-col transition-colors">
                    <Button
                        size="profile-follow"
                        onClick={handleLogOut}
                        className="mb-3 min-h-[44px] bg-[#eff3f4] text-black hover:bg-[#d7dbdc]"
                    >
                        Log out
                    </Button>
                    <Button
                        size="profile-follow"
                        onClick={handleClose}
                        className="mb-3 min-h-[44px] hover:bg-[#eff3f41a]"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LogOutModal;
