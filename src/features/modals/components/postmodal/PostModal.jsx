import { useRef, useCallback, useState } from 'react';
import SendPost from 'pages/home/sendpost/SendPost';
import { useNavigate } from 'react-router-dom';
import useCurrentAccount from 'hooks/useCurrentAccount';
import LoadingSpinner from 'components/loading/LoadingSpinner';

const PostModal = () => {
    const currentAccountData = useCurrentAccount();
    const { account: currentAccount, error, isLoading } = currentAccountData;
    const modalRef = useRef();
    const navigate = useNavigate();
    const [isModalClosing, setIsModalClosing] = useState(false);

    const handleClose = useCallback(() => {
        setIsModalClosing(true);
        setTimeout(() => {
            const previousRoute = localStorage.getItem('previousRoute');
            navigate(previousRoute || '/home');
        }, 300);
    }, [navigate]);

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (error) {
        return <div>Error: {error.message || 'Failed to fetch account'}</div>; // Show an error message
    }

    if (!currentAccount) {
        return <div>No account data found.</div>; // Handle case where account is undefined
    }

    return (
        <>
            {isLoading && (
                <div className="absolute inset-0 z-50 flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            )}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-[#4a5c687c] transition-opacity duration-300 ${
                    isModalClosing ? 'opacity-0' : 'opacity-100'
                }`}
                onClick={handleClickOutside}
            >
                <div
                    ref={modalRef}
                    className="absolute top-[5%] right-1/2 mx-auto flex max-h-[90vh] w-[95%] max-w-[600px] translate-x-1/2 flex-col items-center justify-center overflow-hidden rounded-2xl bg-black sm:w-[90%] sm:min-w-[350px] md:w-[65%] md:min-w-[450px] lg:w-[70%] lg:min-w-[550px] xl:right-auto xl:left-[339px] xl:max-w-[40vw] xl:min-w-[600px] xl:translate-x-0 2xl:max-w-[30vw] 2xl:translate-x-80"
                >
                    <div className="sticky top-0 mx-auto flex h-[53px] w-full items-center justify-center px-4">
                        <div className="flex min-h-8 min-w-[56px] items-center justify-start">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="ml-[calc(-8px)] flex min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-full transition-colors outline-none hover:bg-[#eff3f41a]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="#eff3f4"
                                    width={20}
                                    height={20}
                                    className=""
                                >
                                    <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex h-full flex-1 justify-center"></div>
                        <div className="inline-flex min-h-8 min-w-14 items-center justify-center gap-3">
                            <button className="flex min-h-8 min-w-8 grow cursor-pointer items-center justify-center rounded-full px-4 transition-colors outline-none hover:bg-[#1d9bf01a]">
                                <span className="max-w-full min-w-0 text-center text-[14px] leading-4 font-bold break-words whitespace-nowrap text-[#1d9bf0]">
                                    Drafts
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full">
                        <SendPost
                            modalRef={modalRef}
                            handleClose={handleClose}
                            currentAccount={currentAccount}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostModal;
