import { useState } from 'react';

const SearchBar = () => {
    const [isActive, setIsActive] = useState(false);
    const [input, setInput] = useState('');

    const handleState = (state) => setIsActive(state);

    return (
        <div className="relative overflow-visible">
            <div
                className={`${location.pathname === '/bookmarks' ? 'mb-2' : 'mb-4'} flex h-11 rounded-full ${isActive ? 'border border-[#1d9bf0] bg-black' : 'border border-[#202327]'} pt-2 pb-3`}
            >
                <form
                    className="z-20 flex items-center justify-center"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="ml-[6.5px] flex max-h-[42px] items-center justify-center">
                        <div className="mt-1 ml-[6.5px] flex items-center justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                fill={isActive ? '#1d9bf0' : '#71767b'}
                                width={16}
                                height={16}
                            >
                                <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                            </svg>
                        </div>

                        <div className="flex">
                            <div className="ml-1 w-[304px] items-center justify-center">
                                <label htmlFor="text">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="mt-1 w-[85%] border-none bg-inherit text-[14px] tracking-wide text-white placeholder-[#8b8e90] outline-none"
                                        onClick={() => handleState(true)}
                                        onFocus={() => handleState(true)}
                                        onBlur={() => handleState(false)}
                                        value={input}
                                        onChange={(e) =>
                                            setInput(e.target.value)
                                        }
                                    />
                                </label>
                                {input && isActive && (
                                    <button
                                        type="button"
                                        className="mr-3 min-h-[22px] min-w-[22px] cursor-pointer rounded-full bg-[#1d9bf0] transition-colors outline-none"
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            setInput('');
                                        }} // mousedown event happens before blur
                                    >
                                        <div className="flex grow items-center justify-center font-bold">
                                            <svg
                                                viewBox="0 0 15 15"
                                                fill="black"
                                                width={10}
                                                height={10}
                                            >
                                                <path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {location.pathname !== '/bookmarks' && isActive && (
                <div className="max-h-[calc(-53px + 80vh)] box-shadow-morebox absolute top-11 right-0 left-0 z-10 box-border min-h-[100px] overflow-visible rounded-lg bg-black">
                    <div className="p-3 pt-5">
                        <p className="text-center text-[15px] leading-4 tracking-wide text-[#71767b]">
                            Try searching for people, lists, or keywords
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
