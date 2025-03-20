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

const Profile = () => {
    const [activeTitle, setActiveTitle] = useState('Posts');
    const { username } = useParams();

    const { data: accounts, isLoading, error } = useGetAccountsQuery();

    const { ids = [], entities = {} } = accounts || {};

    const currentAccount = Object.values(entities).find(
        (account) => account.username === username,
    );

    const account = currentAccount || {
        _id: '',
        username: 'Unknown User',
        email: '',
        dateOfBirth: '',
        fullname: '',
        avatar: '',
        header_photo: '',
        verified: false,
        bio: '',
        location: '',
        website: '',
        postCount: 0,
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!currentAccount) {
        return <div>No account found for username: {username}</div>;
    }

    return (
        <div className="w-full max-w-[600px]">
            <GoBack
                currentAccount={currentAccount}
                postCount={currentAccount?.postCount}
            />
            <div className="mx-auto flex w-full grow flex-col">
                <ProfileBanner
                    currentAccount={currentAccount}
                    account={account}
                    username={username}
                />
                <ProfileNav
                    account={currentAccount}
                    activeTitle={activeTitle}
                    setActiveTitle={setActiveTitle}
                />
                {activeTitle === 'Posts' && (
                    <PostList
                        currentAccount={currentAccount}
                        isProfile={true}
                    />
                )}
                {activeTitle === 'Replies' && (
                    <UserReplies
                        currentAccount={currentAccount}
                        isProfile={true}
                    />
                )}
                {activeTitle === 'Highlights' && (
                    <UserHighlights
                        currentAccount={currentAccount}
                        isProfile={true}
                    />
                )}
                {activeTitle === 'Articles' && (
                    <UserArticles
                        currentAccount={currentAccount}
                        isProfile={true}
                    />
                )}
                {activeTitle === 'Media' && (
                    <UserMedia
                        currentAccount={currentAccount}
                        isProfile={true}
                    />
                )}
                {activeTitle === 'Likes' && (
                    <UserLikes currentAccount={currentAccount} />
                )}
            </div>
        </div>
    );
};

export default Profile;
