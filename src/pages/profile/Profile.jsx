import { useState } from 'react';
import { useParams } from 'react-router-dom';
import usePostCountByUser from 'hooks/usePostCountByUser';
import GoBack from './goback/GoBack';
import ProfileBanner from './profilebanner/ProfileBanner';
import ProfileNav from './profilenav/ProfileNav';
import UserPostList from './profilenavfeed/UserPostList';
import UserLikes from './profilenavfeed/UserLikes';
import { useGetAccountsQuery } from 'features/accounts/accountApiSlice';

const Profile = () => {
    const [activeTitle, setActiveTitle] = useState('Posts');
    const { username } = useParams();
    const postCount = usePostCountByUser();

    const { data: accounts, isLoading, error } = useGetAccountsQuery();
    const { ids, entities } = accounts || { ids: [], entities: {} }; // Provide fallback

    // Find the account by username
    const account = Object.values(entities).find(
        (account) => account.username === username,
    );

    if (isLoading) {
        return <div>Loading profile...</div>;
    }

    if (error) {
        return <div>Error loading profile: {error.message}</div>;
    }

    if (!account) {
        return <div>No account found for username: {username}</div>;
    }

    return (
        <div className="w-full max-w-[600px]">
            <GoBack account={account} postCount={postCount} />
            <div className="mx-auto flex w-full grow flex-col">
                <ProfileBanner account={account} />
                <ProfileNav
                    account={account}
                    activeTitle={activeTitle}
                    setActiveTitle={setActiveTitle}
                />
                {activeTitle === 'Posts' && <UserPostList account={account} />}
                {activeTitle === 'Replies' && (
                    <UserPostList account={account} />
                )}
                {activeTitle === 'Highlights' && (
                    <UserPostList account={account} />
                )}
                {activeTitle === 'Articles' && (
                    <UserPostList account={account} />
                )}
                {activeTitle === 'Media' && <UserPostList account={account} />}
                {activeTitle === 'Likes' && <UserLikes account={account} />}
            </div>
        </div>
    );
};

export default Profile;
