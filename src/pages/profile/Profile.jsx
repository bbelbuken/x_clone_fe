import { useAccounts } from 'hooks/useAccounts';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import usePostCountByUser from 'hooks/usePostCountByUser';
import GoBack from './goback/GoBack';
import ProfileBanner from './profilebanner/ProfileBanner';
import ProfileNav from './profilenav/ProfileNav';
import UserPostList from './profilenavfeed/UserPostList';
import UserLikes from './profilenavfeed/UserLikes';

const Profile = () => {
    const [activeTitle, setActiveTitle] = useState('Posts');
    const { username } = useParams();
    const postCount = usePostCountByUser();
    const accounts = useAccounts();
    const account = accounts.find((account) => account.username === username);

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
