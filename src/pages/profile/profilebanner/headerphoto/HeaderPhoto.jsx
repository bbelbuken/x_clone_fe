import { useLocation, useNavigate } from 'react-router-dom';

const HeaderPhoto = ({ currentAccount }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleHeaderPhotoClick = (e) => {
        e.preventDefault();
        navigate(`/${currentAccount?.username}/header_photo`, {
            state: { background: location.pathname },
        });
    };

    return (
        <div className="relative w-full pb-[33.3344%]">
            <div
                onClick={handleHeaderPhotoClick}
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full cursor-pointer transition-colors"
            >
                <img
                    src={
                        currentAccount?.header_photo
                            ? currentAccount.header_photo
                            : '/default_header.jpg'
                    }
                    alt="header_photo"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default HeaderPhoto;
