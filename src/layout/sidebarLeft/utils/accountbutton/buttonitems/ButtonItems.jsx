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
          : '/public/default_profile_200x200.png';

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
                <p className="text-[15px] font-bold break-words">
                    {currentAccount.fullname || 'Guest'}
                </p>
                <div className="text-[15px] leading-[1.5em] font-light tracking-[0.045em] text-[#71767b]">
                    <div className="flex items-center justify-center">
                        <p className="text-[12px]">@</p>
                        {currentAccount.username || 'guest'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonItems;
