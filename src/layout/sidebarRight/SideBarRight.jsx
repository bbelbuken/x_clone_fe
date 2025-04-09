import React, { useCallback, useEffect, useState } from 'react';
import SearchBar from './utils/searchbar/SearchBar';
import PremiumSection from './utils/premiumsection/PremiumSection';
import WhatIsHappening from './utils/whatshappening/WhatIsHappening';
import WhoToFollow from './utils/whotofollow/WhoToFollow';
import { Footer } from './utils/footer/Footer';
import { useLocation } from 'react-router-dom';

const SideBarRight = ({ currentAccount, refetch }) => {
    const location = useLocation();
    const path = location.pathname;
    const [isExplore, setIsExplore] = useState(false);

    useEffect(() => {
        handleExplorePath();
    }, [path]);

    const handleExplorePath = useCallback(() => {
        if (path === '/explore') {
            setIsExplore(true);
        } else {
            setIsExplore(false);
        }
    }, [path]);

    return (
        <section
            className={`my-[5px] flex w-full flex-col items-stretch overflow-visible lg:w-[350px]`}
        >
            <div className="item flex h-full min-h-[1114.2px] flex-col">
                {path !== '/explore' && <SearchBar />}

                {path === '/home' && (
                    <div className="mb-4 flex h-[146px] w-full overflow-hidden rounded-2xl border-x border-y border-[#2f3336] lg:w-[350px]">
                        <PremiumSection />
                    </div>
                )}

                {path !== '/explore' && (
                    <div className="mb-4 flex h-auto w-full flex-col rounded-2xl border-x border-y border-[#2f3336] lg:w-[350px]">
                        <WhatIsHappening />
                    </div>
                )}

                <div
                    className={`${isExplore ? 'mt-2' : ''} mb-4 flex w-full flex-col rounded-2xl border-x border-y border-[#2f3336] lg:w-[350px]`}
                >
                    <WhoToFollow
                        currentAccount={currentAccount}
                        refetch={refetch}
                    />
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default SideBarRight;
