import { useLocation, useNavigate } from 'react-router-dom';

const HeaderPhoto = ({ account }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHeaderPhotoClick = (e) => {
    e.preventDefault();
    navigate(`/${account.username}/header_photo`, {
      state: { background: location },
    });
  };

  return (
    <div className="relative z-10 w-full pb-[33.3344%]">
      <div
        onClick={handleHeaderPhotoClick}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full cursor-pointer transition-colors"
      >
        <img
          src={account.header_photo}
          alt="header_photo"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeaderPhoto;
