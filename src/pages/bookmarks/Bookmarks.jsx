import { useGetPostsQuery } from 'features/posts/postsApiSlice';
import Post from 'components/posts/Post';
import { useSelector } from 'react-redux';
import GoBack from 'pages/profile/goback/GoBack';
import SearchBar from 'layout/sidebarRight/utils/searchbar/SearchBar';

const Bookmarks = () => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPostsQuery();

    const currentAccount = useSelector(
        (state) => state.accounts.currentAccount,
    );
    console.log(currentAccount);

    let content;

    if (isLoading) {
        content = <p>Loading liked posts...</p>;
    } else if (isError) {
        content = <p>{error?.data?.message || 'An error occurred'}</p>;
    } else if (isSuccess) {
        const { ids, entities } = posts;

        // Filter posts that the current user has liked
        const likedPostIds = ids.filter((postId) =>
            entities[postId].reactions.bookmarkedBy.includes(
                currentAccount._id,
            ),
        );

        content = likedPostIds.map((postId) => {
            const post = entities[postId];
            return (
                <Post
                    post={post}
                    postId={postId}
                    currentAccount={currentAccount}
                    key={postId}
                />
            );
        });

        if (likedPostIds.length === 0) {
            content = (
                <p className="mx-auto mt-10 text-lg">No bookmarks found.</p>
            );
        }
    }

    return (
        <main className="flex w-full flex-col">
            <GoBack />
            <div className="mt-2 px-4">
                <SearchBar />
            </div>

            {content}
        </main>
    );
};

export default Bookmarks;
