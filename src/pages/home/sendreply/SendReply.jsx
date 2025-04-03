import { useState } from 'react';
import PostNavData from '../sendpost/postnavdata/PostNavData';
import Button from 'components/buttons/Button';
import Form from '../sendpost/form/Form';
import WhoCanReply from '../sendpost/whocanreply/WhoCanReply';
import { useNavigate } from 'react-router-dom';
import { useReplyToPostMutation } from 'features/posts/postsApiSlice';
import LoadingSpinner from 'components/loading/LoadingSpinner';
const SendReply = ({
    modalRef,
    handleClose,
    currentAccount,
    replyClicked,
    postId,
    isOnStatus,
}) => {
    const [replyToPost, { isLoading }] = useReplyToPostMutation();
    const [tweet, setTweet] = useState('');
    const [media, setMedia] = useState([]);
    const [mediaType, setMediaType] = useState(null); // Centralized mediaType state
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    if (!currentAccount) {
        return <div>No account data found.</div>; // Handle case where account is undefined
    }

    const handleClick = () => {
        setIsClicked(true);
    };

    const handleMediaSelect = (fileOrFiles) => {
        // Convert the input to an array (if it's a single file, wrap it in an array)
        const newFiles = Array.isArray(fileOrFiles)
            ? fileOrFiles
            : [fileOrFiles];

        // Determine media type based on the first file
        const firstFile = newFiles[0];
        const mediaExtension = firstFile?.name?.split('.').pop()?.toLowerCase();
        if (['jpeg', 'jpg', 'png', 'webp'].includes(mediaExtension)) {
            setMediaType('image');
        } else if (['mp4', 'mov'].includes(mediaExtension)) {
            setMediaType('video');
        }

        // Append new files to the existing media state
        setMedia((prevMedia) => {
            const updatedMedia = [...(prevMedia || []), ...newFiles]; // Ensure prevMedia is an array
            return updatedMedia.slice(0, 4); // Ensure the total number of files does not exceed 4
        });
    };

    const handlePost = async () => {
        try {
            tweet.trim();
            await replyToPost({
                postId,
                content: tweet,
                userId: currentAccount._id,
                mediaFiles: media,
            }).unwrap();
            setTweet('');
            setMedia([]);
            setMediaType(null); // Reset mediaType after posting
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
            className={`${isOnStatus || replyClicked ? '' : 'border-b border-b-[#2f3336]'}relative flex px-4 pt-5 pb-1`}
            onClick={handleClick}
            onFocus={handleClick}
        >
            {isLoading && <LoadingSpinner />}
            <div className="absolute top-3.5 left-0 h-[1px] w-full bg-[#2f3336]"></div>

            <div
                className={`mt-3 mr-2 grow-0 basis-10 ${modalRef ? 'max-h-10' : ''}`}
            >
                <img
                    src={
                        currentAccount?.avatar || '/default_profile_200x200.png'
                    }
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
                    mediaType={mediaType} // Pass mediaType to Form
                    modalRef={modalRef}
                    replyClicked={replyClicked}
                    isOnStatus={isOnStatus}
                />

                {(isClicked || modalRef) && !replyClicked && !isOnStatus ? (
                    <div
                        className={`sticky top-0 -bottom-[1px] mt-[14px] flex w-full flex-wrap items-center justify-between border-b border-b-[#2f3336] ${modalRef ? '-ml-14 w-[570px]' : '-ml-2'}`}
                    >
                        <WhoCanReply />
                    </div>
                ) : null}
                <div
                    className={`flex min-h-10 w-full items-center justify-center ${isOnStatus ? 'mt-5' : isClicked ? 'mt-5' : 'mt-5'}`}
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
                className={`absolute right-4 bottom-[10px] px-[16.5px] py-[7px] text-[14.5px] text-black ${tweet.length !== 0 || media.length !== 0 ? 'bg-[#eff3f4]' : 'pointer-events-none bg-[#787a7a]'}`}
                onClick={handlePost}
            >
                <span>Post</span>
            </Button>
        </div>
    );
};

export default SendReply;
