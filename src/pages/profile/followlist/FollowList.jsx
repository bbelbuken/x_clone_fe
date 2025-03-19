import Followers from './followers/Followers';
import Following from './following/Following';
import GoBack from '../goback/GoBack';
import { useGetAccountsQuery } from 'features/accounts/accountApiSlice';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import FollowingNav from './followingnav/FollowingNav';

const FollowList = () => {
    const { username } = useParams();
    const location = useLocation();
    const [activeTitle, setActiveTitle] = useState('Followers');
    const followersRef = useRef(null);
    const followingRef = useRef(null);

    // Set initial section based on state passed from AccountBio
    useEffect(() => {
        if (location.state?.initialSection === 'following') {
            setActiveTitle('Following');
            // Focus on following section when navigating from AccountBio
            setTimeout(() => {
                followingRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            setActiveTitle('Followers');
            // Focus on followers section when navigating from AccountBio
            setTimeout(() => {
                followersRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location.state]);

    const { data: accounts, isLoading, error, refetch } = useGetAccountsQuery();
    const { entities = {} } = accounts || {};

    const currentAccount = Object.values(entities).find(
        (account) => account.username === username,
    );

    const handleTabChange = (title) => {
        setActiveTitle(title);
        // Focus on the appropriate section when switching tabs
        setTimeout(() => {
            if (title === 'Followers') {
                followersRef.current?.scrollIntoView({ behavior: 'smooth' });
            } else {
                followingRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="w-full max-w-[600px]">
            <GoBack
                currentAccount={currentAccount}
                postCount={currentAccount?.postCount}
            />
            <div className="mx-auto flex w-full grow flex-col">
                <FollowingNav
                    account={currentAccount}
                    activeTitle={activeTitle}
                    setActiveTitle={handleTabChange}
                />
                {activeTitle === 'Followers' && (
                    <div ref={followersRef}>
                        <Followers
                            currentAccount={currentAccount}
                            isProfile={true}
                            refetch={refetch}
                        />
                    </div>
                )}
                {activeTitle === 'Following' && (
                    <div ref={followingRef}>
                        <Following
                            currentAccount={currentAccount}
                            isProfile={true}
                            refetch={refetch}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FollowList;
