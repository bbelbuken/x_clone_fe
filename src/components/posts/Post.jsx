import RepostedBy from './utils/repostedBy/RepostedBy';
import Content from './utils/content/Content';
import AccountIMG from './utils/accountimg/AccountIMG';
import { Link } from 'react-router-dom';
import { useGetAccountsByIdQuery } from 'features/accounts/accountApiSlice';
import { memo } from 'react';
import More from './utils/content/usernav/more/More';
import ReactionNav from './utils/content/reactionnav/ReactionNav';
import SendReply from 'pages/home/sendreply/SendReply';
import GrokButton from './utils/content/usernav/groknav/GrokButton';
import { MoonLoader } from 'react-spinners';

const Post = memo(
    ({
        post,
        postId,
        currentAccount,
        replyClicked,
        visitedAccount,
        isProfile,
    }) => {
        const {
            data: account,
            isLoading,
            isError,
        } = useGetAccountsByIdQuery(
            isProfile ? visitedAccount._id : post.userId,
        );
        console.log('account', account);
        if (isLoading) {
            return (
                <div className="flex h-full w-full items-center justify-center">
                    <MoonLoader color="#1d9bf0" size={30} />
                </div>
            );
        }

        if (isError) return <p>Error loading account</p>;

        const isARepost = post.isARepost;
        const isAReply = post.repliedPostUsername;

        const currentAccountReposted =
            (currentAccount?._id === post.userId && isARepost) ||
            post.reactions.repostedBy.includes(currentAccount?._id);

        const isOnStatus =
            location.pathname === `/${account.username}/status/${postId}`;

        return (
            <div className="relative">
                <div
                    className={`${replyClicked ? '' : 'border-b border-b-[#2f3336]'} transition-colors-feed hover:box-shadow-feedbox hover:bg-[#ffffff08]`}
                    key={post.id}
                >
                    <article className="flex shrink grow cursor-pointer flex-col px-4">
                        {isARepost && (
                            <RepostedBy
                                account={account}
                                currentAccountReposted={currentAccountReposted}
                            />
                        )}

                        <div
                            className={`flex ${isARepost ? 'mt-[1px]' : 'mt-[11px]'}`}
                        >
                            <Link to={`/${account.username}/status/${postId}`}>
                                <div className="relative pb-2">
                                    {!isARepost ? (
                                        <AccountIMG
                                            account={account}
                                            imgData={account.cachedAvatar}
                                        />
                                    ) : (
                                        <AccountIMG
                                            account={post.originalPost}
                                            imgData={
                                                post.originalPost
                                                    .cachedAvatarUrl
                                            }
                                        />
                                    )}
                                </div>
                            </Link>

                            <div className="$items-star flex grow flex-col justify-start pb-3">
                                <Link
                                    to={`/${account.username}/status/${postId}`}
                                >
                                    {!isARepost && !post.originalPost ? (
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
                                            isAReply={isAReply}
                                            replyClicked={replyClicked}
                                            repliedPostUsername={
                                                post.repliedPostUsername
                                            }
                                        />
                                    ) : (
                                        <Content
                                            account={post.originalPost.user}
                                            currentAccount={currentAccount}
                                            post={post.originalPost}
                                            postId={postId}
                                            postContent={
                                                post.originalPost.content
                                            }
                                            postDate={
                                                post.originalPost.createdAt
                                            }
                                            postIMG={
                                                post.originalPost.media.image
                                            }
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
                                            replyClicked={replyClicked}
                                        />
                                    )}
                                </Link>
                                {!replyClicked && (
                                    <ReactionNav
                                        currentAccountReposted={
                                            currentAccountReposted
                                        }
                                        postId={postId}
                                        isARepost={isARepost}
                                        postReactions={
                                            isARepost
                                                ? post.originalPost.reactions
                                                : post.reactions
                                        }
                                        currentAccount={currentAccount}
                                        replyClicked={replyClicked}
                                    />
                                )}
                                {isOnStatus && (
                                    <SendReply
                                        currentAccount={currentAccount}
                                        replyClicked={replyClicked}
                                        postId={postId}
                                        isOnStatus={isOnStatus}
                                    />
                                )}

                                {replyClicked && (
                                    <div className="mt-6 flex items-center justify-start text-[15px]">
                                        <span className="text-[#71767b]">
                                            Replying to{' '}
                                            <Link
                                                to={`/${account.username}`}
                                                className="cursor-pointer text-[#1d9bf0] hover:underline"
                                            >
                                                @{account.username}
                                            </Link>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </article>
                </div>
                <div className="max-sm:hidden">
                    <GrokButton />
                </div>
                {!replyClicked && (
                    <More
                        currentAccountReposted={currentAccountReposted}
                        account={account}
                        post={post}
                        currentAccount={currentAccount}
                    />
                )}
            </div>
        );
    },
);

Post.displayName = 'Post';

export default Post;
