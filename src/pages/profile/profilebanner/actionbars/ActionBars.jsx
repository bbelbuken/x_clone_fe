import Button from 'components/buttons/Button';
import { useCurrentAccount } from 'hooks/useAccounts';
import { addFollower } from 'features/accounts/accountSlice';
import { useDispatch } from 'react-redux';
import { openModal } from 'features/modals/modalSlice';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ActionBars = ({ account }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const currentAccount = useCurrentAccount();
    const isCurrentAccount = currentAccount.id === account.id;
    const isFollowing = currentAccount.following.includes(account.id);
    const [isHovering, setIsHovering] = useState(false);

    const handleFollow = () => {
        if (isFollowing) {
            dispatch(openModal({ modalType: 'unfollow', props: { account } }));
        } else {
            dispatch(addFollower(account.id));
        }
    };

    const editProfile = (e) => {
        e.preventDefault();
        navigate(`/settings/profile`, {
            state: { background: location.pathname },
        });
    };

    const actionBarItems = [
        {
            title: 'More',
            icon: (
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            ),
            showAlways: true,
            showWhenCurrentAccount: false,
        },
        {
            title: 'Profile Summary',
            icon: (
                <path d="M2.205 7.423L11.745 21h4.241L6.446 7.423H2.204zm4.237 7.541L2.2 21h4.243l2.12-3.017-2.121-3.02zM16.957 0L9.624 10.435l2.122 3.02L21.2 0h-4.243zm.767 6.456V21H21.2V1.51l-3.476 4.946z"></path>
            ),
            showAlways: true,
            showWhenCurrentAccount: false,
        },
        {
            title: 'Search',
            icon: (
                <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
            ),
            showAlways: true,
            showWhenCurrentAccount: false,
        },
        {
            title: 'Message',
            icon: (
                <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
            ),
            showAlways: true,
            showWhenCurrentAccount: false,
        },
        {
            title: 'Notify',
            icon: (
                <path d="M22 5v2h-3v3h-2V7h-3V5h3V2h2v3h3zm-.86 13h-4.241c-.464 2.281-2.482 4-4.899 4s-4.435-1.719-4.899-4H2.87L4 9.05C4.51 5.02 7.93 2 12 2v2C8.94 4 6.36 6.27 5.98 9.3L5.13 16h13.73l-.38-3h2.02l.64 5zm-6.323 0H9.183c.412 1.164 1.51 2 2.817 2s2.405-.836 2.817-2z"></path>
            ),
            showAlways: false,
            showWhenCurrentAccount: false,
        },
    ];

    const actionBars = actionBarItems.filter(
        (item) => item.showAlways || isFollowing,
    );

    return (
        <div className="flex max-w-full flex-wrap items-end justify-center">
            {!isCurrentAccount && (
                <>
                    {actionBars.map((item, index) => (
                        <button
                            key={index}
                            title={item.title}
                            className="mr-2 mb-3 flex min-h-9 min-w-9 items-center justify-center rounded-full border border-[#536471] transition-colors hover:bg-[#eff3f41a]"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="#eff3f4"
                                height={20}
                                width={20}
                            >
                                {item.icon}
                            </svg>
                        </button>
                    ))}
                </>
            )}
            <Button
                size="profile-follow"
                className={`mb-3 flex min-h-9 min-w-9 items-center justify-center ${isCurrentAccount ? 'min-w-9 px-[17px] hover:bg-[#eff3f41a]' : isFollowing ? 'min-w-[104px] hover:border-[#f4212f] hover:bg-transparent hover:text-[#f4212f]' : 'min-w-[81px] bg-[#eff3f4] text-black hover:bg-[#d7dbdc]'}`}
                onClick={isCurrentAccount ? editProfile : handleFollow}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {isCurrentAccount
                    ? 'Edit profile'
                    : isFollowing
                      ? isHovering
                          ? 'Unfollow'
                          : 'Following'
                      : 'Follow'}
            </Button>
        </div>
    );
};

export default ActionBars;
