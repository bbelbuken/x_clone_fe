import { useCurrentAccount } from 'hooks/useAccounts';
import { useState } from 'react';
import PostNavData from './postnavdata/PostNavData';
import Button from 'components/buttons/Button';
import Form from './form/Form';
import WhoCanReply from './whocanreply/WhoCanReply';
import { useDispatch } from 'react-redux';
import { addPost } from 'features/posts/postSlice';
import { useNavigate } from 'react-router-dom';

const SendPost = ({ modalRef, handleClose }) => {
    const [tweet, setTweet] = useState('');
    const [media, setMedia] = useState('');
    const [mediaType, setMediaType] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const currentAccount = useCurrentAccount();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        setIsClicked(true);
    };

    const handleMediaSelect = (file) => {
        setMedia(file);
    };

    const handleMediaType = (type) => {
        setMediaType(type);
    };

    const handlePost = () => {
        tweet.trim();
        dispatch(addPost(tweet, currentAccount.id, media, mediaType));
        setTweet('');
        setMedia('');

        if (modalRef) {
            handleClose();
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
                className={`mr-2 grow-0 basis-10 ${modalRef ? 'max-h-10' : ''}`}
            >
                <img
                    src={currentAccount.avatar}
                    alt="user_avatar"
                    width={40}
                    height={40}
                    className="cursor-pointer rounded-full pt-3 transition-opacity duration-100 ease-in-out hover:opacity-60"
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
