import { Link, useLocation, useNavigate } from 'react-router-dom';

const ProfileBanner = ({ account }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const openPostModal = () => {
    const previousRoute = location.pathname;
    localStorage.setItem('previousRoute', previousRoute);
    navigate('compose/post');
  };
  return (
    <div className="relative">
      <Link
        to={`/${account.username}/header_photo`}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full cursor-pointer transition-colors"
      >
        <img
          src={account.header_photo}
          alt="header_photo"
          onClick={openPostModal}
        />
      </Link>
    </div>
  );
};

export default ProfileBanner;
