import Index from './index/Index';
import UserNav from './usernav/UserNav';
import Media from './media/Media';
import ReactionNav from './reactionnav/ReactionNav';
import { memo } from 'react';

const Content = memo(
    ({
        account,
        postContent,
        postDate,
        postIMG,
        postCachedIMG,
        postVideo,
        postCachedVideos,
    }) => {
        return (
            <div>
                <UserNav account={account} postDate={postDate} />
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
