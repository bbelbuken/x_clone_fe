import React from 'react';
import SearchBar from './utils/searchbar/SearchBar';

const SideBarRight = () => {
  return (
    <div className="my-[5px] flex w-[350px] flex-col items-stretch overflow-hidden">
      <div className="item flex h-full min-h-[1114.2px] flex-col">
        <div className="flex h-11 rounded-full bg-[#202327] pb-3 pt-2">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default SideBarRight;
