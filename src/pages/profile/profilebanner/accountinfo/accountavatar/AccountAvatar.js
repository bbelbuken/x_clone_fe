import { useLocation, useNavigate } from 'react-router-dom';

const AccountAvatar = ({ account }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAvatarClick = (e) => {
    e.preventDefault();
    navigate(`/${account.username}/photo`, {
      state: { background: location },
    });
  };

  return (
    <div
      className="z-20 -mt-[15%] mb-3 block h-auto w-[23%] min-w-12 rounded-full"
      onClick={handleAvatarClick}
    >
      <img
        src={account.avatar}
        alt="avatar"
        className="box-content h-full w-full rounded-full border-4 border-black"
      />
    </div>
  );
};

export default AccountAvatar;
