import Index from './index/Index';
import UserNav from './usernav/UserNav';
import Media from './media/Media';
import ReactionNav from './reactionnav/ReactionNav';
import { memo } from 'react';

const Content = memo(
    ({
        account,

        postId,
        postContent,
        postDate,
        postIMG,
        postCachedIMG,
        postVideo,
        postCachedVideos,
        postReactions,
    }) => {
        return (
            <div className="items-star flex grow flex-col justify-start pb-3">
                <UserNav account={account} postDate={postDate} />
                <Index postContent={postContent} />
                <Media
                    postIMG={postIMG}
                    postCachedIMG={postCachedIMG}
                    postVideo={postVideo}
                    postCachedVideos={postCachedVideos}
                />
                <ReactionNav postId={postId} postReactions={postReactions} />
            </div>
        );
    },
);

Content.displayName = 'Content';
export default Content;
