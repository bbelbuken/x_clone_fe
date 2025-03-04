import RepostedBy from './utils/repostedBy/RepostedBy';
import Content from './utils/content/Content';
import AccountIMG from './utils/accountimg/AccountIMG';
import { Link } from 'react-router-dom';
import { useGetAccountsByIdQuery } from 'features/accounts/accountApiSlice';
import { memo } from 'react';

const Post = memo(({ post, postId }) => {
    const {
        data: account,
        isLoading,
        isError,
    } = useGetAccountsByIdQuery(post.userId);
    if (isLoading) return <p>Loading account...</p>;
    if (isError) return <p>Error loading account</p>;

    const hasReposted = post.reactions.repostCount.repost > 0;

    return (
        <Link to={`/${account.username}/status/${postId}`}>
            <div
                className="transition-colors-feed hover:box-shadow-feedbox border-b border-b-[#2f3336] hover:bg-[#ffffff08]"
                key={post.id}
            >
                <article className="flex shrink grow cursor-pointer flex-col px-4">
                    {hasReposted && <RepostedBy account={account} />}
                    <div
                        className={`flex ${hasReposted ? 'mt-[1px]' : 'mt-[11px]'}`}
                    >
                        <AccountIMG
                            account={account}
                            imgData={post.cachedAvatarUrl}
                        />
                        <Content
                            account={account}
                            postId={post.id}
                            postContent={post.content}
                            postDate={post.createdAt}
                            postIMG={post.cachedImages}
                            postVideo={post.media.video}
                            postReactions={post.reactions}
                        />
                    </div>
                </article>
            </div>
        </Link>
    );
});

Post.displayName = 'Post';

export default Post;
