import VerifiedSVG from 'components/icons/VerifiedSVG';

const ButtonItems = ({ gap, currentAccount }) => {
    const getGoogleDriveDirectImageUrl = (url) => {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const fileId = urlParams.get('id');
        return `https://lh3.googleusercontent.com/d/${fileId}`; // Direct image URL
    };

    const avatar = currentAccount.cachedAvatar
        ? `${currentAccount.cachedAvatar}`
        : currentAccount.avatar
          ? getGoogleDriveDirectImageUrl(currentAccount.avatar)
          : '/default_profile_200x200.png';

    const handleAccountFullname = (currentAccount) => {
        const name =
            currentAccount.fullname.length > 19
                ? currentAccount.fullname.slice(0, 19) + '..'
                : currentAccount.fullname;

        return name;
    };
    const handleAccountUsername = (currentAccount) => {
        const name =
            currentAccount.username.length > 15
                ? currentAccount.username.slice(0, 15) + '..'
                : currentAccount.username;

        return name;
    };

    return (
        <div
            className={`items-starts flex h-auto w-full justify-start gap-${gap}`}
        >
            <img
                src={avatar}
                alt="Avatar"
                className="mt-[1px] h-10 w-10 rounded-full object-cover"
            />
            <div className="ml-1 flex flex-col items-start justify-center">
                <div className="flex items-center gap-1">
                    <p className="text-[15px] font-bold break-words">
                        {handleAccountFullname(currentAccount) || 'Guest'}
                    </p>
                    {currentAccount.verified && (
                        <VerifiedSVG width={18} height={18} />
                    )}
                </div>
                <div className="text-[15px] leading-[1.5em] font-light tracking-[0.045em] text-[#71767b]">
                    <div className="flex items-center justify-center">
                        <p className="text-[12px]">@</p>
                        {handleAccountUsername(currentAccount) || 'guest'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonItems;
