import { useState } from 'react';
import GoBack from './goback/GoBack';
import ProfileBanner from './profilebanner/ProfileBanner';
import ProfileNav from './profilenav/ProfileNav';
import UserLikes from './profilenavfeed/UserLikes';
import useCurrentAccount from 'hooks/useCurrentAccount';
import PostList from 'pages/home/feed/PostList';

const Profile = () => {
    const [activeTitle, setActiveTitle] = useState('Posts');
    const {
        account: currentAccount,
        error: accountError,
        isLoading: isLoadingAccount,
    } = useCurrentAccount();

    // Fallback for currentAccount
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

    if (isLoadingAccount) {
        return <div>Loading...</div>;
    }

    if (accountError) {
        return <div>Error: {accountError.message}</div>;
    }

    if (!currentAccount) {
        return (
            <div>No account found for username: {currentAccount?.username}</div>
        );
    }

    return (
        <div className="w-full max-w-[600px]">
            <GoBack account={account} postCount={account.postCount} />
            <div className="mx-auto flex w-full grow flex-col">
                <ProfileBanner account={account} />
                <ProfileNav
                    account={account}
                    activeTitle={activeTitle}
                    setActiveTitle={setActiveTitle}
                />
                {activeTitle === 'Posts' && (
                    <PostList currentAccount={account} isProfile={true} />
                )}
                {activeTitle === 'Replies' && (
                    <PostList currentAccount={account} isProfile={true} />
                )}
                {activeTitle === 'Highlights' && (
                    <PostList currentAccount={account} isProfile={true} />
                )}
                {activeTitle === 'Articles' && (
                    <PostList currentAccount={account} isProfile={true} />
                )}
                {activeTitle === 'Media' && (
                    <PostList currentAccount={account} isProfile={true} />
                )}
                {activeTitle === 'Likes' && <UserLikes account={account} />}
            </div>
        </div>
    );
};

export default Profile;
