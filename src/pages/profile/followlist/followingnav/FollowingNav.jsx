import { Link } from 'react-router-dom';

const FollowingNav = ({ account, activeTitle, setActiveTitle }) => {
    const followingNavItems = [
        { title: 'Followers', alwaysActive: true },
        { title: 'Following', alwaysActive: true },
    ];

    const followingNav = followingNavItems.filter(
        (item) => item.alwaysActive || account,
    );

    return (
        <div className="flex border-b border-b-[#2f3336]">
            {followingNav.map((item, index) => (
                <Link
                    className="flex h-[53px] min-w-14 grow cursor-pointer items-center justify-center px-4 transition-colors hover:bg-[#e7e9ea1a]"
                    onClick={() => setActiveTitle(item.title)}
                    key={index}
                >
                    <div className="relative flex h-full min-w-0 items-center justify-center py-4 text-[15px] leading-5 font-bold break-words">
                        <span
                            className={
                                activeTitle === item.title
                                    ? 'text-[#e7e9ea]'
                                    : 'text-[#71767b]'
                            }
                        >
                            {item.title}
                        </span>
                        {activeTitle === item.title && (
                            <div className="absolute bottom-0 inline-flex h-1 w-full min-w-14 rounded-full bg-[#1d9bf0]"></div>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default FollowingNav;
