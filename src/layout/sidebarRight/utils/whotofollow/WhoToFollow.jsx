import { Link } from 'react-router-dom';
import Button from 'components/buttons/Button';
import VerifiedSVG from 'components/icons/VerifiedSVG';
import {
    useGetAccountsQuery,
    useToggleFollowMutation,
} from 'features/accounts/accountApiSlice';
import { useDispatch } from 'react-redux';
import { openModal } from 'features/modals/modalSlice';
import { useState } from 'react';

const WhoToFollow = ({ currentAccount, refetch }) => {
    const [hoverStates, setHoverStates] = useState({});
    const dispatch = useDispatch();

    const {
        data: accounts,
        isLoading,
        isSuccess,
        error,
    } = useGetAccountsQuery();

    const [toggleFollow] = useToggleFollowMutation();

    const { ids = [], entities = {} } = accounts || {};

    const handleFollow = async (account) => {
        const isFollowing = currentAccount.following.includes(account._id);

        if (isFollowing) {
            dispatch(
                openModal({
                    modalType: 'unfollow',
                    props: {
                        account,
                        userId: account._id,
                        currentUserId: currentAccount._id,
                        refetch,
                    },
                }),
            );
        } else {
            try {
                const payload = {
                    userId: account._id,
                    currentUserId: currentAccount._id,
                };
                await toggleFollow(payload).unwrap();

                await refetch(); // Refetch data after following
            } catch (error) {
                console.error('Failed to follow:', error);
            }
        }
    };
    const handleMouseEnter = (accountId) => {
        setHoverStates((prev) => ({ ...prev, [accountId]: true }));
    };

    const handleMouseLeave = (accountId) => {
        setHoverStates((prev) => ({ ...prev, [accountId]: false }));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!isSuccess || !ids.length || !Object.keys(entities).length) {
        return <div>No accounts found</div>;
    }

    return (
        <div className="block outline-none">
            <div className="flex max-w-full min-w-0 flex-col justify-between self-center px-4 py-3 text-xl leading-6 font-bold tracking-[0.015em] break-words outline-none">
                <h2>Who to follow</h2>
            </div>

            <ul>
                {ids.map((accountId) => {
                    const account = entities[accountId];

                    if (!account) return null; // Skip if account is not found

                    return (
                        <div className="relative" key={accountId}>
                            <Link
                                to={account.username}
                                className="flex items-center justify-start"
                            >
                                <li className="flex items-center justify-center px-4 py-[11px]">
                                    <img
                                        src={account.cachedAvatar}
                                        alt="user_avatar"
                                        className="mr-1 h-10 w-10 basis-[40px] rounded-full object-cover"
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
                                                    <p className="text-[12px]">
                                                        @
                                                    </p>
                                                    {account.username}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Button
                                onClick={() => handleFollow(account)} // Pass the target account
                                className={`absolute top-4 right-4 border-[#536471] ${
                                    currentAccount.following.includes(
                                        account._id,
                                    )
                                        ? 'min-w-[104px] border border-[#536471] hover:border-[#f4212f] hover:bg-transparent hover:text-[#f4212f]'
                                        : 'bg-[#eff3f4] text-black'
                                }`}
                                size="follow"
                                onMouseEnter={() =>
                                    handleMouseEnter(account._id)
                                }
                                onMouseLeave={() =>
                                    handleMouseLeave(account._id)
                                }
                            >
                                {currentAccount.following.includes(account._id)
                                    ? hoverStates[account._id]
                                        ? 'Unfollow'
                                        : 'Following'
                                    : 'Follow'}
                            </Button>
                        </div>
                    );
                })}
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
