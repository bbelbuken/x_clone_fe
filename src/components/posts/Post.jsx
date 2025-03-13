import RepostedBy from './utils/repostedBy/RepostedBy';
import Content from './utils/content/Content';
import AccountIMG from './utils/accountimg/AccountIMG';
import { Link } from 'react-router-dom';
import { useGetAccountsByIdQuery } from 'features/accounts/accountApiSlice';
import { memo } from 'react';
import More from './utils/content/usernav/more/More';
import ReactionNav from './utils/content/reactionnav/ReactionNav';

const Post = memo(({ post, postId, currentAccount }) => {
    const {
        data: account,
        isLoading,
        isError,
    } = useGetAccountsByIdQuery(post.userId);

    if (isLoading) return <p>Loading account...</p>;
    if (isError) return <p>Error loading account</p>;

    const isReposted = post.isReposted;
    if (post.originalPost) {
        console.log(post.originalPost);
    }

    return (
        <div className="relative">
            <div
                className="transition-colors-feed hover:box-shadow-feedbox border-b border-b-[#2f3336] hover:bg-[#ffffff08]"
                key={post.id}
            >
                <article className="flex shrink grow cursor-pointer flex-col px-4">
                    {isReposted && <RepostedBy account={account} />}

                    <div
                        className={`flex ${isReposted ? 'mt-[1px]' : 'mt-[11px]'}`}
                    >
                        <Link to={`/${account.username}/status/${postId}`}>
                            <div className="relative pb-2">
                                {!isReposted ? (
                                    <AccountIMG
                                        account={account}
                                        imgData={post.cachedAvatarUrl}
                                    />
                                ) : (
                                    <AccountIMG
                                        account={post.originalPost}
                                        imgData={
                                            post.originalPost.cachedAvatarUrl
                                        }
                                    />
                                )}
                            </div>
                        </Link>

                        <div className="items-star flex grow flex-col justify-start pb-3">
                            <Link to={`/${account.username}/status/${postId}`}>
                                {!isReposted && !post.originalPost ? (
                                    <Content
                                        account={account}
                                        currentAccount={currentAccount}
                                        post={post}
                                        postId={postId}
                                        postContent={post.content}
                                        postDate={post.createdAt}
                                        postIMG={post.media.image}
                                        postCachedIMG={post.cachedImages}
                                        postVideo={post.media.video}
                                        postCachedVideos={post.cachedVideos}
                                        postReactions={post.reactions}
                                    />
                                ) : (
                                    <Content
                                        account={post.originalPost.user}
                                        currentAccount={currentAccount}
                                        post={post.originalPost}
                                        postId={postId}
                                        postContent={post.originalPost.content}
                                        postDate={post.originalPost.createdAt}
                                        postIMG={post.originalPost.media.image}
                                        postCachedIMG={
                                            post.originalPost.cachedImages
                                        }
                                        postVideo={
                                            post.originalPost.media.video
                                        }
                                        postCachedVideos={
                                            post.originalPost.cachedVideos
                                        }
                                        postReactions={
                                            post.originalPost.reactions
                                        }
                                    />
                                )}
                            </Link>
                            <ReactionNav
                                postId={postId}
                                postReactions={post.reactions}
                                currentAccount={currentAccount}
                            />
                        </div>
                    </div>
                </article>
            </div>

            <More
                account={account}
                post={post}
                currentAccount={currentAccount}
            />
        </div>
    );
});

Post.displayName = 'Post';

export default Post;
