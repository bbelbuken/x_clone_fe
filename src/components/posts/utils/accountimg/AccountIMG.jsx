import { useNavigate } from 'react-router-dom';

const AccountIMG = ({ account, imgData }) => {
    const navigate = useNavigate();

    const handleImageClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/${account.username}`);
    };

    return (
        <div className="mr-2 h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
            <img
                src={imgData}
                alt="user_avatar"
                width={40}
                height={40}
                className="h-full w-full rounded-full object-cover"
                onClick={handleImageClick}
            />
        </div>
    );
};

export default AccountIMG;
