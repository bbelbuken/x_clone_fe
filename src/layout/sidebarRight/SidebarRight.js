import React from 'react';
import SearchBar from './utils/searchbar/SearchBar';
import PremiumSection from './utils/premiumsection/PremiumSection';
import WhatIsHappening from './utils/whatshappening/WhatIsHappening';

const SideBarRight = () => {
  return (
    <div className="my-[5px] flex w-[350px] flex-col items-stretch overflow-visible">
      <div className="item flex h-full min-h-[1114.2px] flex-col">
        <SearchBar />

        <div className="mb-4 flex h-[146px] w-[350px] overflow-hidden rounded-2xl border-x border-y border-[#2f3336]">
          <PremiumSection />
        </div>
        <div className="mb-4 flex h-[438px] w-[350px] flex-col overflow-hidden rounded-2xl border-x border-y border-[#2f3336]">
          <WhatIsHappening />
        </div>
      </div>
    </div>
  );
};

export default SideBarRight;
