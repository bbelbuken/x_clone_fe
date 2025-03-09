import { useState } from 'react';
import PostNavData from './postnavdata/PostNavData';
import Button from 'components/buttons/Button';
import Form from './form/Form';
import WhoCanReply from './whocanreply/WhoCanReply';
import { useNavigate } from 'react-router-dom';
import useCurrentAccount from 'hooks/useCurrentAccount';
import { useAddPostMutation } from 'features/posts/postsApiSlice';
const SendPost = ({ modalRef, handleClose }) => {
    const currentAccountData = useCurrentAccount();
    const {
        account: currentAccount,
        error: accountError,
        isLoading: isLoadingAccount,
    } = currentAccountData;
    const [addPost, { isLoading: isAddingPost, error: postError }] =
        useAddPostMutation();

    const [tweet, setTweet] = useState('');
    const [media, setMedia] = useState([]);
    const [mediaType, setMediaType] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    const getGoogleDriveDirectImageUrl = (url) => {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const fileId = urlParams.get('id');
        return `https://lh3.googleusercontent.com/d/${fileId}`; // Direct image URL
    };

    if (isLoadingAccount || isAddingPost) {
        return <div>Loading...</div>; // Show a loading spinner or placeholder
    }

    if (accountError || postError) {
        return <div>Error: {accountError.message || postError.message}</div>;
    }

    if (!currentAccount) {
        return <div>No account data found.</div>; // Handle case where account is undefined
    }

    const avatar = currentAccount.cachedAvatar
        ? `${currentAccount.cachedAvatar}`
        : currentAccount.avatar
          ? getGoogleDriveDirectImageUrl(currentAccount.avatar)
          : '/public/default_profile_200x200.png';

    const handleClick = () => {
        setIsClicked(true);
    };

    const handleMediaSelect = (fileOrFiles) => {
        // Convert the input to an array (if it's a single file, wrap it in an array)
        const newFiles = Array.isArray(fileOrFiles)
            ? fileOrFiles
            : [fileOrFiles];

        // Check if adding new files would exceed the limit of 4
        const totalFiles = (media?.length || 0) + newFiles.length;
        if (totalFiles > 4) {
            alert('You can only upload up to 4 media files.');
            return;
        }

        // Append new files to the existing media state
        setMedia((prevMedia) => {
            const updatedMedia = [...(prevMedia || []), ...newFiles]; // Ensure prevMedia is an array
            return updatedMedia.slice(0, 4); // Ensure the total number of files does not exceed 4
        });
    };

    const handleMediaType = (type) => {
        setMediaType(type);
        console.log(media);
    };

    const handlePost = async () => {
        try {
            tweet.trim();
            await addPost({
                content: tweet,
                userId: currentAccount._id,
                mediaFiles: media,
            }).unwrap();
            setTweet('');
            setMedia('');

            if (modalRef) {
                handleClose();
            }
        } catch (error) {
            console.error('Failed to add posts:', error);
        }
    };

    const navigateToUserProfile = (e) => {
        e.preventDefault();
        navigate(`/${currentAccount.username}`);
    };

    return (
        <div
            className="relative flex border-b border-b-[#2f3336] px-4 pt-1 pb-2"
            onClick={handleClick}
            onFocus={handleClick}
        >
            <div
                className={`mt-3 mr-2 grow-0 basis-10 ${modalRef ? 'max-h-10' : ''}`}
            >
                <img
                    src={avatar}
                    alt="user_avatar"
                    width={40}
                    height={40}
                    className="mt-[1px] h-10 w-10 cursor-pointer rounded-full object-cover transition-opacity duration-100 ease-in-out hover:opacity-60"
                    onClick={navigateToUserProfile}
                />
            </div>

            <div className="static mt-[6px] flex grow basis-0 flex-col">
                <Form
                    tweet={tweet}
                    setTweet={setTweet}
                    media={media}
                    modalRef={modalRef}
                    handleMediaType={handleMediaType}
                />
                {isClicked || modalRef ? (
                    <div
                        className={`sticky top-0 -bottom-[1px] mt-[14px] flex w-full flex-wrap items-center justify-between border-b border-b-[#2f3336] ${modalRef ? '-ml-14 w-[570px]' : '-ml-2'}`}
                    >
                        <WhoCanReply />
                    </div>
                ) : null}
                <div
                    className={`flex min-h-10 w-full items-center justify-center ${isClicked ? 'mt-2' : 'mt-5'}`}
                >
                    <nav
                        className={`mr-1 flex h-full w-full items-center justify-center ${modalRef ? '-ml-[105px]' : '-ml-2'}`}
                    >
                        <PostNavData handleMediaSelect={handleMediaSelect} />
                    </nav>
                </div>
            </div>

            <Button
                size="normal"
                className={`absolute right-4 bottom-[10px] px-[16.5px] py-[7px] text-[14.5px] text-black ${tweet || media ? 'bg-[#eff3f4]' : 'pointer-events-none bg-[#787a7a]'}`}
                onClick={handlePost}
            >
                <span>Post</span>
            </Button>
        </div>
    );
};

export default SendPost;
