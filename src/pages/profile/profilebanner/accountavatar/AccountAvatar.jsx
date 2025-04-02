import { useLocation, useNavigate } from 'react-router-dom';

const AccountAvatar = ({ currentAccount }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAvatarClick = (e) => {
        e.preventDefault();
        navigate(`/${currentAccount.username}/photo`, {
            state: { background: location.pathname },
        });
    };

    return (
        <div
            className="z-20 -mt-[14.9%] mb-3 block h-auto min-w-12 cursor-pointer rounded-full"
            onClick={handleAvatarClick}
        >
            <img
                src={
                    currentAccount?.avatar
                        ? currentAccount.avatar
                        : '/default_profile_200x200.png'
                }
                alt="avatar"
                className="h-22 w-22 rounded-full border-4 border-black object-cover md:h-35 md:w-35"
            />
        </div>
    );
};

export default AccountAvatar;
