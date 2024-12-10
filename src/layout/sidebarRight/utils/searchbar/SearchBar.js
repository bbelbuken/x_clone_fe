import { useState } from 'react';

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState('');

  const handleState = (state) => setIsActive(state);

  return (
    <div
      className={`mb-4 flex h-11 rounded-full ${isActive ? 'border border-[#f91880] bg-[#black]' : 'bg-[#202327]'} pb-3 pt-2`}
    >
      <form
        className="flex items-center justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex max-h-[42px] items-center justify-center">
          <div className="ml-[7px] mt-0.5 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill={isActive ? '#f91880' : '#71767b'}
              width={44}
              height={18.75}
            >
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
            </svg>
          </div>

          <div className="flex">
            <div className="w-[304px] items-center justify-center">
              <input
                type="text"
                placeholder="Search"
                className="ml-[5px] mt-1 w-[85%] border-none bg-inherit text-[15px] tracking-wide text-white placeholder-[#8b8e90] outline-none"
                onClick={() => handleState(true)}
                onFocus={() => handleState(true)}
                onBlur={() => handleState(false)}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button
                type="button"
                className={`${input && isActive ? '' : 'hidden'} mr-3 min-h-[22px] min-w-[22px] cursor-pointer rounded-full bg-[#f91880] outline-none transition-colors`}
                onMouseDown={() => setInput('')} // mousedown event happens before blur
              >
                <div className="flex grow items-center justify-center font-bold">
                  <svg viewBox="0 0 15 15" fill="black" width={10} height={10}>
                    <path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
