import HeaderPhoto from './headerphoto/HeaderPhoto';
import AccountAvatar from './accountavatar/AccountAvatar';
import ActionBars from './actionbars/ActionBars';
import AccountName from './accountname/AccountName';
import AccountBio from './accountbio/AccountBio';

const ProfileBanner = ({ currentAccount, account }) => {
    return (
        <div>
            <HeaderPhoto currentAccount={currentAccount} />

            <div className="mb-4 px-4 pt-3">
                <div className="flex flex-wrap items-start justify-between">
                    <AccountAvatar currentAccount={currentAccount} />
                    <ActionBars
                        currentAccount={currentAccount}
                        account={account}
                    />
                </div>

                <AccountName account={currentAccount} />
                <AccountBio account={currentAccount} />
            </div>
        </div>
    );
};
export default ProfileBanner;
