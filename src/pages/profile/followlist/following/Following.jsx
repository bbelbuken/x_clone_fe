import { useGetAccountsQuery } from 'features/accounts/accountApiSlice';
import Button from 'components/buttons/Button';
import { Link } from 'react-router-dom';
import VerifiedSVG from 'components/icons/VerifiedSVG';
import { useDispatch } from 'react-redux';
import { openModal } from 'features/modals/modalSlice';
import { useToggleFollowMutation } from 'features/accounts/accountApiSlice';
import { useState, useEffect } from 'react';
import { MoonLoader } from 'react-spinners';

const Following = ({ currentAccount, refetch }) => {
    const [hoverStates, setHoverStates] = useState({});
    const [localFollowing, setLocalFollowing] = useState([]);

    useEffect(() => {
        if (currentAccount?.following) {
            setLocalFollowing(currentAccount.following);
        }
    }, [currentAccount]);

    const dispatch = useDispatch();
    const {
        data: accounts,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetAccountsQuery();
    const [toggleFollow] = useToggleFollowMutation();
    let content;

    if (!currentAccount) {
        return <p className="mx-auto mt-10 text-lg">Loading account...</p>;
    }

    if (isLoading) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <MoonLoader color="#1d9bf0" size={30} />
            </div>
        );
    } else if (isError) {
        content = <p>{error?.data?.message || 'An error occurred'}</p>;
    } else if (isSuccess) {
        const { ids, entities } = accounts;

        const handleFollow = async (account) => {
            const isFollowing = localFollowing.includes(account._id);

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
        // Filter accounts that the current user is following
        const followingIds = ids.filter((userId) =>
            currentAccount.following?.includes(userId),
        );

        content = followingIds.map((accountId) => {
            const account = entities[accountId];
            return (
                <div className="relative" key={accountId}>
                    <Link
                        to={`/${account.username}`}
                        className="flex items-center justify-start"
                    >
                        <li className="flex items-center justify-center px-4 py-[11px]">
                            <img
                                src={account?.avatar}
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
                                            <p className="text-[12px]">@</p>
                                            {account.username}
                                        </div>
                                    </div>
                                    <div className="text-[15px] leading-[1.5em] font-light tracking-[0.025em] text-[#eff3f4]">
                                        <div className="flex items-center justify-center">
                                            {account.bio}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </Link>
                    <Button
                        onClick={() => handleFollow(account)} // Pass the target account
                        className={`absolute top-4 right-4 border-[#536471] ${
                            localFollowing.includes(account._id)
                                ? 'min-w-[104px] border border-[#536471] hover:border-[#f4212f] hover:bg-transparent hover:text-[#f4212f]'
                                : 'bg-[#eff3f4] text-black'
                        }`}
                        size="follow"
                        onMouseEnter={() => handleMouseEnter(account._id)}
                        onMouseLeave={() => handleMouseLeave(account._id)}
                    >
                        {localFollowing.includes(account._id)
                            ? hoverStates[account._id]
                                ? 'Unfollow'
                                : 'Following'
                            : 'Follow'}
                    </Button>
                </div>
            );
        });

        if (followingIds.length === 0) {
            content = (
                <div className="flex min-h-[200px] items-center justify-center">
                    <p className="text-[15px] text-[#71767b]">No following.</p>
                </div>
            );
        }
    }

    return <>{content}</>;
};

export default Following;
