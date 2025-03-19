import { useRef, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCurrentAccount from 'hooks/useCurrentAccount';
import HeaderPhoto from 'pages/profile/profilebanner/headerphoto/HeaderPhoto';
import EditAvatarInput from './editavatarinput/EditAvatarInput';

const EditProfileModal = () => {
    const currentAccountData = useCurrentAccount();
    const { account: currentAccount, error, isLoading } = currentAccountData;
    const modalRef = useRef();
    const navigate = useNavigate();
    const [isModalClosing, setIsModalClosing] = useState(false);

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [media, setMedia] = useState(null);
    const [isCropping, setIsCropping] = useState(false); // To toggle cropping mode

    const handleClose = useCallback(() => {
        setIsModalClosing(true);
        setTimeout(() => {
            const previousRouteEditModal = localStorage.getItem(
                'previousRouteEditModal',
            );
            navigate(previousRouteEditModal || '/home');
        }, 300);
    }, [navigate]);

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message || 'Failed to fetch account'}</div>;
    }

    if (!currentAccount) {
        return <div>No account data found.</div>;
    }

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[#4a5c687c] transition-opacity duration-300 ${
                isModalClosing ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={handleClickOutside}
        >
            <div
                ref={modalRef}
                className="absolute top-[25%] left-[339px] z-50 mx-auto flex h-120 w-full max-w-[40vw] min-w-[600px] flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl bg-black"
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
                        <button className="flex min-h-8 min-w-8 grow cursor-pointer items-center justify-center rounded-full bg-[#eff3f4] px-4 transition-colors outline-none">
                            <span className="max-w-full min-w-0 text-center text-[14px] leading-4 break-words whitespace-nowrap text-black">
                                Save
                            </span>
                        </button>
                    </div>
                </div>
                <HeaderPhoto currentAccount={currentAccount} />

                <EditAvatarInput
                    media={media}
                    setMedia={setMedia}
                    isCropping={isCropping}
                    setIsCropping={setIsCropping}
                    currentAccount={currentAccount}
                />
            </div>
        </div>
    );
};

export default EditProfileModal;
