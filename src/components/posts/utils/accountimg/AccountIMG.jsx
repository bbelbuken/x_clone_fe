import { useNavigate } from 'react-router-dom';

const AccountIMG = ({ account, imgData }) => {
    const navigate = useNavigate();

    // Convert Google Drive URL to a thumbnail link
    const getThumbnailUrl = (url) => {
        const fileId = url.split('/d/')[1].split('/')[0]; // Extract file ID
        return `https://lh3.googleusercontent.com/d/${fileId}`;
    };

    const avatar = imgData
        ? `${imgData}` // Use cached Base64 image data
        : account.avatar
          ? getThumbnailUrl(account.avatar) // Use Google Drive thumbnail
          : '/default_profile_200x200.png'; // Fallback to default image

    const handleImageClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/${account.username}`);
    };

    return (
        <div className="relative pb-2">
            <div className="mr-2 h-10 w-10 grow-0 basis-10 overflow-hidden rounded-full">
                <img
                    src={avatar}
                    alt="user_avatar"
                    width={40}
                    height={40}
                    className="mt-[1px] h-10 w-10 rounded-full object-cover"
                    onClick={handleImageClick}
                />
            </div>
        </div>
    );
};

export default AccountIMG;
