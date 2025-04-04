import { useNavigate } from 'react-router-dom';
import VerifiedSVG from 'components/icons/VerifiedSVG';

const GoBack = ({ currentAccount, postCount, postId }) => {
    const navigate = useNavigate();
    const verified = currentAccount?.verified;

    const handleGetLocation = () => {
        const isStatusPage = location.pathname === `/status/${postId}`;
        const isFollowListPage = location.pathname.includes('/followlist');

        if (isStatusPage) {
            const previousRoute = localStorage.getItem(
                'previousRouteReplyModal',
            );
            navigate(previousRoute || '/home');
        } else if (isFollowListPage) {
            // Extract username from the current path
            const username = location.pathname.split('/')[1];
            navigate(`/${username}`);
        } else {
            const previousRoute = localStorage.getItem('previousRouteProfile');
            navigate(previousRoute || '/home');
        }
    };

    return (
        <div className="sticky top-0 z-30 h-[53px] w-full cursor-pointer bg-black/65 px-4 backdrop-blur-md">
            <div className="flex h-full items-center justify-start">
                <div className="flex min-h-8 min-w-14 items-stretch justify-start">
                    <button
                        className="transition-colors-feed ml-[calc(-8px)] flex min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-full hover:bg-[#eff3f41a]"
                        onClick={handleGetLocation}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width={20}
                            height={20}
                        >
                            <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
                        </svg>
                    </button>
                </div>

                <div
                    className={`${location.pathname === '/bookmarks' ? 'mt-1 -mb-[3px]' : postId ? 'mt-1 -mb-[3px]' : 'mb-[1px]'}relative flex h-full flex-col items-start justify-center`}
                >
                    <h2 className="flex max-w-full min-w-0 items-center justify-center overflow-hidden py-0.5 text-xl leading-7 font-bold tracking-[0.015em] break-words whitespace-nowrap text-[#e7e9ea]">
                        {location.pathname === '/bookmarks'
                            ? 'Bookmarks'
                            : postId
                              ? 'Post'
                              : currentAccount?.fullname}
                        <div className="ml-[1px]">
                            {verified && <VerifiedSVG width={20} height={20} />}
                        </div>
                    </h2>
                    <div className="max-w-full pb-1 text-[13px] leading-3 font-normal break-words whitespace-nowrap text-[#71767b]">
                        {location.pathname === '/bookmarks'
                            ? ''
                            : postId
                              ? ''
                              : `${postCount} posts`}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoBack;
