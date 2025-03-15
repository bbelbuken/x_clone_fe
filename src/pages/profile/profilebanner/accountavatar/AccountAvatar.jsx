import { useLocation, useNavigate } from 'react-router-dom';

const AccountAvatar = ({ account }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAvatarClick = (e) => {
        e.preventDefault();
        navigate(`/${account.username}/photo`, {
            state: { background: location.pathname },
        });
    };

    return (
        <div
            className="z-20 -mt-[14.9%] mb-3 block h-auto w-[23.5%] min-w-12 rounded-full"
            onClick={handleAvatarClick}
        >
            <img
                src={account.cached}
                alt="avatar"
                className="box-content h-full w-full rounded-full border-4 border-black"
            />
        </div>
    );
};

export default AccountAvatar;
