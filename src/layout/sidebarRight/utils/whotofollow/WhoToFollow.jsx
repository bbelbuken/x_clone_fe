import { Link } from 'react-router-dom';
import { useAccounts } from 'hooks/useAccounts';
import Button from 'components/buttons/Button';
import VerifiedSVG from 'components/icons/VerifiedSVG';
import { useCurrentAccount } from 'hooks/useAccounts';
import { useDispatch } from 'react-redux';
import { openModal } from 'features/modals/modalSlice';
import { addFollower } from 'features/accounts/accountSlice';
import { useState } from 'react';
const WhoToFollow = () => {
    const accounts = useAccounts();
    const currentAccount = useCurrentAccount();
    const [hoverStates, setHoverStates] = useState({});

    const dispatch = useDispatch();

    const handleFollow = (account) => {
        const isFollowing = currentAccount.following.includes(account.id);
        if (isFollowing) {
            dispatch(openModal({ modalType: 'unfollow', props: { account } }));
        } else {
            dispatch(addFollower(account.id));
        }
    };

    const handleMouseEnter = (accountId) => {
        setHoverStates((prev) => ({ ...prev, [accountId]: true }));
    };

    const handleMouseLeave = (accountId) => {
        setHoverStates((prev) => ({ ...prev, [accountId]: false }));
    };

    return (
        <div className="block outline-none">
            <div className="flex max-w-full min-w-0 flex-col justify-between self-center px-4 py-3 text-xl leading-6 font-bold tracking-[0.015em] break-words outline-none">
                <h2 className="">Who to follow</h2>
            </div>

            <ul>
                {accounts.slice(3).map((account, index) => (
                    <div className="relative" key={index}>
                        <Link
                            to={account.username}
                            key={index}
                            className="flex items-center justify-start"
                        >
                            <li className="flex items-center justify-center px-4 py-[11px]">
                                <img
                                    src={account.avatar}
                                    alt="user_avatar"
                                    className="mr-1 h-10 w-10 basis-[40px] rounded-full"
                                />
                                <div className="flex max-w-full flex-shrink flex-grow items-center justify-between">
                                    <div className="ml-1 flex flex-col items-start justify-center">
                                        <div className="flex items-center justify-center gap-0.5">
                                            <p className="text-[15px] leading-5 font-bold break-words whitespace-nowrap hover:underline">
                                                {account.fullname}
                                            </p>
                                            {account?.verified && (
                                                <VerifiedSVG
                                                    width={18.75}
                                                    height={18.75}
                                                />
                                            )}
                                        </div>

                                        <div className="text-[15px] leading-[1.5em] font-light tracking-[0.025em] text-[#71767b]">
                                            <div className="flex items-center justify-center">
                                                <p className="text-[12px]">@</p>
                                                {account.username}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </Link>
                        <Button
                            onClick={() => handleFollow(account)}
                            className={`absolute top-4 right-4 border-[#536471] ${
                                currentAccount.following.includes(account.id)
                                    ? 'min-w-[104px] border border-[#536471] hover:border-[#f4212f] hover:bg-transparent hover:text-[#f4212f]'
                                    : 'bg-[#eff3f4] text-black'
                            }`}
                            size="follow"
                            onMouseEnter={() => handleMouseEnter(account.id)}
                            onMouseLeave={() => handleMouseLeave(account.id)}
                        >
                            {currentAccount.following.includes(account.id)
                                ? hoverStates[account.id]
                                    ? 'Unfollow'
                                    : 'Following'
                                : 'Follow'}
                        </Button>
                    </div>
                ))}
            </ul>

            <div>
                <Link to={'explore'}>
                    <div className="block h-[52px] w-[348px] p-4 transition-colors hover:bg-[#ffffff09]">
                        <div className="min-w-0 text-[15px] leading-5 font-light tracking-wide break-words text-[#1d9bf0]">
                            <span>Show more</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default WhoToFollow;
