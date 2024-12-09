import React from 'react';

const SearchBar = () => {
  return (
    <form className="flex items-center justify-center">
      <div className="flex max-h-[42px] items-center justify-center">
        <div className="ml-[7px] mt-0.5 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="#71767b" width={44} height={18.75}>
            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
          </svg>
        </div>

        <div className="flex">
          <div className="w-[304px] items-center justify-center">
            <input
              type="text"
              placeholder="Search"
              className="ml-[5px] mt-1 border-none bg-[#202327] text-[15px] tracking-wide text-white placeholder-[#8b8e90] outline-none"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
