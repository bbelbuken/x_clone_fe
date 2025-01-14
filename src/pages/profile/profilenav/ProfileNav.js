import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCurrentAccount } from 'hooks/useAccounts';

const ProfileNav = ({ account }) => {
  const currentAccount = useCurrentAccount();
  const activeAccount = account.id === currentAccount.id;
  const [activeTitle, setActiveTitle] = useState('Posts');
  const ProfileNavItems = [
    { title: 'Posts', alwaysActive: true },
    { title: 'Replies', alwaysActive: true },
    { title: 'Highlights', alwaysActive: false },
    { title: 'Articles', alwaysActive: false },
    { title: 'Media', alwaysActive: true },
    { title: 'Likes', alwaysActive: false },
  ];

  const profileNav = ProfileNavItems.filter(
    (item) => item.alwaysActive || activeAccount,
  );

  return (
    <div className="flex">
      {profileNav.map((item, index) => (
        <Link
          className="flex h-[53px] min-w-14 grow cursor-pointer items-center justify-center px-4 transition-colors hover:bg-[#e7e9ea1a]"
          onClick={() => setActiveTitle(item.title)}
          key={index}
        >
          <div className="relative flex h-full min-w-0 items-center justify-center break-words py-4 text-[15px] font-bold leading-5">
            <span
              className={
                activeTitle === item.title ? 'text-[#e7e9ea]' : 'text-[#71767b]'
              }
            >
              {item.title}
            </span>
            {activeTitle === item.title && (
              <div className="absolute bottom-0 inline-flex h-1 w-full min-w-14 rounded-full bg-[#f91880]"></div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProfileNav;
