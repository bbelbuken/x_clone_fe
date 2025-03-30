import { useRef, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCurrentAccount from 'hooks/useCurrentAccount';
import EditNameInput from './utils/editnameinput/EditNameInput';
import EditAvatarInput from './utils/editavatarinput/EditAvatarInput';
import EditBioInput from './utils/editbioinput/EditBioInput';
import EditLocationInput from './utils/editlocationinput/EditLocationInput';
import EditWebsiteInput from './utils/editwebsiteinput/EditWebsiteInput';
import EditDateInput from './utils/editdateinput/EditDateInput';
import EditHeaderInput from './utils/editheaderinput/EditHeaderInput';
import { useEditCurrentAccountMutation } from 'features/accounts/accountApiSlice';
import LoadingSpinner from 'components/loading/LoadingSpinner';
const EditProfileModal = () => {
    const { userId } = useParams();
    const currentAccountData = useCurrentAccount();
    const {
        account: currentAccount,
        error,
        isLoading,
        refetch,
    } = currentAccountData;
    const modalRef = useRef();
    const navigate = useNavigate();
    const [isModalClosing, setIsModalClosing] = useState(false);

    const [fullname, setFullname] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const [website, setWebsite] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [avatarMedia, setAvatarMedia] = useState(null);
    const [headerMedia, setHeaderMedia] = useState(null);
    const [isCropping, setIsCropping] = useState(false);
    const [isCroppingHeader, setIsCroppingHeader] = useState(false);

    const [editCurrentAccount, { isLoading: uploading, error: uploadError }] =
        useEditCurrentAccountMutation();

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

    if (error || uploadError) {
        return <div>Error: {error.message || 'Failed to fetch account'}</div>;
    }

    if (!currentAccount) {
        return <div>No account data found.</div>;
    }

    const handleEditCurrentAccount = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                userId,
                fullname,
                bio,
                location,
                website,
                dateOfBirth: `${month}-${day}-${year}`,
                avatar: avatarMedia,
                header_photo: headerMedia,
            };
            console.log(payload);

            const response = await editCurrentAccount(payload).unwrap();
            console.log('Response', response);
            navigate(`/${currentAccount.username}`);
            await refetch();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {isLoading ||
                (uploading && (
                    <div className="z-50">
                        <LoadingSpinner />
                    </div>
                ))}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-[#4a5c687c] transition-opacity duration-300 max-md:h-screen ${
                    isModalClosing ? 'opacity-0' : 'opacity-100'
                }`}
                onClick={handleClickOutside}
            >
                <div
                    ref={modalRef}
                    className="relative z-50 mx-auto flex w-[95%] flex-1 flex-col items-center justify-start overflow-hidden rounded-2xl bg-black max-md:h-160 sm:w-[90%] sm:min-w-[350px] md:mb-11 md:w-full md:max-w-[40vw] md:min-w-[600px] lg:h-190 xl:h-220"
                >
                    <div className="mx-auto flex h-[53px] w-full items-center justify-center px-4">
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
                            <button
                                className="flex min-h-8 min-w-8 grow cursor-pointer items-center justify-center rounded-full bg-[#eff3f4] px-4 transition-colors outline-none"
                                onClick={handleEditCurrentAccount}
                            >
                                <span className="max-w-full min-w-0 text-center text-[14px] leading-4 break-words whitespace-nowrap text-black">
                                    Save
                                </span>
                            </button>
                        </div>
                    </div>
                    <EditHeaderInput
                        headerMedia={headerMedia}
                        setHeaderMedia={setHeaderMedia}
                        isCroppingHeader={isCroppingHeader}
                        setIsCroppingHeader={setIsCroppingHeader}
                        currentAccount={currentAccount}
                    />
                    <div className="relative md:static">
                        <EditAvatarInput
                            avatarMedia={avatarMedia}
                            setAvatarMedia={setAvatarMedia}
                            isCropping={isCropping}
                            setIsCropping={setIsCropping}
                            currentAccount={currentAccount}
                        />
                    </div>
                    <div className="mt-20 h-14 w-full px-6">
                        <EditNameInput
                            fullname={fullname}
                            setFullname={setFullname}
                            currentAccount={currentAccount}
                        />
                        <EditBioInput
                            bio={bio}
                            setBio={setBio}
                            currentAccount={currentAccount}
                        />
                        <EditLocationInput
                            location={location}
                            setLocation={setLocation}
                            currentAccount={currentAccount}
                        />
                        <EditWebsiteInput
                            website={website}
                            setWebsite={setWebsite}
                            currentAccount={currentAccount}
                        />
                        <EditDateInput
                            day={day}
                            setDay={setDay}
                            month={month}
                            setMonth={setMonth}
                            year={year}
                            setYear={setYear}
                            currentAccount={currentAccount}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfileModal;
