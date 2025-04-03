import { useState } from 'react';
import GoBack from './goback/GoBack';
import ProfileBanner from './profilebanner/ProfileBanner';
import ProfileNav from './profilenav/ProfileNav';
import UserLikes from './profilenavfeed/UserLikes';
import PostList from 'pages/home/feed/PostList';
import { useGetAccountsQuery } from 'features/accounts/accountApiSlice';
import { useParams } from 'react-router-dom';
import UserArticles from './profilenavfeed/UserArticles';
import UserHighlights from './profilenavfeed/UserHighlights';
import UserMedia from './profilenavfeed/UserMedia';
import UserReplies from './profilenavfeed/UserReplies';
import useCurrentAccount from 'hooks/useCurrentAccount';
import LoadingSpinner from 'components/loading/LoadingSpinner';

const Profile = () => {
    const [activeTitle, setActiveTitle] = useState('Posts');
    const { username } = useParams();

    const currentAccountData = useCurrentAccount();
    const { account: currentAccount } = currentAccountData;

    const { data: accounts, isLoading, error } = useGetAccountsQuery();

    const { ids = [], entities = {} } = accounts || {};

    const visitedAccount = Object.values(entities).find(
        (account) => account.username === username,
    );

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!visitedAccount) {
        return <div>No account found for username: {username}</div>;
    }

    if (!currentAccount) {
        return <div>No current account found</div>;
    }
    console.log(visitedAccount);

    return (
        <div className="w-full max-w-[600px]">
            {isLoading && <LoadingSpinner />}
            <GoBack
                currentAccount={visitedAccount}
                postCount={visitedAccount?.postCount}
            />
            <div className="mx-auto flex w-full grow flex-col">
                <ProfileBanner
                    currentAccount={visitedAccount}
                    username={username}
                />
                <ProfileNav
                    currentAccount={currentAccount}
                    visitedAccount={visitedAccount}
                    activeTitle={activeTitle}
                    setActiveTitle={setActiveTitle}
                />
                {activeTitle === 'Posts' && (
                    <PostList
                        currentAccount={currentAccount}
                        visitedAccount={visitedAccount}
                        isProfile={true}
                    />
                )}
                {activeTitle === 'Replies' && (
                    <UserReplies
                        currentAccount={currentAccount}
                        visitedAccount={visitedAccount}
                        isProfile={true}
                    />
                )}
                {activeTitle === 'Highlights' && (
                    <UserHighlights
                        currentAccount={currentAccount}
                        visitedAccount={visitedAccount}
                        isProfile={true}
                    />
                )}
                {activeTitle === 'Articles' && (
                    <UserArticles
                        currentAccount={currentAccount}
                        visitedAccount={visitedAccount}
                        isProfile={true}
                    />
                )}
                {activeTitle === 'Media' && (
                    <UserMedia
                        currentAccount={currentAccount}
                        visitedAccount={visitedAccount}
                        isProfile={true}
                    />
                )}
                {activeTitle === 'Likes' && (
                    <UserLikes
                        currentAccount={currentAccount}
                        visitedAccount={visitedAccount}
                    />
                )}
            </div>
        </div>
    );
};

export default Profile;
