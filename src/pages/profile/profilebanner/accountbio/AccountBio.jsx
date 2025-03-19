import { Link } from 'react-router-dom';
import { convertUrlsToLinks } from '../../../../utils/formatBioLinks/FormatBioLinks';
import AccountBioIcons from './accountbioicons/AccountBioIcons';
import { numberFormat } from 'utils/formatPostCount/FormatPostCount';

const AccountBio = ({ account }) => {
    if (!account) return null;

    return (
        <div>
            <div
                className={`${account.bio ? '-mt-[2px] mb-3' : '-mt-1'} font-twitter flex`}
            >
                <span className="text-[15px] leading-5 font-normal tracking-[0.012em] break-words text-[#e7e9ea]">
                    {convertUrlsToLinks(account.bio || '')}
                </span>
            </div>

            <AccountBioIcons account={account} />

            <div className="flex text-[14px] leading-[18px]">
                <Link
                    to={`/${account.username}/followlist`}
                    state={{ initialSection: 'following' }}
                    className="mr-5 hover:underline"
                >
                    <span className="font-bold tracking-wide text-[#e7e9ea]">
                        {account.following?.length || 0}
                    </span>
                    <span className="ml-0.5 tracking-wide text-[#71767b]">
                        Following
                    </span>
                </Link>

                <Link
                    to={`/${account.username}/followlist`}
                    state={{ initialSection: 'followers' }}
                    className="hover:underline"
                >
                    <span className="font-bold text-[#e7e9ea]">
                        {numberFormat(account.followers?.length || 0)}
                    </span>
                    <span className="ml-0.5 tracking-wide text-[#71767b]">
                        Followers
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default AccountBio;
