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
            className="z-20 -mt-[14.9%] mb-3 block h-auto min-w-12 rounded-full"
            onClick={handleAvatarClick}
        >
            <img
                src={currentAccount.cachedAvatar}
                alt="avatar"
                className="h-35 w-35 rounded-full border-4 border-black object-cover"
            />
        </div>
    );
};

export default AccountAvatar;
