import React from 'react';

const UserArticles = () => {
    return (
        <div className="flax-wrap mx-auto mt-7 flex w-auto flex-col items-start justify-end px-40">
            <h1 className="text-3xl font-bold">Write Articles on X</h1>
            <p className="mt-2 text-base text-[#71767b]">
                You must be subscribed to Premium+ to write Articles on X
            </p>
            <button className="mt-6 h-14 w-60 cursor-pointer rounded-full bg-[#eff3f4] font-bold text-black hover:bg-[#d7dbdc]">
                Subscribe to Premium
            </button>
        </div>
    );
};

export default UserArticles;
