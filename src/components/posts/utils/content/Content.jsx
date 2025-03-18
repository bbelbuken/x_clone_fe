import Index from './index/Index';
import UserNav from './usernav/UserNav';
import Media from './media/Media';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const Content = memo(
    ({
        account,
        postContent,
        postDate,
        postIMG,
        postCachedIMG,
        postVideo,
        postCachedVideos,
        isAReply,
        repliedPostUsername,
    }) => {
        return (
            <div>
                <UserNav account={account} postDate={postDate} />
                {isAReply && (
                    <div className="flex items-center justify-start text-[15px]">
                        <span className="text-[#71767b]">
                            Replying to{' '}
                            <Link
                                to={`/${repliedPostUsername}`}
                                className="cursor-pointer text-[#1d9bf0] hover:underline"
                            >
                                @{repliedPostUsername}
                            </Link>
                        </span>
                    </div>
                )}
                <Index postContent={postContent} />
                <Media
                    postIMG={postIMG}
                    postCachedIMG={postCachedIMG}
                    postVideo={postVideo}
                    postCachedVideos={postCachedVideos}
                />
            </div>
        );
    },
);

Content.displayName = 'Content';
export default Content;
